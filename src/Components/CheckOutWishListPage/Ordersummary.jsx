//
import { UseDomainStore } from "../../store/Domain";

export default function OrderSummary({ Order, t }) {
  //
  const domain = UseDomainStore((state) => state.domain);

  return (
    <section className="flex flex-col  gap-10 w-full">
      {/* title */}
      <h1 className="font-semibold text-[18px] text-(--color-textColor1)">
        {t("Order Summary")}
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      <div className="flex flex-col  gap-10 w-full">
        {Order.map((item) => {
          return (
            <div
              key={item.documentId}
              className="card card-side bg-base-100    h-60"
            >
              <figure>
                <img
                  src={domain + item?.bookImage?.url}
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
                    {t(`${item.bookName}`)}
                  </h2>

                  {/*  */}

                  <p className="font-normal text-(--color-textColor1) ">
                    {t("Author")}:{" "}
                    <span className="font-semibold text-black">
                      {t(`${item.author}`)}{" "}
                    </span>
                  </p>
                </section>

                <div className="flex flex-col gap-7">
                  <button className="btn w-fit   btn-outline cursor-auto  text-black/60">
                    {t("Free Shipping Today")}
                    <img
                      src={"../../../../public/images/img13.png"}
                      className="w-5"
                    />
                  </button>

                  {/*  */}

                  <section className="flex justify-between items-center">
                    <h1 className="font-bold text-[24px]">
                      $ {t(`${Math.ceil(item.final_price)}`)}
                    </h1>

                    {/*  */}

                    {/* Counter */}
                    <section
                      className={`flex w-fit py-1 px-2  rounded-xl items-center gap-3 bg-white text-black shadow lg:sticky sm:absolute bottom-3 right-15`}
                    >
                      <button
                        disabled
                        className="rounded-full btn   btn-error text-white  text-4xl text-center flex items-center justify-center h-8 w-1 pb-2"
                      >
                        -
                      </button>

                      {/*  */}

                      <h1 className=" font-bold text-xl">{item.quantity}</h1>

                      {/*  */}

                      <button
                        disabled
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
