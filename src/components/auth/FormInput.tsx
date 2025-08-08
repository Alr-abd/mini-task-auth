import React, { forwardRef } from "react";
import { Field } from "formik";
import styles from "@/styles/auth/auth.module.scss";
import { ErrorProps } from "@/interfaces/ErrorInterface";
import { LoginFormProps } from "@/interfaces/LoginFormInterface";

const FormInput = forwardRef<HTMLInputElement, ErrorProps<LoginFormProps>>(
  ({ name, errors, placeholder, touched }, ref) => {
    const fieldName = name as keyof LoginFormProps;

    return (
      <div className={styles.login_form_input_container}>
        <Field name={name}>
          {({ field }: any) => (
            <input
              {...field}
              ref={ref}
              className={styles.login_form_input}
              placeholder={placeholder}
            />
          )}
        </Field>

        {errors[fieldName] && touched[fieldName] && (
          <div className={styles.login_form_input_error}>
            {errors[fieldName]}
          </div>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
