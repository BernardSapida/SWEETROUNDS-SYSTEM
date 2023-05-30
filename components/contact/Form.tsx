import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { sendMessage } from "@/helpers/contact/Methods";
import { Alert } from "@/utils/alert/swal";
import { useRef } from "react";

export default function ContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (notEmptyInputs()) {
      const response = await sendMessage(
        name.current?.value,
        email.current?.value,
        subject.current?.value,
        message.current?.value
      );

      if (response.success) {
        resetForm();
        Alert(
          "success",
          "Message Sent",
          "Your message successfuly sent, we'll get back to you soon!"
        );
      }
    }
  };

  const notEmptyInputs = () => {
    return (
      name.current?.value != "" &&
      email.current?.value != "" &&
      subject.current?.value != "" &&
      message.current?.value != ""
    );
  };

  const resetForm = () => {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="contactForm">
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="Fullname">
            <Form.Control
              type="text"
              placeholder="Fullname"
              ref={name}
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Email">
            <Form.Control
              type="email"
              placeholder="Email"
              ref={email}
              autoComplete="username"
              required
            />
          </FloatingLabel>
        </div>
        <FloatingLabel className="mb-3" label="Subject">
          <Form.Control
            type="text"
            placeholder="Subject"
            ref={subject}
            required
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "150px" }}
            ref={message}
            required
          />
        </FloatingLabel>
        <Button
          type="submit"
          className="d-block ms-auto"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgb(253, 126, 20) 0%, rgb(250, 82, 82) 100%)",
            border: "none",
            fontWeight: 500,
          }}
        >
          Send message
        </Button>
      </Form>
    </>
  );
}
