import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { ChangeEvent, ElementType } from "react";
import { ErrorMessage } from "formik";

export default function TextArea({
  as,
  name,
  label,
  value,
  handleChange,
  loading,
}: {
  as: ElementType<any> | undefined;
  name: string;
  label: string;
  value: string | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  loading: boolean;
}) {
  return (
    <FloatingLabel className="mb-3 w-100" label={label}>
      <Form.Control
        as={as}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={label}
        style={{ height: "150px" }}
        disabled={loading}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-danger lh-0 my-0"
      />
    </FloatingLabel>
  );
}
