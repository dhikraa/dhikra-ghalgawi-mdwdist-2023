import React, { Component } from 'react';
import { add, getAll,/*remove,*/ update,archive } from '../Crud-services/OperationServices';
import FormAjout from './FormAjout';
import FormModification from './FormModification';

import { v4 as uuidv4 } from 'uuid';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Services extends Component {
  state = {
    servs: [],
    selectedService: null, // État pour stocker le service sélectionné
    displayAddForm: false, // État pour afficher le formulaire d'ajout
  
    displaySupp: false,
    displayEditForm: false, // Nouvelle propriété pour afficher le formulaire de modification
  };

  /*getServices = () => {
    getAll((res) => {
      this.setState({ servs: res.data });
    });
  }*/
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
    //let tc = this.state.servs;
    //let size = this.state.servs.length;
    let nouveauservs = {
      //code: size > 0 ? parseInt(tc[size - 1].code) + 1 : 1,
      code: uuidv4(), // Utilisation d'une valeur de code unique générée avec uuid
      nom: d.nom,
      categorie: d.categorie,
      adresse: d.adresse,
      telephone:d.telephone,
      specialite: d.specialite,
      description:d.description
    };
    add(nouveauservs, () => this.getServices());
  };

 /*deleteservs = (id) => {
    remove(id, () => this.getServices());
  }*/
  deleteservs = (id) => {
    if (window.confirm('Êtes-vous sûr d\'archiver ce commerçant ?')) {
    archive(id, () => this.getServices());
  }
}
  


  selectService = (service) => {
    
      this.setState({ selectedService: service }, () => {
        this.toggleDisplayEditForm(); 
      });
    }
  
  
  updateService = (updatedService) => {
    update(updatedService, () => {
      this.setState({ selectedService: null });
      this.getServices();
      //this.toggleDisplayEditForm(); 
    });
  }

  toggleDisplayAddForm = () => {
    this.setState((prevState) => ({
      displayAddForm: !prevState.displayAddForm,
    
      displaySupp: false,
    }));
  }


  toggleDisplaSupp = () => {
    this.setState((prevState) => ({
      displayAddForm: false,
      displaySupp: !prevState.displayList1,
      displayEditForm: false,
   
    }));

  }
  toggleDisplayEditForm = () => {
    this.setState((prevState) => ({
      displayEditForm: !prevState.displayEditForm,
      displayAddForm: false,
      displaySupp: false,
   
    }));
  }
  

  
  render() {
    return (


      <div > 
        <head>
        <link rel="stylesheet" type="text/css" href="css/Root.css" />
        </head>
        <table >
          


<button class="btn btn-primary btn-lg" onClick={this.toggleDisplayAddForm}  style={{
    width: '30px',marginBottom: '20px'
    
  }}><FontAwesomeIcon icon={faPlus} /></button>
          <button type="button" class="btn btn-primary btn-lg" style={{
    marginBottom: '20px'
    
  }}
           onClick={this.toggleDisplaSupp}>liste Commercants</button>



       </table>
    
        
    
        {this.state.displayAddForm && <FormAjout ajoutservs={this.addservs} /> }
     

        

{this.state.displaySupp && (
  <div >
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Raison social</th>
                <th>Adresse</th>
                <th>Téléphone</th>
                <th>Catégorie</th>
                <th>Spécialité</th>
                <th>Description</th>
                <th>Modifier</th>
                <th>Archiver</th>
              </tr>
            </thead>
            <tbody>
              {this.state.servs.filter((d) => d.archived !== 1).map((d, i) => (
                <tr key={i}>
                  <td>{d.code}</td>
                  <td>{d.nom}</td>
                  <td>{d.adresse}</td>
                  <td>{d.telephone}</td>
                  <td>{d.categorie}</td>
                  <td>{d.specialite}</td>
                  <td>{d.description}</td>
                 
                  <td>
                   
                    < button onClick={() => this.selectService(d)}>Modifier</button>
                  </td>
                  <td> <button onClick={() => this.deleteservs(d.code)}> <FontAwesomeIcon icon={faTrash} /></button></td>
                  
  

                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}

       
    
    {this.state.displayEditForm && (
          <FormModification
            service={this.state.selectedService}
            updateService={this.updateService}
          />
        )}
        
      </div>
  

    );
    
    }
  }
  
  export default Services;