import { motion } from "motion/react";

export default function NavLogo({ scrolllNav, t }) {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.6 }}
          ////////////////////////////
          src="../../public/images/img1.png"
          alt="logo"
          className={scrolllNav ? "bg-(--color-textColor1)" : ""}
        />
        <h1 className="text-[#D9176C] text-2xl  uppercase">{t("Bookshop")}</h1>
      </div>
    </>
  );
}
