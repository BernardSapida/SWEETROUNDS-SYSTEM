import Placeholder from "react-bootstrap/Placeholder";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import { Formik } from "formik";

import { updateUserInfo } from "@/helpers/accounts/Methods";
import {
  getInitialValues,
  validationSchema,
} from "@/helpers/accounts/ProfileInformationForm";
import { User } from "@/types/User";

import Field from "@/components/form/InputField";
import { Alert } from "@/utils/alert/swal";

export default function ContactForm({ user }: { user: User }) {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const initialValues = getInitialValues(user);

  useEffect(() => setPageLoading(false), []);

  const handleSubmit = async (values: User) => {
    setLoading(true);
    const response = await updateUserInfo(values.id, values);

    if (response.success) {
      Alert(
        "success",
        "Updated Successfully",
        "Your account information updated successfully"
      );
      setEdit(false);
    }
    setLoading(false);
  };

  return (
    <div className="rounded p-3 mb-2 bg-white">
      <h3 className="text-center mb-4">
        {pageLoading ? (
          <Placeholder animation="glow">
            <Placeholder bg="dark" style={{ borderRadius: 5, width: 300 }} />
          </Placeholder>
        ) : (
          <strong>Personal Information</strong>
        )}
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, resetForm }) => (
          <Form onSubmit={handleSubmit} id="form">
            <div className="d-flex justify-content-between gap-3">
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="firstname"
                  label="Firstname"
                  handleChange={handleChange}
                  value={values.firstname}
                  loading={!edit || loading}
                />
              )}
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="lastname"
                  label="Lastname"
                  handleChange={handleChange}
                  value={values.lastname}
                  loading={!edit || loading}
                />
              )}
            </div>
            {pageLoading ? (
              <Placeholder animation="glow" className="w-100">
                <Placeholder
                  className="mb-3 w-100 d-block"
                  bg="secondary"
                  style={{ borderRadius: 5, width: 100, height: 57 }}
                />
              </Placeholder>
            ) : (
              <Field
                type="text"
                name="email"
                label="Email"
                handleChange={handleChange}
                value={values.email}
                loading={!edit || loading}
              />
            )}
            <div className="d-flex justify-content-between gap-3">
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="address_line_1"
                  label="Adress Line 1"
                  handleChange={handleChange}
                  value={values.address_line_1}
                  loading={!edit || loading}
                />
              )}
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="address_line_2"
                  label="Adress Line 2"
                  handleChange={handleChange}
                  value={values.address_line_2}
                  loading={!edit || loading}
                />
              )}
            </div>
            <div className="d-flex justify-content-between gap-3">
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="city"
                  label="City"
                  handleChange={handleChange}
                  value={values.city}
                  loading={!edit || loading}
                />
              )}
              {pageLoading ? (
                <Placeholder animation="glow" className="w-100">
                  <Placeholder
                    className="mb-3 w-100 d-block"
                    bg="secondary"
                    style={{ borderRadius: 5, width: 100, height: 57 }}
                  />
                </Placeholder>
              ) : (
                <Field
                  type="text"
                  name="contact"
                  label="Contact"
                  handleChange={handleChange}
                  value={values.contact}
                  loading={!edit || loading}
                />
              )}
            </div>
            {pageLoading && (
              <Placeholder.Button
                animation="glow"
                className="d-block ms-auto"
                style={{ width: 115, height: 35 }}
                variant="dark"
              />
            )}
            {!edit && !pageLoading && (
              <Button
                className="d-block ms-auto"
                variant="dark"
                onClick={() => setEdit(true)}
              >
                Edit account
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
                  {!loading && "Update account"}
                  {loading && (
                    <>
                      <Spinner
                        as="span"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      &nbsp;
                      <span>Updating account...</span>
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
