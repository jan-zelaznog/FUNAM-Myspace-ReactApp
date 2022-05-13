import React, { useEffect, useState } from "react";
import Grid  from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Diplomados () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://funam.mx/dev_cursos/catalogo/oferta_academica';
        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
              },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
        <Container classNameName="container">
            <Grid container>
                {items.map((data, key) => {
                    return (
                        <Grid item key={key} lg={3} md={4} sm={6} xs={12}>
                            <Event
                                key={key}
                                entidad={data.entidad}
                                sede={data.sede}
                                curso={data.curso}
                                cuota={data.cuota}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
        );
    }
}

const Event = ({ entidad, sede, curso, cuota }) => {
    if (!entidad) return <div />;
    return (
        <>
            <h3>{entidad}</h3>
            <h4>{sede}</h4>
            <h5>{curso}</h5>
            <p>{cuota}</p>
      </>
    );
  };

export default Diplomados;