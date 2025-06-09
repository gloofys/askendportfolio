import React, { useState } from "react";
import "../styles/components/Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav-container">

            <div className={`nav-buttons-container ${menuOpen ? "open" : ""}`}>
                <div className="nav-buttons-header">
                    <a href="#" className="nav-logo">
                        <img src="/AskendFredLogo.png" alt="Fred Brosman logo" />
                    </a>
                    <button className="nav-menu-close-btn" onClick={() => setMenuOpen(false)}>
                        <img src="/icons/close-btn.svg" alt="Close menu" />
                    </button>
                </div>

                <nav className="nav-buttons">
                    <a
                        href="https://linkedin.com/in/fred-brosman"
                        className="btn btn--secondary btn--icon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="devicon-linkedin-plain"></i> LinkedIn
                    </a>
                    <a
                        href="https://github.com/gloofys"
                        className="btn btn--secondary btn--icon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="devicon-github-original"></i> GitHub
                    </a>
                    <a
                        href="/cv_fred_brosman.pdf"
                        className="btn btn--primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                         Curriculum Vitae
                    </a>
                </nav>
            </div>

            <button className="nav-menu-icon" onClick={() => setMenuOpen(true)}>
                <img src="/icons/burger-menu.svg" alt="Open menu"/>
            </button>
        </nav>
    );
};

export default Header;