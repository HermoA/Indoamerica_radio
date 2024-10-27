function Programas({img, titulo, horario, descripcion }) {
  return (
    <div className="flex lg:h-[500px] flex-col-reverse lg:flex-row">
      <div className=" flex flex-col lg:gap-12 gap-3 lg:p-20 px-4">
        <div className=" bg-indo_gray text-white text-sm rounded-full p-2 font-medium lg:w-3/6 flex justify-center">
          <p>{horario}</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-white font-roboto h-24">
            {titulo}
          </h2>
        </div>
        <div className=" w-11/12 ">
          <p className=" font-normal text-white lg:text-2xl text-base ">
            {descripcion} 
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={img} alt="man" className="object-cover lg:h-[100%] h-[250px] " />
      </div>
    </div>
  );
}
export default Programas;
