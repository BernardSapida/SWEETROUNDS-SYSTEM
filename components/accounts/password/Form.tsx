import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { Formik } from "formik";

import { updatePassword } from "@/helpers/accounts/Methods";
import { Password } from "@/types/Password";
import { User } from "@/types/User";

import Field from "@/components/form/InputField";

import {
  initialValues,
  validationSchema,
} from "@/helpers/accounts/PasswordForm";
import { Alert } from "@/utils/alert/swal";

export default function ContactForm({ user }: { user: User }) {
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    values: Password,
    { resetForm }: { resetForm: any }
  ) => {
    setLoading(true);

    const response = await updatePassword(
      user.id,
      values.password,
      values.confirmPassword
    );

    if (response.success) {
      Alert(
        "success",
        "Updated Successfully",
        "Your password updated successfully"
      );
      resetForm();
      setEdit(false);
    } else {
      Alert("error", "Invalid Password", response.message);
    }

    setLoading(false);
  };

  return (
    <div className="rounded border p-3 mb-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, resetForm }) => (
          <Form onSubmit={handleSubmit} id="form">
            <Field
              type="password"
              name="password"
              label="Password"
              handleChange={handleChange}
              value={values.password}
              loading={!edit || loading}
            />
            <Field
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              value={values.confirmPassword}
              loading={!edit || loading}
            />
            {!edit && (
              <Button
                className="d-block ms-auto"
                variant="dark"
                onClick={() => setEdit(true)}
              >
                Edit password
              </Button>
            )}
            {edit && (
              <div className="d-flex justify-content-end gap-1">
                {!loading && (
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      setEdit(false);
                      resetForm({ values: initialValues });
                    }}
                  >
                    Cancel
                  </Button>
                )}
                <Button type="submit" form="form" disabled={loading}>
                  {!loading && "Update password"}
                  {loading && (
                    <>
                      <Spinner
                        as="span"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      &nbsp;
                      <span>Updating password...</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
