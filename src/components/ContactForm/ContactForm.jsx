import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
  .matches(
    /^\d{3}-\d{2}-\d{2}$/,
    'Phone number must be in the format ***-**-**'
  )
  .required("Required")
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({addContact}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
const newContact = {
  id: nanoid(4),
name: values.name,
number: values.number}
addContact(newContact)
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          />

          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add number
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
