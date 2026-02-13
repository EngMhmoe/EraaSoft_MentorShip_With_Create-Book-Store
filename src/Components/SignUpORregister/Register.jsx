//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import LoginFaceBookANDGoogle from "../UI/LoginFaceBookANDGoogle";
import RegisterForm from "./RegisterForm";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function Register() {
  //
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <section className="pt-50 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component Img */}
          <Img size={38} />

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

          <div className="mt-5 flex flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component SignUpForm */}
              <RegisterForm t={t} />

              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}

              {/* Component Link Account AND code */}
              <LinkAccountANDcode
                des={`${t("Already have an Account")}?`}
                NameLink={`${t("Login In")}`}
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
              NameGoogle={t("Sign Up Google")}
              NameFaceBook={t("Sign Up Facebook")}
            />
          </div>

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
