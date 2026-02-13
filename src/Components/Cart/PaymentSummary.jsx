import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentSummary({ t }) {
  //SubTotal
  const [SubTotal, setSubTotal] = useState(0);

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  //Tax
  const [Tax, setTax] = useState(0);

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  //Total Price
  const [totalPrice, setTotalPrice] = useState(0);

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const Carts = JSON.parse(localStorage.getItem("Carts"));

    //(1)
    const SubTotal = Carts.reduce((total, item) => total + item.price, 0);
    //
    setSubTotal(Math.ceil(SubTotal));
    localStorage.setItem("SubTotal", Math.ceil(SubTotal));

    //(2)
    const Tax = Carts.reduce((total, item) => total + item.discount, 0);
    //
    setTax(Tax);
    localStorage.setItem("Tax", Math.ceil(Tax));

    //(3)
    const totalPrice = Carts.reduce(
      (total, item) => total + item.final_price * item.quantity,
      0,
    );
    //
    setTotalPrice(Math.ceil(totalPrice));
    localStorage.setItem("totalPrice", Math.ceil(totalPrice));

    //
    console.log(Carts);
  }, []);

  return (
    <section className=" flex lg:flex-row flex-col justify-center lg:items-start items-center gap-39    p-10 bg-[#493b5b2a] text-black">
      {/* section Left */}
      <div className="flex flex-col  md:gap-20 sm:gap-15 gap-12 lg:w-129 sm:w-130 w-full">
        <section className="flex flex-col gap-4">
          <h1 className="title font-bold text-[26px] text-[#222222]">
            {t("Payment Summary")}
          </h1>

          {/*  */}

          <p className="font-normal text-[16px] text-[#22222271]">
            {t(
              "Review your order details clearly before completing your payment. The payment summary shows the total amount, fees, and applied discounts, ensuring a transparent and secure checkout experience with no surprises.",
            )}
          </p>
        </section>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <section className="lg:w-97 flex flex-col gap-6">
          <h2 className="font-normal text-[18px]  text-[#22222271]">
            {t("Have a discount code")}?
          </h2>

          {/*  */}

          <div className="flex flex-row flex-wrap  gap-4">
            <input
              type="text"
              placeholder={t("Enter Promo Code")}
              className="lg:w-71 sm:w-fit w-full  h-13 py-3.5 px-4.75 border border-[#22222271] outline-(--color-textColor1) rounded-[8px]"
            />

            {/*  */}

            <button className="sm:w-fit w-full h-13 py-3 px-4 rounded-[8px] font-bold bg-[#3B2F4A] text-white cursor-pointer btn  hover:bg-(--color-textColor1) duration-1000">
              {t("Apply")}
            </button>
          </div>
        </section>
      </div>

      {/* \//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\//\/\/\/ */}
      {/* \//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\//\/\/\/ */}
      {/* \//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\//\/\/\/ */}
      {/* \//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\//\/\/\/ */}
      {/* \//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\//\/\/\/ */}

      {/* section Right */}
      <div className="flex flex-col gap-10 lg:w-106 sm:w-130 w-full">
        <section className="flex flex-col gap-6">
          {/* Subtotal */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              {t("Subtotal")}
            </h1>
            {/*  */}
            <span className="font-bold text-[24px] text2">$ {SubTotal}</span>
          </div>

          {/*  */}

          {/* Shipping */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              {t("Shipping")}
            </h1>
            {/*  */}
            <span className="font-bold sm:text-[20px] text-[18px]  text3">
              {t("Free Delivery")}
            </span>
          </div>

          {/*  */}

          {/* Tax */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              {t("Tax")}
            </h1>
            {/*  */}
            <span className="font-bold text-[24px] text2">$ {Tax}</span>
          </div>

          {/*  */}

          {/* hr */}
          <div className="h-0.5 bg-[#22222225]"></div>

          {/*  */}

          {/* Total */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              {t("Total")}
            </h1>
            {/*  */}
            <span className="font-bold text-[28px] text-(--color-textColor1)">
              $ {totalPrice}
            </span>
          </div>
        </section>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <section className="flex flex-col gap-3">
          <Link to={"/CheckOutWishList"}>
            <button
              onClick={() => localStorage.setItem("CheckOrder", "Carts")}
              className="py-3 h-12 w-full btn duration-1000 rounded-[8px] bg-(--color-textColor1) text-white hover:bg-transparent hover:text-(--color-textColor1) hover:border hover:border-(--color-textColor1)   font-bold text-[16px]"
            >
              {t("Check out")}{" "}
            </button>
          </Link>
          {/*  */}
          <Link to={"/Books"}>
            <button className="py-3 w-full h-12 btn duration-1000 border border-(--color-textColor1) rounded-[8px] bg-transparent text-(--color-textColor1) hover:bg-(--color-textColor1) hover:text-white font-bold text-[16px]">
              {t("Keep Shopping")}
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
}
