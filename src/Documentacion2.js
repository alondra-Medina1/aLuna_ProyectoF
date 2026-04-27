import React, { useState } from "react";
import "./App.css";

function Documentacion2({ volverAlPerfil }) {
  const [metodologiaSeleccionada, setMetodologiaSeleccionada] = useState(null);

  const metodologias = {
    cascada: { titulo: "Vista Metodología Cascada", imagen: "/imagenes/CASCADA.png" },
    modeloV: { titulo: "Vista Metodología Modelo V", imagen: "/imagenes/MODELO V.png" },
    agiles: { titulo: "Vista Metodologías Ágiles", imagen: "/imagenes/AGUILESS.png" },
    scrum: { titulo: "Vista Metodología Scrum", imagen: "/imagenes/SCRUM.png" },
    kanban: { titulo: "Vista Metodología Kanban", imagen: "/imagenes/KANBAN.png" },
    xp: { titulo: "Vista Metodología XP", imagen: "/imagenes/XP.png" },
    hibridas: { titulo: "Vista Metodología Híbridas", imagen: "/imagenes/HÍBRIDAS.png" },
  };

  return (
    <div className="contenedor-principal">
      <header className="header-seccion">
        <h1>METODOLOGÍAS DE DESARROLLO DE SW</h1>
        <h2>¿Qué es una metodología de desarrollo de software?</h2>
        <p className="descripcion">
          Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
        </p>
      </header>

      <section className="seccion-metodologias">
        <h3>TIPOS DE METODOLOGÍAS</h3>
        <hr className="linea-separadora" />
        
        {/* Fila 1 */}
        <div className="fila-botones">
          <button className="btn-met btn-azul" onClick={() => setMetodologiaSeleccionada("cascada")}>CASCADA</button>
          <button className="btn-met btn-gris-oscuro" onClick={() => setMetodologiaSeleccionada("modeloV")}>MODELO V</button>
          <button className="btn-met btn-verde" onClick={() => setMetodologiaSeleccionada("agiles")}>ÁGILES</button>
          <button className="btn-met btn-rojo" onClick={() => setMetodologiaSeleccionada("scrum")}>SCRUM</button>
        </div>
        
        {/* Fila 2 */}
        <div className="fila-botones">
          <button className="btn-met btn-naranja" onClick={() => setMetodologiaSeleccionada("kanban")}>KANBAN</button>
          <button className="btn-met btn-celeste" onClick={() => setMetodologiaSeleccionada("xp")}>XP</button>
          <button className="btn-met btn-negro" onClick={() => setMetodologiaSeleccionada("hibridas")}>HÍBRIDAS</button>
        </div>

        <hr className="linea-separadora" />
      </section>

      <section className="seccion-jira">
        <h3>LINK A TABLERO DE TRABAJO</h3>
        <a href="https://utd-team-knltm5cf.atlassian.net/jira/software/projects/ALO36/boards/34?atlOrigin=eyJpIjoiNTRmNWVhNDA3MGJmNDFjMmE0ZmE4M2M0NGFhY2NjMDgiLCJwIjoiaiJ9" 
           target="_blank" rel="noreferrer" className="link-punteado">
          ---- JIRA ----
        </a>
        <hr className="linea-separadora" />
      </section>

      <footer className="footer-documentacion">
        <button onClick={volverAlPerfil} className="link-punteado btn-regresar">
          ---- REGRESAR MENÚ PRINCIPAL ----
        </button>

        <div className="info-alumno">
          <p><strong>Escribe la frase que colocaste en el tablero de metodología ágil:</strong></p>
          <p className="ejemplo">Todo pasa por algo "</p>
          <p className="nombre-alumno">Alumno: Alondra Gonzalez Medina</p>
        </div>
      </footer>

      {/* Modal */}
      {metodologiaSeleccionada && (
        <div className="modal-overlay" onClick={() => setMetodologiaSeleccionada(null)}>
          <div className="modal-ventana" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>{metodologias[metodologiaSeleccionada].titulo}</span>
              <button className="cerrar-modal" onClick={() => setMetodologiaSeleccionada(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <img 
                src={metodologias[metodologiaSeleccionada].imagen} 
                alt={metodologiaSeleccionada} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documentacion2;