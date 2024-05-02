import React, { useState } from 'react';
import { useApi } from '../useApi/useApi';
import useNavigate from '../HOC/useNavigate';
import LoadingScreen from '../loading/loadingScreen';

const Register = () => {
    const { addUser, loading, setError } = useApi();
    const { navigate } = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            debugger;
            if (password !== confirmPassword) {
                setErrorMessage('Las contraseñas no coinciden.');
                return;
            }

            const response = await addUser(username, password);
            console.log(response);
            if (response.ok) {
                debugger;
                navigate('/login');
            } else {
                setErrorMessage('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            setErrorMessage('Error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-container">
            <h1>Registrarse</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form id="register-form" onSubmit={handleSubmit}>
                <input type="text" id="username-register" placeholder="Nombre de usuario" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" id="password-register" placeholder="Contraseña" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" id="confirm-password-register" placeholder="Confirmar contraseña" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit" disabled={loading || isSubmitting}>Registrarse</button>
            </form>
            {loading && <LoadingScreen />}
        </div>
    );
};

export default Register;
