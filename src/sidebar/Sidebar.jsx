import { useState } from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <aside className={'sidebar ${isHover ? "active" : ""}'}>
            <ul>
                <li>
                    <Link to="/posts">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;