//import react-icons
import { IoMenuOutline } from "react-icons/io5";

import { motion } from "motion/react";

export default function NavIconMenubar() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <IoMenuOutline />
      </motion.div>
    </>
  );
}
