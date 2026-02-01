//import Libraries Formik
import { ErrorMessage, Field } from "formik";

export default function InputFirstName() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor="FirstName" className="text-[18px] font-semibold">
        First Name
      </label>

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      <Field
        name="first_name"
        id="FirstName"
        type="text"
        placeholder="John"
        className="bg-white w-full  border border-black/20 rounded-lg px-4 py-3"
      />

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      {/* Alert Error */}
      <ErrorMessage
        name="first_name"
        component={"p"}
        className="text-red-500 text-start"
      />
    </div>
  );
}
