import Image from "next/image";
import Button from "react-bootstrap/Button";

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            aliquam qui aspernatur quasi sequi incidunt corrupti officiis porro
            odit rerum.
          </p>
          <Button>Order Now</Button>
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
