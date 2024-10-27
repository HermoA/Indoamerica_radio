import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function HeadRadio() {
  return (
    <>
      <div className="grid grid-cols-2 bg-indo_gray lg:px-60 p-4 py-4  z-20 w-screen ">
        <div>
          <a
            href="https://wa.link/5fgocs"
            target="_blank"
            className=" font-roboto border border-gray-400 px-2 py-1 rounded-xl text-gray-400 text-sm font-light hover:border-indo_green hover:text-indo_green transition ease-in-out delay-200 "
          >
            Contacto
          </a>
        </div>
        <div className="text-white flex flex-row gap-5 justify-end items-center text-xl ">
          <a
            href="https://www.facebook.com/indoamericalaradio?mibextid=ZbWKwL"
            target="_blank"
            className="hover:text-indo_green transition ease-in-out delay-150"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/indoamericalaradio/"
            target="_blank"
            className="hover:text-indo_green transition ease-in-out delay-150"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@indoamericalaradio?_t=8oQrw3495Hx&_r=1"
            target="_blank"
            className="hover:text-indo_green transition ease-in-out delay-150"
          >
            <AiFillTikTok />
          </a>
          <button
            className=" hover:animate-browsein bg-indo_green text-base font-bold rounded-full py-1 px-4 text-white flex justify-evenly items-center gap-3 "
            onClick={(event) => {
              event.preventDefault();
              window.open(
                "http://localhost:5173/Reproductor",
                "carga_llamados_nuevo",
                "width=400, height=650, scrollbars=no, menubar=no, location=no, resizable=no"
              );
            }}
          >
            <FaPlay />
            Escuchanos
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HeadRadio;
