//import Components UI
import Img from "../UI/Img";
import InputEmail from "../UI/InputEmail";
import InputSubmit from "../UI/InputSubmit";

//import react-router Links
import { useNavigate } from "react-router-dom";

//import Libraries Formik
import { Form, Formik } from "formik";

//import Libraries Yup
import * as Yup from "yup";

export default function ForgetForm() {
  //Navigate
  const Navigate = useNavigate();
  //function handleForgetPassword
  async function handleForgetPassword(data) {
    try {
      //Navigate To Create New Password Page
      Navigate("/Resetpassword");

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  //function ForgetSchema
  const ForgetSchema = Yup.object({
    email: Yup.string()
      .required("You must fill this field!")
      .email("Please enter a valid email"),
  });
  return (
    <>
      {/* <div className="flex justify-center"> */}
      <section className="pt-95 mb-40 sm:mx-0 mx-5 flex justify-center">
        {" "}
        <div className="w-140">
          {/* Component Img */}
          <Img size={84.5} />

          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}

          <header className="mb-5 text-center flex flex-col gap-4">
            <h1 className="text-[#D9176C] font-semibold">Forget Password?</h1>

            <p className="text-[14px] text-[#2222226b]">
              Enter your email to reset your password
            </p>
          </header>
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          <Formik
            initialValues={{ email: "" }}
            onSubmit={handleForgetPassword}
            validationSchema={ForgetSchema}
          >
            <Form className="flex flex-col gap-10 flex-wrap">
              {/* Component Input Email */}
              <InputEmail />

              {/* /////////////////////////////////////////// */}
              {/* /////////////////////////////////////////// */}
              {/* /////////////////////////////////////////// */}

              {/* Component Input Submit */}
              <InputSubmit name={"Send reset Code"} />
            </Form>
          </Formik>
        </div>
      </section>
      {/* </div> */}
    </>
  );
}
