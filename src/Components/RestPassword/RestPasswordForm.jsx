//import Hooks React
import { useEffect } from "react";

import { Field, Form, Formik } from "formik";

//import Libraries Formik
import { Link, useNavigate } from "react-router-dom";

//import Components
export default function SendCodingForm() {
  //Function EnterTabInputs
  useEffect(() => {
    const inp1 = document.getElementById("inp1");
    const inp2 = document.getElementById("inp2");
    const inp3 = document.getElementById("inp3");
    const inp4 = document.getElementById("inp4");
    const submit = document.getElementById("submit");

    inp1.focus();

    inp1.addEventListener("keyup", () => {
      inp2.focus();

      inp1.style.backgroundColor = "#aaa9a9";
      inp1.style.color = "white";
    });

    inp2.addEventListener("keyup", () => {
      inp3.focus();

      inp2.style.backgroundColor = "#aaa9a9";
      inp2.style.color = "white";
    });

    inp3.addEventListener("keyup", () => {
      inp4.focus();

      inp3.style.backgroundColor = "#aaa9a9";
      inp3.style.color = "white";
    });

    inp4.addEventListener("keyup", () => {
      submit.click();

      inp4.style.backgroundColor = "#aaa9a9";
      inp4.style.color = "white";
    });
  }, []);

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
    <>
      <section className="pt-100 mb-40 sm:mx-0 mx-5 flex flex-col justify-center items-center text-center">
        <div className="w-120 flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <h1 className="font-semibold text-[#D9176C]">
              Reset your password!
            </h1>

            <p className="text-gray-400">
              Enter the 4 dights code that you received on your email
            </p>
          </header>

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          <Formik
            initialValues={{ num1: "", num2: "", num3: "", num4: "" }}
            onSubmit={handleOnSubmit}
          >
            <Form className="w-full">
              <div className="w-78 m-auto flex flex-col gap-10 font-bold">
                {/* Send Coding */}
                <div className="flex justify-center items-center gap-6">
                  <Field
                    name="num1"
                    id="inp1"
                    type="text"
                    className="border py-4 w-15 rounded-xl text-center text-xl"
                  />

                  <Field
                    name="num2"
                    id="inp2"
                    type="text"
                    className="border py-4 w-15 rounded-xl text-center text-xl"
                  />

                  <Field
                    name="num3"
                    id="inp3"
                    type="text"
                    className="border py-4 w-15 rounded-xl text-center text-xl"
                  />

                  <Field
                    name="num4"
                    id="inp4"
                    type="text"
                    className="border py-4 w-15 rounded-xl text-center text-xl"
                  />
                </div>

                {/* Button */}
                <button
                  id="submit"
                  type="submit"
                  className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25"
                >
                  Reset password
                </button>
              </div>
            </Form>
          </Formik>

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          <div className="flex gap-2 justify-center font-bold">
            <p>Didn’t receive a code?</p>

            <Link to="/Forget" className="text-[#D9176C]">
              Send again
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
