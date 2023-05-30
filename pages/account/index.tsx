import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import ProfileInformationForm from "@/components/accounts/profile_information/Form";
import AllFavorites from "@/components/accounts/favorites/AllFavorites";
import History from "@/components/accounts/order_history/History";
import PasswordForm from "@/components/accounts/password/Form";
import { User } from "@/types/User";

import { fetchFavoriteDonut } from "@/helpers/accounts/Methods";
import { Product } from "@/types/Product";

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

    return {
      props: {
        user: session.user,
        favoriteDonuts: response.data,
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
}: {
  user: User;
  favoriteDonuts: Product[];
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sweet Rounds | Account</title>
      </Head>
      <div className="row">
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            <Link
              className={`list-group-item ${
                router.query["page"] == "order_history" && "active"
              }`}
              href="/account?page=order_history"
            >
              Order History
            </Link>
            <Link
              className={`list-group-item ${
                router.query["page"] == "profile_information" && "active"
              }`}
              href="/account?page=profile_information"
            >
              Profile Information
            </Link>
            <Link
              className={`list-group-item ${
                router.query["page"] == "favorites" && "active"
              }`}
              href="/account?page=favorites"
            >
              Favorites
            </Link>
            <Link
              className={`list-group-item ${
                router.query["page"] == "password" && "active"
              }`}
              href="/account?page=password"
            >
              Password
            </Link>
          </div>
        </div>
        <div className="col-8">
          {router.query["page"] == "order_history" && <History user={user} />}
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
