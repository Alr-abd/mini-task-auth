"use client";
import { Formik, Form } from "formik";
import React, { useEffect, useRef } from "react";
import FormInput from "./FormInput";
import { loginInitialValue, LoginSchema } from "@/schema/LoginSchema";
import styles from "@/styles/auth/auth.module.scss";
import { useAuth } from "@/context/contextAuth";
function LoginFormContainer() {
  const { login } = useAuth();
  const phoneNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    phoneNumber.current?.focus();
  }, []);

  return (
    <Formik
      initialValues={loginInitialValue}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        await login(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.login_form}>
          <FormInput placeholder="Phone number" ref={phoneNumber} name="phoneNumber" errors={errors} touched={touched} />
          <FormInput placeholder="Password" name="password" errors={errors} touched={touched} />
          <button className={styles.login_form_submit_btn} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginFormContainer;
