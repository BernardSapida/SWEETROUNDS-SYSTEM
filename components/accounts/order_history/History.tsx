import { useEffect, useState } from "react";

import Placeholder from "react-bootstrap/Placeholder";

import { fetchOrderHistory } from "@/helpers/accounts/Methods";
import { Order } from "@/types/Order";
import { User } from "@/types/User";
import Card from "./Card";

export default function OrderHistory({
  user,
  orderHistory,
}: {
  user: User;
  orderHistory: Order[];
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => setLoading(false), []);

  return (
    <div className="rounded p-3 mb-2 text-center bg-white">
      <h3 className="text-center mb-4">
        {loading ? (
          <Placeholder animation="glow">
            <Placeholder bg="dark" style={{ borderRadius: 5, width: 300 }} />
          </Placeholder>
        ) : (
          <strong>Order History</strong>
        )}
      </h3>
      {orderHistory.length == 0 && <p>No order history</p>}
      <div style={{ maxHeight: 500, overflowY: "scroll" }}>
        {orderHistory.map((order: Order, index: number) => (
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
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
}
