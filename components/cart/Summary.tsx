import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Link from "next/link";

import { BsCartFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";

import {
  createCustomerOrder,
  createOrderItem,
  deleteCartItems,
  readUserInformation,
} from "@/helpers/cart/Methods";

import { UserInformation } from "@/types/UserInformation";
import { Setting } from "@/types/Setting";
import { User } from "@/types/User";

import { Alert } from "@/utils/alert/swal";
import { Cart } from "@/types/Cart";

export default function Summary({
  cart_items,
  setting,
  note,
  user,
  setItems,
}: {
  cart_items: Cart[];
  setting: Setting;
  note: string;
  user: User;
  setItems: Dispatch<SetStateAction<Cart[]>>;
}) {
  const { tax, shipping_fee, discount } = setting;
  const [donutTotal, setDonutTotal] = useState<number>(0);
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstname: "",
    lastname: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    contact: "",
  });
  const { firstname, lastname, address_line_1, address_line_2, city, contact } =
    userInformation;

  useEffect(() => {
    const fetchUserInformation = async () => {
      const response = await readUserInformation(user.id);
      setUserInformation(response.data);
    };

    const computedDonutTotal = computeDonutTotal(cart_items);
    setDonutTotal(computedDonutTotal);

    fetchUserInformation();
  }, [cart_items, setUserInformation, user.id]);

  const computeDonutTotal = (items: Cart[]) => {
    let total = 0;
    items.filter((item) => (total += item.cart_quantity * item.price));
    return total;
  };

  const getTotal = () => {
    return donutTotal + tax + shipping_fee - discount;
  };

  const placeOrder = async () => {
    if (cart_items.length === 0) {
      Alert("error", "Empty Donut", "Add donuts to your cart!");
    } else {
      Alert(
        "success",
        "Successfully placed order",
        "You may now check order history for updates!"
      );
      const response = await createOrder();
      const order_id = response.order_id;

      createOrderItems(order_id);
      resetCart();
    }
  };

  const resetCart = () => {
    setItems([]);
  };

  const createOrder = async () => {
    const response = await createCustomerOrder(
      userInformation,
      setting,
      note,
      user.id
    );

    return response;
  };

  const createOrderItems = (order_id: number) => {
    cart_items.filter(async (item: Cart) => {
      await createOrderItem(item.cart_quantity, item.product_id, order_id);
      deleteCartItems(item.cart_id);
    });
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <h1 className="text-primary fs-2 mb-4">Summary</h1>
        <div className="d-flex justify-content-between gap-5">
          <p className="fs-6 lh-1">
            <strong>Item Price</strong>{" "}
            <span className="fs-6 text-secondary">
              ({cart_items.length} items)
            </span>
          </p>
          <p className="fs-6 lh-1">Php {donutTotal}.00</p>
        </div>

        <div className="d-flex justify-content-between gap-5">
          <p className="fs-6 lh-1">
            <strong>Tax</strong>
          </p>
          <p className="fs-6 lh-1">Php {tax}.00</p>
        </div>

        <div className="d-flex justify-content-between gap-5">
          <p className="fs-6 lh-1">
            <strong>Discount</strong>
          </p>
          <p className="fs-6 lh-1">Php {discount}.00</p>
        </div>
        <div className="d-flex justify-content-between gap-5">
          <div>
            <p className="fs-6 lh-1 mb-2">
              <strong>Shipping Fee</strong>
            </p>
            <p className="lh-1 text-secondary" style={{ fontSize: 14 }}>
              Standard Delivery
            </p>
          </div>
          <p className="fs-6 lh-1">Php {shipping_fee}.00</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between gap-5">
          <p className="fs-6 lh-1">
            <strong>Total</strong>
          </p>
          <p className="fs-6 lh-1 text-primary">
            <strong>Php {getTotal()}.00</strong>
          </p>
        </div>
        <div className="d-flex justify-content-between gap-5 mt-4">
          <p className="fs-6 lh-1">
            <strong>Shipping Address</strong>
          </p>
          <Link className="fs-6 lh-1" href="/account?page=profile_information">
            Change Address
          </Link>
        </div>
        <div className="mb-3">
          <p className="fs-6 lh-1 mb-2 text-secondary">{`${firstname} ${lastname}`}</p>
          <p className="fs-6 lh-1 mb-2 text-secondary">{address_line_1}</p>
          <p className="fs-6 lh-1 mb-2 text-secondary">{contact}</p>
        </div>
        <div className="mb-3">
          <p className="fs-6 lh-1 mb-2 text-secondary">{address_line_2}</p>
          <p className="fs-6 lh-1 mb-2 text-secondary">{city}</p>
        </div>
        <div className="d-grid">
          <Button variant="primary" onClick={placeOrder}>
            <BsCartFill className="mb-2" /> Place Order
          </Button>
        </div>
      </div>
    </>
  );
}
