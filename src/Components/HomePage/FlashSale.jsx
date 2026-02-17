//import Hooks React js
import { useEffect, useState } from "react";

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

export default function FlashSale({ t }) {
  //Data Flash Sale (1)
  const [DataFlashSale, setDataFlashSale] = useState([]);

  //
  const domain = UseDomainStore((state) => state.domain);

  //Get Products Api Strapi
  async function getDataFlashSale() {
    try {
      const responsive = await axios.get(`${domain}/api/products`, {
        params: {
          populate: "*",
        },
      });

      responsive.data.data.splice(0, 7);

      setDataFlashSale(responsive.data.data);
    } catch (error) {
      console.log("error AllBooks", error);
    }
  }

  useEffect(() => {
    getDataFlashSale();
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //Value Token (2)
  const Token = UseTokenStore((states) => states.token);

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
      const SelectBook = DataFlashSale.find(
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

  return (
    <section>
      {/* Header Flash Sale */}
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[26px] text-(--color-textColor1)">
            {t(`Flash Sale`)}
          </h1>
          {/*  */}
          <p className="font-normal text-gray-500 max-w-[516px]">
            {t(
              `Limited-time deals with unbeatable prices! Grab massive discounts before time runs out and enjoy an exclusive shopping opportunity that combines great value with top quality. Hurry up — once it’s gone, it’s gone!`,
            )}
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

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      {/* 2 Products Flash Sale*/}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-5">
        {DataFlashSale.map((Flash) => {
          return (
            <div
              key={Flash.documentId}
              className="card2 card card-side   bg-[#3B2F4A] text-white  shadow-lg"
            >
              {/* 2 Img */}
              <figure>
                <img
                  src={domain + Flash?.bookImage?.url}
                  alt="Movie"
                  className="object-contain h-75"
                />
              </figure>

              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}

              {/* Card body  */}
              <div className="px-4 py-5">
                {/* Book Name */}
                <h2 className="card-title font-bold text-(--color-textColor1)">
                  {t(`${Flash.bookName}`)}
                </h2>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* Author Book */}
                <h3 className="font-normal text-[16px] text-white/70">
                  {t(`Author`)}:{" "}
                  <span className="font-bold text-white">
                    {" "}
                    {t(`${Flash.author}`)}
                  </span>
                </h3>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* rating Book && countReview Book && Rate Book */}
                <div className="flex sm:flex-none flex-wrap  items-center justify-between my-1">
                  <div className="flex flex-col gap-1">
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
                          className="mask mask-star bg-white"
                          aria-label="5 star"
                        ></div>
                      </div>

                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////////////////////// */}

                      {/* countReview Book */}
                      <p className="text-white/70">
                        {" "}
                        ({t("Review")} {Flash.countReview})
                      </p>
                    </div>

                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    {/* ////////////////////////////////////////////////////////////////////////////// */}

                    {/* Rate Book */}
                    <h3 className="font-normal text-[16px] ">
                      {t(`Rate`)}:{" "}
                      <span className="font-bold  text-(--color-textColor1)">
                        {t(`${Flash.rate}`)}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* discount Book && final_price Book */}
                <div className="ms-auto  my-2 flex items-center justify-end   gap-2">
                  {/* discount Book */}
                  <h1 className="text-white/70 text-[17px] line-through">
                    $ {t(`${Flash.discount}`)}
                  </h1>

                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////////////////////// */}

                  {/* final_price Book */}
                  <h1 className="font-bold text-[26px]">
                    $
                    <span className="text-white">
                      {t(`${Math.ceil(Flash.final_price)}`)}
                    </span>
                  </h1>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                <div className="my-1 flex flex-col gap-2">
                  <div className="h-3 bg-white/60 rounded-full">
                    <div className="h-3 rounded-full w-40 bg-(--color-textColor1)"></div>
                  </div>

                  {/*  */}

                  <div className="text-white/70">{t(`books Left`)} 4</div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/* Add To Cart(1)  From Components Flash Sale TO Cart Pge  */}
                <div className="tooltip">
                  {/* Add To Cart */}
                  <div
                    onClick={() => AddToCart(Flash.documentId)}
                    className=" w-fit ms-auto cursor-pointer"
                  >
                    <div className="border ms-auto rounded-lg p-3 border-(--color-textColor1) bg-(--color-textColor1) text-(--color-textColor1)">
                      <img src={"../../../public/images/img26.png"} alt="" />
                    </div>
                  </div>

                  {/* ////////////////////////////////////// */}
                  {/* ////////////////////////////////////// */}

                  {Token && (
                    <TooltipAddToCartANDWishList name={"Add To Cart"} t={t} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
