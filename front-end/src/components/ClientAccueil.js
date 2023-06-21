import React, { Component } from 'react';

import MenuResto from './MenuResto';
import Actualite from './Actualite ';

class ClientAccueil extends Component {
  render() {
    return (
      <div>
        <h1 >Accueil </h1>
         <div><Actualite /></div>
       <div><MenuResto /></div> 
      </div>
    );
  }
}

export default ClientAccueil;
