//import Icons
import icon1 from "../../../../public/images/img34.png";

//import Components
import FilterCategories from "./FilterCategories";
import FilterPublishers from "./FilterPublishers";
import FilterYears from "./FilterYears";

export default function SectionLeftFilters({
  Categories,
  Publishers,
  Years,
  t,
}) {
  return (
    <section className="md:w-70 w-60 mb-10 hidden sm:flex flex-col gap-8 font-normal">
      {/* Title(1) */}
      <header className=" flex flex-row items-center justify-start gap-4 font-bold">
        <img src={icon1} className="w-6 h-6" />
        {/*  */}
        <h1 className="text-[24px] text-(--color-textColor1)">
          {t("Filters")}
        </h1>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ALL Categories && Publisher && Year */}
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        class="flex flex-col gap-8 rounded-base border border-default overflow-hidden shadow-xs"
      >
        {/* Categories(1) */}
        <FilterCategories
          name={"Categories"}
          id={1}
          Categories={Categories}
          t={t}
        />
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* Publishers(2) */}
        <FilterPublishers id={2} Publishers={Publishers} t={t} />

        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}

        {/* Years(3) */}
        <FilterYears id={3} Years={Years} t={t} />
      </div>
    </section>
  );
}
