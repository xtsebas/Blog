import React, { Suspense } from "react";
import { useApi } from "../useApi/useApi";
import { useState } from "react";
import LoadingScreen from "../loading/loadingScreen";
import './login.css';
const loadingscreen = React.lazy(() => LoadingScreen);



const Login = () => {
    const { login, loading, error } = useApi();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Establece el estado de isSubmitting a true cuando se envía el formulario
        try {
            const result = await login(usuario, password);
            alert(result); // Mostrar el resultado en un alert
            // Restablecer los campos de usuario y contraseña después de enviar el formulario
            setUsuario('');
            setPassword('');
        } catch (error) {
            alert(error.message); // Mostrar el mensaje de error en un alert
        } finally {
            setIsSubmitting(false); // Establece el estado de isSubmitting a false cuando la solicitud haya terminado
        }
    };

    return (
        <div className="user-container">
            <h1>Iniciar sesión</h1>
            <form id="login-form" onSubmit={handleLogin}>
                {/* Campos de entrada para el usuario y la contraseña */}
                <input 
                    type="text" 
                    id="usuario-login" 
                    placeholder="Usuario" 
                    required 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input 
                    type="password" 
                    id="password-login" 
                    placeholder="Contraseña" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Botón para iniciar sesión */}
                <button type="submit" disabled={loading || isSubmitting}>Iniciar sesión</button>
                {/* Componente de pantalla de carga */}
                {isSubmitting && (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <LoadingScreen />
                    </React.Suspense>
                )}
                {/* Mensajes de carga y error */}
                {loading && !isSubmitting && <div>Loading...</div>}
                {error && <span className="error">{error}</span>}
            </form>
        </div>
    );
};

export default Login;