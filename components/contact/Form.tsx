import { Formik } from "formik";
import { useState } from "react";

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

export default function ContactForm() {
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} id="contactForm">
            <div className="d-flex justify-content-between gap-3">
              <Field
                type="text"
                name="name"
                label="Name"
                handleChange={handleChange}
                value={values.name}
                loading={loading}
              />
              <Field
                type="text"
                name="email"
                label="Email"
                handleChange={handleChange}
                value={values.email}
                loading={loading}
              />
            </div>
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
            <Button
              type="submit"
              className="d-block ms-auto"
              variant="primary"
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
          </Form>
        )}
      </Formik>
    </>
  );
}
