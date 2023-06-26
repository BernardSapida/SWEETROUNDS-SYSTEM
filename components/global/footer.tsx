import Image from "next/image";
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import style from "@/public/css/footer.module.css";

export default function footer() {
  return (
    <footer className="px-5 pt-5 bg-white border-top">
      <Row className="mx-0">
        <Col lg={3} md={6} sm={12}>
          <Image
            src="/sweetrounds_banner.png"
            height="40"
            width="150"
            alt="SweetRounds Banner"
            priority={true}
            className="d-block mb-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quos ad possimus aut rerum id molestiae.
          </p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fs-4 fw-bold">Contact</p>
          <p className="text-secondary lh-1 my-3">
            <SlLocationPin className="mb-1" /> Malagasang 1-F, City of Imus,
            Cavite
          </p>
          <p className="text-secondary lh-1 my-3">
            <BsTelephone className="mb-1" /> 0947-212-6029
          </p>
          <p className="text-secondary lh-1 my-3">
            <AiOutlineMail className="mb-1" /> sweetrounds@gmail.com
          </p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fs-4 fw-bold">Links</p>
          <Link
            href="#"
            className="d-block text-secondary text-decoration-none lh-1 my-3"
          >
            Home
          </Link>
          <Link
            href="#"
            className="d-block text-secondary text-decoration-none lh-1 my-3"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="d-block text-secondary text-decoration-none lh-1 my-3"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="d-block text-secondary text-decoration-none lh-1 my-3"
          >
            Cart
          </Link>
          <Link
            href="#"
            className="d-block text-secondary text-decoration-none lh-1 my-3"
          >
            Account
          </Link>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <p className="fs-4 fw-bold">Social Accounts</p>
          <div className="d-flex align-items-center gap-2 mx-auto">
            <Button type="button" className={`${style.social_accounts}`}>
              <AiOutlineGoogle style={{ fontSize: 20, placeSelf: "center" }} />
            </Button>
            <Button type="button" className={`${style.social_accounts}`}>
              <FaFacebookF style={{ fontSize: 20, placeSelf: "center" }} />
            </Button>
            <Button type="button" className={`${style.social_accounts}`}>
              <AiOutlineTwitter style={{ fontSize: 20, placeSelf: "center" }} />
            </Button>
            <Button type="button" className={`${style.social_accounts}`}>
              <AiOutlineInstagram
                style={{ fontSize: 20, placeSelf: "center" }}
              />
            </Button>
            <Button type="button" className={`${style.social_accounts}`}>
              <FaGithub style={{ fontSize: 20, placeSelf: "center" }} />
            </Button>
          </div>
        </Col>
      </Row>
      <hr />
      <p className="text-center text-secondary lh-1 my-0">
        &copy; 2023 Copyright Donut Company. All rights reserved.
      </p>
    </footer>
  );
}
