import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <table className="tables">
            <tr>
                <td>
                    <Link to="https://www.facebook.com/fundacion.unam.mx" target="_blank">
                        <i className="fab fa-facebook-square fa-3x"></i>
                    </Link>
                </td>
                <td>
                    <Link to="https://twitter.com/fundacion_unam" target="_blank">
                        <i className="fab fa-twitter-square fa-3x"></i>
                    </Link>
                </td>
                <td>
                    <Link to="https://www.instagram.com/fundacion_unam/" target="_blank">
                        <i className="fab fa-instagram-square fa-3x"></i>
                    </Link>
                </td>
                <td>
                    <Link to="https://mx.linkedin.com/company/fundaci-n-unam" target="_blank">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </Link>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <table className="tables">
                        <tr>
                        <td><Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/aviso-de-privacidad/"}} target="_blank">Aviso de privacidad</Link></td>
                        <td><Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/terminos-de-uso/"}} target="_blank">Términos y condiciones</Link></td>
                        <td><Link className="nav-link" to={{pathname:"//www.fundacionunam.org.mx/politica-de-privacidad/"}} target="_blank">Politica de privacidad</Link></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
}

export default Footer;