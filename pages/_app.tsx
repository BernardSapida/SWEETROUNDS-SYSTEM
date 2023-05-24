import type { AppProps } from "next/app";
import Header from "@/components/global/header";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import { SSRProvider } from "@react-aria/ssr";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Head>
          <link rel="shortcut icon" href="/sweetrounds_icon.png" />
          <meta
            name="description"
            content="Indulge in the heavenly delight of freshly baked donuts at Sweet Rounds. Our wide range of flavors and handcrafted treats are sure to satisfy your sweet cravings. Visit us today and experience the joy of the perfect round."
          />
          <meta
            name="keywords"
            content="donuts, sweet rounds, bakery, desserts, treats"
          />
          <meta
            name="author"
            content="Bernard Sapida, Shania Gwyneth Nuga, Ralph Howard Azarcon, Christian Arby Camama"
          />
          <meta property="og:title" content="Sweet Rounds" />
          <meta property="og:url" content="https://sweetrounds.vercel.app/" />
          <meta
            property="og:image"
            content="https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Head>
        <NextNProgress
          color="linear-gradient(to right, orange, red)"
          options={{ showSpinner: false }}
        />
        <Header />
        <main>
          <Container className="my-5" style={{ marginTop: 50 }}>
            <Component {...pageProps} />
          </Container>
        </main>
      </SessionProvider>
    </SSRProvider>
  );
}
