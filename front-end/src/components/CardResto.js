import React from 'react';
import  "../navigation/CardResto.css"
function CardResto() {
 
return (
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src="../images/pizza.jpg" alt="pizza" /> 
      </figure>
      <div class="article-body">
        <h2>Pizza-Italian</h2>
        <p>Savourez une pizza italienne authentique, cuite au feu de bois avec des ingrédients frais et savoureux.
    
        </p>
        <a href="#" class="read-more" >
          Read more <span class="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="../images/sushi.jpg" alt="sushi" />
      </figure>
      <div class="article-body">
        <h2>japanese-sushi</h2>
        <p>
        Des sushis fraîchement préparés, un goût inoubliable en une bouchée.</p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="../images/burgers.jpg" alt="" />
      </figure>
      <div class="article-body">
        <h2>Burgers</h2>
        <p>
        Venez déguster les burgers et laissez-vous tenter par une explosion de saveurs !</p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
);
}

export default CardResto;