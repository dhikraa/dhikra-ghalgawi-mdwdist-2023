import React, { Component } from 'react';
import { addMenu } from '../Crud-services/OperationServices';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AjoutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      nature: '',
      description: '',
      prix: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { nom, nature, description, prix } = this.state;
    const data = { nom, nature, description, prix };
    addMenu(data, (res) => {
      if (res.status === 200) {
        window.confirm('Le menu a été ajouté avec succès');
        // Menu ajouté avec succès, effectuer les actions nécessaires (par ex. rediriger vers une autre page)
      } else {
        // Erreur lors de l'ajout du menu, gérer l'erreur (par ex. afficher un message d'erreur)
      }
    });
  }

  render() {
    const { nom, nature, description, prix } = this.state;
    return (
      <div>
     
        <form className='admin-accueil border-form' onSubmit={this.handleSubmit}>
          <div>
            <label>Nom :</label>
            <input type="text" name="nom" value={nom} className='admin-accueil' onChange={this.handleChange} />
          </div>
          <div>
            <label>Nature :</label>
            <input type="text" name="nature" value={nature} className='admin-accueil' onChange={this.handleChange} />
          </div>
          <div>
            <label>Description :</label>
            <textarea name="description" value={description} className='admin-accueil' onChange={this.handleChange} />
          </div>
          <div>
            <label>Prix :</label>
            <input type="text" name="prix" value={prix} className='admin-accueil' onChange={this.handleChange} />
          </div>
          <button type="submit" style={{marginTop: '10px' }}> <FontAwesomeIcon icon={faPlus} /> Ajouter</button>
        </form>
      </div>
    );
  }
}

export default AjoutMenu;
