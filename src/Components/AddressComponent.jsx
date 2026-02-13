//import Components UI
import Img from "./UI/Img";

//icon
import { FaLocationDot } from "react-icons/fa6";

import { motion } from "motion/react";

import ElectricBorder from "../ReactBits/ElectricBorder";

//import useTranslation i18next
import { useTranslation } from "react-i18next";
import { useUserStore } from "../store/useUserStore";

export default function AddressComponent() {
  //value ar
  const { t } = useTranslation();

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  const DataUser = useUserStore((state) => state.user);
  return (
    <section>
      {" "}
      {/* Component Img */}
      <Img size={38} />
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <motion.div className="pt-70  pb-87 w-fit mx-auto  font-bold text-center">
        <ElectricBorder
          color="#d9176c"
          speed={1}
          chaos={0.15}
          thickness={0}
          style={{ borderRadius: 20 }}
        >
          <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col gap-12 bg-white    rounded-[20px] py-6  md:w-150 sm:w-100 w-51 font-bold">
              <h1 className="text-(--color-textColor1) text-4xl uppercase">
                {t("Address")}
              </h1>

              {/*  */}

              <div className="h-0.5 w-full bg-black/10"></div>

              {/*  */}

              <div className="flex flex-col items-center justify-center gap-5">
                <FaLocationDot className="text-(--color-textColor1) text-4xl" />

                <p className="text-xl">{t(`${DataUser.address}`)}</p>
              </div>
            </div>
          </motion.section>
        </ElectricBorder>
      </motion.div>
    </section>
  );
}
