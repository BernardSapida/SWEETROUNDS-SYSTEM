import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Formik } from "formik";
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Field from "@/components/form/InputField";

import { initialValues, validationSchema } from "@/helpers/signin/Form";

import { Alert } from "@/utils/alert/swal";
import SignInProviders from "./SignInProviders";

import style from "@/public/css/ButtonProvider.module.css";

export default function SigninForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (
    values: { email: string; password: string },
    { resetForm }: { resetForm: any }
  ) => {
    setLoading(true);
    const { email, password } = values;

    const response = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (response?.ok) return router.push("/menu");

    const error = JSON.parse(response?.error!);
    Alert("error", "Incorrect Credential", error.message);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="email"
            label="Email Address"
            handleChange={handleChange}
            value={values.email}
            loading={loading}
          />
          <Field
            type="password"
            name="password"
            label="Password"
            handleChange={handleChange}
            value={values.password}
            loading={loading}
          />
          <div className="d-flex justify-content-between mb-3">
            <div>
              <input className="form-check-input" type="checkbox" /> Remember me
            </div>
            <div>
              <Link href="/forgot_password">Forgot password?</Link>
            </div>
          </div>
          <div className="d-grid gap-2">
            <Button type="submit" className={`btn ${style.signin_btn}`}>
              Sign In
            </Button>
            <p
              className={`mx-auto my-2 text-secondary text-center lh-1 ${style.signin_provider_text}`}
            >
              or signin with
            </p>
            <SignInProviders />
          </div>
        </Form>
      )}
    </Formik>
  );
}
