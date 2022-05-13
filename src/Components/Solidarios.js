import '../App.css';
import { Link } from 'react-router-dom';

const Solidarios = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <figure>
                        <img src="https://www.fundacionunam.org.mx/wp-content/uploads/2021/03/ASÓCIATEDONA.jpg" alt="Súmate a Fundación UNAM" className="figure-img img-fluid rounded mx-auto d-block" />
                    </figure>
                </div>
                <div className="col">
                    <div className="info-becarios">
                        <h2>¿Por qué donar a Fundación UNAM?</h2>
                        <div className="bullets">
                            <ul>
                                <li>Porque trabaja a favor de las causas de la Universidad Nacional Autónoma de México y funge como lazo de unión, absolutamente incluyente, de quienes integran la comunidad universitaria: alumnos, académicos, trabajadores, funcionarios de la administración y ex alumnos.</li>
                                <li>Porque promueve fuertemente la afiliación de quienes se identifican con la Universidad y sirve de vehículo para materializar, en acciones concretas y a través de donativos, ese sentimiento de simpatía o gratitud.</li>
                            </ul>
                        </div>
                        <div className="links">
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/por-que-apoyar-a-funam/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Por qué sumarte a FUNAM
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/beneficios-de-apoyar/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Beneficios de donar
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/beneficios-dentro-de-la-unam/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Beneficios dentro de la UNAM
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/formas-de-aportar/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Formas de donar
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/asociate/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Súmate
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/ser-asociado/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Ser aliado
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/ser-donante/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Ser donante
                            </Link>
                            <Link to={{ pathname:"//www.fundacionunam.org.mx/new/visitas-guiadas/" }} target="_blank" className="link">
                                <i aria-hidden="true" className="fas fa-dot-circle" /> Visitas guiadas
                            </Link>
                        </div>
                        <div>
                            <Link to={{ pathname:"//fundacionunam.org.mx/sumate" }} target="_blank" className="btn btn-primary">Súmate a Fundación UNAM</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solidarios;