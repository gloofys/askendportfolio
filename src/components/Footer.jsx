import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer grid">
            {/* Column 1: Logo */}
            <div className="footer__brand">
                <img src="/FLogosmallWhite.png" alt="Fred Brosman Logo" />
            </div>

            <div className="footer__note">
                <h4 className="footer__label">About This Site</h4>
                <p>
                    This is a <strong>demo portfolio</strong> created by Fred Brosman, styled after <a href="https://askend.com" target="_blank" rel="noreferrer">Askend.com</a> for personal learning and job-seeking purposes.
                </p>
            </div>


            <div className="footer__nav hidden-xs">
                <h4 className="footer__label">Navigation</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer__contact">
                <h4 className="footer__label">Contact</h4>
                <ul className="footer__contact-list">
                    <li>Tallinn, Estonia</li>
                    <li>fred.brosman06@gmail.com</li>
                    <li className="footer__socials">
                        <a href="https://linkedin.com/in/fred-brosman" target="_blank" rel="noreferrer">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                        <a href="https://github.com/gloofys" target="_blank" rel="noreferrer">
                            <i className="devicon-github-original"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
