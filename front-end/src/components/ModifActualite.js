import { Component } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateActualiteService } from '../Crud-services/OperationServices';


class ModifActualite extends Component {
  state = {
    titre: this.props.actualite.titre,
    description: this.props.actualite.description,
    contenu: this.props.actualite.contenu,
    auteur: this.props.actualite.auteur,
    catégorie: this.props.actualite.catégorie,
    message: '', // État pour stocker le message de modification
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updatedActualite = {
      id: this.props.actualite.id,
      titre: this.state.titre,
      description: this.state.description,
      contenu: this.state.contenu,
      auteur: this.state.auteur,
      catégorie: this.state.catégorie,
    };
    updateActualiteService(this.props.actualite.id, updatedActualite, (res) => {
      // Afficher le message de modification
      if (res.status === 200) {
        this.setState({ message: 'Actualité modifiée avec succès' });
      } else {
        this.setState({ message: 'Erreur lors de la modification de l\'actualité' });
      }
    });
  };
  
  
  

  render() {
    return (
      <div>
        <h2>Modifier l'actualité</h2>
        <form className='admin-accueil' onSubmit={this.handleSubmit}>
          <label>
            Titre:
            <input type="text" name="titre" className='admin-accueil' value={this.state.titre} onChange={this.handleChange} />
          </label>
          <label>
            Description:
            <textarea className='admin-accueil' name="description" maxLength={500} value={this.state.description} onChange={this.handleChange} rows={5} />
          </label>
          <label>
            Contenu:
            <textarea className='admin-accueil' name="contenu" maxLength={1000} value={this.state.contenu} onChange={this.handleChange} rows={10} />
          </label>
          <label>
            Auteur:
            <input className='admin-accueil' type="text" name="auteur" value={this.state.auteur} onChange={this.handleChange} />
          </label>
          <label>
            Catégorie:
            <input className='admin-accueil' type="text" name="catégorie" value={this.state.catégorie} onChange={this.handleChange} />
          </label>
          <button type="submit">Modifier</button>
        </form>
        {this.state.message && (
          <div className="message-success">
            <FontAwesomeIcon icon={faCheckCircle} className="icon-success" />
            <span>{this.state.message}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ModifActualite;
