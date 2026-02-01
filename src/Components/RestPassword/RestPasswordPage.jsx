//import Components
import Img from "../UI/Img";
import LinkAccountANDcode from "../UI/LinkAccountANDcode";
import RestPasswordForm from "./RestPasswordForm";
import RestPasswordHeader from "./RestPasswordHeader";

export default function RestPasswordPage() {
  return (
    <>
      <section className="pt-95 mb-40 sm:mx-0 mx-5 flex flex-col justify-center items-center text-center">
        <div className="w-120 flex flex-col gap-10">
          {/* Component Img */}
          <Img size={84.5} />

          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* /////////////////////////////////////////// */}
          {/* Component RestPasswordHeader */}
          <RestPasswordHeader />

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          {/* Component RestPasswordForm */}
          <RestPasswordForm />

          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////// */}

          {/* Component Link Account AND code */}
          <LinkAccountANDcode
            des={"Didn’t receive a code?"}
            NameLink={"Send again"}
            link={"/Forget"}
          />
        </div>
      </section>
    </>
  );
}
