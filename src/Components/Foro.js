import '../App.css';
import React from 'react';

const Foro = () => {
    return (
        <div className="container">
            <div className="list-group">
                <topic className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Cancha Puma</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">
                        Pumas CU con toda la concentración rumbo a Liga Mayor
                        <span className="badge"><i className="fas fa-thumbs-up"></i>&nbsp;4</span>
                    </p>
                    <small>El equipo de futbol americano Pumas de Ciudad Universitaria sigue en su preparación rumbo al inicio de la temporada de Liga Mayor...</small>
                </topic>
                <topic className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Historias con Garra</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Mujeres en puestos directivos: una realidad para todas
                    <span className="badge"><i className="fas fa-thumbs-up"></i>&nbsp;11</span>
                  </p>
                  <small className="text-muted">La UNAM, a través de la Coordinación para la Igualdad de Género de la Universidad (CIGU), organizó los conversatorios virtuales “Apasionadas por el saber” y ...</small>
                </topic>
                <topic className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Rostros de la UNAM</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">B@UNAM ya cuenta con 8 mil 400 egresados.
                    <span className="badge"><i className="fas fa-thumbs-up"></i>&nbsp;18</span>
                  </p>
                  <small className="text-muted">El programa Bachillerato a Distancia (B@UNAM), de la Coordinación de Universidad Abierta, Innovación Educativa y Educación a Distancia, ya sumó a 8 mil 400 egresados...</small>
                </topic>
              </div>
        </div>
    );
}

export default Foro;