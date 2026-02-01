//import Components UI
import InputPassword from "../UI/InputPassword";
import InputConfirmPassword from "../UI/InputConfirmPassword";
import InputCheckBox from "../UI/InputCheckBox";
import InputSubmit from "../UI/InputSubmit";

//import Libraries Formik
import { ErrorMessage, Field, Form, Formik } from "formik";

//import Libraries Yup
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

export default function CreateNewPasswordFrom() {
  //Navigate
  const Navigate = useNavigate();

  //Function handleSignUp
  async function handleSignUp(data) {
    try {
      //Navigate to loginIn Page
      Navigate("/Password-Success");

      //Data Sign Up
      //   const SignUpData = {
      //     password: data.password,
      //     password_confirmation: data.password_confirmation,
      //   };

      //   const responsive = await axios.post(
      //     "https://bookstore.eraasoft.pro/api/register",
      //     SignUpData,
      //   );

      //   console.log(SignUpData);
      //   console.log(responsive);
    } catch (err) {
      console.log(err);
    }
  }

  //function signUpSchema
  const signUpSchema = Yup.object({
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
          password: "",
          password_confirmation: "",
          isRemember: false,
        }}
        //\/\/\/\/\\/\/\/\/\/\//
        onSubmit={handleSignUp}
        //\/\/\/\/\\/\/\/\/\/\//
        validationSchema={signUpSchema}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
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
            <InputCheckBox name={"Remember me"} />
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* Component Input Submit */}
          <InputSubmit name={"Reset password"} />
        </Form>
      </Formik>
    </>
  );
}
