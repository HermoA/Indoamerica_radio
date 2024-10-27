import Logo from "../assets/logo_i_nega.svg";
import { IoIosRadio } from "react-icons/io";

function Menu() {
  return (
    <div className=" flex flex-col-3 bg-indo_gray font-roboto text-white lg:px-[12%] px-4 py-4 border-t justify-between  items-center">
      <div>
        <img src={Logo} alt="" className="lg:w-52 w-36" />
      </div>
      <div></div>
      <div>
        <IoIosRadio className=" text-indo_green" />
        <p>Emisora 103.9 FM.</p>
        <h2>POTOSÍ-BOLIVIA</h2>
      </div>
    </div>
  );
}

export default Menu;
