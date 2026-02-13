//import Libraries Formik
import { Field } from "formik";

export default function InputCheckBox({ name, t }) {
  return (
    <div className="flex items-center gap-2">
      <Field
        name="isRemember"
        type="checkbox"
        id="Remember"
        className="h-4 w-4"
      />

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      <label htmlFor="Remember">{t(`${name}`)}</label>
    </div>
  );
}
