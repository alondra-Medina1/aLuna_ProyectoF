import foto from './Profile_Alo.jpeg';

function Componente_Gonzalez() {
  return (
    <div>
      <img src={foto} alt="Foto perfil" />
      <h2>Alumno: Alondra Gonzalez Medina</h2>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        Visitar mi perfil de LinkedIn
      </a>
    </div>
  );
}

export default Componente_Gonzalez;