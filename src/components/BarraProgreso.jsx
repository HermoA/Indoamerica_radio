import { useState, useEffect } from "react";

const BarraProgreso = () => {
  const [progreso, setProgreso] = useState(0);

  // Función para calcular el porcentaje del día transcurrido
  const calcularProgreso = () => {
    const ahora = new Date();
    const inicioDelDia = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      ahora.getDate(),
      7,
      0,
      0
    );
    const finDelDia = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      ahora.getDate(),
      23,
      59,
      59
    );
    const tiempoTotalDia = finDelDia - inicioDelDia;
    const tiempoTranscurrido = ahora - inicioDelDia;
    return (tiempoTranscurrido / tiempoTotalDia) * 100;
  };

  useEffect(() => {
    // Actualiza el progreso cada segundo
    const intervalo = setInterval(() => {
      setProgreso(calcularProgreso());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ width: "100%", padding: "2px" }}>
      <div style={{ width: "100%", backgroundColor: "#7b7b7b" }}>
        <div
          style={{
            width: `${progreso}%`,
            backgroundColor: "#00e380",
            height: "3px",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
};

export default BarraProgreso;
