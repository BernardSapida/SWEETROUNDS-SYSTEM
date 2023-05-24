import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

import Card from "@/components/menu/Card";

export default function AccountPage({ user }: { user: Record<string, any> }) {
  const { data: session } = useSession();
  const [productList, setProductList] = useState<Record<string, any>[]>([]);

  console.log(user.id);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/products/favorites`,
        {
          id: user.id,
        }
      );

      console.log(response.data);
      const products = response.data.data;
      setProductList(products);
    };

    fetchFavorites();
  }, [user.id]);

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
      <div className="rounded border p-3 mb-2">
        <h3 className="text-center mb-4">
          <strong>All Favorites</strong>
        </h3>
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
      </div>
    </>
  );
}
