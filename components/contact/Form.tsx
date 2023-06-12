import { Formik } from "formik";
import { useState } from "react";

import Placeholder from "react-bootstrap/Placeholder";
import { BsFillSendFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import TextArea from "@/components/form/TextArea";
import Field from "@/components/form/InputField";

import { initialValues, validationSchema } from "@/helpers/contact/Form";
import { sendMessage } from "@/helpers/contact/Methods";

import { Contact } from "@/types/Contact";

import { Alert } from "@/utils/alert/swal";

import style from "@/public/css/contact.module.css";

export default function ContactForm({ pageLoading }: { pageLoading: boolean }) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    values: Contact,
    { resetForm }: { resetForm: any }
  ) => {
    setLoading(true);
    const { name, email, subject, message } = values;
    const response = await sendMessage(name, email, subject, message);

    if (response.success) {
      resetForm();
      Alert(
        "success",
        "Message Sent",
        "Your message successfuly sent, we'll get back to you soon!"
      );
    }
    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit} id="contactForm">
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
                name="name"
                label="Name"
                handleChange={handleChange}
                value={values.name}
                loading={loading}
              />
            )}
            {pageLoading ? (
              <Placeholder animation="glow" className="w-100">
                <Placeholder
                  className="mb-3 w-100"
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
                loading={loading}
              />
            )}
          </div>
          {pageLoading ? (
            <Placeholder animation="glow" className="w-100">
              <Placeholder
                className="mb-3 w-100"
                bg="secondary"
                style={{ borderRadius: 5, width: 100, height: 57 }}
              />
              <Placeholder
                className="mb-3 w-100"
                bg="secondary"
                style={{ borderRadius: 5, width: 100, height: 150 }}
              />
            </Placeholder>
          ) : (
            <>
              <Field
                type="text"
                name="subject"
                label="Subject"
                handleChange={handleChange}
                value={values.subject}
                loading={loading}
              />
              <TextArea
                as="textarea"
                name="message"
                label="Message"
                handleChange={handleChange}
                value={values.message}
                loading={loading}
              />
            </>
          )}
          {pageLoading ? (
            <Placeholder.Button
              animation="glow"
              className="ms-auto d-block"
              style={{ borderRadius: 5, width: 150, height: 35 }}
            />
          ) : (
            <Button
              type="submit"
              className={`${style.send_btn} d-block ms-auto`}
              disabled={loading}
            >
              <BsFillSendFill className="mb-1" />
              {!loading && " Send message"}
              {loading && (
                <>
                  <Spinner
                    as="span"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;
                  <span> Message sending...</span>
                </>
              )}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
}
