import { motion } from "motion/react";

export default function YourProfileImge() {
  return (
    <section className=" absolute z-2 xl:top-[30%] top-[50%] w-full flex justify-center text-white">
      <header className="flex flex-col text-center gap-4">
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          src="../../../public/images/myPhoto-دائره.png"
          className="w-40"
          alt=""
        />
      </header>
    </section>
  );
}
