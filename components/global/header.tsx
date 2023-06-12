import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signoutAccount } from "@/helpers/signout/Methods";

import style from "@/public/css/navbar.module.css";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

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

  const signout = async () => {
    signOut({
      redirect: false,
    });

    router.push("/auth/signin");
    await signoutAccount(session?.user.email!);
  };

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
            ></Image>
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
                onClick={signout}
                className={`${style.link} ${session ? "d-block" : "d-none"}`}
              >
                Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
