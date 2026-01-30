//import react-router Links
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="m-auto">Or</p>

      <div className="Buttons flex  gap-3">
        <Link to="#" target="_blank" className="w-full button">
          {" "}
          <button className="btn hover:bg-white-80 bg-white text-black w-full shadow rounded-[8px] py-[12px]">
            <img src="../../public/images/img4.png" alt="" />
            Google
          </button>
        </Link>

        <Link to="#" target="_blank" className="w-full button">
          <button className="btn hover:bg-white-80 bg-white text-black w-full shadow rounded-[8px] py-[12px]">
            <img src="../../public/images/img5.png" alt="" />
            Facebook
          </button>
        </Link>
      </div>
    </div>
  );
}
