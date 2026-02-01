//import Libraries Formik
import { ErrorMessage, Field } from "formik";

export default function InputEmail() {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="Email" className="text-[18px] font-semibold">
        Email
      </label>

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      <Field
        name="email"
        id="Email"
        type="text"
        placeholder="example@gmail.com"
        className="bg-white w-full  border border-black/20 rounded-lg px-4 py-3"
      />

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      {/* Alert Error */}
      <ErrorMessage
        name="email"
        component={"p"}
        className="text-red-500 text-start"
      />
    </div>
  );
}
