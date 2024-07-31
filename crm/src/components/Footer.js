import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer blue lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Robin BIDOT, exercice React LinkedIn Learning
                </div>
            </div>
        </footer>
    );
};

export default Footer;
