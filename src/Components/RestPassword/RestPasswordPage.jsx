//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import RestPasswordForm from "./RestPasswordForm";
import RestPasswordHeader from "./RestPasswordHeader";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function RestPasswordPage() {
  //
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-50 pb-41  sm:mx-0 mx-5 flex flex-col justify-center items-center text-center">
        <div className="w-120 flex flex-col gap-10">
          {/* Component Img */}
          <Img size={38} />

          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* Component RestPasswordHeader */}
          <RestPasswordHeader t={t} />

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          {/* Component RestPasswordForm */}
          <RestPasswordForm t={t} />

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          {/* Component Link Account AND code */}
          <LinkAccountANDcode
            des={`${t("Didn’t receive a code")}?`}
            NameLink={t("Send again")}
            link={"/Forget"}
          />
        </div>
      </section>
    </>
  );
}
