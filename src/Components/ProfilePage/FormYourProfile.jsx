import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

//import Libraries Yupreg
import * as Yup from "yup";

export default function FormYourProfile({ DataUser, t }) {
  //Navigate
  const Navigate = useNavigate();

  //function signUpSchema
  const signUpSchema = Yup.object({
    first_name: Yup.string().required("First Name is required!").min(3).max(25),
    last_name: Yup.string().required("Last Name is required!").min(3).max(25),

    Phone: Yup.string().required("Phone Number is required!").max(11),

    email: Yup.string()
      .required("Email is required!")
      .email("Please enter a valid email"),
  });

  function CheckYourProfile() {
    //Navigate to
    Navigate("/");
  }

  return (
    <section className="padding w-184 bg-white border-2 border-black/10  rounded-[20px] shadow p-10 flex flex-col justify-center xl:items-start  gap-10">
      {/* title */}
      <h1 className="font-semibold text-[18px] w-full text-center text-(--color-textColor1)">
        {t("General information")}
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      {/* Form */}
      <Formik
        initialValues={{
          first_name: `${t(DataUser.first_name)}`,
          last_name: `${t(DataUser.last_name)}`,
          email: DataUser.email,
          Phone: `${t(DataUser.phone)}`,
          Address: `${t(DataUser.address)}`,
        }}
        validationSchema={signUpSchema}
        onSubmit={CheckYourProfile}
      >
        <Form className="flex flex-col flex-wrap gap-6 xl:w-full">
          {/* section FirstName AND LastName */}
          <section className="flex flex-row sm:flex-nowrap flex-wrap gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="FirstName" className="font-normal text-[14px]">
                {t("First Name")}
              </label>

              {/* /////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////// */}

              <Field
                name="first_name"
                id="FirstName"
                type="text"
                placeholder={t(`${DataUser.first_name}`)}
                className="border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
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

            {/* \/\/\/\/\/\/\/\/\/\//\/\/\/\ */}

            {/* Last Name */}
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="LastName" className="font-normal text-[14px]">
                {t("Last Name")}
              </label>

              <Field
                name="last_name"
                id="LastName"
                type="text"
                placeholder={t("elwani")}
                className="border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />

              {/* Alert Error */}
              <ErrorMessage
                name="last_name"
                component={"p"}
                className="text-red-500 text-start"
              />
            </div>
          </section>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* section Email */}
          <section>
            {/* Email */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                {t("Email")}
              </label>
              {/*  */}
              <Field
                name="email"
                id="Email"
                type="email"
                placeholder="Example@gmail.com"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
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
          </section>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* section Phone Number */}
          <section>
            {/* Phone */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                {t("Phone Number")}{" "}
              </label>
              {/*  */}
              <Field
                name="Phone"
                id="Phone"
                type="text"
                placeholder={t("Phone Number")}
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />

              {/* /////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////// */}

              {/* Alert Error */}
              <ErrorMessage
                name="Phone"
                component={"p"}
                className="text-red-500 text-start"
              />
            </div>
          </section>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* section Address */}
          <section className="flex flex-row flex-wrap gap-4">
            {/* Address */}
            <div className="flex flex-col  w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                {t("Address")}
              </label>
              {/*  */}
              <Field
                name="Address"
                id="Address"
                type="text"
                placeholder={t("Address")}
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />
            </div>
          </section>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          <button
            type="submit"
            className="btn bg-(--color-textColor1) text-white border rounded-[8px] hover:bg-red-200 hover:text-(--color-textColor1) hover:border-(--color-textColor1) duration-1000 py-4 px-15 w-fit mx-auto mt-10"
          >
            {t("Update information")}
          </button>
        </Form>
      </Formik>
    </section>
  );
}
