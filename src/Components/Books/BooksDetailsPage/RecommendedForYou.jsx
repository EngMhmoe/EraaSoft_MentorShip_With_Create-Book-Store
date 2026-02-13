//import Hooks React js
import { useState } from "react";

//import React-icon
// import { FaCartArrowDown } from "react-icons/fa";

//import TooltipAddToCartANDWishList
import TooltipAddToCartANDWishList from "../../TooltipAddToCartANDWishList";
import { FaCartArrowDown } from "react-icons/fa";
import { UseTokenStore } from "../../../store/UseTokenStore";
import { useNavigate } from "react-router-dom";

export default function RecommendedForYou({ t }) {
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

  return (
    <>
      <section className=" border-t border-red-500 py-20">
        <section className=" carousel carousel-center rounded-box    flex  items-center justify-center gap-5">
          {DataRecommended.map((Rec) => {
            return (
              <div className="carousel-item card2 card card-side   bg-[#3B2F4A] text-white  shadow-lg">
                <figure>
                  <img
                    src={Rec.bookImage}
                    alt="Movie"
                    className="object-contain h-75"
                  />
                </figure>

                {/* //////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////// */}

                <div className="px-4 py-5">
                  <h2 className="card-title font-bold text-(--color-textColor1)">
                    {t(`${Rec.bookName}`)}
                  </h2>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  <h3 className="font-normal text-[16px] text-white/70">
                    {t(`Author`)}:{" "}
                    <span className="font-bold text-white">
                      {t(`${Rec.author}`)}
                    </span>
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
                        <p className="text-white/70">
                          ({t("Review")} {Rec.countReview})
                        </p>
                      </div>

                      {/*  */}

                      <h3 className="font-normal text-[16px] ">
                        {t(`Rate`)}:{" "}
                        <span className="font-bold  text-(--color-textColor1)">
                          {t(`${Rec.rate}`)}
                        </span>
                      </h3>
                    </div>

                    {/* /////////////////////// */}

                    {/* //////////////////////// */}
                    {/* //////////////////////// */}
                  </div>
                  <div className="ms-auto  my-2 flex items-center justify-end   gap-2">
                    <h1 className="text-white/70 line-through text-[17px]">
                      {" "}
                      {t(`${Rec.discount}`)}
                    </h1>
                    <h1 className="font-bold text-[26px]">
                      $
                      <span className="text-white">
                        {" "}
                        {t(`${Math.ceil(Rec.final_price)}`)}
                      </span>
                    </h1>
                  </div>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  <div className="my-1 flex flex-col gap-2">
                    <div className="h-3 bg-white/60 rounded-full">
                      <div className="h-3 rounded-full w-40 bg-(--color-textColor1)"></div>
                    </div>

                    {/*  */}

                    <div className="text-white/70">{t("books Left")} 4</div>
                  </div>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  <div className=" w-fit ms-auto cursor-pointer">
                    {/* Add To Cart(1) */}
                    <div className="tooltip">
                      <button
                        onClick={() => AddToCart(Rec.bookId)}
                        className="border cursor-pointer flex gap-2.5  rounded-md border-(--color-textColor1) bg-(--color-textColor1) text-white p-2 text-xl"
                      >
                        {t("Add To Cart")}
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
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}
