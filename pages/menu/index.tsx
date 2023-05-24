import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { useState } from "react";

import Card from "@/components/menu/Card";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { req } = context;
    const session = await getSession({ req: req });

    if (!session) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/products/user_product_list`,
      {
        id: session.user.id,
      }
    );

    const products = response.data.data;

    return {
      props: {
        user: session.user,
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error",
      },
    };
  }
};

export default function AccountPage({
  user,
  products,
}: {
  user: Record<string, any>;
  products: Record<string, any>[];
}) {
  const [productList, setProductList] =
    useState<Record<string, any>[]>(products);

  const updateCart = (id: number, value: number) => {
    const updatedList = [...productList];

    updatedList?.map((product: Record<string, any>) => {
      if (product.product_id == id) product.in_cart = value;
    });

    setProductList(updatedList);
  };

  const updateFavorites = (id: number, value: number) => {
    const updatedList = [...productList];

    updatedList?.map((product: Record<string, any>) => {
      if (product.product_id == id) product.in_favorite = value;
    });

    setProductList(updatedList);
  };

  return (
    <>
      <Head>
        <title>Sweet Rounds | Menu</title>
      </Head>
      <h1 className="text-center mb-5">
        <strong>Our Donuts</strong>
      </h1>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {productList.map((product: Record<string, any>, index: number) => (
          <Card
            key={index}
            id={product.product_id}
            image={product.image}
            name={product.name}
            flavor={product.flavor}
            price={product.price}
            in_cart={product.in_cart}
            in_favorite={product.in_favorite}
            favorite_id={product.favorite_id}
            cart_id={product.cart_id}
            updateCart={updateCart}
            updateFavorites={updateFavorites}
            user_id={user.id}
          />
        ))}
      </div>
    </>
  );
}
