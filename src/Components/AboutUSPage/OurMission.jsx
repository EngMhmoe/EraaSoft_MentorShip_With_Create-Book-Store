//import Icons
import icon from "../../../public/images/img27.png";
export default function OurMission({ t }) {
  //Data Header
  const DataHeader = "Our Mission";

  //Data Our Mission
  const DataOurMission = [
    {
      title: "Quality Selection",
      des: "We offer a carefully curated selection of high-quality products to ensure the best possible experience. Every item is chosen to meet strict standards of performance, durability, and true value.",
      ViewMore: "View More",
    },

    {
      title: "Exceptional Service",
      des: "We believe exceptional service builds lasting trust. That’s why we focus on delivering a smooth, professional experience with attention to every detail — from browsing to after-sales support.",
      ViewMore: "View More",
    },

    {
      title: "Set Up Stores",
      des: "We provide complete solutions to help you set up and manage your store with ease. Our flexible tools empower you to launch, grow, and run your business confidently.",
      ViewMore: "Soon",
    },
  ];

  return (
    <section>
      <header className="font-bold text-[34px] text-center mb-10 text-(--color-textColor1)">
        <h1>{t(`${DataHeader}`)}</h1>
      </header>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <main className="flex flex-wrap items-center justify-center gap-6">
        {DataOurMission.map((data) => {
          return (
            <div className=" flex flex-col gap-6 sm:flex-grow-0 flex-grow-1  shadow-lg shadow-black/30 border border-black/20  sm:h-70 h-80 w-fit p-6 rounded-xl">
              <h1 className="font-bold text-[22px]">{t(`${data.title}`)}</h1>

              <p className="text-black/50 font-normal max-w-90">
                {t(`${data.des}`)}
              </p>

              <div className="flex items-center gap-2 text-(--color-textColor1)">
                <span>{t(`${data.ViewMore}`)}</span>

                <img src={icon} alt="" />
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}
