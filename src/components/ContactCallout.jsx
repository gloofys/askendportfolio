import React from "react";
import "../styles/components/ContactCallout.scss";

const ContactCallout = () => {
    return (
        <section className="contact-callout">
            <div className="contact-callout__overlay"/>
            <div className="contact-callout__content">
                <h2>Let’s build something great together.</h2>
                <p>
                    I’m currently open to junior developer roles. If
                    you’re building something meaningful, I’d love to hear from you.
                </p>
                <div className="contact-callout__buttons">
                    <a href="https://linkedin.com/in/yourprofile"
                       className="btn btn--primary btn--icon"
                       target="_blank">
                        <i className="devicon-linkedin-plain"></i>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/gloofys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--icon"
                    ><i className="devicon-github-original"></i>
                        GitHub
                    </a>
                </div>
            </div>

        </section>
    );
};

export default ContactCallout;