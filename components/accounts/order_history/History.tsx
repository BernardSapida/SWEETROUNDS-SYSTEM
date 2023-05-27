import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchOrderHistory } from "@/helpers/accounts";

export default function OrderHistory(props: any) {
  const [orders, setOrders] = useState<Record<string, any>[]>([]);
  const { user } = props;

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
