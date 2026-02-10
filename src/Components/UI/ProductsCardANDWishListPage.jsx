import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function ProductsCardANDWishListPage({ DataCarts, counter }) {
  //State Counter
  const [Counter, setCounter] = useState(1);

  return (
    <section className="flex flex-col gap-2 ">
      {DataCarts.map((item, i) => {
        return (
          <div
            key={i}
            className="card card-side bg-base-100 shadow-lg border-2 border-black/10  p-6 flex sm:flex-row  flex-col  gap-6"
          >
            {/* section Left */}
            <figure>
              <img
                src={item.img}
                className="w-43.25 h-63.25 object-fit-cover"
                alt="Movie"
              />
            </figure>

            {/*  */}
            {/*  */}

            {/* <section className="flex xl:flex-row flex-col gap-y-10"> */}
            <div className="flex flex-col justify-between  sm:gap-y-0 gap-y-10 sm:w-80">
              <section className="flex flex-col  gap-1">
                <h1 className="card-title font-bold text-(--color-textColor1)">
                  {item.NameBook}
                </h1>
                {/*  */}
                <h2 className="font-bold">
                  <span className="font-normal text-black/50">Author:</span>{" "}
                  {item.Author}
                </h2>
                {/*  */}
                <p className="font-normal text-black/50 w-full ">{item.des}</p>
              </section>
              {/*  */}
              {/*  */}
              <button className="btn w-fit   btn-outline cursor-auto  text-black/60">
                <img
                  src={"../../../../public/images/img13.png"}
                  className="w-5"
                />
                Free Shipping Today
              </button>
              {/*  */}
              {/*  */}
              <h3 className="font-normal text-black/50">
                <span className="font-bold text-(--color-textColor1)">
                  ASIN :
                </span>{" "}
                {item.ASIN}
              </h3>
            </div>

            {/*  */}
            {/*  */}

            {/* section right */}
            <div className="flex items-center justify-center xl:gap-33 lg:gap-15 md:gap-10 sm:gap-5 gap-5 my-auto sm:ms-auto font-bold lg:text-[30px] md:text-[25px] text-[20px]">
              {/* Counter */}
              <section
                className={`${counter} py-1 px-2  rounded-xl items-center gap-3 bg-white text-black shadow lg:sticky sm:absolute bottom-3 right-15`}
              >
                <button
                  onClick={() => {
                    Counter > 0 && setCounter(Counter - 1);
                  }}
                  className="rounded-full btn   btn-error text-white  text-4xl text-center flex items-center justify-center h-8 w-1 pb-2"
                >
                  -
                </button>

                {/*  */}

                <h1 className=" font-bold text-xl">{Counter}</h1>

                {/*  */}

                <button
                  onClick={() => {
                    Counter < 9 && setCounter(Counter + 1);
                  }}
                  className="rounded-full btn  btn-error text-white text-4xl text-center flex items-center justify-center h-8 w-5 pb-2"
                >
                  +
                </button>
              </section>

              {/*  */}

              {/* Price */}
              <h1 className="">$ {item.Price}</h1>

              {/*  */}

              {/* Total Price */}
              <h2>$ {item.TotalPrice}</h2>

              {/*  */}

              {/* Delete */}
              <h3 className="text-(--color-textColor1) cursor-pointer md:sticky sm:absolute bottom-5 right-3  lg:text-[30px] md:text-[25px] text-[30px] ">
                <MdOutlineDeleteForever />
              </h3>
            </div>
            {/* </section> */}
          </div>
        );
      })}
    </section>
  );
}
