//import icons
import icon1 from "../../../public/images/img13.png";
import icon2 from "../../../public/images/img14.png";
import icon3 from "../../../public/images/img15.png";
import icon4 from "../../../public/images/img16.png";

export default function State() {
  //Data
  const Data = [
    {
      icon1: icon1,
      title: "Fast & Reliable Shipping",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },

    {
      icon1: icon2,
      title: "Secure Payment",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },

    {
      icon1: icon3,
      title: "Easy Returns",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },

    {
      icon1: icon4,
      title: "24/7 Customer Support",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
  ];

  return (
    <>
      <section className="flex flex-row flex-wrap justify-between gap-y-10 items-center ">
        {Data.map((date) => {
          return (
            <div className="state flex flex-col gap-4 border w-fit  border-black/20 p-3 rounded-xl shadow">
              {" "}
              {/* icon */}
              <img src={date.icon1} className="w-7.5 h-[27.5px] " />
              {/* /////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////// */}
              {/* title */}
              <h1 className="font-bold text-[18px] text-(--color-textColor1) ">
                {date.title}
              </h1>
              {/* /////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////// */}
              {/* description */}
              <p className="font-normal text-gray-500 max-w-70">{date.des}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
