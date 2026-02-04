export default function ProductDetails() {
  //Data Product Details
  const Products = [
    { Category: "Book Title", name: "Rich Dad And Poor Dad" },
    { Category: "Author", name: "Robert T.Kiyosaki" },
    { Category: "Publication Data", name: "1997" },
    { Category: "ASIN", name: "BO9TWSRMCB" },
    { Category: "ASIN", name: "BO9TWSRMCB" },
    { Category: "Language", name: "English" },
    { Category: "Publisher", name: "Printer" },
    { Category: "Pages", name: "366" },
    { Category: "Book Format", name: "Hard Cover" },
    { Category: "Best Seller Rank", name: "#3" },
  ];

  return (
    <section className="flex flex-col gap-4  border-t border-red-500 py-9">
      {Products.map((pro, i) => {
        return (
          <div key={i} className="flex items-center gap-1.5">
            <h1 className="font-bold text-xl text-blue-950">{pro.Category}:</h1>
            <p className=" font-normal text-[16px]">{pro.name}</p>
          </div>
        );
      })}
    </section>
  );
}
