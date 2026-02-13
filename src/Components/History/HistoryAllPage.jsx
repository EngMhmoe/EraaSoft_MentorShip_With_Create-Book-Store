//import Component UI
import { Link } from "react-router-dom";
import Img from "../UI/Img";

//import Icons
import { MdOutlineDeleteForever } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

import { motion } from "motion/react";

//import useTranslation i18next
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function HistoryAllPage() {
  //value ar
  const { t } = useTranslation();

  //Data HistoryAllPage
  const [HistoryAll, setHistoryAll] = useState([
    //Data In Progress (1)
    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step  font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}{" "}
            </span>
          </li>
        </ul>
      ),
    },

    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}
            </span>
          </li>
        </ul>
      ),
    },

    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}
            </span>
          </li>
        </ul>
      ),
    },
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    //Data Completed (2)
    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    //Data Canceled (3)
    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },
  ]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [Copy] = useState([
    //Data In Progress (1)
    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step  font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}{" "}
            </span>
          </li>
        </ul>
      ),
    },

    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}
            </span>
          </li>
        </ul>
      ),
    },

    {
      DeleteIcon: (
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => alert()}
        >
          <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
        </div>
      ),

      status: "In Progress",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <ul className="steps  w-full">
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold text-(--color-textColor1)">
              {t("Order Placed")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Shipping")}
            </span>
          </li>
          {/*  */}
          <li className="step step-secondary font-bold" data-content="✓">
            <span className="sm:text-[20px] font-semibold  text-black/30">
              {t("Completed")}
            </span>
          </li>
        </ul>
      ),
    },
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    //Data Completed (2)
    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Completed",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    ///\/\\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\\\/\/\/\/\/\/\/\\/\/
    //Data Canceled (3)
    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },

    {
      status: "Canceled",

      NumberOrder: "123456",

      Date: "jul, 31 2024",

      Address: "Maadi, Cairo, Egypt.",

      ProgressSteps: (
        <Link
          to={"/"}
          className="flex items-center gap-6 text-(--color-textColor1) font-bold text-[22px]"
        >
          <h1>{t("View order detail")}</h1>

          <GoArrowRight className="font-bold " />
        </Link>
      ),
    },
  ]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function RemoveItem(selectIndex) {
    const Copy = [...HistoryAll];

    Copy.splice(selectIndex, 1);

    setHistoryAll(Copy);
  }

  //FUnction Filters All (1)
  function FiltersAll() {
    // const Sta = HistoryAll.filter((item) => item);

    setHistoryAll(Copy);
  }

  //FUnction Filters In Progress (2)
  function FiltersInProgress() {
    const InProgress = Copy.filter((item) => item.status === "In Progress");

    setHistoryAll(InProgress);
  }

  //FUnction Filters Completed (2)
  function FiltersCompleted() {
    const Completed = Copy.filter((item) => item.status === "Completed");

    setHistoryAll(Completed);
  }

  //FUnction Filters Canceled
  2;
  function FiltersCanceled() {
    const Canceled = Copy.filter((item) => item.status === "Canceled");

    setHistoryAll(Canceled);
  }

  return (
    <section>
      {/* Component Img */}
      <Img size={38} />

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <div className="pt-45 pb-31.75  sm:mx-10 mx-2">
        {/* component Filters Header */}
        <section className="flex flex-row flex-wrap justify-center items-center gap-6 ">
          <button
            onClick={FiltersAll}
            className="btn bg-(--color-textColor1) text-white font-bold duration-1000 border border-(--color-textColor1) rounded-[8px] hover:text-(--color-textColor1) hover:bg-red-100"
          >
            {t("ALL")}
          </button>

          {/*  */}

          <button
            onClick={FiltersInProgress}
            className="btn bg-(--color-textColor1) text-white font-bold duration-1000 border border-(--color-textColor1) rounded-[8px] hover:text-(--color-textColor1) hover:bg-red-100"
          >
            {t("In Progress")}
          </button>

          {/*  */}

          <button
            onClick={FiltersCompleted}
            className="btn bg-(--color-textColor1) text-white font-bold duration-1000 border border-(--color-textColor1) rounded-[8px] hover:text-(--color-textColor1) hover:bg-red-100"
          >
            {t("Completed")}
          </button>

          {/*  */}

          <button
            onClick={FiltersCanceled}
            className="btn bg-(--color-textColor1) text-white font-bold duration-1000 border border-(--color-textColor1) rounded-[8px] hover:text-(--color-textColor1) hover:bg-red-100"
          >
            {t("Canceled")}
          </button>
        </section>

        {/* /\/\/\/\\/\/\/\//\/\/\/\///\/\/\/\\/\/\/\/\/\/\/\/\\/\/\/\\/\/\/\/\/\/\\//\/\/\/\ */}
        {/* /\/\/\/\\/\/\/\//\/\/\/\///\/\/\/\\/\/\/\/\/\/\/\/\\/\/\/\\/\/\/\/\/\/\\//\/\/\/\ */}
        {/* /\/\/\/\\/\/\/\//\/\/\/\///\/\/\/\\/\/\/\/\/\/\/\/\\/\/\/\\/\/\/\/\/\/\\//\/\/\/\ */}

        {/* component Data HistoryAllPage */}
        <section className="my-6.5 flex flex-col gap-4">
          {HistoryAll.map((HistoryAll, i) => {
            return (
              <motion.section
                initial={{
                  scale: 0,
                  transform: "translateX(-900px)",
                  marginBottom: "200px",
                }}
                animate={{
                  scale: 1,
                  transform: "translateX(0px)",
                  marginBottom: "0px",
                }}
                transition={{ duration: 1.5 }}
                key={i}
                className="flex flex-col  gap-10 w-full border-2 border-black/10 bg-white shadow rounded-[20px] pt-6 pb-10 px-6"
              >
                {/* Component HistoryAll Data */}
                <section className="flex flex-col  gap-6">
                  {/* Icon Delete */}
                  <div
                    className="flex justify-end cursor-pointer"
                    // onClick={() => RemoveItem(i)}
                    onClick={() => RemoveItem(i)}
                  >
                    <MdOutlineDeleteForever className="text-(--color-textColor1) text-3xl" />
                  </div>

                  {/* /////////////////////////// */}
                  {/* /////////////////////////// */}

                  {/* Data */}
                  <div className="flex flex-col  gap-4">
                    {/* Row 1 */}
                    <section className="flex flex-row justify-between items-center text-[20px]">
                      <h1 className="font-normal  text-black/30">
                        {" "}
                        {t("Order No")}.
                      </h1>
                      {/*  */}
                      <h2 className="text-black font-semibold ">
                        #{t(`${HistoryAll.NumberOrder}`)}
                      </h2>
                    </section>

                    {/*  */}

                    {/* Row 2 */}
                    <section className="flex flex-row justify-between items-center text-[20px]">
                      <h1 className="font-normal  text-black/30">
                        {t(`Status`)}
                      </h1>
                      {/*  */}
                      <h2 className="text-black font-semibold ">
                        {t(`${HistoryAll.status}`)}
                      </h2>
                    </section>

                    {/*  */}

                    {/* Row 3 */}
                    <section className="flex flex-row justify-between items-center text-[20px]">
                      <h1 className="font-normal  text-black/30">
                        {t(`Date`)}
                      </h1>
                      {/*  */}
                      <h2 className="text-black font-semibold ">
                        {t(`${HistoryAll.Date}`)}
                      </h2>
                    </section>

                    {/*  */}

                    {/* Row 4 */}
                    <section className="flex flex-row justify-between items-center text-[20px]">
                      <h1 className="font-normal  text-black/30">
                        {t(`Address`)}
                      </h1>
                      {/*  */}
                      <h2 className="text-black font-semibold sm:text-[20px] text-[15px]">
                        {t(`${HistoryAll.Address}`)}
                      </h2>
                    </section>
                  </div>
                </section>

                {/* \/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
                {/* \/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

                {/* Component HistoryAll footer */}
                <section className="w-full overflow-x-auto">
                  {HistoryAll.ProgressSteps}
                </section>
              </motion.section>
            );
          })}
        </section>
      </div>
    </section>
  );
}
