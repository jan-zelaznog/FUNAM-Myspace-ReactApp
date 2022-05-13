import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar fixed-top navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={{pathname:"//fundacionunam.org.mx"}}><img src="../img/LogoFunam.png" className="logo" alt="Fundación UNAM" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="solidarios">Solidarios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contenidos">Contenidos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="foro">Foro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="cursos">Cursos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="tickets">Tickets</Link>
                            </li>
                        </ul>
                        <div className="container-fluid">
                        <form className="d-flex" method="GET" action="https://www.fundacionunam.org.mx/">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" name="s" id="s" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;