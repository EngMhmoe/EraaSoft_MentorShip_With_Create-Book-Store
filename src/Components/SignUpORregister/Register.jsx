//import Components
import RegisterForm from "./RegisterForm";

//import react-router Links
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      {" "}
      <section className="pt-100 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

          <div className="mt-5 flex flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component SignUpForm */}
              <RegisterForm />

              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}

              <div className="flex gap-2 justify-center">
                <p>Already have an Account?</p>
                {/*  */}
                <Link to="/loginIn" className="text-[#D9176C]">
                  Login
                </Link>
              </div>
            </div>

            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}

            <div className="flex flex-col gap-6 ">
              <p className="m-auto">or</p>

              <div className="flex flex-col gap-3">
                <button className="btn hover:bg-white-80 bg-white text-black w-full shadow rounded-[8px] py-[12px]">
                  <img src="../../public/images/img4.png" alt="" />
                  Sign up With Google
                </button>

                <button className="btn hover:bg-white-80 bg-white text-black w-full shadow rounded-[8px] py-[12px]">
                  <img src="../../public/images/img5.png" alt="" />
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
