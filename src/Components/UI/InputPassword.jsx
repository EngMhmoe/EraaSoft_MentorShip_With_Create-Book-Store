//import Libraries Formik
import { ErrorMessage, Field } from "formik";

export default function InputPassword({ t }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="Password" className="text-[18px] font-semibold">
        {t("Password")}
      </label>

      {/* /////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////// */}

      <div className=" relative">
        <Field
          name="password"
          id="Password"
          type="text"
          placeholder={t("Enter Password")}
          className="bg-white w-full border border-black/20 rounded-lg px-4 py-3"
        />

        {/* /////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////// */}

        {/* Alert Error */}
        <ErrorMessage
          name="password"
          component={"p"}
          className="text-red-500 text-start"
        />

        {/* /////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////// */}

        <img
          src="../../public/images/img3.png"
          alt="icon"
          className=" absolute top-[50%] transform translate-y-[-50%] right-0 pe-4"
        />
      </div>
    </div>
  );
}
