import Container from "react-bootstrap/Container";

import Head from "next/head";
import ForgotPasswordForm from "@/components/forgot_password/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <Container className="my-2">
      <Head>
        <title>Sweet Rounds | Forgot Password</title>
      </Head>
      <h2>Forgot your password?</h2>
      <p>Enter your email to get a reset link</p>
      <Container>
        <ForgotPasswordForm />
      </Container>
    </Container>
  );
}
