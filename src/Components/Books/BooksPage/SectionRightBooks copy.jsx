//import Components
import ALLBooks from "../ALLBooks";
import ALLFilters from "./ALLFilters";
import FilterCategories from "./FilterCategories";
import Sortby from "./Sortby";

export default function SectionRightBooks() {
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
  ];

  //Data Years(2)
  const Years = [
    { Year: "2026", Count: "2010", checkbox: false },
    { Year: "2025", Count: "140", checkbox: false },
    { Year: "2024", Count: "309", checkbox: false },
    { Year: "2023", Count: "102", checkbox: false },
    { Year: "2022", Count: "204", checkbox: false },
    { Year: "2021", Count: "89", checkbox: false },
    { Year: "2020", Count: "47", checkbox: false },
    { Year: "2019", Count: "163", checkbox: false },
    { Year: "2018", Count: "211", checkbox: false },
    { Year: "2017", Count: "92", checkbox: false },
  ];

  //Data Categories(1)
  const Categories = [
    { name: "All Categories", Count: "1450", checkbox: false },
    { name: "Business", Count: "140", checkbox: false },
    { name: "Kids", Count: "309", checkbox: false },
    { name: "Art", Count: "102", checkbox: false },
    { name: "History", Count: "204", checkbox: false },
    { name: "Romance", Count: "89", checkbox: false },
    { name: "Fantasy", Count: "47", checkbox: false },
    { name: "Self Help", Count: "163", checkbox: false },
    { name: "Cooking", Count: "211", checkbox: false },
    { name: "Sports", Count: "92", checkbox: false },
  ];

  {
    /* /////////////////////////////////////////////////////////////////////// */
  }
  {
    /* /////////////////////////////////////////////////////////////////////// */
  }

  return (
    <section className="flex flex-col gap-5 ">
      {/* Header Search */}
      <header className="flex md:flex-row flex-col gap-6  border-b-3">
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
        <div className="flex items-start justify-between">
          <Sortby />
          {/*  */}
          <Sortby />
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
