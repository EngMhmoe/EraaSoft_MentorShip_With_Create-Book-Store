//import Imgs
import { FaCartArrowDown } from "react-icons/fa";

//import Styling css
import "./styleing.css";

//
import { Link } from "react-router-dom";

//
import { motion } from "motion/react";

//import UseTokenStore
import { UseTokenStore } from "../../store/UseTokenStore";

//import react-router-dom
import { useNavigate } from "react-router-dom";

//import TooltipAddToCartANDWishList
import TooltipAddToCartANDWishList from "../TooltipAddToCartANDWishList";

export default function ALLBooks({ t }) {
  //ALL Books (1)
  const ALLBooks = [
    {
      bookId: 1,
      bookImage: "../../../public/images/img22.png",
      bookName: "Vel dignissimos veritatis quae.",
      author: "Adella Kreiger",
      description:
        "Harum cupiditate assumenda aut magni ut quaerat odio. Hic suscipit excepturi vel minus rerum nihil voluptatibus. Blanditiis quam repellat adipisci error sit vel. Sequi quae odio commodi et iure magnam.",
      countReview: 0,
      rate: null,
      price: 979.01,
      discount: 44,
      final_price: 548.2456,
      asinCode: "MSI175942",
      bookFormat: "Hard Cover",
      lang: "english",
      publicationYear: 2026,
      quantity: 1,
      //عدد المنتج
      stock: 61,
      numberOfPages: 659,
      catId: 51,
      category_name: "Manager of Weapons Specialists",
    },

    {
      bookId: 2,
      bookImage: "../../../public/images/img21.png",
      bookName: "Natus facilis eos.",
      author: "Albina Will",
      description:
        "Quod et aliquam maiores hic laudantium facilis quam. Qui itaque esse asperiores excepturi totam asperiores nisi. At et impedit nam et voluptatibus ullam.",
      countReview: 10,
      rate: 2.2,
      price: 775.93,
      discount: 43,
      final_price: 442.2801,
      asinCode: "SLO411373",
      bookFormat: "soft Cover",
      lang: "Arabic",
      publicationYear: 2025,
      quantity: 1,
      //عدد المنتج
      stock: 59,
      numberOfPages: 349,
      catId: 52,
      category_name: "Automotive Technician",
    },

    {
      bookId: 3,
      bookImage: "../../../public/images/img17.png",
      bookName: "Sed labore doloribus.",
      author: "Quentin Sauer",
      description:
        "Sunt vitae veniam architecto minima vero. Et sunt occaecati cum possimus aspernatur omnis. Incidunt ullam fugiat omnis debitis quibusdam.",

      rate: null,
      price: 269.56,
      discount: 13,
      final_price: 234.5172,

      publicationYear: 2024,
      quantity: 1,
      //عدد المنتج
      stock: 88,

      numberOfPages: 172,
      countReview: 15,

      lang: "english",
      asinCode: "SRW920308",
      bookFormat: "Hard Cover",
      catId: 53,
      category_name: "Petroleum Pump Operator",
    },

    {
      bookId: 4,
      bookImage: "../../../public/images/img25.png",
      bookName: "Rich Dad And Poor Dad",
      author: "Robert Y. Kiyosanki",
      description:
        "Rich Dad Poor Dad is one of the world’s most influential personal finance books. Written by Robert Kiyosaki, it challenges traditional views about money, work, and wealth by comparing two different mindsets. The book guides readers toward financial independence through smart investing, financial education, and long-term thinking.",
      countReview: 180,
      rate: 4.2,
      price: 500,
      discount: 70,
      final_price: 430,
      asinCode: "B09TWSRMCB",
      bookFormat: "Hard Cover",
      lang: "Arabic",
      publicationYear: 2023,
      quantity: 1,
      //عدد المنتج
      stock: 9,
      numberOfPages: 490,
    },

    {
      bookId: 5,
      bookImage: "../../../public/images/img20.png",
      bookName: "The Design Of Books",
      author: "Debbie Berne",
      description:
        "Explore the art of book design, where creativity meets precision. From eye-catching covers to thoughtfully crafted layouts, every visual detail is designed to enhance the reading experience and reflect the true value of the content.",
      countReview: 180,
      rate: 4.2,
      price: 450,
      discount: 35,
      final_price: 415,
      asinCode: "A28TejklCB",
      bookFormat: "Hard Cover",
      lang: "english",
      publicationYear: 2022,
      quantity: 1,
      //عدد المنتج
      stock: 15,
      numberOfPages: 580,
    },
  ];

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //Value Token (2)
  const Token = UseTokenStore((stets) => stets.token);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //Navigate (3)
  const Navigate = useNavigate();

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //function AddToCart (4)
  function AddToCart(selectBookId) {
    //Token === AddToCart
    if (Token) {
      //SelectBook (1)
      const SelectBook = ALLBooks.find((item) => item.bookId === selectBookId);

      //CheckCarts in LocalStorage (2)
      const CheckCarts = JSON.parse(localStorage.getItem("Carts")) || [];

      //Filter Carts In LocalStorage (5)
      const FilterCartsInLocalStorage = CheckCarts.find(
        (item) => item.bookId === selectBookId,
      );

      //is Condition(6)
      if (!FilterCartsInLocalStorage) {
        //NewCarts (3)
        const NewCarts = [...CheckCarts, SelectBook];

        //Push Carts In LocalStorage (4)
        localStorage.setItem("Carts", JSON.stringify(NewCarts));

        //
        window.location.reload();
      }
    } else {
      //Token !== Navigate To login (1)
      Navigate("/loginIn");
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //function AddToWishList (5)
  function AddToWishList(selectBookId) {
    //Token === AddToCart
    if (Token) {
      //SelectBook (1)
      const SelectBook = ALLBooks.find((item) => item.bookId === selectBookId);

      //CheckWishList in LocalStorage (2)
      const CheckWishList = JSON.parse(localStorage.getItem("WishList")) || [];

      //Filter WishList In LocalStorage (5)
      const FilterWishListInLocalStorage = CheckWishList.find(
        (item) => item.bookId === selectBookId,
      );

      //is Condition(6)
      if (!FilterWishListInLocalStorage) {
        //NewWishList (3)
        const NewWishList = [...CheckWishList, SelectBook];

        //Push WishList In LocalStorage (4)
        localStorage.setItem("WishList", JSON.stringify(NewWishList));

        //
        window.location.reload();
      }
    } else {
      //Token !== Navigate To login (1)
      Navigate("/loginIn");
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //Function WishList Icon Color (6)
  function isWishList(selectBookId) {
    const WishList = JSON.parse(localStorage.getItem("WishList")) || [];

    return WishList.some((item) => item.bookId === selectBookId);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //Function selectBook
  function selectBook(selectBookId) {
    //SelectBook (1)
    const selectBook = ALLBooks.find((item) => item.bookId === selectBookId);

    //Push localStorage(2)
    localStorage.setItem("selectBookInBooksPage", JSON.stringify(selectBook));
  }

  return (
    <section className="flex flex-col  lg:gap-40 gap-25 mb-30  overflow-hidden">
      {/* ALL Books */}
      <div className="flex  flex-col gap-20">
        {ALLBooks.map((Book, i) => {
          return (
            <motion.section
              initial={{
                scale: 0,
                transform: "translateX(900px)",
                marginBottom: "200px",
              }}
              animate={{
                scale: 1,
                transform: "translateX(0px)",
                marginBottom: "0px",
              }}
              transition={{ duration: 1.5 }}
              key={i}
              class="flex    flex-col gap-2  w-full  mt-5  lg:flex-row lg:flex-row "
            >
              <Link
                onClick={() => selectBook(Book.bookId)}
                to="/BooksDetailsALL"
                className="w-fit"
              >
                <img
                  class=" w-full  lg:m-0 m-auto rounded-base h-90 md:px-0 px-5 md:h-auto md:w-48 mb-2 md:mb-0"
                  src={Book.bookImage}
                  alt=""
                />
              </Link>

              <div className="sm:hidden flex absolute left-10 top-5 w-fit">
                <div
                  onClick={() => AddToWishList(Book.bookId)}
                  className={
                    isWishList(Book.bookId)
                      ? "tooltip  border rounded-md p-2 cursor-pointer border-(--color-textColor1) text-white bg-(--color-textColor1) duration-5000"
                      : "tooltip  rounded-md p-2 cursor-pointer border-(--color-textColor1) text-(--color-textColor1) "
                  }
                >
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
                  {/* ////////////////////////////////////// */}
                  {/* ////////////////////////////////////// */}
                  {Token && (
                    <TooltipAddToCartANDWishList
                      name={"Add To WishList"}
                      t={t}
                    />
                  )}
                </div>
              </div>

              {/* //////////////////////// */}
              {/* //////////////////////// */}

              <div class="flex  flex-col leading-normal">
                <Link
                  onClick={() => selectBook(Book.bookId)}
                  to="/BooksDetailsALL"
                >
                  <header className="flex flex-col  gap-y-4">
                    <div className="flex md:flex-row  flex-col justify-between">
                      <h5 class="mb-3 text-2xl text-(--color-textColor1) font-bold tracking-tight ">
                        {t(`${Book.bookName}`)}
                      </h5>
                      <div className="sm:hidden flex">
                        {" "}
                        <h3 className=" font-normal text-[16px]">
                          {t(`Author`)}:{" "}
                          <span className="font-bold text-black">
                            {t(`${Book.author}`)}
                          </span>
                        </h3>
                      </div>
                      {/*  */}
                      <button className="btn sm:flex hidden md:mx-0 mx-auto btn-outline cursor-auto btn-warning">
                        {t(`Discount code`)} 25% : {Book.asinCode}
                      </button>
                    </div>
                    {/*  */}

                    <p class="mb-6   text-black/70 font-normal xl:mt-0 lg:mt-3 xl:w-[75%]">
                      {t(`${Book.description}`)}
                    </p>
                  </header>
                </Link>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="">
                  <Link
                    onClick={() => selectBook(Book.bookId)}
                    to="/BooksDetailsALL"
                    className=""
                  >
                    <div className="flex sm:flex-none flex-wrap   items-center justify-between my-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="rating">
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="1 star"
                              // aria-current="true"
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="2 star"
                              // aria-current={Book.rate}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="3 star"
                              // aria-current={Book.rate}
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="4 star"
                              // aria-current={Book.rate}
                              aria-current="true"
                            ></div>
                            {/*  */}
                            <div
                              className="mask mask-star bg-orange-400"
                              aria-label="5 star"
                              // aria-current={Book.rate}
                            ></div>
                          </div>
                          {/* /////////////////////// */}
                          <p className="text-black/50">
                            ({t(`Review`)} {Book.countReview})
                          </p>
                        </div>
                        {/* /////////////////////// */}
                        <p>
                          <h3 className="font-normal text-[16px]">
                            {t(`Rate`)}:{" "}
                            <span className="font-bold  text-(--color-textColor1)">
                              {t(`${Book.rate}`)}
                            </span>
                          </h3>
                        </p>
                      </div>

                      {/* //////////////////////// */}
                      {/* //////////////////////// */}

                      <div className="ms-auto sm:flex hidden  my-2    items-center justify-end   gap-2">
                        <h1 className="text-black/50 text-[17px] line-through">
                          ${Book.discount}
                        </h1>
                        {/*  */}
                        <h1 className="font-bold text-[26px]">
                          $
                          <span className="text-(--color-textColor1)">
                            {t(`${Math.ceil(Book.final_price)}`)}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </Link>
                  {/* ///////////////// */}
                  {/* ///////////////// */}
                  <div className="flex sm:flex-col flex-row  h-fit  justify-between ">
                    <Link
                      onClick={() => selectBook(Book.bookId)}
                      to="/BooksDetailsALL"
                    >
                      <div className="sm:hidden  my-0 flex flex-row-reverse items-center  gap-2">
                        <h1 className="text-black/50 text-[17px] line-through">
                          ${Book.discount}
                        </h1>
                        {/*  */}
                        <h1 className="font-bold text-[26px]">
                          $
                          <span className="text-(--color-textColor1)">
                            {t(`${Math.ceil(Book.final_price)}`)}
                          </span>
                        </h1>
                      </div>
                    </Link>

                    <div className="flex sm:pb-0 pb-3 md:flex-row flex-col md:items-center gap-y-5 justify-between">
                      {" "}
                      <Link
                        onClick={() => selectBook(Book.bookId)}
                        to="/BooksDetailsALL"
                        className=""
                      >
                        <div className="flex items-center justify-between gap-10">
                          {" "}
                          <div className="sm:flex hidden">
                            {" "}
                            <h3 className=" font-normal text-[16px]">
                              {t(`Author`)}:{" "}
                              <div className="font-bold text-(--color-textColor1)">
                                {t(`${Book.author}`)}
                              </div>
                            </h3>
                          </div>
                          {/*  */}
                          <div className="sm:flex hidden">
                            {" "}
                            <h3 className="font-normal text-[16px]">
                              {t(`Year`)}{" "}
                              <div className="font-bold text-(--color-textColor1)">
                                {Book.publicationYear}
                              </div>
                            </h3>
                          </div>
                        </div>
                      </Link>
                      {/*  */}
                      {/*  */}
                      <div className="card-actions flex  justify-center items-center gap-4">
                        <div className="tooltip">
                          {/* Add To Cart */}
                          <button
                            onClick={() => AddToCart(Book.bookId)}
                            className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit rounded-md py-2 px-4 text-2xl cursor-pointer hover:scale-102 duration-1500"
                          >
                            <span className="sm:flex hidden">
                              {t(`Add To Cart`)}
                            </span>
                            {/*  */}
                            <FaCartArrowDown />
                          </button>
                          {/* ////////////////////////////////////// */}
                          {/* ////////////////////////////////////// */}

                          {Token && (
                            <TooltipAddToCartANDWishList
                              name={"Add To Cart"}
                              t={t}
                            />
                          )}
                        </div>

                        {/* ////////////////////////////////////////////////////////////////////////////// */}
                        {/* ////////////////////////////////////////////////////////////////////////////// */}

                        <div className="tooltip">
                          {/* Add To WishList */}
                          <div
                            onClick={() => AddToWishList(Book.bookId)}
                            className={
                              isWishList(Book.bookId)
                                ? "sm:flex hidden border rounded-md p-2 cursor-pointer border-(--color-textColor1) text-white bg-(--color-textColor1) duration-5000"
                                : "sm:flex hidden border rounded-md p-2 cursor-pointer border-(--color-textColor1) text-(--color-textColor1) "
                            }
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block h-8 w-8 stroke-current "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              ></path>
                            </svg>
                          </div>

                          {/* ////////////////////////////////////// */}
                          {/* ////////////////////////////////////// */}
                          {Token && (
                            <TooltipAddToCartANDWishList
                              name={"Add To WishList"}
                              t={t}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
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
              {t("Previous")}
            </button>
          </li>

          <div className="flex -space-x-px text-sm">
            {" "}
            <li>
              <button
                aria-current="page"
                class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none"
              >
                {t("1")}
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-wrap bg-white box-border border border-default-medium hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                {t("2")}
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                {t("3")}
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                {t("4")}
              </button>
            </li>
            <li>
              <button class="btn flex items-center justify-center text-black bg-white box-border border border-default-medium  hover:bg-(--color-textColor1) hover:text-white font-medium text-sm w-10 h-10 focus:outline-none">
                {t("5")}
              </button>
            </li>
          </div>

          <li>
            <a
              href="#"
              class="w-full cursor-pointer flex items-center justify-center text-(--color-textColor1) bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium  text-sm px-3 h-10 focus:outline-none"
            >
              {t("Next")}
            </a>
          </li>
        </ul>
        {/*  */}
        {/*  */}
        <p className="font-normal text-black/70">
          {t("1-20 of 5000+ Book available")}
        </p>
      </nav>
    </section>
  );
}
