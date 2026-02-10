import { useState } from "react";

export default function OrderSummary() {
  //State Counter
  const [Counter, setCounter] = useState(1);

  return (
    <section className="flex flex-col  gap-10 w-full">
      {/* title */}
      <h1 className="font-semibold text-[18px] text-(--color-textColor1)">
        Order Summary
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      <div className="flex flex-col  gap-10 w-full">
        {[1, 2].map((item, i) => {
          return (
            <div key={i} className="card card-side bg-base-100    h-60">
              <figure>
                <img
                  src="../../../public/images/img25.png"
                  className="img  h-fit"
                  alt="Movie"
                />
              </figure>

              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

              <div className="card-body  flex flex-col sm:flex-nowrap flex-wrap gap-7">
                <section>
                  <h2 className="card-title font-bold">
                    Rich Dad And Poor Dad
                  </h2>

                  {/*  */}

                  <p className="font-normal text-(--color-textColor1) ">
                    Author:{" "}
                    <span className="font-semibold text-black">
                      Robert T. Kiyosanki
                    </span>
                  </p>
                </section>

                <div className="flex flex-col gap-7">
                  <button className="btn w-fit   btn-outline cursor-auto  text-black/60">
                    <img
                      src={"../../../../public/images/img13.png"}
                      className="w-5"
                    />
                    Free Shipping Today
                  </button>

                  {/*  */}

                  <section className="flex justify-between items-center">
                    <h1 className="font-bold text-[24px]">$ 40</h1>

                    {/*  */}

                    {/* Counter */}
                    <section
                      className={`flex w-fit py-1 px-2  rounded-xl items-center gap-3 bg-white text-black shadow lg:sticky sm:absolute bottom-3 right-15`}
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
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
