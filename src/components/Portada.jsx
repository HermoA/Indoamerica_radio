import LogoVertical from "../assets/Logo-vertical.png";

function Portada() {
  return (
    <div className="flex lg:h-[500px] flex-col-reverse lg:flex-row">
      <div className=" flex flex-col lg:gap-12 gap-3 lg:p-20 px-4 text-white">
        <div className="flex flex-col lg:w-2/3 bg-indo_gray rounded-3xl gap-2 py-4">
          <h1 className="2xl:text-5xl text-4xl font-bold flex justify-center text-center">
            Indoamérica La Radio
          </h1>
          <h2 className=" text.2xl font-bold flex justify-center">103.9 FM.</h2>
        </div>
        <div className=" w-11/12 ">
          <p className=" lg:text-xl lg:pt-20 pt-10">
            Indoamérica La Radio, La Nueva I, es la estación decana de Potosí
            con 82 años de historia. Con música variada y noticias, seguimos
            conectando generaciones y evolucionando con los nuevos tiempos.
            ¡Sintoniza y sé parte de esta historia!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img className="object-cover lg:h-[100%] h-[250px] " src={LogoVertical} alt="logo" />
      </div>
    </div>
  );
}

export default Portada;
