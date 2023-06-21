

import React, { useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';


import 'swiper/swiper-bundle.css';


import "../style.css"
import Actualite from "./Actualite ";
import MenuResto from "./MenuResto";

function Home () {
   
    



  return (
  
      <div>
  
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Accueil</title>
    
       
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    
     
        
    
    </head>
    
    <body>
    

    
    <header>
   
   <div class="header-1">

       <div class="share">
           <span> Suivez-nous : </span>
           <a href="#" class="fab fa-facebook-f"></a>
           <a href="#" class="fab fa-twitter"></a>
           <a href="#" class="fab fa-instagram"></a>
           <a href="#" class="fab fa-linkedin"></a>
       </div>

       <div class="call">
           <span> Appelez-nous : </span>
           <a href="#">+216 22-222-222</a>
       </div>

   </div>

   <div class="header-2">

       <a href="#" class="logo"> <i class="fas fa-hamburger"></i> FOOD </a>

    

   </div>


</header>



<section class="home" id="home">



   
<h1 class="heading"> Menus </h1>


</section>
    
        <section class="banner-container">
    
            <div class="banner">
                <img src="../images/home1.png" alt="" />
                <div class="content">
                <span> réduction jusqu'à 35%</span>
                    <h3>PIZZA</h3>
                  
                </div>
            </div>
            <div class="banner">
                <img src="../images/home2.png" alt=""/>
                <div class="content">
                    <span> réduction jusqu'à 25% </span>
                    <h3>Hamburger</h3>
                
                </div>
            </div>
           
    
        </section>
    
        <section class="banner-container">
    
        <div class="banner">
                <img src="../images/home3.png" alt=""/>
                <div class="content">
                    <span>réduction jusqu'à 25% </span>
                    <h3>poulet frit</h3>
                
                </div>
            </div>
            <div class="banner">
                <img src="../images/banner2.png" alt=""/>
                <div class="content">
                    <span>nouveautés</span>
                    <h3>fruits bio</h3>
                
                </div>
            </div>
    
        </section>
    
        <section class="category" id="category">
    
            <h1 class="heading">  catégories </h1>
    
            <div class="box-container">
    
                <div class="box">
                    <img src="../images/cat1.png" alt=""/>
                    <div class="content">
                        <h3>Raisin</h3>
                       
                    </div>
                </div>
                <div class="box col-md-3">
                    <img src="../images/cat2.png" alt=""/>
                    <div class="content">
                        <h3>Pomme</h3>
                   
                    </div>
                </div>
                <div class="box">
                    <img src="../images/cat3.png" alt=""/>
                    <div class="content">
                        <h3>Beignet</h3>
                    
                    </div>
                </div>
                <div class="box">
                    <img src="../images/cat4.png" alt=""/>
                    <div class="content">
                        <h3>pasta</h3>
                        
                    </div>
                </div>
    
            </div>
    
        </section>
    
       
    
        <section class="product" id="product">
    
            <h1 class="heading"> nouvels produits </h1>
    
            <div class="box-container">
    
                <div class="box">
                    <span class="discount">-10%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product1.png" alt=""/>
                    <h3>dernières plantes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité: </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                  
                </div>
    
                <div class="box">
                    <span class="discount">-25%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product2.png" alt=""/>
                    <h3>derniers plantes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                   
                </div>
    
                <div class="box">
                    <span class="discount">-7%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product3.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                  
                </div>
    
                <div class="box">
                    <span class="discount">-4%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product4.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                  
                </div>
    
                <div class="box">
                    <span class="discount">-13%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product5.png" alt=""/>
                    <h3>dernières plantes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                    
                </div>
    
                <div class="box">
                    <span class="discount">-20%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product6.png" alt=""/>
                    <h3>dernières plantes</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantité : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">14.70 dt <span>18.20 dt</span></div>
                 
                </div>
    
            </div>
    
        </section>
    
        <section class="icons-container">
    
            <div class="icon">
                <img src="../images/icon1.png" alt=""/>
                <div class="content">
                    <h3>livraison gratuite </h3>
                    <p>livraison gratuite sur commande</p>
                </div>
            </div>
            <div class="icon">
                <img src="../images/icon2.png" alt=""/>
                <div class="content">
                    <h3>Remboursement à 100 %</h3>
                    <p>Vous avez 30 jours pour retourner</p>
                </div>
            </div>
            <div class="icon">
                <img src="./images/icon3.png" alt=""/>
                <div class="content">
                    <h3>
paiement sécurisé</h3>
                    <p> 
paiement sécurisé 100% </p>
                </div>
            </div>
            <div class="icon">
                <img src="../images/icon4.png" alt=""/>
                <div class="content">
                    <h3>Assistance 24h/24 et 7j/7</h3>
                    <p>Contacter nos à tout moment </p>
                </div>
            </div>
    
        </section>
    
      
    
        
    
        
    

<section>
<h1 class="heading">
Actualités</h1>
<Actualite />
</section>
<section>
<h1 class="heading">
Menus de jour</h1>
<MenuResto />
</section>


       
    
        
    
        <section class="footer">
    
            <div class="box-container">
    
                <div class="box">
                    <h3>à propos de nous</h3>
                   <p> Nous sommes fiers d'être basés au cœur du Cyberpark, un centre technologique dynamique
                     dédié à l'innovation et à la croissance. </p> 
                </div>
                <div class="box">
                    <h3>succursales</h3>
                    <a href="#">Djerba</a>
                    <a href="#">Mednine</a>
                    <a href="#">Tunis</a>
                   
                </div>
                <div class="box">
                    <h3>
Liens rapides</h3>
                    <a href="#">Menus</a>
                    <a href="#">Catégories</a>
                    <a href="#">produits</a>
                    <a href="#">Actualités</a>
                    <a href="#">Menus de jour</a>
                    <a href="#">Contact</a>
                </div>
                <div class="box">
                    <h3>Suivez-nous</h3>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linked</a>
                </div>
    
            </div>
    
          
    
        </section>
    
        <a href="#home" class="scroll-top fas fa-angle-up"></a>
    
        
   
      
    
    </body>
    
    </div>
  
  );
}

export default Home;
