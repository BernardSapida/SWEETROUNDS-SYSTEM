import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { getSession } from "next-auth/react";

import Head from "next/head";

import FreshDonuts from "@/components/home/FreshDonuts";
import Landing from "@/components/home/Landing";
import Offers from "@/components/home/Offers";

import { User } from "@/types/User";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { req } = context;
    const session = await getSession({ req: req });

    return {
      props: { user: session },
    };
  } catch (error) {
    return {
      props: { error: "Error" },
    };
  }
};

export default function HomePage({ user }: { user: User | null }) {
  return (
    <>
      <Head>
        <title>Sweet Rounds | Home</title>
      </Head>
      <Landing user={user} />
      <Offers />
      <FreshDonuts user={user} />
    </>
  );
}
