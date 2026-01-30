//import react-icons
import { IoMenuOutline } from "react-icons/io5";

export default function NavIconMenubar() {
  return (
    <>
      <div onClick={() => document.getElementById("my_modal_1").showModal()}>
        <IoMenuOutline />
      </div>
    </>
  );
}
