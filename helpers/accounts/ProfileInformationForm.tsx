import { User } from "@/types/User";
import * as Yup from "yup";

export const getInitialValues = (user: User) => {
  return {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    address_line_1: user.address_line_1 || "",
    address_line_2: user.address_line_2 || "",
    city: user.city || "",
    contact: user.contact || "",
  };
};

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .required("Firstname is required")
    .min(2, "Firstname must be atleast 2 characters"),
  lastname: Yup.string()
    .required("Lastname is required")
    .min(2, "Lastname must be atleast 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email address is invalid"),
  address_line_1: Yup.string().required("Address line 1 is required"),
  address_line_2: Yup.string().required("Address line 2 is required"),
  city: Yup.string().required("City is required"),
  contact: Yup.string()
    .required("Contact is required")
    .test((value, ctx) => {
      if (!/^(09)[0-9]{9}$/.test(value)) {
        return ctx.createError({
          message: "Contact number is invalid",
        });
      }

      return true;
    }),
});
