import React from "react";

export default function FootLogo({ t }) {
  return (
    <>
      <section className="flex items-center gap-2">
        <img src="../../public/images/img1.png" alt="logo" className="" />
        {/*  */}
        <h1 className="text-[#D9176C] sm:text-xl text-shadow-sm text-shadow-red-950 ">
          {t("Bookshop")}
        </h1>
      </section>
    </>
  );
}
