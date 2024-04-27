import React from 'react';
import './user.css'; // Importa el archivo de estilos

const User = () => {
    return (
        <div className="user-container">
            <img src="placeholder.jpg" alt="User Avatar" className="user-avatar" />
            <div className="user-details">
                <h2 className="user-name">John Doe</h2>
                <p className="user-email">john@example.com</p>
            </div>
        </div>
    );
};

export default User;
