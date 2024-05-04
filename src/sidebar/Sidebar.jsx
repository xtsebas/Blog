import { useState } from "react";
import useNavigate from "../HOC/useNavigate";
import { useApi } from "../useApi/useApi";
import { TokenProvider } from "../login/useToken";
import './sidebar.css';

const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);
    const { page, navigate } = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useApi();
    console.log(isLoggedIn);
    return (
        <aside className={`sidebar ${isHover ? 'active' : ''}`}>
            {isLoggedIn ? (
                <ul>
                    <li></li>
                    <li>
                        <a href="/" onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li>
                        <a href="/#/post" onClick={() => navigate('/post')}>Upload</a>
                    </li>
                    <li>
                        <a href="/#/user" onClick={() => navigate('/user')}>User</a>
                    </li>
                </ul>
            ) : (
                <div className="login-message">
                    <h1>INGRESA SESION</h1>
                    {/* Aquí podrías agregar un enlace para dirigir al usuario a la página de inicio de sesión */}
                </div>
            )}
        </aside>
    )
}

export default Sidebar;