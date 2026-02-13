//import icons
import icon1 from "../../../public/images/img13.png";
import icon2 from "../../../public/images/img14.png";
import icon3 from "../../../public/images/img15.png";
import icon4 from "../../../public/images/img16.png";

import { motion } from "motion/react";

export default function State({ t }) {
  //Data
  const Data = [
    {
      icon1: icon1,
      title: "Fast & Reliable Shipping",
      des: "We offer fast and reliable shipping to ensure your order reaches you on time and in perfect condition. Our trusted delivery partners guarantee a smooth and secure shipping experience from checkout to your",
    },

    {
      icon1: icon2,
      title: "Secure Payment",
      des: "Our advanced and secure payment systems are designed to protect your personal and financial information. Shop with complete peace of mind knowing every transaction is fully encrypted and safe.",
    },

    {
      icon1: icon3,
      title: "Easy Returns",
      des: "Your satisfaction matters to us, which is why we provide a simple and flexible return policy. If something doesn’t meet your expectations, returning it is quick, easy, and hassle-free.",
    },

    {
      icon1: icon4,
      title: "24/7 Customer Support",
      des: "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. We’re always here to ensure your experience is smooth, reliable, and stress-free.",
    },
  ];

  return (
    <>
      <section className="flex flex-row flex-wrap justify-between gap-y-10 items-center ">
        {Data.map((date, i) => {
          return (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5 }}
              className="state flex flex-col gap-4 border w-fit h-70  border-black/20 p-3 rounded-xl shadow"
            >
              {" "}
              {/* icon */}
              <img src={date.icon1} className="w-7.5 h-[27.5px] " />
              {/* /////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////// */}
              {/* title */}
              <h1 className="font-bold text-[18px] text-(--color-textColor1) ">
                {t(`${date.title}`)}
              </h1>
              {/* /////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////// */}
              {/* description */}
              <p className="font-normal text-gray-500 max-w-70">
                {" "}
                {t(`${date.des}`)}
              </p>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}
