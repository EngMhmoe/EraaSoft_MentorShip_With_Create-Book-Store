import { motion } from "motion/react";
import { useState } from "react";

export default function YourProfileImge() {
  const [Image, SetImage] = useState(
    "../../../public/images/myPhoto-دائره.png",
  );
  return (
    <section className="flex flex-col absolute z-2 xl:top-[30%] top-[50%] w-full  justify-center items-center gap-3 text-white">
      <header className="  flex flex-col text-center gap-4">
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          src={Image}
          className="w-40"
          alt=""
        />

        <input
          type="file"
          onChange={(e) => console.log(e.target.value.toString().slice(12))}
          id="#img"
          className="absolute   h-full w-40 text-transparent  rounded-full"
        />
        {/*  */}
      </header>
      <label
        htmlFor="img"
        className="btn bg-(--color-textColor1) text-white rounded-full cursor-pointer"
      >
        Change Img
      </label>
    </section>
  );
}
