import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Field from "@/components/form/InputField";

import { initialValues, validationSchema } from "@/helpers/signup/Form";

import { Alert } from "@/utils/alert/swal";
import { UserCredential } from "@/types/UserCredential";

import style from "@/public/css/signup.module.css";

export default function SigninForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    values: UserCredential,
    { resetForm }: { resetForm: any }
  ) => {
    setLoading(true);
    const { firstname, lastname, email, password, confirmPassword } = values;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/users/create`,
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }
    );

    if (response.data.success) {
      resetForm();
      Alert("success", "Signup Successful", "Account successfully created!");
    } else Alert("error", "Invalid Input", response.data.message);

    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit} id="signupForm">
          <div className="d-flex justify-content-between gap-3">
            <Field
              type="text"
              name="firstname"
              label="Firstname"
              handleChange={handleChange}
              value={values.firstname}
              loading={loading}
            />
            <Field
              type="text"
              name="lastname"
              label="Lastname"
              handleChange={handleChange}
              value={values.lastname}
              loading={loading}
            />
          </div>
          <Field
            type="text"
            name="email"
            label="Email Address"
            handleChange={handleChange}
            value={values.email}
            loading={loading}
          />
          <div className="d-flex justify-content-between gap-3">
            <Field
              type="password"
              name="password"
              label="Password"
              handleChange={handleChange}
              value={values.password}
              loading={loading}
            />
            <Field
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              value={values.confirmPassword}
              loading={loading}
            />
          </div>
          <div className="d-grid gap-2">
            <Button type="submit" className={`${style.signup_btn}`}>
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
