import React from "react";
import "./App.css";

function Documentacion1({ volverAlPerfil }) {
  return (
    <div className="pantalla-oscura">
      <div className="centro-descargas-directo">
        <h1 className="titulo-seccion">Centro de Descargas</h1>
        <p className="descripcion-texto">Haz clic en los botones para obtener tus archivos PDF.</p>

        <div className="lista-botones">
          {/* 1. Comandos React */}
          <a href="/pdfs/comandos.pdf" download="comandos.pdf">
            <button className="btn-descarga azul-custom">
              COMANDOS BÁSICOS DE REACT
            </button>
          </a>

          {/* 2. ISO / IEEE */}
          <a href="/pdfs/ieee.pdf" download="ieee.pdf">
            <button className="btn-descarga verde-custom">
              ISO / ESTÁNDAR IEEE
            </button>
          </a>

          {/* 3. Requerimientos */}
          <a href="/pdfs/requerimientos.pdf" download="requerimientos.pdf">
            <button className="btn-descarga oscuro-custom">
              REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
            </button>
          </a>

          {/* 4. Python SHA-256 */}
          <a href="/pdfs/sha_256.pdf" download="sha_256.pdf">
            <button className="btn-descarga oscuro-custom">
              CÓDIGO PYTHON ALGORITMO SHA-256
            </button>
          </a>

          {/* Botón para regresar - El último de la lista */}
          <button 
            className="btn-descarga oscuro-custom" 
            onClick={volverAlPerfil} 
            style={{ marginTop: "10px" }}
          >
            REGRESAR AL PROYECTO PRINCIPAL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Documentacion1;