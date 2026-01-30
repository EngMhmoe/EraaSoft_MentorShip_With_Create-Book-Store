//import react-router Link
import { Link } from "react-router-dom";

export default function SocLinks() {
  return (
    <>
      <section className="flex items-center justify-center gap-6">
        <Link
          to="#"
          target="_blank"
          className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120"
        >
          <img src="../../public/images/img6.png" alt="" />
        </Link>

        {/*  */}

        <Link
          to="#"
          className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120"
        >
          <img src="../../public/images/img7.png" alt="" />
        </Link>

        {/*  */}

        <Link
          to="#"
          className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120"
        >
          <img src="../../public/images/img8.png" alt="" />
        </Link>

        {/*  */}

        <Link
          to="#"
          className="hover:bg-[#D9176C] p-1.5 rounded-full duration-1000 hover:scale-120"
        >
          <img src="../../public/images/img9.png" alt="" />
        </Link>
      </section>
    </>
  );
}
