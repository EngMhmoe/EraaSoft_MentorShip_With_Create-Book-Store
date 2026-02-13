//import react-icons
import { IoMdClose } from "react-icons/io";

export default function NavDialogModal({ t }) {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal bg-black/70">
        <div className="modal-box">
          <div className=" mb-5 flex items-center justify-between">
            <h1 className="text-[#D9176C]   text-2xl text-shadow-sm text-shadow-red-950">
              {t("Bookshop")}
            </h1>

            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <form method="dialog" className="text-black">
              <button className="close hover:scale-110 hover:rotate-180 duration-1000 cursor-pointer border-0 outline-0 text-2xl text-red-500">
                <IoMdClose />
              </button>
            </form>
          </div>

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          <hr className="bg-black/25 mb-5 h-0.5 " />

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          {/* LInks */}
          <section className="flex flex-col gap-5 text-black">
            <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
              <a href="/">{t("Home")}</a>
            </div>

            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
              <a href="/Books">{t("Books")}</a>
            </div>

            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
              <a href="AboutUs">{t("About us")}</a>
            </div>
          </section>
        </div>
      </dialog>
    </>
  );
}
