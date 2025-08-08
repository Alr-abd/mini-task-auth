import { FormikErrors, FormikTouched } from "formik";

export interface ErrorProps<T> {
    name:string;
    placeholder:string;
    errors:FormikErrors<T>;
    touched:FormikTouched<T>
}

