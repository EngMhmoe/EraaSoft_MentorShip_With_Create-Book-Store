//import Imgs
import img1 from "../../../../public/images/img25.png";
import img2 from "../../../../public/images/img36.png";
import img3 from "../../../../public/images/img37.png";
import img4 from "../../../../public/images/img38.png";
import img5 from "../../../../public/images/img39.png";
import img6 from "../../../../public/images/img40.png";
import img7 from "../../../../public/images/img41.png";
import img8 from "../../../../public/images/img13.png";
import img9 from "../../../../public/images/img42.png";

//
import { useState } from "react";

export default function ScreenCOLCustmerDeatils() {
  //State Counter
  const [Counter, setCounter] = useState(1);

  return (
    <section className="w-full shadow cursor-pointer">
      <div
        // href="#"
        class="flex flex-col gap-10  w-full  bg-neutral-primary-soft p-6 border-default rounded-base  "
      >
        <div className="flex justify-between gap-1.5 w-full">
          {/* Section Left */}
          {/* Card Imgs */}
          <img
            className="h-auto w-60  transition-all duration-300 rounded-base  hover:blur-none"
            src={img1}
            alt="image description"
          />

          {/* /////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////// */}

          {/* Section Right */}
          <div className=" flex flex-col gap-30 justify-center items-center">
            {" "}
            <section className="flex  relative flex-col  items-end w-full">
              <div className="flex  h-fit w-fit  border rounded-md bg-black/5 p-1 border-(--color-textColor1) text-(--color-textColor1)">
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
              </div>{" "}
              {/* ///////////////////////////// */}
              {/* ///////////////////////////// */}
              {/* ///////////////////////////// */} {/* Screen Col */}
              <div className="fab  cursor-pointer fab-flower absolute z-0 top-14 right-0">
                {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-lg bg-error"
                >
                  <img src={img6} className="w-7" alt="" />
                </div>
                {/* Main Action button replaces the original button when FAB is open */}
                <button className="fab-main-action absolute top-0 right-0 btn btn-circle btn-lg btn-error bg-white  border-black">
                  <img src={img6} alt="" />
                </button>

                {/* //////////////////////////////////// */}

                {/* body */}
                {/* buttons that show up when FAB is open */}
                <a href="#" target="_blank">
                  <button className="btn btn-circle btn-lg ">
                    <img src={img2} alt="" />
                  </button>
                </a>
                {/*  */}
                <a href="" target="_blank">
                  <button className="btn btn-circle btn-lg ">
                    <img src={img3} alt="" />
                  </button>
                </a>
                {/*  */}
                <a href="" target="_blank">
                  <button className="btn btn-circle btn-lg bg-black">
                    <img src={img4} alt="" />
                  </button>
                </a>
                {/*  */}
                <a href="" target="_blank">
                  <button className="btn btn-circle btn-lg bg-green-600">
                    <img src={img5} alt="" />
                  </button>
                </a>
              </div>
            </section>
            {/* //////////////////////////////// */}
            {/* //////////////////////////////// */}{" "}
            <section className=" flex flex-col   gap-4">
              <img
                className="h-30 w-20 transition-all duration-300  blur-[2px] hover:blur-none"
                src={img9}
                alt="image description"
              />

              {/*  */}

              <img
                className="h-30 w-20 transition-all duration-300  hover:blur-[0px]"
                src={img1}
                alt="image description"
              />
            </section>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        {/* Body */}
        <div>
          <section className="flex flex-col gap-7">
            <div>
              {" "}
              <header className="flex items-center justify-between">
                <h5 class="text-[21px] font-bold tracking-tight text-(--color-textColor1)">
                  Rich Dad And Poor Dad
                </h5>
                {/*  */}

                <div class="flex items-center">
                  <p class=" text-sm font-bold text-heading">4.95</p>
                  {/*  */}
                  <svg
                    class="w-5 h-5 text-fg-yellow"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
              </header>
              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}
              <p class=" text-body font-normal">
                In today’s fast-paced digital landscape, fostering seamless
                collaboration among Developers and IT Operations. In today’s
                fast-paced digital landscape, fostering seamless collaboration
                among Developers and IT Operations.
              </p>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex  items-center justify-between gap-6">
              <section className="flex flex-row-reverse items-center   gap-1">
                <h1 className="text-black/50 text-[17px] line-through">
                  $10.00
                </h1>
                {/*  */}
                <h1 className="font-bold text-[20px]">
                  $<span className="text-(--color-textColor1)">40.00</span>
                </h1>
              </section>

              {/*  */}

              <button className="btn   btn-outline cursor-auto text-[#25D994]">
                <img src={img7} />
                {/*  */}
                In Stock
              </button>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <section className="flex flex-col gap-3 items-center">
              {" "}
              <button className="btn w-full   btn-outline cursor-auto  text-black/60">
                <img src={img8} className="w-5" />
                Free Shipping Today
              </button>
              {/*  */}
              <button className="btn  w-full  btn-outline cursor-auto btn-warning">
                25% Discount code: Ne212
              </button>
            </section>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <button className="flex gap-2.5 justify-between  items-center bg-(--color-textColor1) text-white  rounded-md w-full py-1.5 px-2 ">
              {/* Counter */}
              <section className="flex py-1 px-2  rounded-xl items-center gap-3 bg-white text-black">
                <button
                  onClick={() => {
                    Counter > 0 && setCounter(Counter - 1);
                  }}
                  className="rounded-full btn btn-outline  btn-error text-black  text-4xl text-center flex items-center justify-center h-8 w-1 pb-2"
                >
                  -
                </button>

                <h1 className=" font-bold text-xl">{Counter}</h1>

                <button
                  onClick={() => {
                    Counter < 10 && setCounter(Counter + 1);
                  }}
                  className="rounded-full btn btn-outline  btn-error text-black  text-4xl text-center flex items-center justify-center h-8 w-5 pb-2"
                >
                  +
                </button>
              </section>
              {/*  */}
              <span className="">Add To Cart</span>
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
