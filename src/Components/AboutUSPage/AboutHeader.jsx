import BlurText from "../../ReactBits/BlurText";

export default function AboutHeader({ t }) {
  return (
    <section className="bg-black/50 h-150 pt-20 absolute z-2  w-full flex justify-center items-center text-white">
      <header className="flex flex-col text-center gap-4">
        <h1 className="font-bold sm:text-[40px] text-4xl  flex justify-center ">
          <BlurText
            text={t("About Bookshop")}
            delay={80}
            // animateBy="letters"
            direction="top"
            className=" text-center"
          />
        </h1>

        {/* //////////////////////////////// */}
        {/* //////////////////////////////// */}

        <p className="sm:text-[18px] max-w-[600px] px-5 sm:px-0 ">
          <BlurText
            text={t(
              "We are a passionate bookshop dedicated to connecting readers with knowledge and inspiration. Our carefully curated collection offers a wide range of books for all interests and ages, combined with a smooth shopping experience, competitive prices, and customer-focused service. Our mission is to be your go-to destination for discovering stories, ideas, and the joy of reading.",
            )}
            delay={20}
            // animateBy="letters"
            direction="bottom"
            className=" text-center flex justify-center"
          />
        </p>
      </header>
    </section>
  );
}
