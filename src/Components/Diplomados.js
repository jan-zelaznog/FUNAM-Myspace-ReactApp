import React, { useEffect, useState } from "react";
import Grid  from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';

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
        var itemIx = 0;
        var aClass = "";
        return (
        <Container classNameName="container">
            <Grid container>
                {items.map((data, key) => {
                    if (itemIx === 1)
                    itemIx = 2;
                  else
                    itemIx = 1;
                  aClass = "gridItem" + itemIx;
                    return (
                        <Grid className={aClass} item key={key} lg={3} md={4} sm={6} xs={12}>
                            <Event
                                key={key}
                                item={data}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
        );
    }
}

const Event = ({ item }) => {
    if (!item) return <div />;
    var url = '';
    if (item.link.includes('http:'))
        url = item.link.replace('http:', '');
    else
        url = item.link.replace('https:', '');
    var options = { style: 'currency', currency: 'USD' };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    let importe = numberFormat.format(item.cuota);
    return (
        <>
        <table className="tables">
            <tr><td colspan="2"><h4>{item.curso}</h4></td></tr>
            <tr><td colspan="2"><h5>{item.sede} - {item.entidad}</h5></td></tr>
            <tr><td>&nbsp;</td><td>{importe}</td></tr>
            <tr>
                <td><Link to={{ pathname: url }} target="_blank" className="btn btn-primary">Más información</Link></td>
                <td><Link to={{ pathname: "//funam.mx/dev_cursos/inscribete" }} target="_blank" className="btn btn-primary">Inscribete!</Link></td>
            </tr>
        </table>
      </>
    );
  };

export default Diplomados;