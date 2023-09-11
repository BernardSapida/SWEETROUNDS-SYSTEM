import Link from "next/link";
import Image from "next/image";

export default function FreshDonuts() {
  return (
    <section className="my-5">
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
        <div className="landing-left">
          <h1>
            Get fresh donuts in a<br /> reasonable price
          </h1>
          <p>
            Our donuts are made with the finest ingredients, ensuring every bite is a delightful experience. Whether you prefer classic flavors or daring combinations, we have a tempting variety to choose from. Dive into a world of sweetness, order your favorite donuts today, and let the magic of SweetRounds make every moment a treat.
          </p>
          <Link
            href="menu"
            className="btn btn-primary"
          >
            Order Now
          </Link>
        </div>
        <div className="landing-img">
          <Image
            src="/images/home/tridonuts.png"
            height={300}
            width={300}
            alt="Three donuts"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
