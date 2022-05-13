import '../App.css';
import React from 'react';

const Tickets = () => {
    return (
        <div className="container">
          <form>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre.." required />
            <label for="lname">Apellido</label>
            <input type="text" id="lname" name="lastname" placeholder="Apellido.." required />
            <label for="topic">Asunto</label>
            <select id="topic" name="topic">
              <option value="Sugerencia">Sugerencia</option>
              <option value="Reporte">Reporte de error</option>
              <option value="Ayuda">Ayuda con mi membresía</option>
            </select>
            <label for="desc">Descripción</label>
            <textarea id="desc" name="desc" rows="5" placeholder="Describenos la situación.." required></textarea>
            <input className="btn btn-primary" type="submit" value="Enviar" />
          </form>
        </div>
    );
}

export default Tickets;