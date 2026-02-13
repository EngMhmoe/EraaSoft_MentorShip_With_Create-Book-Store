//import Hooks react js
import { useEffect, useState } from "react";

//import Component UI
import Img from "../UI/Img";

//import Components
import HeaderCardANDWishListPage from "../UI/HeaderCardANDWishListPage";
import ProductsCardANDWishListPage from "../UI/ProductsCardANDWishListPage";
import PaymentSummary from "./PaymentSummary";

//import style.css
import "./style.css";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

// import SuccessfulDelete from "../../Components/SuccessfulDelete";

export default function MyCartPage() {
  const [ProductsCardANDWishList, setProductsCardANDWishList] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const Carts = JSON.parse(localStorage.getItem("Carts")) || [];

    setProductsCardANDWishList(Carts);
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //value ar
  const { t } = useTranslation();

  return (
    <section>
      {/* Component Img */}
      <Img size={38} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <div className="pt-45 pb-31.75  sm:mx-10 mx-5">
        {/* Component Cart HeaderCardANDWishListPage */}
        <HeaderCardANDWishListPage Quantity={"flex"} id={1} t={t} />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        {/* Component Carts */}
        <section className="my-6.5">
          <ProductsCardANDWishListPage
            ProductsCardANDWishList={ProductsCardANDWishList}
            setProductsCardANDWishList={setProductsCardANDWishList}
            counter={"flex"}
            t={t}
            storage="Carts"
          />
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        <section className="mt-15">
          <PaymentSummary t={t} />
        </section>
      </div>
    </section>
  );
}
