import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Head from "next/head";

import Card from "@/components/menu/Card";
import { Product } from "@/types/Product";
import { User } from "@/types/User";
import {
  fetchProductList,
  fetchProductListByKeyword,
} from "@/helpers/Menu/Methods";

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

    const response = await fetchProductList(session.user.id);

    return {
      props: {
        user: session.user,
        products: response.data,
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
  user: User;
  products: Product[];
}) {
  const [productList, setProductList] = useState<Product[]>(products);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response;

      if (keyword === "") {
        response = await fetchProductList(user.id);
      } else {
        response = await fetchProductListByKeyword(user.id, keyword);
      }

      setProductList(response.data);
    };

    fetchData();
  }, [keyword, user.id]);

  const updateCart = (id: number, value: number) => {
    const updatedList = [...productList];

    updatedList?.map((product: Product) => {
      if (product.product_id == id) product.in_cart = value;
    });

    setProductList(updatedList);
  };

  const updateFavorites = (id: number, value: number) => {
    const updatedList = [...productList];

    updatedList?.map((product: Product) => {
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
        {productList.map((product: Product, index: number) => (
          <Card
            key={index}
            product={product}
            updateCart={updateCart}
            updateFavorites={updateFavorites}
            user_id={user.id}
          />
        ))}
      </div>
    </>
  );
}
