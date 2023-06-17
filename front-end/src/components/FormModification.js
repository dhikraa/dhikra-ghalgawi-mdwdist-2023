import { Component } from 'react';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class FormModification extends Component {
  state = {
    nom: this.props.service.nom,

    categorie: this.props.service.categorie,
    adresse: this.props.service.adresse,
    specialite: this.props.service.specialite,
    telephone: this.props.service.telephone,
    description: this.props.service.description,
    message: '', // État pour stocker le message d'ajout
  };

  handleNomChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handleCategorieChange = (e) => {
    this.setState({ categorie: e.target.value });
  };

  handleAdresseChange = (e) => {
    this.setState({ adresse: e.target.value });
  };

  handleSpecialiteChange = (e) => {
    this.setState({ specialite: e.target.value });
  };
  handleTelephoneChange = (e) => {
    this.setState({ telephone: e.target.value });
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedService = {
      code: this.props.service.code,
      nom: this.state.nom,
      categorie: this.state.categorie,
      adresse: this.state.adresse,
      specialite: this.state.specialite,
      telephone: this.state.telephone,
      description: this.state.description,
    };
    this.props.updateService(updatedService);
  this.setState({ message: 'Commerçant modifié' });
 
  };

  render() {
    return (
      <div>
        <h2>Modifier le commerçant</h2>
        <form  className='admin-accueil' onSubmit={this.handleSubmit}>
          <label>
            Raison Sociale:
            <input className='admin-accueil' type="text" name="nom" value={this.state.nom} onChange={this.handleNomChange} />
          </label>
          <label>
            Adresse:
            <input className='admin-accueil' type="text" name="adresse" value={this.state.adresse} onChange={this.handleAdresseChange} />
          </label>
          <label>
            Téléphone:
            <input className='admin-accueil' type="text" name="telephone" value={this.state.telephone} onChange={this.handleTelephoneChange} />
          </label>
          <label>
            Catégorie:
            <input className='admin-accueil'type="text" name="categorie" value={this.state.categorie} onChange={this.handleCategorieChange} />
          </label>
          
          <label>
            Spécialité:
            <input className='admin-accueil'type="text" name="specialite" value={this.state.specialite} onChange={this.handleSpecialiteChange} />
            
          </label>
          <label>
            Description:
            <input className='admin-accueil'type="text" name="description" value={this.state.description} onChange={this.handleDescriptionChange} />
            
          </label>
          <button type="submit">Modifier</button>
        </form>
        {this.state.message && (
          <div className="message-success">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-success" />
            <span>{this.state.message}</span>
          </div>)}
      </div>
    );
  }
}


export default FormModification;
