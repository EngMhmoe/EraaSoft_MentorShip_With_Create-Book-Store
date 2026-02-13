//import Components UI
import Img from "./UI/Img";

//icon
import { IoIosHelpCircle } from "react-icons/io";

import { motion } from "motion/react";

import ElectricBorder from "../ReactBits/ElectricBorder";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function HelpComponent() {
  //value ar
  const { t } = useTranslation();

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
      <div className="pt-70 pb-87 w-full flex justify-center items-center  font-bold text-center">
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
            className="flex w-full justify-center items-center"
          >
            <div className="flex flex-col gap-12 bg-white    rounded-[20px] py-6  md:w-150 sm:w-100 w-51 font-bold">
              <h1 className="text-(--color-textColor1) text-4xl uppercase">
                {t("Help")}
              </h1>

              {/*  */}

              <div className="h-0.5 w-full bg-black/10"></div>

              {/*  */}

              <div className="flex flex-col items-center justify-center gap-5">
                <IoIosHelpCircle className="text-(--color-textColor1) text-4xl" />

                <p className="text-xl">{t("Do you need help")}?</p>
              </div>
            </div>
          </motion.section>
        </ElectricBorder>
      </div>
    </section>
  );
}
