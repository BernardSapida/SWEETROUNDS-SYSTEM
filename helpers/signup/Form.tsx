import * as Yup from "yup";
import { validPassword } from "../accounts/PasswordForm";

export const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .required("Firstname is required")
    .min(2, "Firstname is too short"),
  lastname: Yup.string()
    .required("Lastname is required")
    .min(2, "Lastname is too short"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .test((value, ctx) => {
      const response = validPassword(value);

      if (response != true) {
        return ctx.createError({
          message: response.message,
        });
      }
      return true;
    }),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .test(function (value, ctx) {
      if (value != this.parent.password) {
        return ctx.createError({
          message: "Password and confirm password didn't matched",
        });
      }

      return true;
    }),
});
