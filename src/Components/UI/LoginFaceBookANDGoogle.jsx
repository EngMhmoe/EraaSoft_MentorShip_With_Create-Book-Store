//import react-router Links
import { Link } from "react-router-dom";

export default function LoginFaceBookANDGoogle({ NameGoogle, NameFaceBook }) {
  return (
    <div className="flex flex-col flex-wrap gap-6 ">
      <p className="m-auto">Or</p>

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      <div className="Buttons flex sm:flex-nowrap flex-wrap   gap-3">
        <Link to="#" target="_blank" className="w-full button">
          <button className="btn hover:bg-white-80 bg-white text-black w-full shadow rounded-[8px] py-[12px]">
            {NameGoogle}
            {/* //////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////// */}
            <img src="../../public/images/img4.png" alt="" />
          </button>
        </Link>

        {/* //////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////// */}

        <Link to="#" target="_blank" className="w-full button">
          {/* Facebook */}
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full">
            {NameFaceBook}

            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
