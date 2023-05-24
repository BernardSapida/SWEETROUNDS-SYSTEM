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
      id: string;
      email: string;
      fullname: string;
      password: string;
      auth_provider: string;
      account_status: string;
      online_status: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullname: string;
    password: string;
    auth_provider: string;
    account_status: string;
    online_status: string;
    data: any;
  }
}

// async function verifyAccount(profile: any, provider: string) {
//   const res = await fetch(
//     `${process.env.NEXTAUTH_URL}/api/check_account_in_database`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         name: profile.name,
//         email: profile?.email,
//         authProvider: provider,
//       }),
//       headers: { "Content-Type": "application/json" },
//     }
//   );

//   const data = await res.json();
//   if (!data.isFound) {
//     const res = await fetch(
//       `${process.env.NEXTAUTH_URL}/api/auth/create_account`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           fullname: profile.name,
//           email: profile.email,
//           authProvider: provider,
//         }),
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

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
        session.user.fullname = user?.fullname;
        session.user.password = user?.password;
        session.user.auth_provider = user?.auth_provider;
        session.user.account_status = user?.account_status;
        session.user.online_status = user?.online_status;
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
        const response = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/v1/users/authenticate`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        let user = response.data.data || null;

        if (!user) throw new Error(JSON.stringify(response.data));

        return user;
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
