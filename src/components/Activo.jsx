import { useState, useEffect } from 'react';
import axios from 'axios';



function Activo() {
    const [activo, setActivo] = useState(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      // Llamada a la API
      const tituloCheck = ()=> {
      axios.get('https://live.turadiotv.com/cp/get_info.php?p=8160')
        .then((response) => {
          if (response.data && response.data) {
            setActivo(response.data); // Asigna la URL de la imagen recibida
            
          } else {
            setError(true); // Si no hay datos válidos, se marca como error
          }
        })
        .catch((error) => {
          console.error('Error al cargar la imagen:', error);
          setError(true); // En caso de error, marcamos error
        });
 };
 tituloCheck();
  const intervalId = setInterval(tituloCheck, 20000); // 10000 ms = 10 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez cuando se monta el componente     

  console.log(error);
  
   
  
    return (
      <div className=' w-60 h-60 bg-cyan-200'>
        {activo && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightgray' }}>
          ¡Este es el div que aparece y desaparece!
        </div>
      )}
      </div>
    );
  };

export default Activo