import React from 'react';

import Apropos from '../components/Apropos';

import Register from '../pages/Register';

import Root from '../components/Root';

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Home from '../components/home';


import Root1 from '../components/Root1';
import Connection from '../components/Connection';
import Actualite from '../components/Actualite ';
import Accueil from '../components/Accueil';
import MenuResto from '../components/MenuResto';



function Menu() {
  return (
    <Router>
  
  

      <div>
        <Routes>
        < Route path="/" element={<Connection />} />
          < Route path="/home" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
         
          <Route path="/register" element={<Register />} />
          <Route path="/admin-accueil" element={<Root />} /> 
          <Route path="/commercant" element={<Root1 />} />
          
          <Route path="/actualité" element={<Actualite />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/menu" element={<MenuResto />} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;
