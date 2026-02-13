import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

//import Imgs
import img1 from "../../../public/images/img17.png";
import img2 from "../../../public/images/img18.png";
import img3 from "../../../public/images/img19.png";
import img4 from "../../../public/images/img20.png";
import img5 from "../../../public/images/img21.png";
import img6 from "../../../public/images/img22.png";
import img7 from "../../../public/images/img23.png";
import img8 from "../../../public/images/img24.png";

//import ReactBits
import BounceCards from "../../ReactBits/BounceCards";

export default function BestSeller({ t }) {
  //Data Header
  const DataHeader = {
    title: "Best Seller",
    Description:
      "Our top-selling product, trusted and loved by customers for its outstanding quality and exceptional performance. Chosen by thousands, it stands out as the perfect choice for those seeking value, reliability, and a premium experience.",
  };

  //Data Slide Imgs
  const Data_Slide_Imgs = [
    { img: img3 },
    { img: img2 },
    { img: img7 },
    { img: img5 },
    { img: img4 },
    { img: img1 },
    { img: img6 },
    { img: img8 },
  ];

  //Data Button
  const Data_Button = "Shop new";

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  const images = [
    "../../../public/images/img17.png",
    "../../../public/images/img18.png",
    "../../../public/images/img19.png",
    "../../../public/images/img21.png",
    "../../../public/images/img20.png",
    "../../../public/images/img24.png",
    "../../../public/images/img23.png",
    "../../../public/images/img22.png",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const [BounceCardsFlex, setBounceCards] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 480) {
        setBounceCards(true);
        // alert();
      } else {
        setBounceCards(false);
      }
    });
  }, []);

  return (
    <section className="bg-[#3B2F4A] py-30 flex flex-col gap-20">
      <header className="flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="font-bold text-[18px] text-white">
          {t(`${DataHeader.title}`)}
        </h1>

        {/* /////////////////////////////// */}

        <p className="font-normal text-white/60 sm:max-w-135 max-w-100">
          {t(`${DataHeader.Description}`)}
        </p>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      <div className="md:hidden carousel carousel-end rounded-box flex justify-between items-center xl:gap-0 gap-7">
        {Data_Slide_Imgs.map((Slide, i) => {
          return (
            <div key={i} className="carousel-item">
              <img src={Slide.img} alt="Drink" />
            </div>
          );
        })}
      </div>

      {BounceCardsFlex === false ? (
        ""
      ) : (
        <section className="md:flex hidden">
          {" "}
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={0}
            containerHeight={370}
            animationDelay={0.4}
            animationStagger={0.2}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover
          />
        </section>
      )}

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      <Link to={"/Books"} className="w-full flex justify-center">
        <button className="bg-(--color-textColor1) text-white w-fit m-auto rounded-lg py-3 px-20 text-2xl cursor-pointer hover:scale-107 duration-1500">
          {t(`${Data_Button}`)}
        </button>
      </Link>
    </section>
  );
}
