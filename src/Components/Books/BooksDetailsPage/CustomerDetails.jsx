import { Link } from "react-router-dom";

//import Imgs
import img1 from "../../../../public/images/img25.png";
import img2 from "../../../../public/images/img36.png";
import img3 from "../../../../public/images/img37.png";
import img4 from "../../../../public/images/img38.png";
import img5 from "../../../../public/images/img39.png";
// import img6 from "../../../../public/images/img40.png";
import img7 from "../../../../public/images/img41.png";
import img8 from "../../../../public/images/img13.png";
import img9 from "../../../../public/images/img42.png";

//import Icons
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";

export default function CustomerDetails() {
  //State Counter
  const [Counter, setCounter] = useState(1);

  return (
    <>
      {/* Section Screen ALL  */}
      <section className="container-Cart w-full  cursor-pointer">
        <a
          href="#"
          class="flex Cart   w-full  bg-neutral-primary-soft border-default rounded-base  "
        >
          {/* Card Imgs */}
          <img
            className="img h-auto max-w-lg md:w-90 sm:w-60 w-90 m-auto transition-all duration-300 rounded-base  hover:blur-none"
            src={img1}
            alt="image description"
          />

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Card Body */}
          <div class="flex flex-col gap-10 w-full md:px-4  leading-normal">
            {/* (1) */}
            {/* Name , description , Author&&..&&..&&..&&.. , Links */}
            <div className="flex lg:flex-row flex-col justify-between">
              {/* Name , description , Author&&..&&..&&..&&..*/}
              <section className="flex lg:mt-0 mt-7  flex-col gap-3">
                <h5 class=" text-2xl font-bold tracking-tight text-(--color-textColor1)">
                  Rich Dad And Poor Dad
                </h5>
                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}
                <p class=" text-body xl:max-w-190 lg:max-w-140 md:max-w-full font-normal">
                  In today’s fast-paced digital landscape, fostering seamless
                  collaboration among Developers and IT Operations. In today’s
                  fast-paced digital landscape, fostering seamless collaboration
                  among Developers and IT Operations.
                </p>
                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}
                <div className="flex items-center flex-wrap gap-7 mt-2">
                  <h3 className=" font-normal text-[16px]">
                    Author:{" "}
                    <div className="font-bold text-(--color-textColor1)">
                      Robert T.Kiyosaki
                    </div>
                  </h3>
                  {/*  */}
                  <h3 className="font-normal text-[16px]">
                    Year{" "}
                    <div className="font-bold text-(--color-textColor1)">
                      1997
                    </div>
                  </h3>
                  {/*  */}
                  <h3 className="font-normal text-[16px]">
                    Book{" "}
                    <div className="font-bold text-(--color-textColor1)">
                      1 Of 1
                    </div>
                  </h3>
                  {/*  */}
                  <h3 className="font-normal text-[16px]">
                    Pages{" "}
                    <div className="font-bold text-(--color-textColor1)">
                      336
                    </div>
                  </h3>
                  {/*  */}
                  <h3 className="font-normal text-[16px]">
                    Language{" "}
                    <div className="font-bold text-(--color-textColor1)">
                      English
                    </div>
                  </h3>
                </div>
              </section>
              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}
              {/* Links */}

              {/* Screen ALL */}
              <section className="flex lg:mt-0 mt-7 ms-auto  items-center   h-fit gap-8">
                <div className="flex  items-center  h-fit gap-3">
                  <Link
                    to="#"
                    target="_blank"
                    className="hover:bg-[#D9176C]  rounded-full duration-1000 hover:scale-120 w-6 h-6"
                  >
                    <img src={img2} alt="" />
                  </Link>
                  {/*  */}
                  <Link
                    to="#"
                    className=" p-1.5 rounded-full duration-1000 hover:scale-120"
                  >
                    <img src={img3} alt="" />
                  </Link>
                  {/*  */}
                  <Link
                    to="#"
                    className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120 bg-black h-fit"
                  >
                    <img src={img4} alt="" />
                  </Link>
                  {/*  */}
                  <Link
                    to="#"
                    className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120 bg-green-500 h-fit"
                  >
                    <img src={img5} alt="" />
                  </Link>
                </div>
              </section>
              {/* ////////////////// */}
              {/* ////////////////// */}
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* (2) */}
            {/* Review && .. */}
            <div className="flex sm:flex-none flex-wrap  items-center justify-between">
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
                    <div className="mask mask-star" aria-label="5 star"></div>
                  </div>
                  {/* /////////////////////// */}
                  <p className="text-black/50">(210 Review)</p>
                </div>
                {/* /////////////////////// */}
                <p>
                  <h3 className="font-normal text-[16px]">
                    Rate:{" "}
                    <span className="font-bold  text-(--color-textColor1)">
                      {/* {Rec.rate} */}
                      4.2
                    </span>
                  </h3>
                </p>
              </div>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <div className="ms-auto flex xl:flex-row  flex-col flex-wrap   items-center justify-end   gap-3">
                <section className="flex items-center flex-wrap gap-4">
                  <button className="btn  md:mx-0 mx-auto btn-outline cursor-auto text-[#25D994]">
                    <img src={img7} />
                    {/*  */}
                    In Stock
                  </button>
                  {/*  */}
                  <button className="btn  md:mx-0 mx-auto btn-outline cursor-auto  text-black/60">
                    <img src={img8} className="w-5" />
                    Free Shipping Today
                  </button>
                </section>

                {/*  */}

                <section className="ms-auto">
                  <button className="btn  md:mx-0 mx-auto btn-outline cursor-auto btn-warning">
                    25% Discount code: Ne212
                  </button>
                </section>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* (3) */}
            {/* Price && Counter && Add To Card */}
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <section className="flex  me-auto   sm:mb-2 mb-10   items-center justify-end   gap-2">
                <h1 className="text-black/50 text-[17px] line-through">
                  $10.00
                </h1>
                {/*  */}
                <h1 className="font-bold text-[26px]">
                  $<span className="text-(--color-textColor1)">40.00</span>
                </h1>
              </section>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <section className="font-bold flex items-center gap-10">
                {/* Counter */}
                <section className="flex items-center gap-6">
                  <button
                    onClick={() => {
                      Counter > 0 && setCounter(Counter - 1);
                    }}
                    className="rounded-full btn  btn-error text-white text-4xl text-center flex items-center justify-center h-8 w-5 pb-2"
                  >
                    -
                  </button>

                  <h1 className=" font-bold text-2xl">{Counter}</h1>

                  <button
                    onClick={() => {
                      Counter < 10 && setCounter(Counter + 1);
                    }}
                    className="rounded-full btn  btn-error text-white text-3xl text-center flex items-center justify-center h-8 w-5 pb-1"
                  >
                    +
                  </button>
                </section>

                {/* //////////////////////////// */}
                {/* //////////////////////////// */}

                <div className="card-actions flex  justify-center items-center gap-4">
                  <button className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit rounded-md py-2 px-4 text-xl cursor-pointer hover:scale-107 duration-1500">
                    <span className="">Add To Cart</span>
                    {/*  */}
                    <FaCartArrowDown />
                  </button>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  <div className="flex  border rounded-md bg-black/5 p-1 border-(--color-textColor1) text-(--color-textColor1)">
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
              </section>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* (4) */}
            {/* imgs */}
          </div>
        </a>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <section className=" mt-7 flex items-center  gap-4">
          <img
            className="h-30 w-20 transition-all duration-300  hover:blur-[0px]"
            src={img1}
            alt="image description"
          />

          {/*  */}

          <img
            className="h-30 w-20 transition-all duration-300  blur-[2px] hover:blur-none"
            src={img9}
            alt="image description"
          />

          {/*  */}

          <img
            className="h-30 w-20 transition-all duration-300 blur-[2px] hover:blur-none"
            src={img1}
            alt="image description"
          />
        </section>
      </section>
    </>
  );
}
