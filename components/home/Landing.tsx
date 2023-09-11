import Link from "next/link";
import Image from "next/image";

import { User } from "@/types/User";

export default function Landing({ user }: { user: User | null }) {
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
            href={user ? '/menu' : '/auth/signin'}
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
