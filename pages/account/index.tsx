import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import Placeholder from "react-bootstrap/Placeholder";

import ProfileInformationForm from "@/components/accounts/profile_information/Form";
import AllFavorites from "@/components/accounts/favorites/AllFavorites";
import History from "@/components/accounts/order_history/History";
import PasswordForm from "@/components/accounts/password/Form";
import { Product } from "@/types/Product";
import { Order } from "@/types/Order";
import { User } from "@/types/User";

import {
  fetchFavoriteDonut,
  fetchOrderHistory,
} from "@/helpers/accounts/Methods";

import style from "@/public/css/accounts.module.css";

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

    const response = await fetchFavoriteDonut(session.user.id);
    const responseOrderHistory = await fetchOrderHistory(session.user.id);

    return {
      props: {
        user: session.user,
        favoriteDonuts: response.data,
        orderHistory: responseOrderHistory.data,
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
  favoriteDonuts,
  orderHistory,
}: {
  user: User;
  favoriteDonuts: Product[];
  orderHistory: Order[];
}) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => setPageLoading(false), []);

  return (
    <>
      <Head>
        <title>Sweet Rounds | Account</title>
      </Head>
      <div className="row">
        <div className="col-4">
          {pageLoading ? (
            <Placeholder animation="glow">
              <Placeholder
                className="w-100 mb-3"
                xs={2}
                bg="secondary"
                style={{
                  height: 170,
                  borderRadius: 5,
                }}
              />
            </Placeholder>
          ) : (
            <div className="list-group" id="list-tab" role="tablist">
              <Link
                className={`list-group-item ${style.link} ${
                  router.query["page"] == undefined && style.active
                }`}
                href="/account"
              >
                Order History
              </Link>
              <Link
                className={`list-group-item ${style.link} ${
                  router.query["page"] == "profile_information" && style.active
                }`}
                href="/account?page=profile_information"
              >
                Profile Information
              </Link>
              <Link
                className={`list-group-item ${style.link} ${
                  router.query["page"] == "favorites" && style.active
                }`}
                href="/account?page=favorites"
              >
                Favorites
              </Link>
              <Link
                className={`list-group-item ${style.link} ${
                  router.query["page"] == "password" && style.active
                }`}
                href="/account?page=password"
              >
                Password
              </Link>
            </div>
          )}
        </div>
        <div className="col-8">
          {router.query["page"] == undefined && (
            <History user={user} orderHistory={orderHistory} />
          )}
          {router.query["page"] == "profile_information" && (
            <ProfileInformationForm user={user} />
          )}
          {router.query["page"] == "favorites" && (
            <AllFavorites user={user} favoriteDonuts={favoriteDonuts} />
          )}
          {router.query["page"] == "password" && <PasswordForm user={user} />}
        </div>
      </div>
    </>
  );
}
