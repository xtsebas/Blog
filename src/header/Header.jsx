import React from "react";
import './header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="header-content">
                <div className="tooltip-container">
                    <span className="tooltip-1">Create your own designs.</span>
                    <span className="tooltip-2">Mira los animes subidos por la comunidad.</span>
                    <span className="tooltip-3">Edita, borra y sube tus animes favoritos.</span>
                    <span >ANIME BLOG</span>
                </div>
            </div>
        </header>
    )
}

export default Header