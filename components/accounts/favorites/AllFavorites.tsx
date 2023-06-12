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
  const [loading, setLoading] = useState<boolean[]>(Array(100).fill(true));
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

  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const updatedLoading = [...prevLoading];
      updatedLoading[index] = false;
      return updatedLoading;
    });
  };

  return (
    <>
      <Head>
        <title>Sweet Rounds | Menu</title>
      </Head>
      <div className="rounded p-3 mb-2 bg-white">
        <h3 className="text-center mb-4">
          <strong>All Favorites</strong>
        </h3>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {productList.length == 0 && <p>No favorites in your list</p>}
          {productList.map((product: Product, index: number) => (
            <div
              key={index}
              style={{
                borderRadius: 40,
                boxShadow: "0 0 10px hsla(0, 0%, 80%, 0.5)",
              }}
            >
              <Card
                index={index}
                loading={loading[index]}
                handleImageLoad={handleImageLoad}
                product={product}
                updateCart={updateCart}
                updateFavorites={updateFavorites}
                user_id={user.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
