import { useState, useEffect } from "react";
import axios from "axios";
import portada from "../assets/portada_1.jpg";

const defaultImage = portada;

function PortadaImg() {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Llamada a la API
    const actImg = () => {
      axios
        .get("https://live.turadiotv.com/cp/get_info.php?p=8160")
        .then((response) => {
          if (response.data && response.data.art) {
            setImageUrl(response.data.art); // Asigna la URL de la imagen recibida
          } else {
            setError(true); // Si no hay datos válidos, se marca como error
          }
        })
        .catch((error) => {
          console.error("Error al cargar la imagen:", error);
          setError(true); // En caso de error, marcamos error
        });
    };
    actImg();
    const intervalId = setInterval(actImg, 5000); // 10000 ms = 10 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  const imagePortada = () => {
    if (!error) {
      return imageUrl;
    }
    return defaultImage;
  };

  return (
    <div className="lg:w-28 lg:h-28  lg:absolute lg:rounded-full rounded-2xl overflow-hidden">
      <img
        src={imagePortada()}
        alt="Imagen"
        onError={() => setImageUrl(defaultImage)} // Si la URL de la imagen es inválida, usa la predeterminada
      />
    </div>
  );
}

export default PortadaImg;
