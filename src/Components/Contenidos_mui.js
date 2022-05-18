import '../App.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material'

const ContenidosMui = () => {
  var items = [
    { image: "https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/inteligenciaARTIFICIAL1.jpg",
      title: "La Inteligencia Artificial necesita un impulso en México con perspectiva de derechos humanos",
      text: "Académicos, especialistas e integrantes de organizaciones civiles, buscan impulsar la generación de una estrategia nacional que contenga políticas públicas y una normatividad con perspectiva de derechos humanos en materia de Inteligencia Artificial (IA) en México.",
      path: "//www.fundacionunam.org.mx/vanguardia-unam/la-inteligencia-artificial-necesita-un-impulso-en-mexico-con-perspectiva-de-derechos-humanos/"
    },
    { image: "https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/reapertural_portada.jpg",
      title: "Reabre el Centro de Enseñanza y Certificación de Aptitudes Médica",
      text: "La Facultad de Medicina de la UNAM reabrió las puertas del Centro de Enseñanza y Certificación de Aptitudes Médicas (CECAM), el cual es un sitio donde por medio de simuladores, los próximos médicos del país ponen en práctica de manera presencial lo aprendido teóricamente y a distancia.",
      path: "//www.fundacionunam.org.mx/auriazul/reabre-el-centro-de-ensenanza-y-certificacion-de-aptitudes-medica/"
    },
    { image: "https://www.fundacionunam.org.mx/wp-content/uploads/2021/10/sindrome_portada.jpg",
      title: "Síndrome post-COVID: las secuelas del SARS-CoV-2",
      text: "A finales de 2019 en una provincia de China comenzó a propagarse el COVID-19, un potente virus –SARS-CoV-2- que desde entonces provocó una pandemia, ha pasado ya por varias mutaciones, ha contagiado a millones de personas a nivel mundial, y en México –hasta septiembre de 2021- ha terminado con la vida de 240 906 habitantes.",
      path: "//www.fundacionunam.org.mx/unam-al-dia/sindrome-post-covid-las-secuelas-del-sars-cov-2/"
    }
  ]
    return (
      <Carousel>
      {
          items.map( (item, i) => <Item key={i} item={item} /> )
      }
      </Carousel>
    );
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt="..." />
            <h5>{props.item.title}</h5>
            <p>{props.item.text}</p>
            <Link to={{pathname:{props.item.path}}} className="btn btn-primary">Nota completa &rarr;</Link>
        </Paper>
    )
}

export default ContenidosMui;