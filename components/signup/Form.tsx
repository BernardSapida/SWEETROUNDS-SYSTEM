import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useRef } from "react";
import Link from "next/link";
import axios from "axios";

export default function SigninForm() {
  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const handleSignin = async (event: any) => {
    event.preventDefault();

    if (notEmptyInputs()) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/users/create`,
        {
          firstname: firstname.current?.value,
          lastname: lastname.current?.value,
          email: email.current?.value,
          password: password.current?.value,
          confirmPassword: confirmPassword.current?.value,
        }
      );

      if (response.data.success) {
        resetForm();

        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "Account successfully created!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: response.data.message,
        });
      }
    }
  };

  const notEmptyInputs = () => {
    return (
      firstname.current?.value != "" &&
      lastname.current?.value != "" &&
      email.current?.value != "" &&
      password.current?.value != "" &&
      confirmPassword.current?.value != ""
    );
  };

  const resetForm = () => {
    const form = document.getElementById("signupForm") as HTMLFormElement;
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSignin} id="signupForm">
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="Firstname">
            <Form.Control
              type="text"
              placeholder="Firstname"
              ref={firstname}
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Lastname">
            <Form.Control
              type="text"
              placeholder="Lastname"
              ref={lastname}
              required
            />
          </FloatingLabel>
        </div>
        <FloatingLabel className="mb-3" label="Email Address">
          <Form.Control
            type="email"
            placeholder="Email Address"
            ref={email}
            autoComplete="username"
            required
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
              autoComplete="current-password"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={confirmPassword}
              autoComplete="current-password"
              required
            />
          </FloatingLabel>
        </div>
        <div className="d-grid gap-2">
          <Button
            type="submit"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(253, 126, 20) 0%, rgb(250, 82, 82) 100%)",
              border: "none",
              fontWeight: 500,
            }}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
}
