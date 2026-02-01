//import Components UI
import InputEmail from "../UI/InputEmail";
import InputPassword from "../UI/InputPassword";
import InputCheckBox from "../UI/InputCheckBox";
import InputSubmit from "../UI/InputSubmit";

//import react-router Link
import { Link, useNavigate } from "react-router-dom";

//import Libraries Formik
import { Form, Formik } from "formik";

import axios from "axios";

//import Libraries Yupreg
import * as Yup from "yup";

export default function LoginInForm() {
  //navigate
  const navigate = useNavigate();

  //Function handleSignUp
  async function handleLoginIn(data) {
    try {
      //Data Sign Up
      const LoginINData = {
        email: data.email,
        password: data.password,
      };

      const responsive = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        LoginINData,
      );

      //navigate to Send Reset Coding
      navigate("/");

      localStorage.setItem("token", responsive.data.data.token);

      console.log(responsive.data.data.token);
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
            {/* Component Input Email */}
            <InputEmail />

            {/* /////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////// */}

            {/* Component Input Password */}
            <InputPassword />
          </div>

          {/* /////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////// */}

          <div className="flex justify-between items-center mb-5">
            {/* Component Input CheckBox */}
            <InputCheckBox name={"Remember me"} />

            {/* /////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////// */}

            <Link to="/Forget" className="text-[#D9176C] text-[16px]">
              Forget Password
            </Link>
          </div>

          {/* /////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////// */}

          {/* Component Input Submit */}
          <InputSubmit name={"Login in"} />
        </Form>
      </Formik>
    </>
  );
}
