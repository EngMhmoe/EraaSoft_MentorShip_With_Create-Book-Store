//import Components
import Img from "../UI/Img";
import CreateNewPasswordHeader from "./CreateNewPasswordHeader";
import CreateNewPasswordFrom from "./CreateNewPasswordFrom";

export default function CreateNewPassword() {
  return (
    <>
      {" "}
      <section className="pt-95 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
          {/* Component Img */}
          <Img size={84.5} />
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* Component CreateNewPasswordHeader */}
          <CreateNewPasswordHeader />
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////// */}
          <div className="mt-5 flex flex-col gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              {/* Component SignUpForm */}
              <CreateNewPasswordFrom />
            </div>
          </div>
          {/* /////////////////////////////////// */}
          {/* /////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
