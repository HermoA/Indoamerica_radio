import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import PortadaImg from "./PortadaImg";
import TituloApi from "./TituloApi";
import BarraProgreso from "./BarraProgreso";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 1500,
  cssEase: "linear",
  arrows: false,
};

const PLayerB = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Función para reproducir o pausar el audio
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.load();
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" hidden  bg-indo_gray lg:grid grid-cols-5 justify-items-center font-roboto text-slate-50 fixed bottom-0 w-screen h-24 px-[15%] items-center z-50">
      <div className=" col-span-5 h-2 w-[87%] ml-36">
        <BarraProgreso />
      </div>
      <div className="flex items-center justify-center pb-5">
        <div>
          <span className="relative flex h-[70px] w-[70px] ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indo_green opacity-75"></span>
          </span>
        </div>
        <PortadaImg />
      </div>
      <div className="flex justify-start w-full col-span-3 pr-20">
        <div className="grid grid-cols-1 gap-2 ">
          <div className="flex flex-grow gap-2 items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indo_green"></span>
            </span>
            <p className="text-xs text-indo_green">En Directo</p>
            <h1 className=" font-bold text-sm">INDOAMERICA LA RADIO</h1>
          </div>
          <div className="text-2xl font-bold h-7">
            <Slider {...settings}>
              <div>
                <TituloApi />
              </div>
              <div>
                <TituloApi />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="bg-[#171717] rounded-full w-12 h-12"></div>
        <audio
          ref={audioRef}
          src="https://live.turadiotv.com/8160/stream"
        ></audio>
        <button
          onClick={handlePlayPause}
          className=" border-2 w-9 rounded-full h-9 flex justify-center items-center border-indo_green absolute "
        >
          {isPlaying ? (
            <FaPause className=" " />
          ) : (
            <FaPlay className="text-indo_green ml-[2px] " />
          )}
        </button>
      </div>
    </div>
  );
};

export default PLayerB;
