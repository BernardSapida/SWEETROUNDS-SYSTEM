import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

export default function OrderHistory(props: any) {
  const [orders, setOrders] = useState<Record<string, any>[]>([]);
  const { user } = props;

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/orders/user_order_history`,
        {
          user_id: user.id,
        }
      );

      setOrders(response.data.data);
    };

    fetchOrders();
  }, [user.id]);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="list-home"
        role="tabpanel"
        aria-labelledby="list-home-list"
      >
        <div style={{ maxHeight: 500, overflowY: "scroll" }}>
          {orders.map((order: Record<string, any>, index: number) => (
            <Card
              key={index}
              user_id={user.id}
              order_id={order.order_id}
              order_number={order.order_number}
              date={order.created_at}
              order_status={order.order_status}
              payment_status={order.payment_status}
              quantity={order.quantity}
              total={order.total}
            />
          ))}
        </div>
      </div>
    </>
  );
}
