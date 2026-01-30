export default function Input() {
  return (
    <section className=" absolute z-1 top-[30%] w-full flex justify-center">
      <div className="join">
        <div className="sm:w-80 w-60">
          <label className="rounded-bl-full rounded-tl-full  flex flex-row-reverse input">
            <img src="../../public/images/img11.png" className="w-5" />

            <input id="search" type="text" placeholder="Search" />
          </label>
        </div>

        <button
          onClick={() => document.getElementById("search").focus()}
          className="btn btn-neutral bg-[#D9176C] rounded-br-full rounded-tr-full join-item"
        >
          <img src="../../public/images/img12.png" className="w-5" />
        </button>
      </div>
    </section>
  );
}
