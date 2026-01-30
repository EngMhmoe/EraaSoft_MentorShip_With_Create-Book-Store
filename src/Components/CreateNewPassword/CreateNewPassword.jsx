//import Components
import CreateNewPasswordHeader from "./CreateNewPasswordHeader";
import CreateNewPasswordFrom from "./CreateNewPasswordFrom";

//import react-router Links
import { Link } from "react-router-dom";

export default function CreateNewPassword() {
  return (
    <>
      {" "}
      <section className="pt-100 mb-40 sm:mx-0 mx-5 flex justify-center">
        <div className="w-140">
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
