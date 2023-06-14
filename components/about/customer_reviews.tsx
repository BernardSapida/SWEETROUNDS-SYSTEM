import Image from "next/image";

import { FaStar } from "react-icons/fa";

import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "@/public/css/about.module.css";

export default function CustomerReviews() {
  return (
    <section style={{ marginTop: 50, marginBottom: 50 }}>
      <p className="fs-4 text-center mb-4">Customer Reviews</p>
      <Swiper
        className={`${style.swiper}`}
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        // navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/julia_cy.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Julia Cy</p>
            <p>
              These donuts are a disappointment. I found them to be overly
              sugary and lacking in flavor. The texture was dense and not at all
              enjoyable. Additionally, the service was subpar, with long wait
              times and unfriendly staff. I regretted my decision to try these
              donuts and won
              {"'"}t be going back anytime soon.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/ryan_del_mundo.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Ryan Del Mundo</p>
            <p>
              I{"'"}ve been a loyal customer of this donut shop for a good
              reason. Their donuts are delicious and addictive. From the moment
              you take a bite, you can taste the quality ingredients they use.
              The assortment of flavors is extensive, catering to every taste
              bud. If you want to treat yourself to a heavenly donut, look no
              further.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/mary_elizabeth_smith.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Mary Elizabeth Smith</p>
            <p>
              These donuts are simply divine! The texture is perfectly soft, and
              they are never too greasy. The variety they offer is impressive,
              with both traditional and unique flavors. I particularly enjoy
              their chocolate-filled donuts, as the filling is rich and
              decadent. If you
              {"'"}re a donut lover, this place is a must-visit!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/maria_guerrero_perez.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">María Guerrero Pérez</p>
            <p>
              I absolutely love the donuts from this shop! They are always
              fresh, fluffy, and full of flavor. Whether it{"'"}s a classic
              glazed donut or one of their specialty creations, every bite is
              pure bliss. The staff is friendly and helpful, making the whole
              experience even better. I highly recommend trying their donuts!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/sarah_mary.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Sarah Mary</p>
            <p>
              I recently tried the donuts from this bakery, and I was blown
              away! The variety of flavors was incredible, and each donut was a
              work of art. My personal favorite was the raspberry-filled donut.
              It had the perfect balance of sweetness and tanginess. The staff
              was friendly and helpful, making my experience even more
              enjoyable. I{"'"}ll definitely be back for more!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/john_david_de_leon.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">John David De Leon</p>
            <p>
              As a self-proclaimed donut connoisseur, I can confidently say that
              these donuts are top-notch. The dough is light and airy, and the
              glazes are simply divine. I particularly loved the maple bacon
              donut—the combination of the smoky bacon and sweet maple glaze was
              a match made in heaven. It{"'"}s safe to say that I{"'"}ve found
              my new go-to donut shop!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/emily_romero.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Emily Romero</p>
            <p>
              I{"'"}ve tried donuts from various places, but none compare to the
              quality and taste of the ones from this bakery. The donuts are
              always fresh and bursting with flavor. I highly recommend the
              lemon-filled donut, it{"'"}s like a burst of sunshine in every
              bite. The staff is always welcoming, and their passion for donuts
              shines through in every aspect. This place is a gem!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/david_wilson.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">David Wilson</p>
            <p>
              I{"'"}m a long-time customer of this donut shop, and I keep coming
              back for a reason. The donuts are consistently amazing—soft,
              fluffy, and packed with flavor. The blueberry cake donut is my
              absolute favorite, it{"'"}s incredibly moist and has just the
              right amount of blueberry goodness. The staff is friendly, and the
              service is prompt. If you haven{"'"}t tried their donuts yet, you
              {"'"}re missing out!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/lisa_hernandez.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Lisa Hernandez</p>
            <p>
              I recently ordered a custom donut assortment for my daughter{"'"}s
              birthday party, and it was a huge hit! The donuts looked
              beautiful, and they tasted even better. The kids couldn{"'"}t get
              enough of the sprinkle-covered donuts, and the adults raved about
              the gourmet flavors. The customer service was exceptional, and the
              delivery was on time. Thank you for making our celebration extra
              special!
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/benjamin_rodriguez.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Benjamin Rodriguez</p>
            <p>
              I{"'"}ve tried donuts from many places, but none can compare to
              the ones from this bakery. David and his team truly know how to
              make exceptional donuts. The donuts were perfectly moist and had a
              wonderful variety of flavors. The service was outstanding, and the
              attention to detail was evident. My personal favorite was the
              cinnamon sugar donut—it was like biting into a piece of heaven.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/michael_johnson.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Michael Johnson</p>
            <p>
              I recently ordered a donut platter for a corporate event from this
              shop, and it was a resounding success. The donuts, expertly
              prepared by Ralph and his team, were beautifully presented and
              tasted incredible. The assortment was diverse, satisfying everyone
              {"'"}s preferences. The attendees couldn{"'"}t stop raving about
              the donuts, and I received numerous compliments.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/olivia_anderson.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Olivia Anderson</p>
            <p>
              SweetRounds Donuts is my go-to place for delicious treats. The
              donuts are always made with love and attention to detail. The
              glazed donuts are light and fluffy, and the fruit-filled ones
              burst with freshness. The staff, led by John, provides excellent
              customer service, making each visit a delightful experience. I
              highly recommend the custom donut creations—they are a true
              reflection of their expertise.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/sophia_martinez.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Sophia Martinez</p>
            <p>
              I{"'"}m a regular at this donut shop, and I keep coming back for
              the exceptional quality and service. Shania and the entire staff
              are always welcoming and attentive. The donuts are consistently
              fresh, with a wide range of flavors to choose from. The attention
              to detail in their presentation is impressive. If you{"'"}re a
              donut lover like me, do yourself a favor and visit this place—you
              won{"'"}t be disappointed.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${style.swiper_slide}`}>
          <div
            className="mx-auto p-4 text-center bg-white shadow"
            style={{
              borderRadius: 10,
              width: 350,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image
              src="/images/profile/emily_thompson.jpg"
              height={150}
              width={150}
              alt="Testimonial Profile Picture"
              style={{ borderRadius: 75 }}
            />
            <p className="fs-3 mt-2">Emily Thompson</p>
            <p>
              I had the pleasure of trying the donuts from this bakery, and I
              must say, they exceeded my expectations. The donuts were
              incredibly fresh and the flavors were fantastic. The staff,
              especially Sarah, was friendly and helpful, providing excellent
              recommendations. I highly recommend the chocolate-filled donut—it
              was a true delight. I{"'"}ll definitely be returning for more of
              their delectable treats.
            </p>
            <div style={{ color: "#F5BE18", fontSize: 30 }}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
