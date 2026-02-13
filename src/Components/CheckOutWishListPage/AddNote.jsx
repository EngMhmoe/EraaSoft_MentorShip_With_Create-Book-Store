import { motion } from "motion/react";

export default function AddNote({ t }) {
  return (
    <motion.section
      initial={{
        transform: "translateX(-800px)",
      }}
      animate={{
        transform: "translateX(0px)",
      }}
      transition={{ duration: 7 }}
      className="padding bg-white border-2 border-black/10  rounded-[20px] shadow p-10 flex flex-col gap-10"
    >
      {/* title */}
      <h1 className="font-semibold text-[18px] text-(--color-textColor1)">
        {t("Note")}
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      <div className="w-full">
        <textarea
          className="border-2 border-black/10 rounded-[8px] outline-(--color-textColor1) duration-1000 py-4 px-5 w-full h-45 "
          placeholder={t("Add Note")}
        ></textarea>
      </div>
    </motion.section>
  );
}
