import React from "react";

export default function AboutHeader() {
  return (
    <section className=" absolute z-2 top-[25%] w-full flex justify-center text-white">
      <header className="flex flex-col text-center gap-4">
        <h1 className="font-bold sm:text-[40px] text-4xl">About Bookshop</h1>

        {/* //////////////////////////////// */}
        {/* //////////////////////////////// */}

        <p className="sm:text-[18px] max-w-[600px] px-5 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </header>
    </section>
  );
}
