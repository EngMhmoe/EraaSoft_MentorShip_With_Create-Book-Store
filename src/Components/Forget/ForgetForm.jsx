//import Components

//import react-router Links
import { useNavigate } from "react-router-dom";

//import Libraries Formik
import { ErrorMessage, Field, Form, Formik } from "formik";

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
      <section className="pt-100 mb-40 sm:mx-0 mx-5 flex justify-center">
        {" "}
        <div className="w-140">
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
              <div className="flex flex-col gap-2 flex-wrap">
                <label htmlFor="Email" className="text-[18px] font-semibold">
                  Email
                </label>

                <Field
                  name="email"
                  id="Email"
                  type="text"
                  placeholder="example@gmail.com"
                  className="bg-white   border border-black/20 rounded-lg px-4 py-3"
                />

                {/*  */}
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="text-red-500"
                />
              </div>

              {/* /////////////////////////////////////////// */}
              {/* /////////////////////////////////////////// */}
              {/* /////////////////////////////////////////// */}

              <button
                type="submit"
                className="btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-[8px] py-[12px]"
              >
                Send reset Code
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      {/* </div> */}
    </>
  );
}
