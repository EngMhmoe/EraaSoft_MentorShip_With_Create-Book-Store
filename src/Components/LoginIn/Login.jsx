//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import LoginFaceBookANDGoogle from "../UI/LoginFaceBookANDGoogle";
import LoginHeader from "./LoginHeader";
import LoginInForm from "./LoginInForm";

export default function Login() {
  return (
    <>
      {" "}
      <section className="pt-95 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component Img */}
          <Img size={84.5} />

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

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

              {/* Component Link Account AND code */}
              <LinkAccountANDcode
                des={"Don't have an account?"}
                NameLink={"Signup"}
                link={"/signUp"}
              />
            </div>

            {/* Component Login FaceBook AND Google */}
            <LoginFaceBookANDGoogle
              NameGoogle={"Login In Google"}
              NameFaceBook={"Login In Facebook"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
