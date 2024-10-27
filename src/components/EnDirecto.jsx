import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiStatusComponent = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    // Llamada a la API para verificar si está online
    axios.get('https://live.turadiotv.com/cp/get_info.php?p=8160')
      .then((response) => {
        if (response.status === 200) {
          setStatus('EN DIRECTO'); // Si la API responde correctamente
        } else {
          setStatus('Offline');
        }
      })
      .catch((error) => {
        console.error('Error al conectar con la API:', error);
        setStatus('Offline'); // Si la llamada falla, se muestra "Offline"
      });
  }, []);

  return (
    <div>
      <h1>API Status: {status}</h1>
    </div>
  );
};

export default ApiStatusComponent;