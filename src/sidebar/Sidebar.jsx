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
    const images = ['gojo', 'kazuma', 'nose', 'ryo', 'dance', 'evan', 'kiki', 'prince', 'studio'];
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
                            <FontAwesomeIcon className="icon" icon={faHome} /> 
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#/post" className={linkBackground === 'post-link' ? 'post-link' : ''} onClick={() => handleNavigation('/post', 'post-link')}>
                            <FontAwesomeIcon className="icon" icon={faUpload} />
                            <span className="text">Upload</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#/user" className={linkBackground === 'user-link' ? 'user-link' : ''} onClick={() => handleNavigation('/user', 'user-link')}>
                            <FontAwesomeIcon className="icon" icon={faUser} />
                            <span className="text">User</span>
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