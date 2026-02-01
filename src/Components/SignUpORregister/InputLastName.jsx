//import Libraries Formik
import { ErrorMessage, Field } from "formik";

export default function InputLastName() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor="LastName" className="text-[18px] font-semibold">
        Last Name
      </label>

      <Field
        name="last_name"
        id="LastName"
        type="text"
        placeholder="Smith"
        className="bg-white w-full  border border-black/20 rounded-lg px-4 py-3"
      />

      {/* Alert Error */}
      <ErrorMessage
        name="last_name"
        component={"p"}
        className="text-red-500 text-start"
      />
    </div>
  );
}
