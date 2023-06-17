import { Component } from 'react'

class Apropos extends Component {
    state = {
        titre: "Contact our plateforme a successful restaurant experience",
        contact: {
            nom: " Help Center",
            nom1:"Address",
            nom2:"Submissions",
            email: "contact@masociete.com",
            telephone: "2222222",
            logo: <img src="images/help-center.png" alt="help-center"></img>,
            logo1: <img src="images/adresse.jpg" alt="help-center"></img>,
            logo2: <img src="images/submission.png" alt="help-center"></img>

        }
    }
    render() {
        return (
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src="../images/help-center.png" alt="pizza" /> 
      </figure>
      <div class="article-body">
        <h2>Help Center</h2>
        <p>
        téléphone: 22-222-222
        </p>
        <a href="#" class="read-more">
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
        <img src="../images/adresse.jpg" alt="sushi" />
      </figure>
      <div class="article-body">
        <h2>Address</h2>
        <p>
        B1, Cyber Park Houmt Souk Djerba, Medenine, Tunisie</p>
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
        <img src="../images/submission.png" alt="" />
      </figure>
      <div class="article-body">
        <h2>Submissions</h2>
        <p>
        contact@ivsane.com</p>
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
}

export default Apropos;