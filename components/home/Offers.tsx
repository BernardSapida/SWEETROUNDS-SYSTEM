import Image from "next/image";

export default function Offers() {
  return (
    <section className="my-5">
      <p className="fs-3 fw-bold text-center">
        We always offer you the best
        <br />
        donuts all time
      </p>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
        <div className="offers rounded shadow p-3">
          <Image
            src="/images/home/appetizing-dough.png"
            height={100}
            width={100}
            alt="Appetizing Dough image"
            priority={true}
            className="d-block mx-auto"
          />
          <p className="text-center lh-1 my-0 mt-3 fw-bold">Appetizing Dough</p>
        </div>
        <div className="offers rounded shadow p-3">
          <Image
            src="/images/home/extra-round.png"
            height={100}
            width={100}
            alt="Appetizing Dough image"
            priority={true}
            className="d-block mx-auto"
          />
          <p className="text-center lh-1 my-0 mt-3 fw-bold">Extra Round</p>
        </div>
        <div className="offers rounded shadow p-3">
          <Image
            src="/images/home/literally-sugarcoated.png"
            height={100}
            width={100}
            alt="Appetizing Dough image"
            priority={true}
            className="d-block mx-auto"
          />
          <p className="text-center lh-1 my-0 mt-3 fw-bold">
            Literally Sugarcoated
          </p>
        </div>
        <div className="offers rounded shadow p-3">
          <Image
            src="/images/home/refined-flavors.png"
            height={100}
            width={100}
            alt="Appetizing Dough image"
            priority={true}
            className="d-block mx-auto"
          />
          <p className="text-center lh-1 my-0 mt-3 fw-bold">Refined Flavors</p>
        </div>
      </div>
    </section>
  );
}
