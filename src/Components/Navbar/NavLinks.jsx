//import react-router Link
import { Link } from "react-router-dom";

import { motion } from "motion/react";

export default function NavLinks({ t }) {
  return (
    <>
      <div className="flex items-center gap-6.25">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000"
        >
          <Link to="/">{t("Home")}</Link>
        </motion.div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000"
        >
          <Link to="/Books">{t("Books")}</Link>
        </motion.div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000"
        >
          <Link to="/AboutUs">{t("About us")}</Link>
        </motion.div>
      </div>
    </>
  );
}
