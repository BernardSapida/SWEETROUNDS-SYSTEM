import { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, Session } from "next-auth";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      email: string;
      firstname: string;
      lastname: string;
      address_line_1: string;
      address_line_2: string;
      city: string;
      contact: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    contact: string;
    data: any;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // if (account?.provider! !== "credentials") {
      //   verifyAccount(profile, account?.provider!);
      // }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const user = token.data;

      if (session) {
        session.user.id = user?.id;
        session.user.email = user?.email;
        session.user.firstname = user?.firstname;
        session.user.lastname = user?.lastname;
        session.user.address_line_1 = user?.address_line_1;
        session.user.address_line_2 = user?.address_line_2;
        session.user.city = user?.city;
        session.user.contact = user?.contact;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.data = user;
      }

      return token;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/v1/users/authenticate`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        const user = authResponse.data.data || null;

        if (!user) throw new Error(JSON.stringify(authResponse.data));

        const userInfoResponse = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/v1/user_informations/read`,
          { user_id: user.id }
        );

        const userInfo = userInfoResponse.data.data || null;

        return { ...user, ...userInfo };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60,
  },
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

export default NextAuth(authOptions);

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
