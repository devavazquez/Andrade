import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar la información de inicio de sesión al servidor
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Por ahora, solo mostraremos los datos en la consola
  };

  return (
    <div className="card"> {/* Agregamos una clase CSS para el estilo del card */}
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="username">Nombre de Usuario:</label> */}
          <input
            placeholder='Correo elecrónico'
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="password">Contraseña:</label> */}
          <input
            placeholder='Contrseña'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
