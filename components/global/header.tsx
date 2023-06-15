import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";

import { BsBag } from "react-icons/bs";

import CartContext from "@/store/cart_context";

import style from "@/public/css/navbar.module.css";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const cartContext = useContext(CartContext);

  const links = [
    {
      name: "Home",
      path: "/",
      show: true,
    },
    {
      name: "About Us",
      path: "/about",
      show: true,
    },
    {
      name: "Contact Us",
      path: "/contact",
      show: true,
    },
    {
      name: "Menu",
      path: "/menu",
      show: session,
    },
    {
      name: "Cart",
      path: "/cart",
      show: session,
    },
    {
      name: "Account",
      path: "/account",
      show: session,
    },
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bg-white"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/sweetrounds_banner.png"
              height="40"
              width="150"
              alt="SweetRounds Banner"
              priority={true}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {links.map((link) => (
                <Nav.Link
                  key={link.name}
                  as={Link}
                  href={link.path}
                  className={`${style.link} ${
                    link.show ? "d-block" : "d-none"
                  } ${link.path === router.route ? style.active : ""}`}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                href={"/auth/signin"}
                className={`${style.link} ${
                  router.asPath == "/auth/signin" ? style.active : ""
                } ${!session ? "d-block" : "d-none"}`}
              >
                Sign In
              </Nav.Link>
              <Nav.Link
                as={Link}
                href={"/signup"}
                className={`${style.link} ${
                  router.asPath == "/signup" ? style.active : ""
                } ${!session ? "d-block" : "d-none"}`}
              >
                Sign Up
              </Nav.Link>

              <Nav.Link
                as={"span"}
                href={"/cart"}
                className={`fs-5 ${session ? "d-block" : "d-none"} ${
                  style.cart
                }`}
              >
                <p className="lh-1 my-0 fs-6 text-secondary">Welcome,</p>
                <p className="lh-1 my-1 fs-6 text-secondary">{`${session?.user.firstname} ${session?.user.lastname}`}</p>
              </Nav.Link>
              <Nav.Link
                as={Link}
                href={"/cart"}
                className={`fs-5 ${session ? "d-block" : "d-none"} ${
                  style.cart
                }`}
              >
                <BsBag className="fs-3" />
                <Badge
                  pill
                  bg="warning"
                  text="dark"
                  className={style.cart_number}
                >
                  {cartContext.cartNumber}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
