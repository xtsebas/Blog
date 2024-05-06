import { useState, useEffect } from "react";
import useNavigate from "../HOC/useNavigate";
import { useApi } from "../useApi/useApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
    const [isHover] = useState(false);
    const { page, navigate } = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useApi();
    const images = ['gojo', 'kazuma', 'nose', 'ryo'];
    const [randomImage, setRandomImage] = useState('');
    const [linkBackground, setLinkBackground] = useState('home-link');
      
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImageName = images[randomIndex];
      setRandomImage(randomImageName);
    }, []);

    const handleNavigation = (path, linkBackground) => {
        navigate(path);
        setLinkBackground(linkBackground);
      };

    console.log(isLoggedIn);
    return (
        <aside className={`sidebar`}>
            {isLoggedIn ? (
                <ul>
                    <li></li>
                    <li>
                        <a href="/" className={linkBackground === 'home-link' ? 'home-link' : ''} onClick={() => handleNavigation('/', 'home-link')}>
                            <FontAwesomeIcon icon={faHome} /> 
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/#/post" className={linkBackground === 'post-link' ? 'post-link' : ''} onClick={() => handleNavigation('/post', 'post-link')}>
                            <FontAwesomeIcon icon={faUpload} />
                            Upload
                        </a>
                    </li>
                    <li>
                        <a href="/#/user" className={linkBackground === 'user-link' ? 'user-link' : ''} onClick={() => handleNavigation('/user', 'user-link')}>
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