//import Component FormContact
import FormContact from "./FormContact";

//import Icons
import icon1 from "../../../public/images/img31.png";
import icon2 from "../../../public/images/img32.png";
import icon3 from "../../../public/images/img33.png";

//import Lottie animations
import Lottie from "lottie-react";
import message from "../../../public/animations/Smartphone message.json";

export default function ContactUs({ t }) {
  //Data Header
  const DataHeader = {
    title: "Have a Questions? Get in Touch",
    des: "We’d love to hear from you! Our team is always ready to answer your questions and provide the support you need. Feel free to get in touch — we’re here to help.",
  };

  //Data Contact
  const DataContact = [
    {
      icon: icon1,
      data: "01123456789",
    },

    {
      icon: icon2,
      data: "lwanym144@gmail.com",
    },

    {
      icon: icon3,
      data: "adipiscing elit. Mauris et ultricies",
    },
  ];

  return (
    <section className="flex justify-evenly flex-wrap-reverse gap-y-30 bg-[#3B2F4A] py-30">
      {/* section Left is Form */}
      <div className="Header flex flex-col gap-15 w-148">
        <header className="flex flex-col gap-4">
          <h1 className="font-bold sm:text-[40px] text-3xl text-white sm:text-start text-center">
            {t(`${DataHeader.title}`)}
          </h1>
          {/*  */}
          <p className="text-white/60 font-normal w-fit sm:text-start text-center">
            {t(`${DataHeader.des}`)}
          </p>
        </header>

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        <FormContact t={t} />
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      {/* section right is contact */}
      <div className="flex lg:w-fit w-full lg:flex-col sm:flex-row flex-col justify-around lg:items-start items-center  gap-10">
        <Lottie animationData={message} className="sm:w-100 w-80" />

        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}

        <div className="contact text-white sm:flex  sm:flex-col grid grid-cols-2 gap-y-10 gap-6">
          {DataContact.map((Data) => {
            return (
              <div className="flex items-center gap-3">
                <div className="bg-white font-bold rounded-lg p-3">
                  <img src={Data.icon} className="w-5 h-5" />
                </div>
                {/*  */}
                <h1 className="text-white/90  font-normal">
                  {" "}
                  {t(`${Data.data}`)}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
