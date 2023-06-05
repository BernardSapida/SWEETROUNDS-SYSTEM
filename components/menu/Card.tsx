import Image from "next/image";
import axios from "axios";

import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Placeholder from "react-bootstrap/Placeholder";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

import { Product } from "@/types/Product";

export default function DonutCard({
  index,
  loading,
  handleImageLoad,
  product,
  updateCart,
  updateFavorites,
  user_id,
}: {
  index: number;
  loading: boolean;
  handleImageLoad: any;
  product: Product;
  updateCart: any;
  updateFavorites: any;
  user_id: number;
}) {
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

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/create`,
      {
        product_id: product_id,
        user_id: user_id,
      }
    );
  };

  const removeToCart = async () => {
    updateCart(product_id, 0);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
      {
        cart_id: cart_id,
      }
    );
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
  };

  const removeToFavorite = async () => {
    updateFavorites(product_id, 0);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/favorites/delete`,
      {
        favorite_id: favorite_id,
      }
    );
  };

  return (
    <Card style={{ width: "10rem", position: "relative" }}>
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
          src={`/donuts/${image}`}
          height="100"
          width="100"
          alt="SweetRounds Banner"
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
          <p className="fs-6">
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
              <Badge bg="dark" style={{ maxWidth: "max-content" }}>
                Php {price}
              </Badge>
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
            <BsCartCheckFill
              style={{
                fontSize: 25,
                color: "rgba(18, 192, 85, 1)",
                cursor: "pointer",
              }}
              onClick={removeToCart}
            />
          )}
          {in_cart == 0 && !loading && (
            <BsCartPlusFill
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
