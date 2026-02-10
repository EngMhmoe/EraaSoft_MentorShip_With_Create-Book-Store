import { ErrorMessage, Field, Form, Formik } from "formik";

//import Libraries Yupreg
import * as Yup from "yup";

//import Components UI
// import InputEmail from "../UI/InputEmail";

export default function FormCheckOut() {
  //function signUpSchema
  const signUpSchema = Yup.object({
    name: Yup.string().required("Name is required!").min(3).max(25),

    Phone: Yup.string().required("Phone Number is required!").max(11),

    email: Yup.string()
      .required("Email is required!")
      .email("Please enter a valid email"),

    ZipCode: Yup.string().required("ZipCode Number is required!").max(5),
  });

  return (
    <section className="padding bg-white border-2 border-black/10  rounded-[20px] shadow p-10 flex flex-col justify-center xl:items-start  lg:items-center gap-10">
      {/* title */}
      <h1 className="font-semibold text-[18px] w-full text-(--color-textColor1)">
        Shipping information
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      {/* Form */}
      <Formik
        initialValues={{
          name: "",
          Phone: "",
          email: "",
          City: "",
          State: "",
          ZipCode: "",
          Address: "",
        }}
        validationSchema={signUpSchema}
      >
        <Form className="flex flex-col flex-wrap gap-6 xl:w-full">
          {/* section User Name AND Phone */}
          <section className="flex flex-row sm:flex-nowrap flex-wrap gap-4">
            {/* User Name */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                Name
              </label>
              {/*  */}
              <Field
                name="name"
                id="Name"
                type="text"
                placeholder="user Name"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />

              {/* /////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////// */}

              {/* Alert Error */}
              <ErrorMessage
                name="name"
                component={"p"}
                className="text-red-500 text-start"
              />
            </div>

            {/* \/\/\/\/\/\/\/\/\/\//\/\/\/\ */}

            {/* Phone */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                Phone
              </label>
              {/*  */}
              <Field
                name="Phone"
                id="Phone"
                type="text"
                placeholder="Phone Number"
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

          {/* section Email AND City */}
          <section className="flex flex-row sm:flex-nowrap flex-wrap gap-4">
            {/* Email */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                Email
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

            {/* \/\/\/\/\/\/\/\/\/\//\/\/\/\ */}

            {/* City */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                City
              </label>
              {/*  */}
              <Field
                name="City"
                id="City"
                type="text"
                placeholder="City"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />
            </div>
          </section>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* section State AND Zip */}
          <section className="flex flex-row sm:flex-nowrap flex-wrap gap-4">
            {/* State */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                State
              </label>
              {/*  */}
              <Field
                name="State"
                id="State"
                type="email"
                placeholder="State"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />
            </div>

            {/* \/\/\/\/\/\/\/\/\/\//\/\/\/\ */}

            {/* Zip */}
            <div className="flex flex-col w-full gap-2.5">
              <label htmlFor="#" className="font-normal text-[14px]">
                Zip
              </label>
              {/*  */}
              <Field
                name="ZipCode"
                id="ZipCode"
                type="text"
                placeholder="Zip Code"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />

              {/* /////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////// */}

              {/* Alert Error */}
              <ErrorMessage
                name="ZipCode"
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
                Address
              </label>
              {/*  */}
              <Field
                name="Address"
                id="Address"
                type="text"
                placeholder="Address"
                className=" border border-black/30 outline-(--color-textColor1) rounded-[8px] h-13.5  p-4 font-normal text-[16px]"
              />
            </div>
          </section>
        </Form>
      </Formik>
    </section>
  );
}
