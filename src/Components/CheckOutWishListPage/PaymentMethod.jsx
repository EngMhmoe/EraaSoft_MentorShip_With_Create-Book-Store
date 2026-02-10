export default function PaymentMethod() {
  return (
    <section className="padding bg-white border-2 border-black/10  rounded-[20px] shadow p-10 flex flex-col justify-center xl:items-start  lg:items-center gap-10">
      {/* title */}
      <h1 className="font-semibold text-[18px] w-full text-(--color-textColor1)">
        Payment Method
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\\\/\/\/\//\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */}

      <div className="flex flex-row md:flex-nowrap flex-wrap w-full gap-6">
        {["Online payment", "Cash on delivery", "POS on delivery"].map(
          (el, i) => {
            return (
              <label
                key={i}
                htmlFor={i}
                className="flex flex-row items-center cursor-pointer gap-2.5 border border-black/30 rounded-[8px] h-13.5 w-full py-4 px-5 group duration-1000 hover:bg-red-100 hover:border-(--color-textColor1)"
              >
                <input
                  type="radio"
                  name="radio"
                  id={i}
                  className="border border-red-600"
                />
                {/*  */}
                <h1 className="text-[16px] font-normal group-hover:text-(--color-textColor1)">
                  {el}
                </h1>
              </label>
            );
          },
        )}
      </div>
    </section>
  );
}
