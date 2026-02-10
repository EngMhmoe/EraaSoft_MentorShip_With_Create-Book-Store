import { Link } from "react-router-dom";

export default function PaymentSummary() {
  return (
    <section className=" flex lg:flex-row flex-col justify-center lg:items-start items-center gap-39    p-10 bg-[#493b5b2a] text-black">
      {/* section Left */}
      <div className="flex flex-col  md:gap-20 sm:gap-15 gap-12 lg:w-129 sm:w-130 w-full">
        <section className="flex flex-col gap-4">
          <h1 className="title font-bold text-[26px] text-[#222222]">
            Payment Summary
          </h1>

          {/*  */}

          <p className="font-normal text-[16px] text-[#22222271]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </section>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <section className="lg:w-97 flex flex-col gap-6">
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
              Subtotal
            </h1>
            {/*  */}
            <span className="font-bold text-[24px] text2">$ 120</span>
          </div>

          {/*  */}

          {/* Shipping */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              Shipping
            </h1>
            {/*  */}
            <span className="font-bold sm:text-[20px] text-[18px]  text3">
              Free Delivery
            </span>
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

          {/* hr */}
          <div className="h-0.5 bg-[#22222225]"></div>

          {/*  */}

          {/* Total */}
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-normal  text-[20px] text1 text-[#22222271]">
              Total
            </h1>
            {/*  */}
            <span className="font-bold text-[28px] text-(--color-textColor1)">
              $ 124
            </span>
          </div>
        </section>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <section className="flex flex-col gap-3">
          <Link to={"/CheckOutWishList"}>
            <button className="py-3 h-12 w-full btn duration-1000 rounded-[8px] bg-(--color-textColor1) text-white hover:bg-transparent hover:text-(--color-textColor1) hover:border hover:border-(--color-textColor1)   font-bold text-[16px]">
              Check out
            </button>
          </Link>
          {/*  */}
          <Link to={"/Books"}>
            <button className="py-3 w-full h-12 btn duration-1000 border border-(--color-textColor1) rounded-[8px] bg-transparent text-(--color-textColor1) hover:bg-(--color-textColor1) hover:text-white font-bold text-[16px]">
              Keep Shopping
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
}
