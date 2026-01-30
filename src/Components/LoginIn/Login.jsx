//import Components
import LoginButton from "./LoginButton";
import LoginHeader from "./LoginHeader";
import LoginInForm from "./LoginInForm";

//import react-router Links
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      {" "}
      <section className="pt-100 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component LoginHeader */}
          <LoginHeader />

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

          <div className="mt-5 flex flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component LoginInForm */}
              <LoginInForm />

              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}

              <div className="flex gap-2 justify-center">
                <p>Don't have an account?</p>
                <Link to="/signUp" className="text-[#D9176C]">
                  Signup
                </Link>
              </div>
            </div>

            {/* Component LoginInForm */}
            <LoginButton />
          </div>
        </div>
      </section>
    </>
  );
}
