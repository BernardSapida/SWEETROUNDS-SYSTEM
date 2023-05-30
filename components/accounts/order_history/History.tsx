import { useEffect, useState } from "react";

import { fetchOrderHistory } from "@/helpers/accounts/Methods";
import { Order } from "@/types/Order";
import { User } from "@/types/User";
import Card from "./Card";

export default function OrderHistory({ user }: { user: User }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetchOrderHistory(user?.id);
      setOrders(response.data);
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
        <div className="rounded border p-3 mb-2 text-center">
          <h3 className="text-center mb-4">
            <strong>Order History</strong>
          </h3>
          {orders.length == 0 && <p>No order history</p>}
          <div style={{ maxHeight: 500, overflowY: "scroll" }}>
            {orders.map((order: Order, index: number) => (
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
      </div>
    </>
  );
}
