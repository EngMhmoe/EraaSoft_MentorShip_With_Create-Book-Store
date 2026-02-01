//import Libraries Formik
import { ErrorMessage, Field } from "formik";

export default function InputConfirmPassword() {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="ConfirmPassword" className="text-[18px] font-semibold">
        Confirm Password
      </label>
      {/*  */}
      <div className=" relative">
        <Field
          name="password_confirmation"
          id="ConfirmPassword"
          type="text"
          placeholder="Enter Password"
          className="bg-white w-full border border-black/20 rounded-lg px-4 py-3"
        />

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        {/* Alert Error */}
        <ErrorMessage
          name="password_confirmation"
          component={"p"}
          className="text-red-500 text-start"
        />

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        <img
          src="../../public/images/img3.png"
          alt="icon"
          className=" absolute top-[50%] transform translate-y-[-50%] right-0 pe-4"
        />
      </div>
    </div>
  );
}
