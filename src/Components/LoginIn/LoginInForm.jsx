//import react-router Link
import { Link, useNavigate } from "react-router-dom";

//import Libraries Formik
import { ErrorMessage, Field, Form, Formik } from "formik";

import axios from "axios";

//import Libraries Yup
import * as Yup from "yup";

export default function LoginInForm() {
  //navigate
  const navigate = useNavigate();

  //Function handleSignUp
  async function handleLoginIn(data) {
    try {
      //navigate to Send Reset Coding
      navigate("/");

      //Data Sign Up
      const LoginINData = {
        email: data.email,
        password: data.password,
      };

      const responsive = await axios.post(
        "https://bookstore.eraasoft.pro/api/login``",
        LoginINData,
      );

      console.log(LoginINData);

      console.log(responsive);
    } catch (err) {
      console.log(err);
    }
  }

  //function signUpSchema
  const LoginInSchema = Yup.object({
    email: Yup.string()
      .required("You must fill this field!")
      .email("Please enter a valid email"),
    password: Yup.string().required("Password is required!").min(5).max(30),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          isRemember: false,
        }}
        onSubmit={handleLoginIn}
        validationSchema={LoginInSchema}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="Email" className="text-[18px] font-semibold">
                Email
              </label>

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

            <div className="flex flex-col gap-3">
              <label htmlFor="Password" className="text-[18px] font-semibold">
                Password
              </label>

              <div className=" relative">
                <Field
                  name="password"
                  id="Password"
                  type="text"
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
          </div>
          {/*  */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <Field
                name="isRemember"
                type="checkbox"
                id="Remember"
                className="h-4 w-4"
              />

              <label htmlFor="Remember">Remember me</label>
            </div>

            <Link to="/Forget" className="text-[#D9176C] text-[16px]">
              Forget Password
            </Link>
          </div>
          {/*  */}

          <button
            type="submit"
            className="btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-[8px] py-[12px]"
          >
            Login in
          </button>
        </Form>
      </Formik>
    </>
  );
}
