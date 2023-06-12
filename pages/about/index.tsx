import Head from "next/head";
import Image from "next/image";

import style from "@/public/css/about.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CustomerReviews from "@/components/about/customer_reviews";
import ProductsAndServices from "@/components/about/products_and_serivces";
import MissionVisionValues from "@/components/about/mission_vision_values";
import OurStory from "@/components/about/our_story";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sweet Rounds | About Us</title>
      </Head>
      <OurStory />
      <MissionVisionValues />
      <ProductsAndServices />
      <CustomerReviews />
    </>
  );
}

// Our Mission
// Our Vision
// Values
// Our Team
// Our Products & Services
// Customer Reviews
