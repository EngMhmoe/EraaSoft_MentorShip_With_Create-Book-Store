//import Component UI
import { Link, useParams } from "react-router-dom";
import Img from "../UI/Img";

//import Components
import CustomerDetails from "./BooksDetailsPage/CustomerDetails";
import CustomerReviews from "./BooksDetailsPage/CustomerReviews";
import ProductDetails from "./BooksDetailsPage/ProductDetails";
import RecommendedForYou from "./BooksDetailsPage/RecommendedForYou";
import ScreenCOLCustmerDeatils from "./BooksDetailsPage/screenCOLCustmerDeatils";

export default function BooksDetailsALL() {
  //All Category Customers
  const AllCategoryCustomers = [
    {
      id: 1,
      Category: "Recommended For You",
      ComponentsUI: <RecommendedForYou />,
    },

    {
      id: 1,
      Category: "Customer Reviews",
      ComponentsUI: <CustomerReviews />,
    },

    {
      id: 1,
      Category: "Product Details",
      ComponentsUI: <ProductDetails />,
    },
  ];

  //Hook id useParams
  const { id } = useParams();

  return (
    <section>
      {/* Component Img */}
      <Img size={30} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <div className="flex flex-col py-50 gap-50 mx-5 font-bold">
        <section>
          {" "}
          {/* Component CustomerDetails */}
          <div className="container-Cart">
            <CustomerDetails />
          </div>
          {/* //////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////// */}
          {/* Component className */}
          <div className="container-Cart2 w-full hidden">
            <ScreenCOLCustmerDeatils />
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

        {/*  */}
        <section className="border-0">
          <header className="flex flex-wrap-reverse gap-y-10 sm:text-[26px] text-xl">
            {AllCategoryCustomers.map((cat, i) => {
              return (
                <div
                  key={i}
                  className="collapse collapse-arrow shadow shadow-red-200 border border-base-300"
                >
                  <input
                    type="radio"
                    name={`my-accordion-${(cat, id)}`}
                    defaultChecked
                  />

                  <h1 className="collapse-title text-(--color-textColor1) font-semibold">
                    {cat.Category}
                  </h1>

                  <div className="collapse-content text-sm ">
                    {/* Components */}
                    {cat.ComponentsUI}
                  </div>
                </div>
              );
            })}
          </header>
        </section>
      </div>
    </section>
  );
}
