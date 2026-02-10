export default function CardHeader() {
  return (
    <header className="sm:flex hidden  xl:gap-x-75 lg:gap-x-90 md:gap-x-80 sm:gap-x-70  items-center font-bold capitalize text-(--color-textColor1) ps-20">
      <h1 className="">item</h1>

      {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\/\/\/ */}
      {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\/\/\/ */}

      <div className="flex items-center justify-center w-full xl:gap-x-40 lg:gap-x-27 md:gap-x-10 sm:gap-x-5">
        <h1 className="lg:flex hidden">Quantity</h1>
        <h1>Price</h1>
        <h1>Total Price</h1>
      </div>
    </header>
  );
}
