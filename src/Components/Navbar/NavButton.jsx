//import react-router Link
import { Link, Links } from "react-router-dom";

//import Icons
import icon1 from "../../../public/images/img26.png";

// //import token ContextProvider
// import { useContext } from "react";
// import { TokenCreateContext } from "../../Contexts/TokenProvider";

//import token TokenStore
import { UseTokenStore } from "../../store/UseTokenStore";

export default function NavButton() {
  //token useContext
  // const { Token2 } = useContext(TokenCreateContext);

  //token TokenStore
  const Token = UseTokenStore((states) => states.token);

  return (
    <>
      {Token === null ? (
        <div className="flex items-center gap-3">
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
        </div>
      ) : (
        <section className="flex items-center gap-6">
          <Link to="/WishList">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[2.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                {/*  */}
                <span className="badge badge-xs text-[17px] py-2.5 rounded-full badge-error indicator-item text-white font-bold">
                  3
                </span>
              </div>
            </button>
          </Link>

          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          <Link to="/Carts">
            <button className="btn btn-ghost hover:bg-white/40 border-0 btn-circle">
              <div className="indicator">
                <img src={icon1} className="size-[2.2em]" alt="" />
                {/*  */}
                <span className="badge badge-xs text-[17px] py-2.5 rounded-full badge-error indicator-item text-white font-bold">
                  5
                </span>
              </div>
            </button>
          </Link>

          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          <Link to="/Profile">
            <div className=" cursor-pointer avatar avatar-online avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-16 rounded-full">
                <img src="../../../public/images/myPhoto-دائره.png" alt="" />
              </div>
            </div>
          </Link>
        </section>
      )}
    </>
  );
}
