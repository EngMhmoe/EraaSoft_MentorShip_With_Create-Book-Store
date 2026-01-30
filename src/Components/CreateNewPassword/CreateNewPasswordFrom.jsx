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
                  placeholder="Confirm Password"
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
              <label htmlFor="Remember">Remember me</label>
            </div>
          </div>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* submit */}
          <div>
            <button
              type="submit"
              className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25"
            >
              Reset password
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
