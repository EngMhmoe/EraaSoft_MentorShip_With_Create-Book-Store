export default function HeaderCardANDWishListPage({ Quantity, id, t }) {
  return (
    <header
      className={
        id === 1
          ? "sm:flex hidden   xl:gap-x-75 lg:gap-x-90 md:gap-x-80 sm:gap-x-70  items-center font-bold capitalize text-(--color-textColor1) ps-20"
          : "sm:flex hidden   xl:gap-x-140 lg:gap-x-125 md:gap-x-90 sm:gap-x-70  items-center font-bold capitalize text-(--color-textColor1) ps-20"
      }
    >
      <h1 className="">{t("Item")}</h1>

      {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\/\/\/ */}
      {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\\/\/\/\/\\/\/\/\/\/\/\/\/\/\/ */}

      <div className="flex items-center justify-center w-full xl:gap-x-40 lg:gap-x-27 md:gap-x-10 sm:gap-x-5">
        <h1 className={`lg:${Quantity} hidden`}>{t("Quantity")}</h1>
        <h1>{t("Price")}</h1>
        <h1>{t("Total Price")}</h1>
      </div>
    </header>
  );
}
