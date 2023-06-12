import Head from "next/head";

import { register } from "swiper/element/bundle";

register();

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sweet Rounds | About Us</title>
      </Head>

      <swiper-container
        effect="coverflow"
        centerSlides="true"
        slides-per-view="3"
        speed="500"
        loop="true"
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        mousewheel-force-to-axis="true"
        coferFlowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        controller-control=".swiper-2"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>

        <swiper-container className="my-thumbs"> </swiper-container>
      </swiper-container>

      <h1>About Our Story</h1>
      <p>
        At Sweet Rounds, we believe in the power of a sweet treat to brighten
        your day. Our passion for donuts runs deep, and we are dedicated to
        crafting the most delectable, melt-in-your-mouth creations that will
        leave you craving for more. As a family-owned business, our journey
        began years ago when Grandma Betty first shared her secret donut recipe
        with us. Inspired by her love and the magic that unfolded in her
        kitchen, we set out on a mission to bring these heavenly treats to the
        world. Each donut at Sweet Rounds is a labor of love. From the moment we
        mix the finest ingredients to the final glaze and sprinkling of
        toppings, we pour our hearts into every step of the process. We believe
        that the perfect donut is a blend of artistry, precision, and a touch of
        whimsy. What sets us apart is our commitment to quality. We source only
        the freshest and highest-quality ingredients to ensure that every bite
        is an explosion of flavor. Whether you{"'"}re a fan of classic glazed
        donuts or crave adventurous flavors like salted caramel or maple bacon,
        we have something to satisfy every palate. But it{"'"}s not just about
        the donuts; it{"'"}s about the experience. Step into our cozy little
        shop, and you{"'"}ll be greeted by the inviting aroma of freshly baked
        donuts. Our friendly and dedicated team is here to make your visit
        unforgettable, offering personalized recommendations and a warm smile.
        Here at Sweet Rounds, we believe in spreading joy one donut at a time.
        That{"'"}s why we{"'"}re passionate about giving back to our community.
        We partner with local organizations, supporting causes that are close to
        our hearts. When you indulge in our sweet treats, you{"'"}re also
        contributing to making a positive impact in the lives of others. We{"'"}
        re thrilled to share our donuts with you, and we hope that each bite
        brings a moment of pure bliss. Whether you{"'"}re treating yourself,
        celebrating a special occasion, or simply in need of a little
        pick-me-up, Sweet Rounds Donuts is here to make your day a little
        sweeter. Explore our menu, place an order online, or visit our store to
        experience the magic of Sweet Rounds Donuts. We can{"'"}t wait to serve
        you a taste of happiness!
      </p>
      <h1>Mission</h1>
      <p>
        Our mission is to delight our customers with the most extraordinary and
        magical donut experience. We strive to create unique, high-quality
        donuts that bring joy, happiness, and a touch of enchantment to everyone
        {"'"}s lives. Through our delicious pastries, we aim to spread smiles
        and create memorable moments for our customers, one donut at a time.
      </p>
      <h1>Vision</h1>
      <p>
        Our vision is to become the leading provider of exceptional donuts,
        known for their magical taste and enchanting qualities. We aspire to be
        recognized globally as the go-to destination for indulgent, imaginative,
        and top-notch donut creations. We envision expanding our reach, opening
        Dough Delights locations in various cities, and sharing our passion for
        extraordinary donuts with people around the world. We will continually
        innovate, exploring new flavors, techniques, and experiences to ensure
        that our customers always have a magical and delightful donut adventure
        with every visit.
      </p>
      <h1>Values</h1>
      <p>
        <strong>Quality:</strong> We are committed to delivering the highest
        quality donuts made with the finest ingredients. We take pride in our
        craftsmanship, ensuring that every bite of our donuts is a truly
        exceptional experience.
      </p>
      <p>
        <strong>Creativity:</strong> We embrace creativity and innovation in our
        donut creations. We constantly strive to surprise and delight our
        customers with unique flavors, designs, and concepts that push the
        boundaries of traditional donuts.
      </p>
      <p>
        <strong>Customer Delight:</strong> Our customers{"'"} happiness is at
        the heart of everything we do. We go above and beyond to exceed their
        expectations, providing exceptional service, a welcoming atmosphere, and
        magical donuts that bring smiles to their faces.
      </p>
      <p>
        <strong>Integrity:</strong> We conduct our business with honesty,
        transparency, and integrity. We value the trust our customers place in
        us and strive to maintain the highest ethical standards in all aspects
        of our operations.
      </p>
      <p>
        <strong>Passion:</strong> We are passionate about donuts and the joy
        they bring. Our team is dedicated to their craft, infusing every donut
        with love, care, and enthusiasm. We believe that our passion shines
        through in the flavors and experiences we create.
      </p>
      <p>
        <strong>Community:</strong> We believe in being an active and positive
        member of our community. We support local initiatives, contribute to
        charitable causes, and foster a sense of togetherness and inclusivity
        within our donut-loving community.
      </p>
      <p>
        <strong>Continuous Improvement:</strong> We are committed to continuous
        learning and improvement. We constantly seek feedback from our
        customers, embrace new techniques and trends, and challenge ourselves to
        be better with each passing day.
      </p>
      <h1>Products and Services</h1>
      <p>
        At Sweet Round, we take pride in crafting irresistible treats that bring
        joy to every bite. From classic favorites to innovative creations, our
        products are made with love and the finest ingredients to ensure an
        unforgettable experience.
      </p>
      <p>
        <strong>Donut Varieties:</strong> Offer a wide range of donut flavors,
        shapes, and sizes to appeal to different tastes. This can include
        traditional flavors like glazed, chocolate, and jelly-filled, as well as
        more unique options such as pineapple, red velvet, or choco & peanuts.
      </p>
      <p>
        <strong>Donut Holes and Mini Donuts:</strong> Sell bite-sized donut
        holes or mini donuts as an alternative option for customers who prefer
        smaller portions or want to try a variety of flavors in one sitting.
      </p>
      <p>
        <strong>Custom Orders:</strong> We specialize in creating custom donut
        creations tailored to your specific preferences. Whether it{"'"}s a
        unique flavor combination, personalized decorations, or dietary
        accommodations, our skilled team will bring your vision to life.
      </p>
      <p>
        <strong>Online Ordering:</strong> Enjoy the convenience of ordering our
        sweet treats online. Our user-friendly online platform allows you to
        browse our menu, customize your order, and schedule convenient pickup or
        delivery.
      </p>
      <p>
        <strong>Delivery Services:</strong> Offer a delivery service to bring
        your delicious donuts directly to your customers{"'"} homes or offices.
        Provide options for scheduled deliveries or on-demand delivery within a
        specific radius. Keep customers informed about delivery times and offer
        real-time tracking.
        <br />
        At Sweet Round Bakery, we believe that every moment deserves something
        sweet. Our commitment to quality, creativity, and exceptional customer
        service sets us apart. Join us on a journey of sweet indulgence and
        experience the magic of Sweet Round.
      </p>
      <p>
        <strong>Corporate and Bulk Orders:</strong> Cater to businesses and
        individuals looking to place larger orders for corporate events,
        employee appreciation, or gifting purposes. Provide dedicated
        information and contact options for corporate and bulk orders, including
        special pricing, custom branding options, and delivery arrangements.
      </p>
      <h1>Customer Reviews</h1>
      <p>
        <strong>Name: María Guerrero Pérez</strong>
      </p>
      <p>
        I absolutely love the donuts from this shop! They are always fresh,
        fluffy, and full of flavor. Whether it{"'"}s a classic glazed donut or
        one of their specialty creations, every bite is pure bliss. The staff is
        friendly and helpful, making the whole experience even better. I highly
        recommend trying their donuts!
      </p>
      <p>
        <strong>Name: Mary Elizabeth Smith</strong>
      </p>
      <p>
        These donuts are simply divine! The texture is perfectly soft, and they
        are never too greasy. The variety they offer is impressive, with both
        traditional and unique flavors. I particularly enjoy their
        chocolate-filled donuts, as the filling is rich and decadent. If you
        {"'"}re a donut lover, this place is a must-visit!
      </p>
      <p>
        <strong>Name: Ryan Del Mundo</strong>
      </p>
      <p>
        I{"'"}ve been a loyal customer of this donut shop for years, and for a
        good reason. Their donuts are consistently delicious and addictive. From
        the moment you take a bite, you can taste the quality ingredients they
        use. The assortment of flavors is extensive, catering to every taste
        bud. If you want to treat yourself to a heavenly donut, look no further.
      </p>
      <p>
        <strong>Name: Julia Cy</strong>
      </p>
      <p>
        These donuts are a disappointment. I found them to be overly sugary and
        lacking in flavor. The texture was dense and not at all enjoyable.
        Additionally, the service was subpar, with long wait times and
        unfriendly staff. I regretted my decision to try these donuts and won
        {"'"}t be going back anytime soon. There are much better options out
        there.
      </p>
    </>
  );
}

// Our Mission
// Our Vision
// Values
// Our Team
// Our Products & Services
// Customer Reviews
