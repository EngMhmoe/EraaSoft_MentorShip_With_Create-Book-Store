//import imgs
import img1 from "../../../public/images/img25.png";
import img2 from "../../../public/images/img25.png";
import img3 from "../../../public/images/img26.png";

//import react-icons
import { FaCartArrowDown } from "react-icons/fa";

export default function FlashSale() {
  //Date Header
  const DataHeader = {
    title: "Flash Sale",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, a magnam expedita amet, consectetur adipisicing elit. Incidunt, a magnam.",
  };

  //Date Recomended
  const DateRecomended = [
    {
      img: img1,
      title: "Rich Dad And Poor Dad",
      Author: "Robert Y. Kiyosanki",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestiae voluptates, nihil velit dolor dolorem expedita tempora quia hic sapiente mollitia minus voluptas. Nulla, eaque dolore.?",

      Review: "(180 Review)",
      Rate: "4.2",
      price: "30.00",
      dec: "45.00",
    },

    {
      img: img2,
      title: "The Design Of Books",
      Author: "Debbie Berne",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestiae voluptates, nihil velit dolor dolorem expedita tempora quia hic sapiente mollitia minus voluptas. Nulla, eaque dolore.?",

      Review: "(210 Review)",
      Rate: "4.2",
      price: "25.00",
      dec: "35.00",
    },
  ];

  return (
    <section>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[26px] text-(--color-textColor1)">
            {DataHeader.title}
          </h1>
          {/*  */}
          <p className="font-normal text-gray-500 max-w-[516px]">
            {DataHeader.des}
          </p>
        </div>

        {/* ////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////// */}

        {/* For TSX uncomment the commented types below */}
        <div
          className="text-xl  radial-progress p-4 bg-white text-black border-(--color-textColor1) border-4"
          style={{ "--value": 50 } /* as React.CSSProperties */}
          aria-valuenow={20}
          role="alert"
        >
          30:00:00
        </div>
      </header>

      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="mt-20 flex flex-wrap justify-center items-center gap-5">
        {DateRecomended.map((Rec) => {
          return (
            <div className="card2 card card-side   bg-[#3B2F4A] text-white  shadow-lg">
              <figure>
                <img src={img1} alt="Movie" className="object-contain h-75" />
              </figure>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              <div className="px-4 py-5">
                <h2 className="card-title font-bold text-(--color-textColor1)">
                  {Rec.title}
                </h2>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <h3 className="font-normal text-[16px] text-white/70">
                  Author:{" "}
                  <span className="font-bold text-white">{Rec.Author}</span>
                </h3>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="flex sm:flex-none flex-wrap  items-center justify-between my-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="rating">
                        <div
                          className="mask mask-star bg-orange-400"
                          aria-label="1 star"
                        ></div>
                        {/*  */}
                        <div
                          className="mask mask-star bg-orange-400"
                          aria-label="2 star"
                        ></div>
                        {/*  */}
                        <div
                          className="mask mask-star bg-orange-400"
                          aria-label="3 star"
                        ></div>
                        {/*  */}
                        <div
                          className="mask mask-star bg-orange-400"
                          aria-label="4 star"
                          aria-current="true"
                        ></div>
                        {/*  */}
                        <div
                          className="mask mask-star bg-white"
                          aria-label="5 star"
                        ></div>
                      </div>
                      {/* /////////////////////// */}
                      <p className="text-white/70">{Rec.Review}</p>
                    </div>

                    {/*  */}

                    <h3 className="font-normal text-[16px] ">
                      Rate:{" "}
                      <span className="font-bold  text-(--color-textColor1)">
                        {Rec.Rate}
                      </span>
                    </h3>
                  </div>

                  {/* /////////////////////// */}

                  {/* //////////////////////// */}
                  {/* //////////////////////// */}
                </div>
                <div className="ms-auto  my-2 flex items-center justify-end   gap-2">
                  <h1 className="text-white/70 text-[17px]">${Rec.dec}</h1>
                  <h1 className="font-bold text-[26px]">
                    $<span className="text-white">{Rec.price}</span>
                  </h1>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="my-1 flex flex-col gap-2">
                  <div className="h-3 bg-white/60 rounded-full">
                    <div className="h-3 rounded-full w-40 bg-(--color-textColor1)"></div>
                  </div>

                  {/*  */}

                  <div className="text-white/70">4 books Left</div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className=" w-fit ms-auto cursor-pointer">
                  <div className="border ms-auto rounded-lg p-3 border-(--color-textColor1) bg-(--color-textColor1) text-(--color-textColor1)">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
