import React from 'react';
import CardResto from './CardResto';
import PlatCard from './PlatCard';
import BestDeal from './BestDeal';


function Accueil() {
 
return (
    <section>

					<div class="row justify-content-center">
						
							<h1>Discover &amp; Book</h1>
							<p>The best restaurants at the best price</p>
           
  
      </div>
      <div class="main_title center" >
					<span  ><em></em></span>
					<h1 >Popular Categories</h1>
					
				</div>
      <CardResto />
      <div class="main_title center" >
					<span  ><em></em></span>
					<h1 >Popular Plats</h1>
					
				</div>
      <PlatCard />
      <div class="main_title center" >
					<span  ><em></em></span>
					<h1 >Best Deals</h1>
					
				</div>
    

      <BestDeal/>
    </section>
);}

export default Accueil;