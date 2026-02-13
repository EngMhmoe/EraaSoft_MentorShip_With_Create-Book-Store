import { Link } from "react-router-dom";

export default function FootLinks({ t }) {
  return (
    <>
      <section className="flex items-center justify-center gap-6">
        <div className="duration-1000 hover:text-[#D9176C]">
          <Link to="/">{t("Home")}</Link>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className="duration-1000 hover:text-[#D9176C]">
          <Link to="/Books">{t("Books")}</Link>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className=" duration-1000 hover:text-[#D9176C]">
          <Link to="/AboutUs">{t("About us")}</Link>
        </div>
      </section>
    </>
  );
}
