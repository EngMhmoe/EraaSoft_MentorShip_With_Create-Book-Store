//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import LoginFaceBookANDGoogle from "../UI/LoginFaceBookANDGoogle";
import LoginHeader from "./LoginHeader";
import LoginInForm from "./LoginInForm";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function Login() {
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
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

          {/* Component LoginHeader */}
          <LoginHeader t={t} />

          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}

          <div className="mt-5 flex  flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component LoginInForm */}
              <LoginInForm t={t} />

              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////// */}

              {/* Component Link Account AND code */}
              <LinkAccountANDcode
                des={`${t("Don't have an account")}?`}
                NameLink={`${t("Sign Up")}`}
                link={"/signUp"}
              />
            </div>

            {/* Component Login FaceBook AND Google */}
            <LoginFaceBookANDGoogle
              NameGoogle={t("Login In Google")}
              NameFaceBook={t("Login In Facebook")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
