//import Components
import ALLBooks from "../ALLBooks";
import ALLFilters from "./ALLFilters";
import ALLFiltersScreenCol from "./ALLFiltersScreenCol";

import Sortby from "./Sortby";

export default function SectionRightBooks({ Categories, Publishers, Years }) {
  //Data AllFilters
  const AllFilters = [
    //Data Categories(1)
    "Business",
    "Kids",
    "Kids",
    "Art",
    "History",
    "Romance",
    "Fantasy",
    "Self Help",
    "Cooking",
    "Sports",

    //Data Publishers(2)
    "Paulo coelo",
    "Jane Austen",
    "Charles Dickens",
    "Mark Twain",
    "Virginia Woolf",
    "Leo Tolstoy",
    "Fyodor Dostoevsky",
    "Haruki Murakami",
    "Gabriel Márquez",
    "hinua Achebe",

    //Data Years(2)
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
  ];

  return (
    <section className="flex flex-col gap-5 ">
      {/* Header Search */}
      <header className="flex md:flex-row flex-col gap-6">
        {/* Component Input-Search UI */}

        <form className="grow">
          <label
            for="search"
            class="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
              required
            />
            <button
              type="button"
              class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* ////////////////////////////// */}
        {/* ////////////////////////////// */}
        {/* ////////////////////////////// */}

        {/* Sort by */}
        <div className="flex flex-row-reverse gap-5 items-start justify-evenly">
          <div className="sm:hidden flex items-center">
            <ALLFiltersScreenCol
              Categories={Categories}
              Publishers={Publishers}
              Years={Years}
            />
          </div>
          {/*  */}
          <div className="sm:w-full w-30">
            <Sortby />
          </div>
        </div>

        {/* ////////////////////////////// */}
        {/* ////////////////////////////// */}
        {/* ////////////////////////////// */}
      </header>

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* All Filters */}
      <div>
        {" "}
        <div className=" sm:flex hidden">
          <ALLFilters AllFilters={AllFilters} />
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ALL Books */}
      <ALLBooks />
    </section>
  );
}
