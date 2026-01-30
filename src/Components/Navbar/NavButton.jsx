//import react-router Link
import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <>
      <Link to="/loginIn">
        <button className="btn  border-0 bg-[#D9176C] hover:bg-[#92003f] font-bold text-white rounded-lg  shadow sm:p-3 sm:text-[17px] p-2 text-md">
          Login In
        </button>
      </Link>

      {/* //////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////// */}

      <Link to="/signUp">
        <button className="btn hover:btn-outline hover:bg-[#D9176C] border-0 hover:text-white hover:text-shadow-violet-50 text-[#D9176C] font-bold  rounded-lg  shadow sm:p-3 sm:text-[17px] p-2 text-md">
          Sign Up
        </button>
      </Link>
    </>
  );
}
