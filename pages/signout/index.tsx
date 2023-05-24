import { signOut } from "next-auth/react";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

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

    return {
      props: { user: session.user },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

function Signout() {
  const router = useRouter();
  const signout = () => {
    signOut({
      redirect: false,
    });

    router.push("/");
  };

  signout();
}

export default Signout;
