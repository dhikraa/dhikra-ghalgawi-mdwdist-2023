import React, { Component } from 'react';
import { getAllMenus } from '../Crud-services/OperationServices';
import  "../navigation/CardResto.css"
class MenuResto extends Component {
  state = {
    menus: []
  };

  componentDidMount() {
    this.fetchMenus();
  }

  fetchMenus() {
    getAllMenus((res) => {
      if (res.status === 200) {
        const menus = res.data;
        this.setState({ menus });
      } else {
        console.error('Erreur lors de la récupération des menus :', res.data);
      }
    });
  }

  render() {
    const { menus } = this.state;
    return (
    <div>
           
    <section className="articles">
    {menus.map((menu) => (
        <article key={menu.id}>
          <div className="article-wrapper">
            <figure>
              <img src="../images/menu1.png" alt="actualité" />
            </figure>
            <div className="article-body">
              <h2>{menu.nom}</h2>
              
              <p  style={{ marginBottom: '10px' }} className="description" > {menu.nature} :</p>
              <p style={{ marginBottom: '10px' }} className="contenu" >{menu.description}</p>
              <p style={{ marginBottom: '10px' }} className="auteur" >Prix : {menu.prix}</p>
              
            </div>
          </div>
        </article>
      ))}
    </section>
    </div>
    );
  }
}

export default MenuResto;


