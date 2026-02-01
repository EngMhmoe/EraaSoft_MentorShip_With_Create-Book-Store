//import Components
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavButton from "./NavButton";
import NavIconMenubar from "./NavIconMenubar";
import NavDialogModal from "./NavDialogModal";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-screen z-999 bg-black/60 text-white  sm:px-35 sm:py-6 px-10 py-6 flex justify-between items-center font-bold">
        <section className="flex lg:hidden text-3xl cursor-pointer">
          {/* NavIconMenubar Component */}
          <NavIconMenubar />

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          {/* NavDialogModal Component */}
          <NavDialogModal />
        </section>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        {/* section left */}
        <section className="lg:flex items-center gap-6.25 hidden">
          {/* NavLogo Component */}
          <NavLogo />

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          <div className="border h-7"></div>

          {/* NavLinks Component */}
          <NavLinks />
        </section>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        {/* section right */}
        <section className="flex items-center gap-3">
          <NavButton />
        </section>
      </nav>
    </>
  );
}
