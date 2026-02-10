//import Icons
import icon from "../../../public/images/img27.png";
export default function OurMission() {
  //Data Header
  const DataHeader = "Our Mission";

  //Data Our Mission
  const DataOurMission = [
    {
      title: "Quality Selection",
      des: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
      ViewMore: "View More",
    },

    {
      title: "Exceptional Service",
      des: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
      ViewMore: "View More",
    },

    {
      title: "Set Up Stores",
      des: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
      ViewMore: "Soon",
    },
  ];

  return (
    <section>
      <header className="font-bold text-[34px] text-center mb-10 text-(--color-textColor1)">
        <h1>{DataHeader}</h1>
      </header>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <main className="flex flex-wrap items-center justify-center gap-6">
        {DataOurMission.map((data) => {
          return (
            <div className=" flex flex-col gap-6 sm:flex-grow-0 flex-grow-1  shadow-lg shadow-black/30 border border-black/20 w-fit p-6 rounded-xl">
              <h1 className="font-bold text-[22px]">{data.title}</h1>

              <p className="text-black/50 font-normal max-w-90">{data.des}</p>

              <div className="flex items-center gap-2 text-(--color-textColor1)">
                <span>{data.ViewMore}</span>

                <img src={icon} alt="" />
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}
