import React from 'react';

const Login = () => {
  
  // Función temporal para simular el inicio de sesión
  const handleGoogleLogin = () => {
    console.log("Conectando con Google Cloud Console...");
    alert("¡Estoy listo para probar Google!");
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar Sesión</h2>
      <p>Configuración desde SRC</p>
      
      <button onClick={handleGoogleLogin} style={styles.button}>
        Entrar con Google
      </button>
    </div>
  );
};

// Estilos básicos para que no se vea tan simple
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '20px auto'
  },
  button: {
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Login;