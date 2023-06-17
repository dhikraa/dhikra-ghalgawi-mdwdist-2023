import React, { Component } from 'react';
import AjoutActualite from './ajoutActualite';
import ModifActualite from './ModifActualite';
import { getAllActualites, deleteActualite } from '../Crud-services/OperationServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash,faEdit  } from '@fortawesome/free-solid-svg-icons';

class GestionActualite extends Component {
  state = {
    displayForm: false, // État pour afficher/masquer le formulaire
    displayList: false, // État pour afficher/masquer la liste des actualités
    actualites: [], // État pour stocker les actualités récupérées
    actualiteToEdit: null, // État pour stocker l'actualité en cours de modification
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      displayForm: !prevState.displayForm,
      displayList: false,
  
    }));
  };

  toggleList = () => {
    this.setState((prevState) => ({
      actualiteToEdit:false,
      displayForm: false,
      displayList: !prevState.displayList,
    }), () => {
      if (this.state.displayList) {
        this.fetchActualites();
      }
    });
  };

  fetchActualites = () => {
    getAllActualites((res) => {
      this.setState({ actualites: res.data });
    });
  };
  deleteActualite = (id) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de supprimer cette actualité ?");
    if (confirmDelete) {
      deleteActualite(id, (res) => {
        // Vérifier la réponse de suppression
        if (res.status === 200) {
          // Supprimer l'actualité de l'état local
          const updatedActualites = this.state.actualites.filter(actualite => actualite.id !== id);
          this.setState({ actualites: updatedActualites });
        } else {
          console.error('Erreur lors de la suppression de l\'actualité');
        }
      });
    }
  };
  updateActualite = (id) => {
    // Récupérer les données de l'actualité à modifier
    const actualiteToEdit = this.state.actualites.find(actualite => actualite.id === id);
    // Afficher le formulaire de modification avec les données pré-remplies
    this.setState({ displayForm: false , displayList: false ,actualiteToEdit });
  };

  
  render() {
    const { actualites, actualiteToEdit } = this.state;

    return (
      <div>
        <div>
          <button class="btn btn-primary btn-lg"  onClick={this.toggleForm} style={{
    width: '30px',
    
  }}><FontAwesomeIcon icon={faPlus} /> </button>
          <button class="btn btn-primary btn-lg"  onClick={this.toggleList}>liste des actualités</button>
        </div>
        {this.state.displayForm && <AjoutActualite />}
        {this.state.displayList && (
          <div style={{marginBottom: '20px' }}>
           
            <table>
              <thead>
                <tr>
           
                  <th>Titre</th>
                  <th>Description</th>
                  <th>Contenu</th>
                  <th>Auteur</th>
                  <th>Catégorie</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                {actualites.map((actualite) => (
                  <tr key={actualite.id}>
                    
                    <td>{actualite.titre}</td>
                    <td>{actualite.description}</td>
                    <td>{actualite.contenu}</td>
                    <td>{actualite.auteur}</td>
                    <td>{actualite.catégorie}</td>
                
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.updateActualite(actualite.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                    <td>
                    <button
        className="btn btn-danger"
        onClick={() => this.deleteActualite(actualite.id)}
        style={{ color: 'white', backgroundColor: 'red' }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
          {actualiteToEdit && (
          <ModifActualite
            actualite={actualiteToEdit}
            updateActualite={this.updateActualite}
          />
        )}
      </div>
    );
  }
}

export default GestionActualite;
