import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="nav nav-fill fixed-bottom">
            <social-network>
                <Link to="https://www.facebook.com/fundacion.unam.mx" target="_blank">
                    <i className="fab fa-facebook-square fa-3x"></i>
                </Link>
                <Link to="https://twitter.com/fundacion_unam" target="_blank">
                    <i className="fab fa-twitter-square fa-3x"></i>
                </Link>
                <Link to="https://www.instagram.com/fundacion_unam/" target="_blank">
                    <i className="fab fa-instagram-square fa-3x"></i>
                </Link>
                <Link to="https://mx.linkedin.com/company/fundaci-n-unam" target="_blank">
                    <i className="fab fa-linkedin fa-3x"></i>
                </Link>
            </social-network>
            <agreements>
                <Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/aviso-de-privacidad/"}} target="_blank">Aviso de privacidad</Link>
                <Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/terminos-de-uso/"}} target="_blank">Términos y condiciones</Link>
                <Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/politica-de-privacidad/"}} target="_blank">Politica de privacidad</Link>
            </agreements>
        </div>
    );
}

export default Footer;