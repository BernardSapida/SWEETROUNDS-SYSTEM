import { useContext } from "react";
import Image from "next/image";
import axios from "axios";

import { TbCurrencyPeso } from "react-icons/tb";
import { BsBagPlus, BsBagCheck } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

import { Product } from "@/types/Product";
import CartContext from "@/store/cart_context";

export default function DonutCard({
  index,
  loading,
  handleImageLoad,
  product,
  updateCart,
  updateFavorites,
  toggleToast,
  user_id,
}: {
  index: number;
  loading: boolean;
  handleImageLoad: any;
  product: Product;
  updateCart: any;
  updateFavorites: any;
  toggleToast: any;
  user_id: number;
}) {
  const cartContext = useContext(CartContext);
  let {
    product_id,
    image,
    name,
    flavor,
    price,
    in_cart,
    in_favorite,
    favorite_id,
    cart_id,
  } = product;

  const addToCart = async () => {
    updateCart(product_id, 1);
    cartContext.updateCartNumber(cartContext.cartNumber + 1);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/create`,
      {
        product_id: product_id,
        user_id: user_id,
      }
    );

    toggleToast(true, "add_cart");
  };

  const removeToCart = async () => {
    updateCart(product_id, 0);
    cartContext.updateCartNumber(cartContext.cartNumber - 1);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
      {
        cart_id: cart_id,
      }
    );

    toggleToast(true, "remove_cart");
  };

  const addToFavorite = async () => {
    updateFavorites(product_id, 1);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/favorites/create`,
      {
        product_id: product_id,
        user_id: user_id,
      }
    );

    toggleToast(true, "add_favorite");
  };

  const removeToFavorite = async () => {
    updateFavorites(product_id, 0);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/favorites/delete`,
      {
        favorite_id: favorite_id,
      }
    );

    toggleToast(true, "remove_favorite");
  };

  return (
    <Card
      className="shadow"
      style={{
        width: "12rem",
        position: "relative",
        backgroundColor: "white",
        borderRadius: "40px",
        border: "none",
      }}
    >
      <Card.Body className="d-grid" style={{ position: "relative" }}>
        {loading && (
          <Placeholder className="mx-auto" animation="glow">
            <Placeholder
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                position: "absolute",
                top: 75,
                transform: "translate(-50%, -50%)",
                backgroundColor: "#F9B15D",
              }}
            />
          </Placeholder>
        )}
        <Image
          src={`/images/donuts/${image}`}
          height="100"
          width="100"
          alt="Donut Image"
          className="mx-auto mt-2 mb-3"
          style={{ visibility: `${loading ? "hidden" : "visible"}` }}
          onLoad={() => handleImageLoad(index)}
        />
        <p className="text-center fs-5 lh-1 mb-1">
          {loading ? (
            <Placeholder animation="glow">
              <Placeholder
                bg="dark"
                style={{
                  width: 80,
                  height: 20,
                  borderRadius: 5,
                }}
              />
            </Placeholder>
          ) : (
            <strong>{name}</strong>
          )}
        </p>
        <p className="text-center fs-6 lh-1 text-secondary">
          {loading ? (
            <Placeholder animation="glow">
              <Placeholder
                bg="dark"
                style={{
                  width: 50,
                  height: 20,
                  borderRadius: 5,
                }}
              />
            </Placeholder>
          ) : (
            flavor
          )}
        </p>
        <div className="d-flex justify-content-between g-3">
          <p className="fs-5">
            {loading ? (
              <Placeholder animation="glow">
                <Placeholder
                  bg="dark"
                  style={{
                    width: 60,
                    height: 20,
                    borderRadius: 5,
                  }}
                />
              </Placeholder>
            ) : (
              <strong style={{ color: "hsl(0, 0%, 19%)" }}>
                <TbCurrencyPeso className="mb-1" style={{ fontSize: 24 }} />
                {price}.00
              </strong>
            )}
          </p>
          {loading && (
            <Placeholder animation="glow">
              <Placeholder
                bg="dark"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                }}
              />
            </Placeholder>
          )}
          {in_cart == 1 && !loading && (
            <BsBagCheck
              style={{
                fontSize: 25,
                color: "rgba(18, 192, 85, 1)",
                cursor: "pointer",
              }}
              onClick={removeToCart}
            />
          )}
          {in_cart == 0 && !loading && (
            <BsBagPlus
              style={{ fontSize: 25, cursor: "pointer" }}
              onClick={addToCart}
            />
          )}
        </div>
        <div style={{ position: "absolute", top: 15, right: 15 }}>
          {loading && (
            <Placeholder animation="glow">
              <Placeholder
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 12.5,
                  backgroundColor: "#ff0028cc",
                }}
              />
            </Placeholder>
          )}
          {in_favorite == 1 && !loading && (
            <AiFillHeart
              style={{ fontSize: 25, color: "#ff0028cc", cursor: "pointer" }}
              onClick={removeToFavorite}
            />
          )}
          {in_favorite == 0 && !loading && (
            <AiOutlineHeart
              className="pointer"
              style={{ fontSize: 25, color: "#ff0028cc", cursor: "pointer" }}
              onClick={addToFavorite}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
