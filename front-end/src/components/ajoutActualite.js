import { Component } from 'react';
import { faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addActualite } from '../Crud-services/OperationServices';
//import { addActualite } from '../OperationServices';

class AjoutActualite extends Component {
  state = {
    titre: '',
    description: '',
    contenu: '',
    auteur: '',
    categorie: '',
    message: '', // État pour stocker le message d'ajout
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  ajouterActualite = (event) => {
    event.preventDefault();
    addActualite(this.state, (res) => {
      // Fonction de rappel pour traiter la réponse de l'API
      // Exemple : afficher un message de succès
      console.log(res); // Vérifiez la réponse de l'API dans la console
      this.setState({ message: 'Actualité ajoutée avec succès' });
    });
  };
  
  

  render() {
    return (
      <div>
        
        <form className='admin-accueil' onSubmit={this.ajouterActualite}>
        <div>
        <label>Titre:<input type="text" name="titre" className='admin-accueil' style={{ width: '500px' }}  onChange={this.changeHandler} /></label>
          <label>Description:</label>
          <textarea className='admin-accueil' name="description" maxLength={500} style={{ width: '500px' }}onChange={this.changeHandler} rows={3} />
          <label>Contenu:</label><textarea className='admin-accueil' name="contenu" style={{ width: '500px' }} maxLength={500} onChange={this.changeHandler} rows={5} />
          <label>Auteur:<input className='admin-accueil' type="text" name="auteur" style={{ width: '500px' }} onChange={this.changeHandler} /></label>
          <label>Catégorie:<input className='admin-accueil' type="text" name="categorie"style={{ width: '500px' }}  onChange={this.changeHandler} /></label>
        </div>
          <div style={{marginTop: '10px' }} ><button><FontAwesomeIcon icon={faPlus}   /> Ajouter actualité</button></div>
       
          
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

export default AjoutActualite;
