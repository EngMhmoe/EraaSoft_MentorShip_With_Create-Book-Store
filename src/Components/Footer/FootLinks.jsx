import { Link } from "react-router-dom";

export default function FootLinks() {
  return (
    <>
      <section className="flex items-center justify-center gap-6">
        <div className="duration-1000 hover:text-[#D9176C]">
          <Link to="/">Home</Link>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className="duration-1000 hover:text-[#D9176C]">
          <Link to="/Books">Books</Link>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////// */}

        <div className=" duration-1000 hover:text-[#D9176C]">
          <Link to="/AboutUs">About us</Link>
        </div>
      </section>
    </>
  );
}
