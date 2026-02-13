//import Component InputSubmit UI
import InputSubmit from "../UI/InputSubmit";

//import icons
import icon1 from "../../../public//images/img28.png";
import icon2 from "../../../public//images/img29.png";
import icon3 from "../../../public//images/img30.png";

//import Lottie animations
import Lottie from "lottie-react";
import doneMass from "../../../public/animations/Check okey done.json";

//import useForm
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";

export default function FormContact({ t }) {
  const [state, handleSubmit] = useForm("xbdklzvd");

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex items-center gap-6">
        {" "}
        <label className="input bg-transparent border-2 border-white/15 text-white">
          <img src={icon1} alt="user" className="w-4 h-4 " />
          <input
            required
            type="text"
            name="Name"
            className="grow"
            placeholder={t("Name")}
          />

          <ValidationError prefix="Name" field="Name" errors={state.errors} />
        </label>
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        <label className="input bg-transparent border-2 border-white/15 text-white">
          <img src={icon2} alt="Email" className="w-4 h-4 " />
          <input
            required
            name="email"
            type="email"
            className="grow"
            placeholder={t("Email Address")}
          />

          <ValidationError prefix="email" field="email" errors={state.errors} />
        </label>
      </div>
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      <div className="">
        <img src={icon3} alt="user" className="w-4 h-4 absolute mt-2.5 ms-3" />

        <textarea
          required
          name="Massage"
          placeholder={t("Your Massage")}
          className="w-full h-38 textarea textarea-secondary bg-transparent text-white ps-9"
        />

        <ValidationError
          prefix="Massage"
          field="Massage"
          errors={state.errors}
        />
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="w-70 m-auto">
        <button
          type="submit"
          className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25"
        >
          {t("Send Massage")}
        </button>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {state.succeeded && (
        <div className="text-white flex items-center mt-10">
          <Lottie loop={false} animationData={doneMass} className="w-12" />

          <p className="text-xl"> {t("The message was sent successfully")}</p>
        </div>
      )}
    </form>
  );
}
