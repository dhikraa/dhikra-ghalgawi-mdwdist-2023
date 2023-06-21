import React from 'react';
import CardResto from './CardResto';
import PlatCard from './PlatCard';
import BestDeal from './BestDeal';
import Actualite from './Actualite ';
import MenuResto from './MenuResto';


function Accueil() {
 
return (
    <section>

					<div style={{ textAlign: 'center' ,marginBottom: '40px'  }}  >
					<span><em></em></span>
						<h1>Découvrir et Réserver</h1>
						<p style={{ fontSize: '20px' }} >Les meilleurs restaurants au meilleur prix</p>
						</div>


  <div class="main_title center" >
				<span><em></em></span>
				<h1>Catégories populaires</h1>
				
			</div>
  <CardResto />
  <div class="main_title center" >
				<span><em></em></span>
				<h1>Plats populaires</h1>
				
			</div>
  <PlatCard />
  <div class="main_title center" >
				<span><em></em></span>
				<h1>Meilleures offres</h1>
				
			</div>


  <BestDeal/>
  <div class="main_title center" >
				<span><em></em></span>
				<h1>Actualités</h1>
				
			</div>


			<Actualite />
			<div class="main_title center" >
				<span><em></em></span>
				<h1>Menus</h1>
				
			</div>


		
    

				<MenuResto />
    </section>
);}

export default Accueil;