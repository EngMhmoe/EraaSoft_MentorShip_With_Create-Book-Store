//import Component FormContact
import FormContact from "./FormContact";

//import Icons
import icon1 from "../../../public/images/img31.png";
import icon2 from "../../../public/images/img32.png";
import icon3 from "../../../public/images/img33.png";

//import Lottie animations
import Lottie from "lottie-react";
import message from "../../../public/animations/Smartphone message.json";

export default function ContactUs() {
  //Data Header
  const DataHeader = {
    title: (
      <h1>
        Have a Questions? <br /> Get in Touch
      </h1>
    ),
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  };

  //Data Contact
  const DataContact = [
    {
      icon: icon1,
      data: "01123456789",
    },

    {
      icon: icon2,
      data: "Example@gmail.com",
    },

    {
      icon: icon3,
      data: <p>adipiscing elit. Mauris et ultricies</p>,
    },
  ];

  return (
    <section className="flex justify-evenly flex-wrap-reverse gap-y-30 bg-[#3B2F4A] py-30">
      {/* section Left is Form */}
      <div className="Header flex flex-col gap-15 w-148">
        <header className="flex flex-col gap-4">
          <h1 className="font-bold sm:text-[40px] text-3xl text-white">
            {DataHeader.title}
          </h1>
          {/*  */}
          <p className="text-white/60 font-normal w-fit">{DataHeader.des}</p>
        </header>

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        <FormContact />
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
                <h1 className="text-white/90  font-normal">{Data.data}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
