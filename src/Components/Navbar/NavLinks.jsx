//import react-router Link
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <div className="flex items-center gap-6.25">
        <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
          <Link to="/">Home</Link>
        </div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}

        <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
          <Link to="/Books">Books</Link>
        </div>

        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}

        <div className="hover:text-[#D9176C] hover:underline underline-offset-8  duration-1000">
          <Link to="/AboutUs">About us</Link>
        </div>
      </div>
    </>
  );
}
