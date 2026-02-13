export default function ProductDetails({ DataCustomerDetails, t }) {
  //Data Product Details
  const Products = [
    { Category: "Book Title", name: DataCustomerDetails.bookName },
    { Category: "Author", name: DataCustomerDetails.author },
    { Category: "Publication Data", name: DataCustomerDetails.publicationYear },
    { Category: "ASIN", name: DataCustomerDetails.asinCode },
    { Category: "Language", name: DataCustomerDetails.lang },
    { Category: "Publisher", name: "Printer" },
    { Category: "Pages", name: DataCustomerDetails.numberOfPages },
    { Category: "Book Format", name: DataCustomerDetails.bookFormat },
    { Category: "Best Seller Rank", name: `#${DataCustomerDetails.rate}` },
  ];

  return (
    <section className="flex flex-col gap-4  border-t border-red-500 py-9">
      {Products.map((pro, i) => {
        return (
          <div key={i} className="flex items-center gap-1.5">
            <h1 className="font-bold text-xl text-blue-950">
              {t(`${pro.Category}`)}:{}
            </h1>
            <p className=" font-normal text-[16px]">{t(`${pro.name}`)}</p>
          </div>
        );
      })}
    </section>
  );
}
