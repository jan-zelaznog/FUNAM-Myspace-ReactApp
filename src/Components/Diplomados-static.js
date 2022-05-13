import '../App.css';
import React from 'react';
import eventsData from "../data";

const Diplomados = () => {
    return (
        <>
            <div classNameName="container">
            {
                eventsData.map((data, key) => {
                    return (
                        <div key = { key }>
                        <Event
                            key={key}
                            entidad={data.entidad}
                            sede={data.sede}
                            curso={data.curso}
                            cuota={data.cuota}
                          />
                        </div>
                    );
                }
            )}
            </div>
        </>
    );
}

const Event = ({ entidad, sede, curso, cuota }) => {
    if (!entidad) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{entidad}</h5>
            </td>
            <td>
              <h5>{sede}</h5>
            </td>
            <td>
              <h4>{curso}</h4>
            </td>
            <td>
              <p>{cuota}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

export default Diplomados;