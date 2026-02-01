//import Imgs
import img1 from "../../../public/images/img17.png";
import img2 from "../../../public/images/img18.png";
import img3 from "../../../public/images/img19.png";
import img4 from "../../../public/images/img20.png";
import img5 from "../../../public/images/img21.png";
import img6 from "../../../public/images/img22.png";
import img7 from "../../../public/images/img23.png";
import img8 from "../../../public/images/img24.png";

export default function BestSeller() {
  //Data Header
  const DataHeader = {
    title: "Best Seller",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum provident laudantium quam quibusdam expedita nostrum facere. Nesciunt placeat?",
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

  return (
    <section className="bg-[#3B2F4A] py-30 flex flex-col gap-20">
      <header className="flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="font-bold text-[18px] text-white">{DataHeader.title}</h1>

        {/* /////////////////////////////// */}

        <p className="font-normal text-white/60 sm:max-w-135 max-w-100">
          {DataHeader.Description}
        </p>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      <div className="carousel carousel-end rounded-box flex justify-between items-center xl:gap-0 gap-7">
        {Data_Slide_Imgs.map((Slide) => {
          return (
            <div className="carousel-item">
              <img src={Slide.img} alt="Drink" />
            </div>
          );
        })}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      <button className="bg-(--color-textColor1) text-white w-fit m-auto rounded-lg py-3 px-20 text-2xl cursor-pointer hover:scale-107 duration-1500">
        {Data_Button}
      </button>
    </section>
  );
}
