//import react-router Link
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="bg-black text-white h-dvh flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl capitalize">isNot Found</h1>

        <Link to="/" className="text-red-500 text-xl  underline">
          Convert Home Page
        </Link>
      </section>
    </>
  );
}
