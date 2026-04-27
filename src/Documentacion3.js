import React from "react";
import "./App.css";

function Documentacion3({ volverAlPerfil }) {
  return (
    <div className="pantalla-oscura">
      <div className="contenedor-evaluacion3">
        <h1 className="bienvenida-titulo">Bienvenido(a), Alondra Gonzalez Medina</h1>
        <h2 className="evaluacion-titulo">EVALUACIÓN PARCIAL 3</h2>

        <div className="lista-botones-evaluacion3">
          {/* 1. Documento ERS */}
          <a href="/ERS aLuna.pdf" download="ERS aLuna.pdf">
            <button className="btn-evaluacion3 btn-blanco">
              DESCARGAR DOCUMENTO ERS DEL PROYECTO
            </button>
          </a>

          {/* 2. Tabla JIRA */}
          <a href="https://utd-team-knltm5cf.atlassian.net/jira/software/projects/ALO36/boards/34?atlOrigin=eyJpIjoiNTRmNWVhNDA3MGJmNDFjMmE0ZmE4M2M0NGFhY2NjMDgiLCJwIjoiaiJ9" 
             target="_blank" rel="noreferrer">
            <button className="btn-evaluacion3 btn-blanco">
              TABLA JIRA PROYECTO SIBA
            </button>
          </a>

          {/* 3. Cerrar sesión */}
          <button 
            className="btn-evaluacion3 btn-blanco" 
            onClick={volverAlPerfil}
          >
            CERRAR SESIÓN PARCIAL 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default Documentacion3;
