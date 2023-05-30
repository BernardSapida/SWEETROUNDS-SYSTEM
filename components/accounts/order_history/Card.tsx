import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

import { Order } from "@/types/Order";

export default function Card(props: any) {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const {
    user_id,
    order_id,
    order_number,
    date,
    order_status,
    payment_status,
    quantity,
    total,
  } = props;

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/orders/user_orders`,
        {
          user_id: user_id,
          order_id: order_id,
        }
      );

      setOrders(response.data.data);
    };

    fetchOrders();
  }, [order_id, user_id]);

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        orders={orders}
      />
      <div className="rounded border p-3 mb-2">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <p className="lh-1 text-start">
              <strong>Order Number:</strong> {order_number}
            </p>
            <p className="lh-1 text-start">
              <strong>Order Status:</strong> {order_status}
            </p>
            <p className="lh-1 text-start">
              <strong>Overall Quantity:</strong> {quantity}
            </p>
          </div>
          <div>
            <p className="lh-1 text-start">
              <strong>Date:</strong> {date}
            </p>
            <p className="lh-1 text-start">
              <strong>Payment Status:</strong> {payment_status}
            </p>
            <p className="lh-1 text-start">
              <strong>Total Amount: Php {total}</strong>
            </p>
          </div>
        </div>
        <div className="d-grid">
          <Button variant="dark" size="sm" onClick={() => setModalShow(true)}>
            View Details
          </Button>
        </div>
      </div>
    </>
  );
}
