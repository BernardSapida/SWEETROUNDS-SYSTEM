import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Swal from "sweetalert2";
import { useRef } from "react";
import axios from "axios";
import { updatePassword } from "@/helpers/accounts";

export default function ContactForm(props: any) {
  const { user } = props;
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (notEmptyInputs()) {
      const response = await updatePassword(
        user?.id,
        password.current?.value,
        confirmPassword.current?.value
      );

      if (response.success) {
        resetForm();
        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
          text: "Your password updated successfully",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Password",
          text: response.message,
        });
      }
    }
  };

  const notEmptyInputs = () => {
    return (
      password.current?.value != "" && confirmPassword.current?.value != ""
    );
  };

  const resetForm = () => {
    const form = document.getElementById("form") as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="rounded border p-3 mb-2">
      <Form onSubmit={handleSubmit} id="form">
        <FloatingLabel className="mb-3 w-100" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={password}
            required
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3 w-100" label="Confirm Password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            ref={confirmPassword}
            required
          />
        </FloatingLabel>
        <Button type="submit" className="d-block ms-auto" variant="dark">
          Update Password
        </Button>
      </Form>
    </div>
  );
}
