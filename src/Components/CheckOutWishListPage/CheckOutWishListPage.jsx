//import Component UI
import Img from "../UI/Img";

////import Components
import FormCheckOut from "./FormCheckOut";
import OrderSummary from "./Ordersummary";
import PaymentMethod from "./PaymentMethod";
import AddNote from "./AddNote";

//
import { Link } from "react-router-dom";

//import styling
import "./style.css";

export default function CheckOutWishListPage() {
  return (
    <section>
      {/* Component Img */}
      <Img size={30} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* gap-10 */}
      <div className="CheckOutWishListPage pt-45 pb-31.75  sm:mx-10 mx-5 grid lg:grid-cols-12 grid-cols-1 xl:gap-10 lg:gap-5 gap-40">
        {/* section Left */}
        {/* grow  */}
        <section className="xl:w-ful flex flex-col gap-6 xl:col-span-7 lg:col-span-6">
          {/* component FormCheckOutWishList */}
          <FormCheckOut />

          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}
          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}

          {/* component PaymentMethod */}
          <PaymentMethod />

          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}
          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}

          {/* component AddNote */}
          <AddNote />
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\///\/\///\/\/\\/\/\/\//\\/\/\/\/\//\/\ */}

        {/* section Right */}
        {/* grow-[2] */}
        <section className="padding xl:col-span-5 lg:col-span-6  bg-white border-2 border-black/10  rounded-[20px] shadow p-10 flex flex-col justify-between gap-40 items-center">
          {/* component OrderSummary */}
          <OrderSummary />

          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}
          {/* /\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\//\/\/\ */}
          <div className="flex flex-col gap-6 w-full">
            <section className=" flex flex-col gap-6">
              <h2 className="font-normal text-[18px]  text-[#22222271]">
                Have a discount code?
              </h2>

              {/*  */}

              <div className="flex flex-row flex-wrap  gap-4">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="lg:w-71 sm:w-fit w-full  h-13 py-3.5 px-4.75 border border-[#22222271] outline-(--color-textColor1) rounded-[8px]"
                />

                {/*  */}

                <button className="sm:w-fit w-full h-13 py-3 px-4 rounded-[8px] font-bold bg-[#3B2F4A] text-white cursor-pointer btn  hover:bg-(--color-textColor1) duration-1000">
                  Apply
                </button>
              </div>
            </section>

            {/* hr */}
            <div className="h-0.5 bg-[#22222225]"></div>

            {/* section Right */}
            <div className="flex flex-col gap-10  w-full">
              <section className="flex flex-col gap-6">
                {/* Subtotal */}
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
                    Subtotal
                  </h1>
                  {/*  */}
                  <span className="font-bold text-[24px] text2">$ 80</span>
                </div>

                {/*  */}

                {/* Tax */}
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
                    Tax
                  </h1>
                  {/*  */}
                  <span className="font-bold text-[24px] text2">$ 4</span>
                </div>

                {/*  */}

                {/* Shipping */}
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
                    Shipping
                  </h1>
                  {/*  */}
                  <span className="font-bold text-black/40 sm:text-[20px] text-[18px]  text3">
                    $ 0
                  </span>
                </div>

                {/*  */}

                {/* hr */}
                <div className="h-0.5 bg-[#22222225]"></div>

                {/*  */}

                {/* Total */}
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
                    Total(USD)
                  </h1>
                  {/*  */}
                  <span className="font-bold text-[28px] text-(--color-textColor1)">
                    $ 84
                  </span>
                </div>
              </section>

              {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
              {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

              <Link to={"/OrderConfirmed-Successful"} className="w-full">
                <button className="py-3 h-12 w-full btn duration-1000 rounded-[8px] bg-(--color-textColor1) text-white hover:bg-transparent hover:text-(--color-textColor1) hover:border hover:border-(--color-textColor1)   font-bold text-[16px]">
                  Confirm order
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
