import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      /^09\d{9}$/,
      "Invalid phone number (must start with 09 and be 11 digits)"
    )
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must not exceed 50 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character (@$!%*?&#)"
    ),
});

export const loginInitialValue = {
  phoneNumber: "",
  password: "",
};
