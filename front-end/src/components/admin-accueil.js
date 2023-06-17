import React, { Component } from 'react';
import FormAjout from './FormAjout';
import FormModification from './FormModification ';
class AdminAccueil extends Component {
    state = {
      displayForm: false, // État pour afficher le formulaire d'ajout
      displayList: false, // État pour afficher la liste des commerçants
    };
  
    toggleDisplayForm = () => {
      this.setState((prevState) => ({
        displayForm: !prevState.displayForm,
        displayList: false,
      }));
    };
  
    toggleDisplayList = () => {
      this.setState((prevState) => ({
        displayForm: false,
        displayList: !prevState.displayList,
      }));
    };
  
    render() {
      return (
        <div>
          <button onClick={this.toggleDisplayForm}>Ajouter Commerçant</button>
          <button onClick={this.toggleDisplayList}>Liste des Commerçants</button>
  
          {this.state.displayForm && <FormAjout ajoutservs={this.props.addservs} />}
          {this.state.displayList && <FormModification service={this.state.selectedService}
              updateService={this.updateService}  /> }
        </div>
      );
    }
  }

  export default AdminAccueil;
  