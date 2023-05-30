import * as Yup from "yup";

export const initialValues = {
  password: "",
  confirmPassword: "",
};

export const validationSchema = Yup.object({
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

export const validPassword = (value: string) => {
  const validationMessage = {
    uppercase: "Password should have atleast one uppercase letter",
    lowercase: "Password should have atleast one lowercase letter",
    number: "Password should have atleast one number",
    symbol: "Password should have atleast one symbol",
    length: "Password minimum length is 6 characters",
  };

  if (!/(?=.*[A-Z])/.test(value)) {
    return { message: validationMessage.uppercase };
  } else if (!/(?=.*[a-z])/.test(value)) {
    return { message: validationMessage.lowercase };
  } else if (!/(?=.*\d)/.test(value)) {
    return { message: validationMessage.number };
  } else if (!/(?=.*[@$!%*?&])/.test(value)) {
    return { message: validationMessage.symbol };
  } else if (value.length < 6) {
    return { message: validationMessage.length };
  }

  return true;
};
