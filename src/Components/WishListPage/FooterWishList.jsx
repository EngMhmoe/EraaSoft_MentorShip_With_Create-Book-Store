import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function FooterWishList() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-4">
      <button className=" h-12.5 border border-(--color-textColor1) rounded-[8px] py-3.5 px-6 text-(--color-textColor1) bg-red-100 hover:bg-(--color-textColor1) hover:text-white btn duration-1000 font-bold text-[16px]">
        Move to cart
      </button>

      {/* \/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/ */}
      {/* \/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/ */}
      {/* \/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/ */}

      <Link to={"/CheckOutWishList"}>
        <button className="group flex flex-row items-center justify-between gap-2 w-[320px] h-12.5 border border-(--color-textColor1) rounded-[8px] py-3.5 px-6 hover:text-(--color-textColor1) hover:bg-red-100 bg-(--color-textColor1) text-white btn duration-1000 font-semibold">
          <span className="text-[14px]">
            2 Item <br /> $80
          </span>

          {/*  */}

          <h1 className="text-[16px] font-bold">Check out</h1>

          {/*  */}
          <div className="bg-white h-7.5 w-7.5 flex justify-center items-center text-2xl rounded-[8px] p-1 text-(--color-textColor1) group-hover:bg-(--color-textColor1) group-hover:text-white duration-1000">
            <GoArrowRight />
          </div>
        </button>
      </Link>
    </section>
  );
}
