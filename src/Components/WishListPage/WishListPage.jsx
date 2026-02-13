import { useEffect, useState } from "react";

//import Component UI
import Img from "../UI/Img";

//import Component UI
import HeaderCardANDWishListPage from "../UI/HeaderCardANDWishListPage";
import ProductsCardANDWishListPage from "../UI/ProductsCardANDWishListPage";
import FooterWishList from "./FooterWishList";

//import useTranslation i18next
import { useTranslation } from "react-i18next";

export default function WishListPage() {
  const [ProductsCardANDWishList, setProductsCardANDWishList] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("WishList")) || [];
    setProductsCardANDWishList(storage);
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

      <div className="pt-45  pb-109.5  sm:mx-10 mx-5">
        {/* Component Cart HeaderCardANDWishListPage */}
        <HeaderCardANDWishListPage Quantity={"hidden"} id={2} t={t} />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        {/* Component ProductsCardANDWishListPage */}
        <section className="my-6.5 mt-15">
          <ProductsCardANDWishListPage
            ProductsCardANDWishList={ProductsCardANDWishList}
            setProductsCardANDWishList={setProductsCardANDWishList}
            counter={"hidden"}
            t={t}
            storage="WishList"
          />
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        {/* Component FooterWishList */}
        <section className="mt15">
          <FooterWishList
            ProductsCardANDWishList={ProductsCardANDWishList}
            setProductsCardANDWishList={setProductsCardANDWishList}
            t={t}
          />
        </section>
      </div>
    </section>
  );
}
