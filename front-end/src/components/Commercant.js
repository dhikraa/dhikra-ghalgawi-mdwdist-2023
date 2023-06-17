import React, { Component } from 'react';
import { add, getAll/*remove,*/ } from '../Crud-services/OperationServices';
import FormAjout from './FormAjout';


//import { v4 as uuidv4 } from 'uuid';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Commercant extends Component {
  state = {
    servs: [],
    displayAddForm: true,
    errorMessage: "", // Nouvelle propriété pour le message d'erreur
  };
  

  getServices = () => {
    getAll((res) => {
      const services = res.data.filter(service => service.archived !== 1);
      this.setState({ servs: services });
    });
  }
  

  componentDidMount() {
    this.getServices();
  }

  addservs = (d) => {
    const { servs } = this.state;
    
    // Vérifier si le commerçant existe déjà
    const existingCommercant = servs.find(
      (commercant) => commercant.nom === d.nom
    );
    
    if (existingCommercant) {
      // Afficher un message d'erreur ou prendre toute autre action souhaitée
      console.log("Ce commerçant existe déjà. L'ajout est impossible.");
      return;
    }
  
    
    let nouveauservs = {
      code: 1, // Par défaut, si la liste est vide
      nom: d.nom,
      categorie: d.categorie,
      adresse: d.adresse,
      telephone: d.telephone,
      specialite: d.specialite,
      description: d.description
    };
  
    if (servs.length > 0) {
      const dernierService = servs[servs.length - 1];
      nouveauservs.code = dernierService.code + 1;
    }
  
    add(nouveauservs, () => this.getServices());
  };
  




  
  

  toggleDisplayAddForm = () => {
    this.setState((prevState) => ({
      displayAddForm: !prevState.displayAddForm,
    
 
    }));
  }


 

  

  
  render() {
    return (


      <div > 
        <head>
        <link rel="stylesheet" type="text/css" href="css/Root.css" />
        </head>
     



      
    
        
    
        { this.state.displayAddForm && <FormAjout ajoutservs={this.addservs} /> }
     

        



       
    
    
        
      </div>
  

    );
    
    }
  }
  
  export default Commercant;