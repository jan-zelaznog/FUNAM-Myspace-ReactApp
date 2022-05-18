import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Solidarios from './Components/Solidarios';
import Contenidos from './Components/Contenidos';
import Foro from './Components/Foro';
import Cursos from './Components/Cursos';
import Tickets from './Components/Tickets';
import Diplomados from './Components/Diplomados';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/solidarios" element={<Solidarios/>}/>
          <Route exact path="/contenidos" element={<Contenidos/>}/>
          <Route exact path="/foro" element={<Foro/>}/>
          <Route exact path="/cursos" element={<Diplomados/>}/>
          <Route exact path="/tickets" element={<Tickets/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
