import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";

import axios from "axios";

export default function MenuCard(props: any) {
  let {
    id,
    image,
    name,
    flavor,
    price,
    in_cart,
    in_favorite,
    favorite_id,
    cart_id,
    updateCart,
    updateFavorites,
    user_id,
  } = props;

  const addToCart = async () => {
    updateCart(id, 1);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/create`,
      {
        product_id: id,
        user_id: user_id,
      }
    );

    console.log(response.data);
  };

  const removeToCart = async () => {
    updateCart(id, 0);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
      {
        cart_id: cart_id,
      }
    );
  };

  const addToFavorite = async () => {
    updateFavorites(id, 1);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/favorites/create`,
      {
        product_id: id,
        user_id: user_id,
      }
    );
  };

  const removeToFavorite = async () => {
    updateFavorites(id, 0);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/favorites/delete`,
      {
        favorite_id: favorite_id,
      }
    );
  };

  return (
    <>
      <Card style={{ width: "10rem", position: "relative" }}>
        <Card.Body className="d-grid">
          <Image
            src={`/donuts/${image}`}
            height="100"
            width="100"
            alt="SweetRounds Banner"
            className="mx-auto mb-3"
          ></Image>
          <p className="text-center fs-5 lh-1 mb-1">
            <strong>{name}</strong>
          </p>
          <p className="text-center fs-6 lh-1 text-secondary">{flavor}</p>
          <div className="d-flex justify-content-between g-3">
            <p className="fs-6">
              <Badge bg="dark" style={{ maxWidth: "max-content" }}>
                Php {price}
              </Badge>
            </p>
            {in_cart == "1" && (
              <BsCartCheckFill
                style={{
                  fontSize: 25,
                  color: "rgba(18, 192, 85, 1)",
                  cursor: "pointer",
                }}
                onClick={removeToCart}
              />
            )}
            {in_cart == "0" && (
              <BsCartPlusFill
                style={{ fontSize: 25, cursor: "pointer" }}
                onClick={addToCart}
              />
            )}
          </div>
          <div style={{ position: "absolute", right: 15 }}>
            {in_favorite == "1" && (
              <AiFillHeart
                style={{ fontSize: 25, color: "#ff0028cc", cursor: "pointer" }}
                onClick={removeToFavorite}
              />
            )}
            {in_favorite == "0" && (
              <AiOutlineHeart
                className="pointer"
                style={{ fontSize: 25, color: "#ff0028cc", cursor: "pointer" }}
                onClick={addToFavorite}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
