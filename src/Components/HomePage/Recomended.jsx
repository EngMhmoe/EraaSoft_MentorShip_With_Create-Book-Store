//import Hooks React js
import { useEffect, useState } from "react";

//import React-icon
import { FaCartArrowDown } from "react-icons/fa";

//import TooltipAddToCartANDWishList
import TooltipAddToCartANDWishList from "../TooltipAddToCartANDWishList";

//import UseTokenStore
import { UseTokenStore } from "../../store/UseTokenStore";

//import react-router-dom
import { useNavigate } from "react-router-dom";

//
import axios from "axios";

//
import { UseDomainStore } from "../../store/Domain";

export default function Recommended({ t }) {
  //Data recommended (1)
  const [DataRecommended, setDataRecommended] = useState([]);

  //
  const domain = UseDomainStore((state) => state.domain);

  //Get Products Api Strapi
  async function getDataRecommended() {
    try {
      const responsive = await axios.get(`${domain}/api/products`, {
        params: {
          populate: "*",
        },
      });

      responsive.data.data.splice(2, 7);

      setDataRecommended(responsive.data.data);
    } catch (error) {
      console.log("error AllBooks", error);
    }
  }

  useEffect(() => {
    getDataRecommended();
  }, []);

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
        (item) => item.documentId === selectBookId,
      );

      //CheckCarts in LocalStorage (2)
      const CheckCarts = JSON.parse(localStorage.getItem("Carts")) || [];

      //Filter Carts In LocalStorage (5)
      const FilterCartsInLocalStorage = CheckCarts.find(
        (item) => item.documentId === selectBookId,
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
        (item) => item.documentId === selectBookId,
      );

      //CheckWishList in LocalStorage (2)
      const CheckWishList = JSON.parse(localStorage.getItem("WishList")) || [];

      //Filter WishList In LocalStorage (5)
      const FilterWishListInLocalStorage = CheckWishList.find(
        (item) => item.documentId === selectBookId,
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

    return WishList.some((item) => item.documentId === selectBookId);
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
              key={Rec.documentId}
              className="card xl:h-90 xl:w-fit  w-fit  xl:card-side  bg-base-100 shadow-2xl "
            >
              {/* 2 Img */}
              <figure className="my-6 ml-5 xl:w-full ">
                <img
                  src={domain + Rec?.bookImage?.url}
                  alt="Album"
                  className=" w-80 mr-5"
                />
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
                      onClick={() => AddToCart(Rec.documentId)}
                      className="flex gap-2.5  items-center bg-(--color-textColor1) text-white w-fit m-auto rounded-lg py-3 px-7 sm:text-xl cursor-pointer hover:scale-102 duration-1500"
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
                      onClick={() => AddToWishList(Rec.documentId)}
                      className={
                        isWishList(Rec.documentId)
                          ? "border cursor-pointer rounded-lg p-1.5 border-(--color-textColor1) text-white bg-(--color-textColor1) duration-5000"
                          : "border cursor-pointer rounded-lg p-1.5 border-(--color-textColor1) text-(--color-textColor1) "
                      }
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-7 w-7 stroke-current "
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
