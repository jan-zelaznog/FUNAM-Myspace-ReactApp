import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Cursos = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <Link className="nav-link" to="diplo">
                    <i className="fas fa-graduation-cap fa-10x"></i><br />Diplomados
                </Link>
              </div>
              <div className="col">
                <Link className="nav-link" to="cyt">
                    <i className="fas fa-chalkboard fa-10x"></i><br />Cursos y Talleres
              </Link>
              </div>
              <div className="col">
                <Link className="nav-link" to="idiom">
                    <i className="fas fa-language fa-10x"></i><br />Idiomas
                </Link>
              </div>
            </div>
          </div>
    );
}

export default Cursos;