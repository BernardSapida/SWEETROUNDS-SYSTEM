import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signoutAccount } from "@/helpers/signout/Methods";

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
      path: "contact",
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
      path: "/account?page=order_history",
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {links.map((link) => (
                <Nav.Link
                  key={link.name}
                  as={Link}
                  href={link.path}
                  className={`${link.show ? "d-block" : "d-none"} ${
                    link.path === router.asPath ? "active" : ""
                  }`}
                >
                  {link.name}
                </Nav.Link>
              ))}

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                href={"/auth/signin"}
                className={`${!session ? "d-block" : "d-none"}`}
              >
                Sign In
              </Nav.Link>
              <Nav.Link
                as={Link}
                href={"/signup"}
                className={`${!session ? "d-block" : "d-none"}`}
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                onClick={signout}
                className={`${session ? "d-block" : "d-none"}`}
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
