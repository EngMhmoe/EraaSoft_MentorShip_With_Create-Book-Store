//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import LoginFaceBookANDGoogle from "../UI/LoginFaceBookANDGoogle";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <>
      {" "}
      <section className="pt-95 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component Img */}
          <Img size={84.5} />

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

              {/* Component Link Account AND code */}
              <LinkAccountANDcode
                des={"Already have an Account?"}
                NameLink={"Login"}
                link={"/loginIn"}
              />
            </div>

            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}
            {/* /////////////////////////////////// */}

            {/* Component Login FaceBook AND Google */}
            <LoginFaceBookANDGoogle
              NameGoogle={"Sign Up Google"}
              NameFaceBook={"Sign up Facebook"}
            />
          </div>

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
