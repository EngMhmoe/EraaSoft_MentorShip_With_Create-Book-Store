//import Component UI
import Img from "../../UI/Img";

//import Components
import SectionLeftFilters from "./SectionLeftFilters";
import SectionRightBooks from "./SectionRightBooks";

export default function BooksPage() {
  const Categories = [
    { name: "All Categories", Count: "1450" },
    { name: "Business", Count: "140" },
    { name: "Kids", Count: "309" },
    { name: "Art", Count: "309" },
    { name: "History", Count: "102" },
    { name: "Romance", Count: "204" },
    { name: "Fantasy", Count: "89" },
    { name: "Self Help", Count: "47" },
    { name: "Cooking", Count: "211" },
    { name: "Sports", Count: "92" },
  ];

  const Publishers = [
    { name: "Paulo coelo", Count: "210" },
    { name: "Jane Austen", Count: "140" },
    { name: "Charles Dickens", Count: "309" },
    { name: "Mark Twain", Count: "102" },
    { name: "Virginia Woolf ", Count: "204" },
    { name: "Leo Tolstoy", Count: "89" },
    { name: "Fyodor Dostoevsky", Count: "47" },
    { name: "Haruki Murakami", Count: "211" },
    { name: "Gabriel Márquez", Count: "92" },
    { name: "Chinua Achebe", Count: "92" },
  ];

  const Years = [
    { Year: "2026", Count: "210" },
    { Year: "2025", Count: "140" },
    { Year: "2024", Count: "309" },
    { Year: "2023", Count: "102" },
    { Year: "2022 ", Count: "204" },
    { Year: "2021", Count: "89" },
    { Year: "2020", Count: "47" },
    { Year: "2019", Count: "211" },
    { Year: "2018", Count: "92" },
    { Year: "2017", Count: "92" },
  ];
  return (
    <section>
      {/* Component Img */}
      <Img size={30} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <div className="flex pt-50 gap-6 mx-5 font-bold">
        {/* Section Left Component Filters */}
        <section className=" hidden sm:flex  row-span-1">
          <SectionLeftFilters
            Categories={Categories}
            Publishers={Publishers}
            Years={Years}
          />
        </section>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Section Right Component Filters */}
        <section className=" xl:w-246 w-25 mb-10 grow">
          <SectionRightBooks
            Categories={Categories}
            Publishers={Publishers}
            Years={Years}
          />
        </section>
      </div>
    </section>
  );
}
