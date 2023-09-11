import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="my-5">
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
        <div className="landing-left">
          <h1>
            Delicious
            <br />
            Donuts For You
          </h1>
          <p>
            Welcome to SweetRounds, your ultimate destination for delectable donuts that will tantalize your taste buds and satisfy your sweet cravings.
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
            src="/images/home/landing.png"
            height={300}
            width={300}
            alt="Landing page donut"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
