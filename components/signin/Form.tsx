import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import Link from "next/link";

import SignInProviders from "./SignInProviders";
import { Alert } from "@/utils/alert/swal";

export default function SigninForm() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSignin = async (event: any) => {
    event.preventDefault();

    const emailInput = email.current?.value;
    const passwordInput = password.current?.value;

    if (emailInput != "" && passwordInput != "") {
      const response = await signIn("credentials", {
        redirect: false,
        email: emailInput,
        password: passwordInput,
      });

      if (response?.ok) return router.push("/menu");

      const error = JSON.parse(response?.error!);
      Alert("error", "Incorrect Credential", error.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSignin}>
        <FloatingLabel className="mb-3" label="Email Address">
          <Form.Control
            type="email"
            placeholder="Email Address"
            ref={email}
            autoComplete="username"
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={password}
            autoComplete="current-password"
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <input className="form-check-input mt-0" type="checkbox" /> Remember
            me
          </div>
          <div>
            <Link href="/forgot_password">Forgot password?</Link>
          </div>
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
            Sign In
          </Button>
        </div>
      </Form>
    </>
  );
}
