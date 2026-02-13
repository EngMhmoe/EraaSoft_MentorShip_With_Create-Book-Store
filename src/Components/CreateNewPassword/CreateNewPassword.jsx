//import Components
import Img from "../UI/Img";
import CreateNewPasswordHeader from "./CreateNewPasswordHeader";
import CreateNewPasswordFrom from "./CreateNewPasswordFrom";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function CreateNewPassword() {
  //
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <section className="pt-50 mb-65.5 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component Img */}
          <Img size={38} />
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* Component CreateNewPasswordHeader */}
          <CreateNewPasswordHeader t={t} />
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          <div className="mt-5 flex flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component SignUpForm */}
              <CreateNewPasswordFrom t={t} />
            </div>
          </div>
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
