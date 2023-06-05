import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Head from "next/head";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Summary from "@/components/cart/Summary";
import Items from "@/components/cart/Items";

import { fetchCart, fetchSetting } from "@/helpers/cart/Methods";

import { Cart } from "@/types/Cart";
import { Setting } from "@/types/Setting";
import { User } from "@/types/User";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { req } = context;
    const session = await getSession({ req: req });

    if (!session) {
      return {
        props: {},
        redirect: {
          destination: "/",
        },
      };
    }

    const responseCart = await fetchCart(session.user.id);
    const responseSetting = await fetchSetting();

    return {
      props: {
        user: session.user,
        cart_items: responseCart.data,
        setting: responseSetting.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error",
      },
    };
  }
};

export default function AccountPage({
  user,
  cart_items,
  setting,
}: {
  user: User;
  cart_items: Cart[];
  setting: Setting;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Cart[]>(cart_items);
  const [note, setNote] = useState<string>("No note");

  useEffect(() => setLoading(false), []);

  return (
    <>
      <Head>
        <title>Sweet Rounds | Checkout</title>
      </Head>
      <Row>
        <Col md={7} sm={12}>
          <Items
            loading={loading}
            cart_items={items}
            setItems={setItems}
            note={note}
            setNote={setNote}
          />
        </Col>
        <Col md={5} sm={12}>
          <Summary
            loading={loading}
            cart_items={items}
            setting={setting}
            note={note}
            user={user}
            setItems={setItems}
          />
        </Col>
      </Row>
    </>
  );
}
