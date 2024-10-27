import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import PortadaImg from "./PortadaImg";
import TituloApi from "./TituloApi";
import BarraProgreso from "./BarraProgreso";

import Slider from "react-slick";

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

  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className="lg:hidden relative h-[600px] w-screen bg-indo_gray flex justify-center items-center font-roboto">
      <div className=" absolute  w-full h-[550px] z-30 ">
        <div className=" grid grid-cols-2">
          <div className="col-span-2">
            <BarraProgreso />
          </div>
          <div className=" col-span-2 h-[300px] flex justify-center items-center">
            <div className=" w-[250px] h-[250px] ">
              <PortadaImg />
            </div>
          </div>
          <div className=" drop-shadow-lg m-auto h-16 items-center col-span-2 w-11/12 flex flex-col justify-center text-2xl font-semibold text-white border-r-[1px] border-white border-l-[1px] ">
            
            <div className="flex flex-grow gap-2 items-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indo_green"></span>
              </span>
              <p className="text-xs text-[rgba(255,255,255,0.6)] ">
                EN DIRECTO
              </p>
            </div>
            <Slider {...settings} className="w-screen z-20 px-6 h-16">
              <div>
                <TituloApi />
              </div>
              <div>
                <TituloApi />
              </div>
            </Slider>
          </div>
          <div className=" flex flex-row w-full justify-center py-20 col-span-2">
            <audio
              ref={audioRef}
              src="https://live.turadiotv.com/8160/stream"
            ></audio>
            <button
              onClick={handlePlayPause}
              className=" drop-shadow-lg border-[4px] w-16 rounded-full h-16 flex justify-center items-center border-[rgba(255,255,255,0.2)]"
            >
              {isPlaying ? (
                <FaPause className=" text-indo_green text-2xl" />
              ) : (
                <FaPlay className="text-[rgba(255,255,255,0.2)] ml-[2px] text-2xl " />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute  w-full h-full ">
        <div className=" h-full w-full flex justify-center items-center">
          <div className="bg-cyan-950 w-[350px] h-[350px] blur-xl">
            <PortadaImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLayerB;
