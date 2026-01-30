//import Libraries Formik
import { ErrorMessage, Field, Form, Formik } from "formik";

import axios from "axios";

//import Libraries Yup
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  //Navigate
  const Navigate = useNavigate();

  //Function handleSignUp
  async function handleSignUp(data) {
    try {
      //Navigate to
      Navigate("/loginIn");

      //Data Sign Up
      const SignUpData = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      };

      // const SignUpData = {
      //   first_name: data.first_name,
      //   last_name: data.last_name,
      //   email: data.email,
      //   updated_at: data.password,
      //   created_at: data.password_confirmation,
      //   id: 101,
      // };

      const responsive = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        SignUpData,
      );

      console.log(SignUpData);
      console.log(responsive);
    } catch (err) {
      console.log(err);
    }
  }

  //function signUpSchema
  const signUpSchema = Yup.object({
    first_name: Yup.string().required("First Name is required!").min(3).max(25),
    last_name: Yup.string().required("Last Name is required!").min(3).max(25),
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter a valid email"),
    password: Yup.string().required("password is required!").min(5).max(30),

    password_confirmation: Yup.string()
      .required("Confirm password is required!")
      .min(5)
      .max(30)
      .oneOf([Yup.ref("password")], "Password must match"),
  });
  return (
    <>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
          isRemember: false,
        }}
        onSubmit={handleSignUp}
        validationSchema={signUpSchema}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            {/* First-Name AND Last-Name */}
            <div className="flex justify-between items-center gap-5">
              {/* first-Name */}
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="FirstName"
                  className="text-[18px] font-semibold"
                >
                  First Name
                </label>
                {/*  */}
                <Field
                  name="first_name"
                  id="FirstName"
                  type="text"
                  placeholder="John"
                  className="bg-white w-full  border border-black/20 rounded-lg px-4 py-3"
                />

                {/* Alert Error */}
                <ErrorMessage
                  name="first_name"
                  component={"p"}
                  className="text-red-500 text-start"
                />
              </div>

              {/* /////////////////////////////////// */}
              {/* /////////////////////////////////// */}
              {/* /////////////////////////////////// */}

              {/* Last-Name */}
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="LastName" className="text-[18px] font-semibold">
                  Last Name
                </label>
                {/*  */}
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
            </div>

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label htmlFor="Email" className="text-[18px] font-semibold">
                Email
              </label>
              {/*  */}
              <Field
                name="email"
                id="Email"
                type="text"
                placeholder="example@gmail.com"
                className="bg-white w-full  border border-black/20 rounded-lg px-4 py-3"
              />

              {/* Alert Error */}
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-red-500 text-start"
              />
            </div>

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* Password */}
            <div className="flex flex-col gap-3">
              <label htmlFor="Password" className="text-[18px] font-semibold">
                Password
              </label>
              {/*  */}
              <div className=" relative">
                <Field
                  name="password"
                  id="text"
                  type="password"
                  placeholder="Enter Password"
                  className="bg-white w-full border border-black/20 rounded-lg px-4 py-3"
                />

                {/* Alert Error */}
                <ErrorMessage
                  name="password"
                  component={"p"}
                  className="text-red-500 text-start"
                />

                <img
                  src="../../public/images/img3.png"
                  alt="icon"
                  className=" absolute top-[50%] transform translate-y-[-50%] right-0 pe-4"
                />
              </div>
            </div>

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* ConfirmPassword */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="ConfirmPassword"
                className="text-[18px] font-semibold"
              >
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

                {/* Alert Error */}
                <ErrorMessage
                  name="password_confirmation"
                  component={"p"}
                  className="text-red-500 text-start"
                />

                <img
                  src="../../public/images/img3.png"
                  alt="icon"
                  className=" absolute top-[50%] transform translate-y-[-50%] right-0 pe-4"
                />
              </div>
            </div>
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          <div className="flex justify-between items-center mb-5">
            {/* checkbox */}
            <div className="flex items-center gap-2">
              {/* checkbox */}
              <Field
                name="isRemember"
                type="checkbox"
                id="Remember"
                className="h-4 w-4"
              />

              {/*  */}
              <label htmlFor="Remember">
                Agree with{" "}
                <span className="text-[#D9176C]">Terms & Conditions</span>
              </label>
            </div>
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* submit */}
          <div>
            <button
              type="submit"
              className="btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-[8px] py-[12px]"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
