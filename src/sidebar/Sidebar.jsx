import { useState, useEffect } from "react";
import useNavigate from "../HOC/useNavigate";
import { useApi } from "../useApi/useApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);
    const { page, navigate } = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useApi();
    const images = ['gojo', 'kazuma', 'nose', 'ryo'];
    const [randomImage, setRandomImage] = useState('');
      
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImageName = images[randomIndex];
      setRandomImage(randomImageName);
    }, []);

    console.log(isLoggedIn);
    return (
        <aside className={`sidebar ${isHover ? 'active' : ''}`}>
            {isLoggedIn ? (
                <ul>
                    <li></li>
                    <li>
                        <a href="/" onClick={() => navigate('/')}>
                            <FontAwesomeIcon icon={faHome} /> 
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/#/post" onClick={() => navigate('/post')}>
                            <FontAwesomeIcon icon={faUpload} />
                            Upload
                        </a>
                    </li>
                    <li>
                        <a href="/#/user" onClick={() => navigate('/user')}>
                            <FontAwesomeIcon icon={faUser} />
                            User
                        </a>
                    </li>
                    <li>

                        <img src={`../src/assets/img/sidebar/${randomImage}.gif`} />
                    </li>
                </ul>
            ) : (
                <div className="login-message">
                    <h1>INGRESA SESION</h1>
                </div>
            )}
        </aside>
    )
}

export default Sidebar;