import React from 'react';
import  "../navigation/PlatCard.css"
function PlatCard() {
    return (
        <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
          <span class="card_price"><span>$</span>9</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Farmstand Salad</h2>
          <div class="card_text">
            <p>
Plongez dans les légumes les plus frais de la saison ! Cette salade en bocal
 contient un mélange de légumes verts et de légumes de saison, frais du marché fermier
            </p>
            <hr />
            <p>Servi avec votre choix de sauce à côté : <strong>ranch maison</strong>,
             <strong>vinaigrette balsamique aux cerises</strong>, <strong>chipotle crémeux</strong>,
              <strong> avocat green goddess  </strong>, ou <strong>moutarde au miel</strong>.
              Ajoutez votre choix de protéine pour 2 $ de plus.
            </p>
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
          <span class="card_price"><span>$</span>18</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Ultimate Reuben</h2>
          <div class="card_text">
            <p>Tous les grands repas prennent du temps, mais celui-ci le pousse à un niveau supérieur ! Plus de 650 heures de fermentation, de saumure,
             de vieillissement et de maturation sont nécessaires pour chacun de nos légendaires sandwichs Reuben.
            </p>
            <p>Chaque élément de ce sandwich extraordinaire est artisanal et préparé dans nos cuisines, du pain de seigle cuit selon notre recette secrète au fromage suisse vieilli en cave, jusqu'à la cornichon. La seule chose que nous n'avons pas fabriquée sur place est le cure-dent (mais nous cherchons comment le faire).
            </p>
            <hr />
            <p>Ce sandwich inoubliable contient tous les éléments classiques du Reuben :
                 <strong>du boeuf salé</strong>, <strong>du pain de seigle</strong>,
                  <strong>une sauce russe crémeuse</strong>, <strong>de la choucroute</strong>,
                  plus un  <strong>cornichon aigre-doux</strong>.
                  Aucune substitution n'est possible !
            </p>
            <p>Ajoutez des  <strong>frites</strong> ou<strong> des frites de patate douce pour 2 $ de plus </strong> 
              <strong>ou nos chips maison</strong> pour 1 $
            </p>
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <span class="note">Seasonal</span>
          <img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries." />
          <span class="card_price"><span>$</span>16</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Fig &amp; Berry Plate</h2>
          <div class="card_text">
            <p>Un succulent sextuor de figues fraîches s'associe à une sélection de baies de saison 
                audacieuses dans ce dessert rafraîchissant et à partager.
            </p>
            <hr />
            <p>Choisissez votre sauce: <strong>vinaigre de cerise-balsamique</strong>, <strong>miel local</strong>, ou
              <strong>sauce au chocolat maison</strong>.
            </p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
    );}
    export default PlatCard;