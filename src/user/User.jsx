import React from 'react';
import './user.css'; 
import useNavigate from '../HOC/useNavigate';
import { useApi } from '../useApi/useApi';
import LoadingScreen from '../loading/loadingScreen';
import Swal from 'sweetalert2';

const User = () => {
    const { navigate } = useNavigate();
    const { addPost, loading, error } = useApi();


    const handleLogout = () => {
      localStorage.clear(); // Limpia los datos de localStorage
      Swal.fire({
          title: '¡Logout Exitoso!',
          text: 'Te has desconectado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
      }).then(() => {
          navigate('/login'); // Redirige a la página de login
          window.location.href = '/?#/login'; 
      });
  };

  if (loading) {
    return (
        <div className="loading-screen">
            <LoadingScreen />
        </div>
    );
}
  
    return (
      <div className="profile-container">
        <div className="profile-header">
          <h2 className="profile-name">John</h2>
          <h2 className="profile-name">Doe</h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

export default User;
