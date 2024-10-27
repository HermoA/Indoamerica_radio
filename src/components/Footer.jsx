import Logo from "../assets/logo_i_nega.svg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className=" w-screen bg-black text-gray-400 pt-6 ">
      <div className="lg:grid-cols-4 lg:grid flex flex-col justify-items-center w-4/5 m-auto gap-4  border-b-2 border-gray-400 py-6 ">
        <div className=" flex w-full lg:justify-start col-span-4 lg:col-span-1 justify-center pb-10 lg:py-0">
          <img src={Logo} alt="logo" className="w-60" />
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold">Correo electrónico:</h3>
          <div className="flex items-center gap-2 hover:text-white ">
            <CiMail />
            <a href="mailto:indoamericalaradio@gmail.com">
              indoamericalaradio@gmail.com{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold">Dirección:</h3>
          <div className="flex items-center gap-2 hover:text-white ">
            <SiGooglemaps />
            <a href="https://maps.app.goo.gl/Xrkci2y5FjS5Eejc8" target="blanck">
              Calle Matos #109
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <h3 className="font-semibold">Teléfonos:</h3>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>71811002</p>
            <p>60483724</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <p>+591 71811002</p>
            <p>+591 60483724</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly lg:w-2/6 m-auto py-10">
        <a
          href="https://www.facebook.com/indoamericalaradio?mibextid=ZbWKwL"
          target="_blank"
          className="hover:text-indo_green transition ease-in-out delay-150 w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/indoamericalaradio/"
          target="_blank"
          className="hover:text-indo_green transition ease-in-out delay-150 w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@indoamericalaradio?_t=8oQrw3495Hx&_r=1"
          target="_blank"
          className="hover:text-indo_green transition ease-in-out delay-150 w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl"
        >
          <IoLogoTiktok />
        </a>
      </div>
      <div className=" lg:pb-28 m-auto flex flex-col justify-center py-3">
        <p className=" flex justify-center">© www.indoamericalaradio.com</p>
        <p className="flex justify-center">1942-2024</p>
        <a
          href="https://wa.link/7ygq41"
          target="black"
          className=" flex justify-center py-2 "
        >
          desarollado por Hedesign
        </a>
      </div>
    </div>
  );
}

export default Footer;
