import { useState } from "react";
import useNavigate from "../HOC/useNavigate";
import { TokenProvider } from "../login/useToken";
import './sidebar.css';

const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);
    const { page, navigate } = useNavigate()
    const { isLoggedIn } = TokenProvider;
    console.log(isLoggedIn);
    return (
        <aside className={'sidebar ${isHover ? "active" : ""}'}>
        {
            isLoggedIn ? (
                <ul>
                    <li  className={page === '/' ? 'active' : ''}>
                        <a href="/#" onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li>
                        <a href="/#/post" onClick={() => navigate('/post')}>Upload</a>
                    </li>
                    <li>
                        <a href="/#/user" onClick={() => navigate('/user')}>User</a>
                    </li>
                </ul>
            ) : (
                <h1>INGRESA SESION</h1>
            )
        }
        </aside>
    )
}

export default Sidebar;