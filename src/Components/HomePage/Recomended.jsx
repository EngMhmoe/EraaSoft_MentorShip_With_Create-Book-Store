//import 2Img
import img1 from "../../../public/images/img23.png";
import img2 from "../../../public/images/img20.png";

//import React-icon
import { FaCartArrowDown } from "react-icons/fa";

export default function Recomended() {
  //Date Header
  const Title = "Recomended For You";

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
      price: "40.00",
    },

    {
      img: img2,
      title: "The Design Of Books",
      Author: "Debbie Berne",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, molestiae voluptates, nihil velit dolor dolorem expedita tempora quia hic sapiente mollitia minus voluptas. Nulla, eaque dolore.?",

      Review: "(210 Review)",
      Rate: "4.2",
      price: "30.00",
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <header>
        <h1 className="font-bold text-[18px] text-(--color-textColor1)">
          {Title}
        </h1>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex sm:flex-row flex-col  justify-center items-center gap-x-6 gap-y-10">
        {DateRecomended.map((Rec) => {
          return (
            <div className="card xl:card-side  bg-base-100 shadow-2xl shadow-black">
              <figure className="my-6 ml-5 xl:w-full ">
                <img src={Rec.img} alt="Album" className=" w-80 mr-5" />
              </figure>

              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}

              <div className="card-body">
                <h2 className="card-title font-bold">{Rec.title}</h2>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <h3 className="font-normal text-[16px]">
                  Author:{" "}
                  <span className="font-bold text-(--color-textColor1)">
                    {Rec.Author}
                  </span>
                </h3>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <p className="font-normal text-[14px] text-gray-800">
                  {Rec.Description}
                </p>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="flex sm:flex-none flex-wrap  items-center justify-between my-3">
                  <div className="flex flex-col gap-2">
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
                          className="mask mask-star"
                          aria-label="5 star"
                        ></div>
                      </div>
                      {/* /////////////////////// */}
                      <p className="text-black/50">{Rec.Review}</p>
                    </div>
                    {/* /////////////////////// */}
                    <p>
                      <h3 className="font-normal text-[16px]">
                        Rate:{" "}
                        <span className="font-bold  text-(--color-textColor1)">
                          {Rec.Rate}
                        </span>
                      </h3>
                    </p>
                  </div>

                  {/* //////////////////////// */}
                  {/* //////////////////////// */}

                  <div className="ms-auto">
                    <h1 className="font-bold text-[26px]">
                      $
                      <span className="text-(--color-textColor1)">
                        {Rec.price}
                      </span>
                    </h1>
                  </div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="card-actions flex justify-center items-center gap-4">
                  <button className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit m-auto rounded-lg py-3 px-10 text-2xl cursor-pointer hover:scale-107 duration-1500">
                    Add To Cart
                    {/*  */}
                    <FaCartArrowDown />
                  </button>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  <div className="border rounded-lg p-3 border-(--color-textColor1) text-(--color-textColor1)">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
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
