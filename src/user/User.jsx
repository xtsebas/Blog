import React from 'react';
import './user.css'; // Importa el archivo de estilos
import useNavigate from '../HOC/useNavigate';

const User = () => {
    const { navigate } = useNavigate();
  
    const handleLogout = () => {
      localStorage.clear(); // Limpia los datos de localStorage
      navigate('/login'); // Redirige a la página de login
      window.location.href = '/?#/login'; 
    };
  
    return (
      <div className="user-container">
        <div className="user-details">
          <h2 className="user-name">John Doe</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

export default User;
