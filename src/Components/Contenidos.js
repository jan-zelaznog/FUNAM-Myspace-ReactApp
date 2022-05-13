import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Contenidos = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <img src="https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/inteligenciaARTIFICIAL1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">La Inteligencia Artificial necesita un impulso en México con perspectiva de derechos humanos</h5>
                  <p className="card-text">Académicos, especialistas e integrantes de organizaciones civiles, buscan impulsar la generación de una estrategia nacional que contenga políticas públicas y una normatividad con perspectiva de derechos humanos en materia de Inteligencia Artificial (IA) en México.</p>
                  <Link to={{ pathname:"//www.fundacionunam.org.mx/vanguardia-unam/la-inteligencia-artificial-necesita-un-impulso-en-mexico-con-perspectiva-de-derechos-humanos/"}} className="btn btn-primary">Nota completa &rarr;</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src="https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/reapertural_portada.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Reabre el Centro de Enseñanza y Certificación de Aptitudes Médica</h5>
                  <p className="card-text">La Facultad de Medicina de la UNAM reabrió las puertas del Centro de Enseñanza y Certificación de Aptitudes Médicas (CECAM), el cual es un sitio donde por medio de simuladores, los próximos médicos del país ponen en práctica de manera presencial lo aprendido teóricamente y a distancia.</p>
                  <Link to={{pathname:"//www.fundacionunam.org.mx/auriazul/reabre-el-centro-de-ensenanza-y-certificacion-de-aptitudes-medica/"}} className="btn btn-primary">Nota completa &rarr;</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src="https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/sindrome_portada.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Síndrome post-COVID: las secuelas del SARS-CoV-2</h5>
                  <p className="card-text">A finales de 2019 en una provincia de China comenzó a propagarse el COVID-19, un potente virus –SARS-CoV-2- que desde entonces provocó una pandemia, ha pasado ya por varias mutaciones, ha contagiado a millones de personas a nivel mundial, y en México –hasta septiembre de 2021- ha terminado con la vida de 240 906 habitantes.</p>
                  <Link to={{pathname:"//www.fundacionunam.org.mx/unam-al-dia/sindrome-post-covid-las-secuelas-del-sars-cov-2/"}} className="btn btn-primary">Nota completa &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Contenidos;