import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Alert } from "@/utils/alert/swal";
import Link from "next/link";
import axios from "axios";

interface UserInformation {
  firstname: string;
  lastname: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  contact: string;
}

export default function Summary(props: any) {
  const { cart_items, settings, note, user, setItems } = props;
  const { tax, shipping_fee, discount } = settings;
  const [donutTotal, setDonutTotal] = useState(0);
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstname: "",
    lastname: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    contact: "",
  })!;
  const { firstname, lastname, address_line_1, address_line_2, city, contact } =
    userInformation;

  useEffect(() => {
    const fetchUserInformation = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/user_informations/read`,
        {
          user_id: user.id,
        }
      );

      setUserInformation(response.data.data);
    };

    const computedDonutTotal = computeDonutTotal(cart_items);
    setDonutTotal(computedDonutTotal);

    fetchUserInformation();
  }, [cart_items, setUserInformation, user.id]);

  const computeDonutTotal = (items: Record<string, any>[]) => {
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

  const deleteDonutFromCart = async (cart_id: number) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
      { cart_id: cart_id }
    );
  };

  const createOrder = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/orders/create`,
      {
        firstname: firstname,
        lastname: lastname,
        address_line_1: address_line_1,
        address_line_2: address_line_2,
        city: city,
        contact: contact,
        note: note,
        tax: tax,
        shipping_fee: shipping_fee,
        discount: discount,
        user_id: user.id,
      }
    );

    return response.data;
  };

  // order_items (quantity, order_id, product_id)
  const createOrderItems = (order_id: number) => {
    cart_items.filter(async (item: Record<string, any>) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/order_items/create`,
        {
          quantity: item.cart_quantity,
          product_id: item.product_id,
          order_id: order_id,
        }
      );

      deleteDonutFromCart(item.cart_id);
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
        </div>
        <div className="mb-3">
          <p className="fs-6 lh-1 mb-2 text-secondary">{address_line_2}</p>
          <p className="fs-6 lh-1 mb-2 text-secondary">{city}</p>
        </div>
        <div className="d-grid">
          <Button variant="primary" onClick={placeOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
}
