import { Component } from 'react';
import { faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FormAjout extends Component {
  state = {
    newservs: '',
    categorie: '',
    adresse: '',
    specialite: '',
    telephone: '',
    description: '',
    message: '', // État pour stocker le message d'ajout
    
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

addservs = (event) => {
    event.preventDefault();
    this.props.ajoutservs(this.state);
     // Afficher le message d'ajout
     this.setState({ message: '   commercant ajouté avec succès' });
  };
  
  

  render() {
    return (
      <div>
        
        <form  className='admin-accueil border-form' onSubmit={this.addservs}>
          <label> Raison Sociale:<input type="text" name="nom" className='admin-accueil' onChange={this.changeHandler} /></label>
          
          <label>Adresse:<input className='admin-accueil' type="text" name="adresse" onChange={this.changeHandler} /></label>
          <label>Téléphone:<input className='admin-accueil' type="text" name="telephone" onChange={this.changeHandler} /></label>
          
          <label>Catégorie:<input className='admin-accueil' type="text" name="categorie" onChange={this.changeHandler} /></label>
          <label>Spécialité:<input className='admin-accueil' type="text" name="specialite" onChange={this.changeHandler} /></label>
          <label>Description:<input className='admin-accueil' type="text" name="description" onChange={this.changeHandler} /></label>
          <div>< button  style={{marginTop: '10px' }}> <FontAwesomeIcon icon={faPlus}  /> Ajouter</button></div>
          
          
          
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

export default FormAjout;
