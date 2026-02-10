//import Imgs
import { FaCartArrowDown } from "react-icons/fa";
import img1 from "../../../public/images/img25.png";

//import Styling css
import "./styleing.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ALLBooks() {
  //ALL Books
  const Books = [
    {
      category: "Book1",
      img: img1,
      NameBook: "Rich Dad And Poor Dad",
      DescriptionBook:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo",
      CodeDiscount: "Ne212",
      isRating: {
        Rating1: true,
        Rating2: true,
        Rating3: true,
        Rating4: true,
        Rating5: false,
      },
      Review: 210,
      Rate: 4.2,
      Author: "Robert T.Kiyosaki",
      Year: 2026,
      price: "40.00",
      DiscountPrice: "10.00",
    },

    {
      category: "Book2",
      img: img1,
      NameBook: "Rich Dad And Poor Dad",
      DescriptionBook:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo",
      CodeDiscount: "Ne212",
      isRating: {
        Rating1: true,
        Rating2: true,
        Rating3: true,
        Rating4: true,
        Rating5: false,
      },
      Review: 210,
      Rate: 4.2,
      Author: "Robert T.Kiyosaki",
      Year: 2026,
      price: "40.00",
      DiscountPrice: "10.00",
    },

    {
      category: "Book3",
      img: img1,
      NameBook: "Rich Dad And Poor Dad",
      DescriptionBook:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo",
      CodeDiscount: "Ne212",
      isRating: {
        Rating1: true,
        Rating2: true,
        Rating3: true,
        Rating4: true,
        Rating5: false,
      },
      Review: 210,
      Rate: 4.2,
      Author: "Robert T.Kiyosaki",
      Year: 2026,
      price: "40.00",
      DiscountPrice: "10.00",
    },
  ];

  // const [category, setCategory] = useState("Book3");

  //function selectedBook
  function selectedBook(selectIndex) {
    const item = Books.map((item, i) => {
      return item;
    });

    console.log(item);
  }

  return (
    <section className="flex flex-col  lg:gap-40 gap-25 mb-30">
      {/* ALL Books */}
      <div className="flex  flex-col gap-20">
        {Books.map((Book, i) => {
          return (
            <Link
              // onClick={() => selectedBook(i)}
              key={i}
              // to="/BooksDetailsALL"
              class="flex    flex-col gap-2  w-full  mt-5  lg:flex-row lg:flex-row "
            >
              <Link to="/BooksDetailsALL" className="w-fit">
                <img
                  class=" w-full  lg:m-0 m-auto rounded-base h-90 md:px-0 px-5 md:h-auto md:w-48 mb-2 md:mb-0"
                  src={Book.img}
                  alt=""
                />
              </Link>

              <div className="sm:hidden flex absolute left-10 top-5 w-fit border rounded-md  bg-white p-2 border-(--color-textColor1) text-(--color-textColor1)">
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

              {/* //////////////////////// */}
              {/* //////////////////////// */}

              <div class="flex  flex-col leading-normal">
                <Link to="/BooksDetailsALL">
                  <header className="flex flex-col  gap-y-4">
                    <div className="flex md:flex-row  flex-col justify-between">
                      <h5 class="mb-3 text-2xl text-(--color-textColor1) font-bold tracking-tight ">
                        {Book.NameBook}
                      </h5>
                      <div className="sm:hidden flex">
                        {" "}
                        <h3 className=" font-normal text-[16px]">
                          Author:{" "}
                          <span className="font-bold text-black">
                            {Book.Author}
                          </span>
                        </h3>
                      </div>
                      {/*  */}
                      <button className="btn sm:flex hidden md:mx-0 mx-auto btn-outline cursor-auto btn-warning">
                        25% Discount code: {Book.CodeDiscount}
                      </button>
                    </div>
                    {/*  */}

                    <p class="mb-6 sm:flex hidden  text-black/70 font-normal xl:mt-0 lg:mt-3 xl:w-[75%]">
                      {Book.DescriptionBook}
                    </p>
                  </header>
                </Link>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="">
                  <Link to="/BooksDetailsALL">
                    <div className="flex sm:flex-none flex-wrap  items-center justify-between my-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="rating">
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="1 star"
                              aria-current={Book.isRating.Rating1}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="2 star"
                              aria-current={Book.isRating.Rating2}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="3 star"
                              aria-current={Book.isRating.Rating3}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="4 star"
                              aria-current={Book.isRating.Rating4}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="5 star"
                              aria-current={Book.isRating.Rating5}
                            ></div>
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
                              {Book.Rate}
                            </span>
                          </h3>
                        </p>
                      </div>

                      {/* //////////////////////// */}
                      {/* //////////////////////// */}

                      <div className="ms-auto sm:flex hidden  my-2   items-center justify-end   gap-2">
                        <h1 className="text-black/50 text-[17px]">
                          ${Book.DiscountPrice}
                        </h1>
                        {/*  */}
                        <h1 className="font-bold text-[26px]">
                          $
                          <span className="text-(--color-textColor1)">
                            {Book.price}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </Link>
                  {/* ///////////////// */}
                  {/* ///////////////// */}
                  <div className="flex sm:flex-col flex-row  h-fit  justify-between ">
                    <Link to="/BooksDetailsALL">
                      <div className="sm:hidden  my-0 flex flex-row-reverse items-center  gap-2">
                        <h1 className="text-black/50 text-[17px]">
                          ${Book.DiscountPrice}
                        </h1>
                        {/*  */}
                        <h1 className="font-bold text-[26px]">
                          $
                          <span className="text-(--color-textColor1)">
                            {" "}
                            {Book.price}
                          </span>
                        </h1>
                      </div>
                    </Link>

                    <div className="flex sm:pb-0 pb-3 md:flex-row flex-col md:items-center gap-y-5 justify-between">
                      {" "}
                      <Link to="/BooksDetailsALL" className="">
                        <div className="flex items-center justify-between gap-10">
                          {" "}
                          <div className="sm:flex hidden">
                            {" "}
                            <h3 className=" font-normal text-[16px]">
                              Author:{" "}
                              <div className="font-bold text-(--color-textColor1)">
                                {Book.Author}
                              </div>
                            </h3>
                          </div>
                          {/*  */}
                          <div className="sm:flex hidden">
                            {" "}
                            <h3 className="font-normal text-[16px]">
                              Year{" "}
                              <div className="font-bold text-(--color-textColor1)">
                                {Book.Year}
                              </div>
                            </h3>
                          </div>
                        </div>
                      </Link>
                      {/*  */}
                      {/*  */}
                      <div className="card-actions flex  justify-center items-center gap-4">
                        <button className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit rounded-md py-2 px-4 text-2xl cursor-pointer hover:scale-107 duration-1500">
                          <span className="sm:flex hidden">Add To Cart</span>
                          {/*  */}
                          <FaCartArrowDown />
                        </button>

                        {/* ////////////////////////////////////////////////////////////////////////////// */}
                        {/* ////////////////////////////////////////////////////////////////////////////// */}

                        <div className="sm:flex hidden border rounded-md bg-black/5 p-2 border-(--color-textColor1) text-(--color-textColor1)">
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
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* navigation */}
      <nav
        aria-label="Page navigation example"
        className="m-auto flex flex-col items-center gap-2.5"
      >
        <ul className="navigation flex  -space-x-px text-sm ">
          <li>
            <button class="w-full cursor-pointer flex items-center justify-center text-(--color-textColor1) bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium  text-sm px-3 h-10 focus:outline-none">
              Previous
            </button>
          </li>

          <div className="flex -space-x-px text-sm">
            {" "}
            <li>
              <button
                aria-current="page"
                class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none"
              >
                1
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-wrap bg-white box-border border border-default-medium hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                2
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                3
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                4
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                5
              </button>
            </li>
          </div>

          <li>
            <a
              href="#"
              class="w-full cursor-pointer flex items-center justify-center text-(--color-textColor1) bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium  text-sm px-3 h-10 focus:outline-none"
            >
              Next
            </a>
          </li>
        </ul>
        {/*  */}
        {/*  */}
        <p className="font-normal text-black/70">
          1-20 of 5000+ Book available
        </p>
      </nav>
    </section>
  );
}
