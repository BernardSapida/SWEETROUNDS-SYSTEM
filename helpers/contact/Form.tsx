import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  subject: Yup.string()
    .required("Subject is required")
    .min(5, "Subject is too short"),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message is too short"),
});
