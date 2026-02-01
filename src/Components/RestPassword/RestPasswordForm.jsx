//import Components
import InputFieldCode from "./InputFieldCode";
//import Components UI
import InputSubmit from "../UI/InputSubmit";

//import Libraries Formik
import { Form, Formik } from "formik";

//import Libraries Formik
import { useNavigate } from "react-router-dom";

export default function RestPasswordForm() {
  //navigate
  const navigate = useNavigate();

  async function handleOnSubmit(Values) {
    try {
      console.log(Values);
      navigate("/Create-New-Password");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik
      initialValues={{ num1: "", num2: "", num3: "", num4: "" }}
      onSubmit={handleOnSubmit}
    >
      <Form className="w-full">
        <div className="w-78 m-auto flex flex-col gap-10 font-bold">
          {/* Component InputFieldCode */}
          <InputFieldCode />

          {/* /////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////// */}

          {/* Component Input Submit */}
          <InputSubmit name={"Reset password"} />
        </div>
      </Form>
    </Formik>
  );
}
