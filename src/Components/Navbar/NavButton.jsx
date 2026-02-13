//import Hooks react js
import { useEffect, useState } from "react";

//import react-router Link
import { Link, useNavigate } from "react-router-dom";

//import token TokenStore
import { UseTokenStore } from "../../store/UseTokenStore";

//import react-icons
import { FaClock, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

//import motion
import { motion } from "motion/react";
import { useUserStore } from "../../store/useUserStore";

export default function NavButton({ scrolllNav, t }) {
  //token TokenStore
  const Token = UseTokenStore((states) => states.token);

  const Navigate = useNavigate();

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  //State CartCount (1)
  const [CartCount, setCartCount] = useState(0);

  //Function Calc getCartCount (2)
  function getCartCount() {
    const Cart = JSON.parse(localStorage.getItem("Carts")) || [];

    const Total = Cart.reduce((total, item) => total + item.quantity, 0);

    return Total;
  }

  //useEffect getCartCount (3)
  useEffect(() => {
    setCartCount(getCartCount());
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  //State WishListCount (1)
  const [WishListCount, setWishListCount] = useState(0);

  //Function Calc WishListCount (2)
  function getWishListCount() {
    const WishList = JSON.parse(localStorage.getItem("WishList")) || [];

    const Total = WishList.reduce((total, item) => total + item.quantity, 0);

    return Total;
  }

  //useEffect getCartCount (3)
  useEffect(() => {
    setWishListCount(getWishListCount);
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  //Data User
  const DataUser = useUserStore((state) => state.user);

  return (
    <>
      {Token === null ? (
        <div className="flex items-center gap-3">
          <Link to="/loginIn">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="btn  border-0 bg-[#D9176C] hover:bg-[#92003f] font-bold text-white rounded-lg  shadow sm:p-3 sm:text-[17px] p-2 text-md"
            >
              {t("Login In")}
            </motion.button>
          </Link>

          {/* //////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////// */}

          <Link to="/signUp">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5 }}
              className="btn hover:btn-outline hover:bg-[#D9176C] border-0 hover:text-white hover:text-shadow-violet-50 text-[#D9176C] font-bold  rounded-lg  shadow sm:p-3 sm:text-[17px] p-2 text-md"
            >
              {t("Sign Up")}
            </motion.button>
          </Link>
        </div>
      ) : (
        <section className="flex items-center sm:gap-8 gap-2">
          <Link to="/WishList">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="sm:size-[2.2em] size-[1.5em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                {/*  */}
                {WishListCount > 0 && (
                  <span className="badge badge-xs sm:text-[17px] text-[15px] py-2.5 rounded-full badge-error indicator-item text-white font-bold">
                    {WishListCount}
                  </span>
                )}
              </div>
            </motion.button>
          </Link>

          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          <Link to="/Carts">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5 }}
              className="btn btn-ghost hover:bg-white/40  border-0 btn-circle"
            >
              <div className="indicator">
                <img
                  src={"../../../public/images/img26.png"}
                  className="sm:size-[2.5em] bg-black rounded-full p-1"
                  alt=""
                />
                {/*  */}
                {CartCount > 0 && (
                  <span className="badge badge-xs sm:text-[17px] text-[15px] py-2.5 rounded-full badge-error indicator-item text-white font-bold">
                    {CartCount}
                  </span>
                )}
              </div>
            </motion.button>
          </Link>

          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////// */}

          {/* My Img */}
          <div className="dropdown dropdown-center dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer flex items-center gap-3"
            >
              <div className=" avatar avatar-online avatar-placeholder">
                <div className="bg-neutral text-neutral-content sm:w-16 w-10 rounded-full">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    // src={DataUser.image}
                    src="../../../public/images/myPhoto-دائره.png"
                    alt=""
                  />
                </div>
              </div>

              {/* /////////////////////// */}
              {/* /////////////////////// */}

              <div className="">
                {/* first name && last name */}
                <h1
                  className={
                    scrolllNav
                      ? "text-(--color-textColor1) capitalize"
                      : "capitalize"
                  }
                >
                  {t(`${DataUser.first_name}`)} {t(`${DataUser.last_name}`)}
                </h1>

                {/* ////////////////////////////////// */}
                {/* ////////////////////////////////// */}

                {/* Email */}
                <h1
                  className={
                    scrolllNav
                      ? "text-black/50 font-normal sm:text-[16px] text-2xs"
                      : "text-white/60 font-normal sm:text-[16px] text-2xs"
                  }
                >
                  {DataUser.email}
                </h1>
              </div>
            </div>

            {/* \/\/\/\/\/\//\/\/\/\/\/\//\/\/ */}
            {/* \/\/\/\/\/\//\/\/\/\/\/\//\/\/ */}

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black"
            >
              <li>
                <Link to="/Profile">
                  <FaUser className="text-(--color-textColor1) text-lg" />
                  <h1>{t("Profile")}</h1>
                </Link>
              </li>
              {/*  */}
              <li>
                <Link to="/HistoryAll">
                  <FaClock className="text-(--color-textColor1) text-lg" />
                  <h1>{t("Order History")}</h1>
                </Link>
              </li>
              {/*  */}
              <li>
                <Link to="/Address">
                  <FaLocationDot className="text-(--color-textColor1) text-lg" />
                  <h1>{t("Address")}</h1>
                </Link>
              </li>
              {/*  */}
              <li>
                <Link to="/Help">
                  <IoIosHelpCircle className="text-(--color-textColor1) text-xl" />
                  <h1>{t("Help")}</h1>
                </Link>
              </li>
              {/*  */}
              <li>
                <button
                  // to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    Navigate("/");
                    window.location.reload();
                  }}
                >
                  <FiLogOut className="text-(--color-textColor1) text-lg font-bold" />
                  <h1>{t("Log Out")}</h1>
                </button>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
