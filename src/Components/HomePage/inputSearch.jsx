//import Images
import icon1 from "../../../public/images/img11.png";
import icon2 from "../../../public/images/img12.png";

export default function InputSearch() {
  return (
    <section className="h-95  pt-70 absolute z-1  w-full flex justify-center items-center">
      <div className="join ">
        <div className="sm:w-80 w-60">
          <label className="sm:w-100 rounded-bl-full rounded-tl-full  flex flex-row-reverse input">
            <img src={icon1} className="w-5" />

            <input id="search" type="text" className="" placeholder="Search" />
          </label>
        </div>

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <button
          onClick={() => document.getElementById("search").focus()}
          className="btn sm:w-33 sm:ms-auto btn-neutral bg-[#D9176C] rounded-br-full rounded-tr-full join-item"
        >
          <img src={icon2} className="w-5 sm:ms-auto" />
        </button>
      </div>
    </section>
  );
}
