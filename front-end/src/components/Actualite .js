import React, { Component } from 'react';
import { getAllActualites } from '../Crud-services/OperationServices'; // Importez la fonction pour récupérer toutes les actualités
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
class Actualite extends Component {
    state = {
      actualites: [] // État pour stocker les actualités récupérées
    };
  
    componentDidMount() {
      this.fetchActualites(); // Appelez la fonction pour récupérer les actualités au chargement du composant
    }
  
    fetchActualites() {
      getAllActualites((res) => {
        if (res.status === 200) {
          const actualites = res.data;
          this.setState({ actualites });
        } else {
          console.error("Erreur lors de la récupération des actualités:", res.data);
        }
      });
    }
    formatDateTime(dateTime) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDateTime = new Date(dateTime).toLocaleDateString('fr-FR', options);
        return formattedDateTime;
      }
    render() {
        const { actualites } = this.state;
      
        return (
          <div>
           
            <section className="articles">
              {actualites.map((actualite) => (
                <article key={actualite.id}>
                  <div className="article-wrapper">
                    <figure>
                      <img src="../images/actualite.jpg" alt="actualité" />
                    </figure>
                    <div className="article-body">
                      <h2>{actualite.titre}</h2>
                      <p style={{ marginBottom: '10px' }} className="date-publication" >  {this.formatDateTime(actualite.date_publication)}</p>
                      <p  style={{ marginBottom: '10px' }} className="description" > {actualite.description} :</p>
                      <p style={{ marginBottom: '10px' }} className="contenu" >{actualite.contenu}</p>
                      <p style={{ marginBottom: '10px' }} className="auteur" >Auteur : {actualite.auteur}</p>
                      <p style={{ marginBottom: '10px' }} className="categorie" >Catégorie : {actualite.catégorie}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        );
      }
      
  }
  export default Actualite;
  