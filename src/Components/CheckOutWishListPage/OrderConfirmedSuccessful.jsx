//import lottie-react
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/animations/Check okey done.json";
import { Link } from "react-router-dom";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function OrderConfirmedSuccessful() {
  //value ar
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex justify-center items-center h-dvh text-center bg-black">
        <div className="flex flex-col bg-white  border border-gray-200 shadow-md shadow-white rounded-2xl pt-15 pb-10 sm:w-fit w-full mx-5">
          <Lottie
            className="w-25 m-auto"
            loop="false"
            animationData={groovyWalkAnimation}
          />
          {/* //////////////////////////////////// */}
          {/* //////////////////////////////////// */}
          {/* //////////////////////////////////// */}
          <div className="flex flex-col gap-10">
            {" "}
            <div className="sm:px-35">
              <h1 className="font-bold text-[24px] text-[#d16896]">
                !{t("Order Successful")}
              </h1>

              <p className="text-[15px] text-gray-600">
                {t("Your order has been confirmed")}
              </p>
            </div>
            {/* //////////////////////////////////// */}
            {/* //////////////////////////////////// */}
            {/* //////////////////////////////////// */}
            <div className="sm:mx-15 mx-10">
              <Link to={"/"}>
                {" "}
                <button className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25">
                  {t("Finish")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
