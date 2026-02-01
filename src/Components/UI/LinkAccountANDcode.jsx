//import react-router Links
import { Link } from "react-router-dom";

export default function LinkAccountANDcode({ des, link, NameLink }) {
  return (
    <div className="flex gap-2 justify-center font-bold">
      <p>{des}</p>

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      <Link to={link} className="text-[#D9176C]">
        {NameLink}
      </Link>
    </div>
  );
}
