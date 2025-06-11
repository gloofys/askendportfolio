import React, { useState } from "react";
import "../styles/components/Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="nav-menu">
            <nav className="nav-container">
                <a href="/" className="nav-logo">
                    <img src="/AskendFredLogo.png" alt="Fred Brosman logo"/>
                </a>

                {/* Desktop Buttons */}
                <div className="nav-buttons-desktop">
                    <a href="https://linkedin.com/in/fred-brosman" target="_blank" rel="noreferrer"
                       className="btn btn--secondary btn--icon">
                        <i className="devicon-linkedin-plain"></i> LinkedIn
                    </a>
                    <a href="https://github.com/gloofys" target="_blank" rel="noreferrer"
                       className="btn btn--secondary btn--icon">
                        <i className="devicon-github-original"></i> GitHub
                    </a>
                    <a href="/https://drive.google.com/file/d/1aUr9iR7RXMLaJLjzofdVfHDISMH_Kj4T/view" target="_blank" rel="noreferrer" className="btn btn--primary">
                        Curriculum Vitae
                    </a>
                </div>

                {/* Burger Icon */}
                <button className="nav-menu-icon" onClick={() => setMenuOpen(true)}>
                    <img src="/burger-menu.svg" alt="Open menu"/>
                </button>

                {/* Mobile Slide-in Menu */}
                <div className={`nav-buttons-container ${menuOpen ? "open" : ""}`}>
                    <div className="nav-buttons-header">
                        <a href="/" className="nav-logo">
                            <img src="/AskendFredLogo.png" alt="Fred Brosman logo"/>
                        </a>
                        <button className="nav-menu-close-btn" onClick={() => setMenuOpen(false)}>
                            <img src="/close-btn.svg" alt="Close menu"/>
                        </button>
                    </div>

                    <nav className="nav-buttons">
                        <a href="https://linkedin.com/in/fred-brosman" target="_blank" rel="noreferrer"
                           className="btn btn--secondary btn--icon">
                            <i className="devicon-linkedin-plain"></i> LinkedIn
                        </a>
                        <a href="https://github.com/gloofys" target="_blank" rel="noreferrer"
                           className="btn btn--secondary btn--icon">
                            <i className="devicon-github-original"></i> GitHub
                        </a>
                        <a href="/https://drive.google.com/file/d/1aUr9iR7RXMLaJLjzofdVfHDISMH_Kj4T/view" target="_blank" rel="noreferrer" className="btn btn--primary">
                            Curriculum Vitae
                        </a>
                    </nav>
                </div>
            </nav>
        </div>
            );
            };

            export default Header;
