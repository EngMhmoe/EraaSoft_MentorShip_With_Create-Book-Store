//import Components
import FootLinks from "./FootLinks";
import FootLogo from "./FootLogo";
import SocLinks from "./SocLinks";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#3B2F4A] w-full text-white sm:px-20 py-6 font-bold flex flex-col gap-4">
        <div className="flex lg:flex-row flex-col justify-between sm:items-center gap-y-7">
          {/* section left */}
          <section className="flex sm:flex-row flex-col  sm:items-center gap-6 ">
            {/* FooterLogo Component  */}
            <FootLogo />

            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            {/* FooterLinks Component  */}
            <FootLinks />
          </section>

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          {/* section right */}
          <section>
            {/* SocLinks Component */}
            <SocLinks />
          </section>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <hr className="text-white/15" />

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className="flex lg:flex-row flex-col-reverse gap-5 items-center justify-between">
          <p className="font-normal text-center">
            Developed By EraaSoft All Copy Rights Reserved @2024
          </p>

          <div className="flex items-center gap-4">
            <img src="../../public/images/img10.png" alt="" />

            <select
              name=""
              id=""
              className="border rounded-lg py-1 px-5 bg-[#3B2F4A] text-[#D9176C] font-bold hover:text-violet-300"
            >
              <option value="en">English</option>
              <option value="ar">Aribc</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
}
