

import React, { useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import ReactPaginate from 'react-paginate';

import "../style.css"
import Actualite from "./Actualite ";
function Home () {
    useEffect(() => {
        const menu = document.querySelector('#menu-bar');
        const navbar = document.querySelector('.navbar');
        const header = document.querySelector('.header-3');
        const scrollTop = document.querySelector('.scroll-top');
    
        const handleScroll = () => {
          menu.classList.remove('fa-times');
          navbar.classList.remove('active');
    
          if (window.scrollY > 250) {
            header.classList.add('active');
          } else {
            header.classList.remove('active');
          }
    
          if (window.scrollY > 250) {
            scrollTop.style.display = 'initial';
          } else {
            scrollTop.style.display = 'none';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        const swiper = new Swiper('.home-slider', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
        });
    
        let countDate = new Date('June 1, 2021 00:00:00').getTime();
    
        const countDown = () => {
          let now = new Date().getTime();
    
          const gap = countDate - now;
    
          let second = 1000;
          let minute = second * 60;
          let hour = minute * 60;
          let day = hour * 24;
    
          let d = Math.floor(gap / day);
          let h = Math.floor((gap % day) / hour);
          let m = Math.floor((gap % hour) / minute);
          let s = Math.floor((gap % minute) / second);
    
          document.getElementById('day').innerText = d;
          document.getElementById('hour').innerText = h;
          document.getElementById('minute').innerText = m;
          document.getElementById('second').innerText = s;
        };
    
        setInterval(countDown, 1000);
        const handlePageClick = (data) => {
            const selectedPage = data.selected;
            // Mettez à jour votre état ou effectuez une action pour charger les données de la page sélectionnée
            // par exemple : fetchPageData(selectedPage)
          };
          
        return () => {
          window.removeEventListener('scroll', handleScroll);
          swiper.destroy();
        };
      }, []);
    



  return (
  
      <div>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Home</title>
    
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    
     
        
    
    </head>
    
    <body>
    

    
        <header>
    
            <div class="header-1">
    
                <div class="share">
                    <span> follow us : </span>
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
    
                <div class="call">
                    <span> call us : </span>
                    <a href="#">+216 22-222-222</a>
                </div>
    
            </div>
    
            <div class="header-2">
      
                <a href="#" class="logo"> <i class="fas fa-hamburger"></i> FOOD </a>
                <nav>
  <ul>
    <li>

      <Link to="/actualité"> <h1> Actualités </h1></Link>
    </li>
    <li>

      <Link to="/menu"> <h1> Menus </h1></Link>
    </li>
  
   

   </ul>
</nav>
    
                
    
            </div>
    
        
        </header>
    
      
    
        <section class="home" id="home">
    
            <div class="swiper-container home-slider">
    
                <div class="swiper-wrapper">
    
                 
                  
                  
    
                </div>
    
    
            </div>
           

        </section>
    
       
    
        <section class="banner-container">
    
            <div class="banner">
                <img src="../images/banner1 (1).png" alt="" />
                <div class="content">
                    <span>new arrivals</span>
                    <h3>house plants</h3>
                  
                </div>
            </div>
            <div class="banner">
                <img src="../images/banner2.png" alt=""/>
                <div class="content">
                    <span>new arrivals</span>
                    <h3>office plants</h3>
                
                </div>
            </div>
    
        </section>
    
       
    
        <section class="category" id="category">
    
            <h1 class="heading">  category </h1>
    
            <div class="box-container">
    
                <div class="box">
                    <img src="../images/cat1.png" alt=""/>
                    <div class="content">
                        <h3>Grape</h3>
                       
                    </div>
                </div>
                <div class="box col-md-3">
                    <img src="../images/cat2.png" alt=""/>
                    <div class="content">
                        <h3>Apple</h3>
                   
                    </div>
                </div>
                <div class="box">
                    <img src="../images/cat3.png" alt=""/>
                    <div class="content">
                        <h3>Bagel</h3>
                    
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
    
            <h1 class="heading"> new products </h1>
    
            <div class="box-container">
    
                <div class="box">
                    <span class="discount">-10%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product1.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                  
                </div>
    
                <div class="box">
                    <span class="discount">-25%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product2.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                   
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
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                  
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
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                  
                </div>
    
                <div class="box">
                    <span class="discount">-13%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product5.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                    
                </div>
    
                <div class="box">
                    <span class="discount">-20%</span>
                    <div class="icons">
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-share"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                    <img src="../images/product6.png" alt=""/>
                    <h3>latest plants</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="quantity">
                        <span> quantity : </span>
                        <input type="number" min="1" max="100" value="1"/>
                    </div>
                    <div class="price">$14.70 <span>$18.20</span></div>
                 
                </div>
    
            </div>
    
        </section>
    
        <section class="icons-container">
    
            <div class="icon">
                <img src="../images/icon1.png" alt=""/>
                <div class="content">
                    <h3>free shipping</h3>
                    <p>Free shipping on order</p>
                </div>
            </div>
            <div class="icon">
                <img src="../images/icon2.png" alt=""/>
                <div class="content">
                    <h3>100% Money Back</h3>
                    <p>You’ve 30 days to Return</p>
                </div>
            </div>
            <div class="icon">
                <img src="./images/icon3.png" alt=""/>
                <div class="content">
                    <h3>Payment Secure</h3>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div class="icon">
                <img src="../images/icon4.png" alt=""/>
                <div class="content">
                    <h3>Support 24/7</h3>
                    <p>Contact us anytime</p>
                </div>
            </div>
    
        </section>
    
      
    
        <section class="deal" id="deal">
    
            <h1 class="heading"> deal of the day </h1>
    
            <div class="row">
    
                <div class="content">
                    <h3 class="title">don't miss the deal</h3>
                
                    <div class="count-down">
                        <div class="box">
                            <h3 id="day">00</h3>
                            <span>day</span>
                        </div>
                        <div class="box">
                            <h3 id="hour">00</h3>
                            <span>hour</span>
                        </div>
                        <div class="box">
                            <h3 id="minute">00</h3>
                            <span>minute</span>
                        </div>
                        <div class="box">
                            <h3 id="second">00</h3>
                            <span>second</span>
                        </div>
                    </div>
                  
                </div>
    
                <div class="image">
                    <img src="../images/deal.png" alt=""/>
                </div>
    
            </div>
    
        </section>
    
        
    
        <section class="contact" id="contact">
    
            <h1 class="heading">get in touch</h1>
    
            <div class="row">
    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13817.368406369835!2d31.403045621109403!3d30.027041838142523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cfd5e540799%3A0x4a397398c27f4413!2sCairo%20Festival%20City%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1626917528333!5m2!1sen!2seg" width="400"  loading="lazy"></iframe>
    
                
    
            </div>
    
        </section>
    
        
    
        <section class="footer">
    
            <div class="box-container">
    
                <div class="box">
                    <h3>about us</h3>
                    
                </div>
                <div class="box">
                    <h3>branch locations</h3>
                    <a href="#">Egypt</a>
                    <a href="#">USA</a>
                    <a href="#">japan</a>
                    <a href="#">canada</a>
                </div>
                <div class="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">category</a>
                    <a href="#">product</a>
                    <a href="#">deal</a>
                    <a href="#">contact</a>
                </div>
                <div class="box">
                    <h3>follow us</h3>
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
