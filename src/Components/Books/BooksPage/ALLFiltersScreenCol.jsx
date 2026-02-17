export default function ALLFiltersScreenCol({
  Categories,
  Years,
  setSelectCategory,
  setSelectYears,
  ///\/\/\/\/\/\/\/\/\/\/\/\
  Publishers,
  t,
}) {
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  function FiltersCategories(selectCategory_name) {
    setSelectCategory((current) => {
      if (current.includes(selectCategory_name)) {
        return current.filter((cat) => cat !== selectCategory_name);
      }

      return [...current, selectCategory_name];
    });
  }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  function FilterYears(selectYear) {
    setSelectYears((current) => {
      if (current.includes(selectYear)) {
        return current.filter((Year) => Year !== selectYear);
      }

      return [...current, selectYear];
    });
  }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="multi-dropdown"
        class="w-30 inline-flex items-center justify-between text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-lg px-4 py-2.5 focus:outline-none"
        type="button"
      >
        {t("Filters")}
        <svg
          class="w-4 h-4 ms-1.5 -me-0.5"
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
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <!-- Dropdown menu --> */}
      <div
        id="multi-dropdown"
        class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
      >
        <ul
          class="p-2 text-sm text-body font-medium"
          aria-labelledby="multiLevelDropdownButton"
        >
          {/* Categories */}
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="Categories"
              data-dropdown-placement="right-start"
              type="button"
              class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              {t("Categories")}
              {/*  */}
              <svg
                class="h-4 w-4 ms-auto rtl:rotate-180"
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>

            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}

            <div
              id="Categories"
              class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            >
              <ul
                class="p-2 text-sm text-body font-medium"
                aria-labelledby="doubleDropdownButton"
              >
                {Categories.map((cat) => {
                  return (
                    <li
                      onClick={() => FiltersCategories(cat.category_name)}
                      key={cat.documentId}
                    >
                      <button
                        // href="#"
                        class=" cursor-pointer inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        {t(`${cat.category_name}`)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* ////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////// */}

          {/* Publishers */}
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="Publishers"
              data-dropdown-placement="right-start"
              type="button"
              class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              {t("Publishers")}
              {/*  */}
              <svg
                class="h-4 w-4 ms-auto rtl:rotate-180"
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>

            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}

            <div
              id="Publishers"
              class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            >
              <ul
                class="p-2 text-sm text-body font-medium"
                aria-labelledby="doubleDropdownButton"
              >
                {Publishers.map((Publisher, i) => {
                  return (
                    <li key={i}>
                      <button
                        // href="#"
                        class=" cursor-pointer inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        {t(`${Publisher.name}`)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* ////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////// */}

          {/* Years */}
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="Years"
              data-dropdown-placement="right-start"
              type="button"
              class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
            >
              {t("Years")}
              {/*  */}
              <svg
                class="h-4 w-4 ms-auto rtl:rotate-180"
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>

            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////// */}

            <div
              id="Years"
              class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
            >
              <ul
                class="p-2 text-sm text-body font-medium"
                aria-labelledby="doubleDropdownButton"
              >
                {Years.map((Year) => {
                  return (
                    <li
                      onClick={() => FilterYears(Year.category_Year)}
                      key={Year.documentId}
                    >
                      <button
                        // href="#"
                        class=" cursor-pointer inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        {t(`${Year.category_Year}`)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
