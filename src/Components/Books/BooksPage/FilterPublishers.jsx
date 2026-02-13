import React from "react";

export default function FilterPublishers({ Publishers, id, t }) {
  return (
    <div className=" flex flex-col gap-2  rounded-base border border-default overflow-hidden shadow-xs">
      <header id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className=" cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
          data-accordion-target={`#accordion-collapse-body-${id}`}
          aria-expanded="true"
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span className="text-[19px] text-black">{t("Publishers")}</span>
          {/*  */}
          {/*  */}
          <svg
            data-accordion-icon
            class="w-5 h-5 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="text-(--color-textColor1)"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>
      </header>
      {/*  */}
      {/*  */}
      {/*  */}
      <div
        id={`accordion-collapse-body-${id}`}
        class="hidden px-5 py-3"
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <ul className="flex flex-col gap-2.5">
          {Publishers.map((Publisher) => {
            return (
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    // defaultChecked
                    className="checkbox checkbox-secondary rounded-xs w-4 h-4"
                  />
                  {/*  */}
                  {/*  */}
                  <label class="ms-2 text-sm text-[15px] font-medium text-heading">
                    {t(`${Publisher.name}`)}
                  </label>
                </div>
                {/*  */}
                {/*  */}
                <span className="text-[14px] text-black/60">
                  ({Publisher.Count})
                </span>
              </li>
            );
          })}
        </ul>

        {/*  */}
        {/*  */}
        {/*  */}

        <div className="pt-8 text-center text-[14px] font-semibold text-(--color-textColor1)">
          {t(`Load More`)}
        </div>
      </div>
    </div>
  );
}
