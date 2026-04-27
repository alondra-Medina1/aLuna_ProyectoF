import React, { useState } from "react";
import "./App.css";
import foto from "./Profile_Alo.jpeg";
import Documentacion2 from "./Documentacion2.js";
import Documentacion1 from "./Documentacion1";  
import Documentacion3 from "./Documentacion3";
function App() {
  const [mostrarDoc1, setMostrarDoc1] = useState(false);
  const [mostrarDoc2, setMostrarDoc2] = useState(false);
  const [mostrarDoc3, setMostrarDoc3] = useState(false);

  const handleGoogleLogin = () => {
    // Simular inicio de sesión con Google
    console.log("Iniciando sesión con Google...");
    // Aquí se mostraría la Evaluación Parcial 3
    setMostrarDoc3(true);
  };

  if (mostrarDoc1) {
    return <Documentacion1 volverAlPerfil={() => setMostrarDoc1(false)} />;
  }

  if (mostrarDoc2) {
    return <Documentacion2 volverAlPerfil={() => setMostrarDoc2(false)} />;
  }

  if (mostrarDoc3) {
    return <Documentacion3 volverAlPerfil={() => setMostrarDoc3(false)} />;
  }

  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={foto} alt="Perfil" className="Profile_Alo.jpeg" />
        <h1 className="evaluacion-texto">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
        <p className="alumno-texto">Alumno(a): Alondra Gonzalez Medina</p>
        <div className="enlaces-inferiores">
          <a
            href="https://www.linkedin.com/in/alondra-gonzalez-medina-616b27317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            LINKED IN DE MI PROFILE
          </a>
          <button onClick={() => setMostrarDoc1(true)} className="boton-enlace">
            DOCUMENTACION PARCIAL 1
          </button>
          <button onClick={() => setMostrarDoc2(true)} className="boton-enlace">
            DOCUMENTACION PARCIAL 2
          </button>
          <button onClick={handleGoogleLogin} className="boton-google">
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
