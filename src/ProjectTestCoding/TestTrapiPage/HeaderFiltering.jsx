export default function HeaderFiltering({ categories, setSelectCategories }) {
  function Filters(category_Name) {
    // console.log(category_Name);

    setSelectCategories((current) => {
      if (current.includes(category_Name)) {
        return current.filter((cat) => cat !== category_Name);
      }
      return [...current, category_Name];
    });
  }

  return (
    <header className="flex justify-center items-center gap-15">
      {categories.map((category) => {
        return (
          <div
            key={category?.id}
            onClick={() => Filters(category.Cat_Name)}
            className="flex flex-row items-center gap-2"
          >
            <input id="checkedBox" type="checkbox" className="w-7 h-7" />

            <label
              htmlFor="checkedBox"
              className="text-3xl font-bold text-red-600"
            >
              {category?.Cat_Name}
            </label>
          </div>
        );
      })}
    </header>
  );
}
