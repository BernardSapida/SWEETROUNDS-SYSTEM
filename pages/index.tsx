import FreshDonuts from "@/components/home/FreshDonuts";
import Landing from "@/components/home/Landing";
import Offers from "@/components/home/Offers";
import Head from "next/head";
import Image from "next/image";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Sweet Rounds | Home</title>
      </Head>
      <Landing />
      <Offers />
      <FreshDonuts />
    </>
  );
}
