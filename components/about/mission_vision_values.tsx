import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MissionVisionValues() {
  return (
    <>
      <section style={{ marginTop: 50, marginBottom: 50 }}>
        <Row>
          <Col md={8} sm={12}>
            <p className="fs-4 mb-4">Mission & Vision</p>
            <p>
              Our mission is to delight our customers with the most
              extraordinary and magical donut experience. We strive to create
              unique, high-quality donuts that bring joy, happiness, and a touch
              of enchantment to everyone
              {"'"}s lives. Through our delicious pastries, we aim to spread
              smiles and create memorable moments for our customers, one donut
              at a time.
              <br />
              <br />
              Our vision is to become the leading provider of exceptional
              donuts, known for their magical taste and enchanting qualities. We
              aspire to be recognized globally as the go-to destination for
              indulgent, imaginative, and top-notch donut creations. We envision
              expanding our reach, opening Dough Delights locations in various
              cities, and sharing our passion for extraordinary donuts with
              people around the world. We will continually innovate, exploring
              new flavors, techniques, and experiences to ensure that our
              customers always have a magical and delightful donut adventure
              with every visit.
            </p>
          </Col>
          <Col md={4} sm={12}>
            <Image
              src="/images/about_us/mission.jpg"
              className="d-block mx-auto"
              height={300}
              width={300}
              alt="Testimonial Profile Picture"
              priority={true}
              style={{ borderRadius: 10 }}
            />
          </Col>
        </Row>
      </section>
      <section style={{ marginTop: 50, marginBottom: 50 }}>
        <p className="fs-4 mb-4">Values</p>
        <p>
          <strong>Quality:</strong> We are committed to delivering the highest
          quality donuts made with the finest ingredients. We take pride in our
          craftsmanship, ensuring that every bite of our donuts is a truly
          exceptional experience.
        </p>
        <p>
          <strong>Creativity:</strong> We embrace creativity and innovation in
          our donut creations. We constantly strive to surprise and delight our
          customers with unique flavors, designs, and concepts that push the
          boundaries of traditional donuts.
        </p>
        <p>
          <strong>Customer Delight:</strong> Our customers{"'"} happiness is at
          the heart of everything we do. We go above and beyond to exceed their
          expectations, providing exceptional service, a welcoming atmosphere,
          and magical donuts that bring smiles to their faces.
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
          <strong>Continuous Improvement:</strong> We are committed to
          continuous learning and improvement. We constantly seek feedback from
          our customers, embrace new techniques and trends, and challenge
          ourselves to be better with each passing day.
        </p>
      </section>
    </>
  );
}
