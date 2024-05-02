import React, { Suspense } from "react";
import { useApi } from "../useApi/useApi";
import { useState } from "react";
import LoadingScreen from "../loading/loadingScreen";
import './login.css';
import useToken from "./useToken";
import useNavigate from "../HOC/useNavigate";

const Login = () => {
    const { userLogin, loading, setIsLoggedIn } = useApi();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useNavigate();
    const { setToken } = useToken(); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmitLogin = async () => {
        try {
            //debugger;
            const response = await userLogin(usuario, password);
            console.log(response);
    
            if (response.ok) {
                const { access_token } = await response.json();
                console.log('success! token is: ', access_token);
                setToken(access_token);
                setIsLoggedIn(true);
                navigate('/');
                window.location.href = '/'; 
                return;
            } 
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="user-container">
            <h1>Iniciar sesión</h1>
            {
                errorMessage !== '' ? (
                <div onClick={() => setErrorMessage('')}>
                    {errorMessage}
                </div>
                ) : null
            }
            <form id="login-form" onSubmit={handleSubmitLogin}>
                
                <input type="text" id="usuario-login" placeholder="Usuario" value={usuario} required onChange={(value) => setUsuario(value.target.value)}/>

                <input type="password" id="password-login" placeholder="Contraseña" value={password} required onChange={(value) => setPassword(value.target.value)}/>

                <button type="submit" disabled={loading || isSubmitting}>Iniciar sesión</button>

            </form>
            <p>¿Nuevo por aquí?<a href="/?#/register" onClick={() => navigate('/register')}>Registrarse</a></p>

        </div>
    );
};

Login.propTypes = {
}

export default Login;