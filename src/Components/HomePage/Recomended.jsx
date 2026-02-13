//import Hooks React js
import { useState } from "react";

//import React-icon
import { FaCartArrowDown } from "react-icons/fa";

//import TooltipAddToCartANDWishList
import TooltipAddToCartANDWishList from "../TooltipAddToCartANDWishList";

//import UseTokenStore
import { UseTokenStore } from "../../store/UseTokenStore";

//import react-router-dom
import { useNavigate } from "react-router-dom";

export default function Recommended({ t }) {
  //Data recommended (1)
  const [DataRecommended] = useState([
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
  ]);

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
      const SelectBook = DataRecommended.find(
        (item) => item.bookId === selectBookId,
      );

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
      const SelectBook = DataRecommended.find(
        (item) => item.bookId === selectBookId,
      );

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

  return (
    <section className="flex flex-col gap-10">
      {/* Header Recomended For You */}
      <header>
        <h1 className="font-bold text-[18px] text-(--color-textColor1)">
          {t(`Recomended For You`)}
        </h1>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      {/* 2 Products Recomended For You */}
      <div className="flex sm:flex-row flex-col  justify-center items-center gap-x-6 gap-y-10">
        {DataRecommended.map((Rec) => {
          return (
            <div
              key={Rec.bookId}
              className="card xl:h-90 xl:w-fit  w-fit  xl:card-side  bg-base-100 shadow-2xl "
            >
              {/* 2 Img */}
              <figure className="my-6 ml-5 xl:w-full ">
                <img src={Rec.bookImage} alt="Album" className=" w-80 mr-5" />
              </figure>

              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}

              {/* Card body  */}
              <div className="card-body">
                {/* Book Name */}
                <h2 className="card-title font-bold">{t(`${Rec.bookName}`)}</h2>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* Author Book */}
                <h3 className="font-normal text-[16px]">
                  {t("Author")}:{" "}
                  <span className="font-bold text-(--color-textColor1)">
                    {t(`${Rec.author}`)}
                  </span>
                </h3>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* description Book */}
                <p className="font-normal  text-gray-800">
                  {t(`${Rec.description}`)}
                </p>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* rating Book && countReview Book && Rate Book && final_price */}
                <div className="flex sm:flex-none flex-wrap  items-center justify-between my-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {/* rating Book */}
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

                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}

                      {/* countReview Book */}
                      <p className="text-black/50">
                        ({t("Review")} {Rec.countReview})
                      </p>
                    </div>

                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}

                    {/* Rate Book */}
                    <h3 className="font-normal text-[16px]">
                      {t("Rate")}:{" "}
                      <span className="font-bold  text-(--color-textColor1)">
                        {t(`${Rec.rate}`)}
                      </span>
                    </h3>
                  </div>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  {/* final_price Book */}
                  <div className="ms-auto  my-2 flex items-center justify-end   gap-2">
                    <h1 className="font-bold text-[26px]">
                      $
                      <span className="text-(--color-textColor1)">
                        {t(`${Math.ceil(Rec.final_price)}`)}
                      </span>
                    </h1>
                  </div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* Add To Cart(1) && Add To WishList(2) From Components Recomended For You TO Cart Pge  */}
                <div className="card-actions flex justify-center items-center gap-4">
                  {/* Add To Cart(1) */}
                  <div className="tooltip">
                    <button
                      onClick={() => AddToCart(Rec.bookId)}
                      className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit m-auto rounded-lg py-3 px-10 sm:text-2xl cursor-pointer hover:scale-102 duration-1500"
                    >
                      {t("Add To Cart")}
                      {/*  */}
                      <FaCartArrowDown />
                    </button>

                    {/* ////////////////////////////////////// */}
                    {/* ////////////////////////////////////// */}

                    {Token && (
                      <TooltipAddToCartANDWishList name={"Add To Cart"} t={t} />
                    )}
                  </div>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  {/* Add To WishList(2) */}
                  <div className="tooltip">
                    <div
                      onClick={() => AddToWishList(Rec.bookId)}
                      className={
                        isWishList(Rec.bookId)
                          ? "border cursor-pointer rounded-lg p-3 border-(--color-textColor1) text-white bg-(--color-textColor1) duration-5000"
                          : "border cursor-pointer rounded-lg p-3 border-(--color-textColor1) text-(--color-textColor1) "
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
          );
        })}
      </div>
    </section>
  );
}
