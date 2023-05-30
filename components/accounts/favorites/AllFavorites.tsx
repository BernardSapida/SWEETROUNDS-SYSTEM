import { useState } from "react";
import Head from "next/head";

import Card from "@/components/menu/Card";
import { Product } from "@/types/Product";
import { User } from "@/types/User";

export default function AccountPage({
  user,
  favoriteDonuts,
}: {
  user: User;
  favoriteDonuts: Product[];
}) {
  const [productList, setProductList] = useState<Product[]>(favoriteDonuts);

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
      </div>
    </>
  );
}
