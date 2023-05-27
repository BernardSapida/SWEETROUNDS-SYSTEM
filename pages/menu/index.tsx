import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

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
        user_id: session.user.id,
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
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response;

      if (keyword === "") {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/products/user_product_list`,
          {
            user_id: user.id,
          }
        );
      } else {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/products/search_user_list`,
          {
            user_id: user.id,
            keyword: keyword,
          }
        );
      }

      console.log(response.data.data);

      setProductList(response.data.data);
    };

    fetchData();
  }, [keyword, user.id]);

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

  const handleSearchInput = (event: any) => {
    const value = event.target.value;
    setKeyword(value);
  };

  return (
    <>
      <Head>
        <title>Sweet Rounds | Menu</title>
      </Head>
      <h1 className="text-center mb-5">
        <strong>Our Donuts</strong>
      </h1>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search donut"
          onChange={handleSearchInput}
        />
      </Form.Group>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {productList.length == 0 && <h3 className="mt-3">No donut found!</h3>}
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
