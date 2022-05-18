import '../App.css';
import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button';


const Tickets = () => {
    var [nombre, setNombre] = React.useState('');
    var [apellidos, setApellidos] = React.useState('');
    var [asunto, setAsunto] = React.useState('Quiero...');
    var [descripcion, setDescripcion] = React.useState('');
    const textNom = React.useRef(null);
    const textApp = React.useRef(null);
    const textDsc = React.useRef(null);
    const selTopic = React.useRef(null);

    const handleBuscar = () => {
      if (!nombre) {
        alert('Por favor introduce tu nombre');
        return;
      }
      if (!apellidos) {
        alert('Por favor introduce tu apellido');
        return;
      }
      if (!asunto) {
        alert('Indica de que tipo es tu solicitud');
        return;
      }
      if (!descripcion) {
        alert('Por favor describe la situación');
        return;
      }
      setTimeout(() =>{
        alert(nombre + ' tu mensaje fue recibido. Nos comunicaremos contigo a la brevedad. Gracias!');
        textNom.current.value = '';
        textApp.current.value = '';
        textDsc.current.text = '';
        selTopic.current.value = null;
     }, 1000)
    }

  return (
    <Grid className='container' spacing={10}>
      <Grid item sm={6} xs={12}>
        <TextField 
        label="Nombre" 
        fullWidth 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        inputRef={textNom}
        error={!nombre}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField 
        label="Apellidos" 
        fullWidth 
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
        required
        inputRef={textApp}
        error={!apellidos}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Select
          label="Asunto"
          fullWidth
          value={asunto}
          onChange={ (e) => setAsunto(e.target.value) }
          required
          inputRef={selTopic} 
        >
          <MenuItem disabled value=""><em>Quiero...</em></MenuItem>
          <MenuItem value={"Sugerencia"}>Enviar una sugerencia</MenuItem>
          <MenuItem value={"Reporte"}>Hacer un Reporte</MenuItem>
          <MenuItem value={"Ayuda"}>Solicitar Ayuda</MenuItem>
        </Select>
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextareaAutosize 
          label="Descripcion"
          minRows={4}
          maxRows={4}
          placeholder="Describenos la situación.."
          fullWidth
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)} 
          required
          inputRef={textDsc}
          error={!descripcion}
         />
      </Grid>
     <Grid item xs={12} align="center">
         <Button
         variant="contained"
         onClick={handleBuscar}
         >
              Enviar
         </Button>
     </Grid>

    </Grid>
  );
};

export default Tickets;

/*

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
*/