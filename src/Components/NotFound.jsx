//import react-router Link
import { Link } from "react-router-dom";

import FuzzyText from "../ReactBits/FuzzyText";

export default function NotFound() {
  return (
    <>
      <section className="bg-black text-white h-dvh flex flex-col justify-center items-center gap-5">
        <FuzzyText baseIntensity={0.14} hoverIntensity={0} enableHover>
          404
        </FuzzyText>

        <FuzzyText baseIntensity={0.14} hoverIntensity={0} enableHover>
          isNot Found
        </FuzzyText>

        <Link to="/" className="text-red-500 text-xl  underline">
          Convert Home Page
        </Link>
      </section>
    </>
  );
}
