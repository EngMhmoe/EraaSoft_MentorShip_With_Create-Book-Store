//import Components
import InputFirstName from "./InputFirstName";
import InputLastName from "./InputLastName";
//import Components UI
import InputConfirmPassword from "../UI/InputConfirmPassword";
import InputEmail from "../UI/InputEmail";
import InputPassword from "../UI/InputPassword";
import InputCheckBox from "../UI/InputCheckBox";
import InputSubmit from "../UI/InputSubmit";

//import Libraries Formik
import { Form, Formik } from "formik";

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
      // Navigate("/loginIn");

      //Data Sign Up
      const SignUpData = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      };

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
        validationSchema={signUpSchema}
        onSubmit={handleSignUp}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            {/* First-Name AND Last-Name */}
            <div className="flex justify-between items-center gap-5">
              {/* Component  first-Name */}
              <InputFirstName />

              {/* /////////////////////////////////// */}
              {/* /////////////////////////////////// */}
              {/* /////////////////////////////////// */}

              {/* Component  Last-Name */}
              <InputLastName />
            </div>

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* Component Input Email */}
            <InputEmail />

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* Component Input Password */}
            <InputPassword />

            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////// */}

            {/* Component  ConfirmPassword */}
            <InputConfirmPassword />
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          <div className="flex justify-between items-center mb-5">
            {/* Component Input CheckBox */}
            <InputCheckBox name={"Agree with Terms & Conditions"} />
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* Component Input Submit */}
          <InputSubmit name={"Sign Up"} />
        </Form>
      </Formik>
    </>
  );
}
