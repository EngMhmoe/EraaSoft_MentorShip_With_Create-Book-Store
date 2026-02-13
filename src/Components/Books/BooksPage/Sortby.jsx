export default function Sortby({ t }) {
  return (
    <form class="md:max-w-fit">
      <select
        id="countries"
        class="block w-full px-3 py-2.5 cursor-pointer bg-neutral-secondary-medium border border-default-medium text-(--color-textColor1) text-sm rounded-base focus:ring-(--color-textColor1) focus:border-(--color-textColor1) shadow-xs placeholder:text-body"
      >
        <option selected className="text-black">
          {t("Sort by")}
        </option>
        <option value="US" className="text-black">
          {t("Price")}: {t("high to High")}
        </option>
        <option value="CA" className="text-black">
          {t("Price")}: {t("high to low")}
        </option>
        <option value="FR" className="text-black">
          {t("Publication Date")}
        </option>

        <hr />

        <option value="DE" className="text-black">
          {t("Best Seller")}
        </option>
      </select>
    </form>
  );
}
