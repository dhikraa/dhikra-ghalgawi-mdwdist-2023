import React, { useState } from "react";
//import  "../navigation/BestDeal.css"
const BestDeal = () => {
  const [cardSize, setCardSize] = useState(0);

  const handleCardSizeChange = (e) => {
    setCardSize(parseInt(e.target.value));
  };

  return (
    <section class="articles">
        <article>
    <div className="center">
      <article
        id="card"
        className="card"
        style= {{ transform: `scale(${1 + cardSize / 10})` }}
      >
        <figure className="card-image">
          <img
            src="../images/lamonnalisa.jpg" 
            alt=""
          />
        </figure>

        <div className="card-content">
          <header className="card-header">
            <h2>la monnalisa</h2>

            <address>
              <span className="icon-pin" aria-hidden="true"></span>
              8 patriot square E2 9NF
            </address>

            <span>Average price: $35</span>
          </header>

          <ul className="card-stats">
            <li>
              <span className="icon-chat" aria-hidden="true"></span>
              <strong>346 </strong>
               reviews
            </li>

            <li>
              <span className="icon-camera" aria-hidden="true"></span>
              <strong>165 </strong>
               photos
            </li>

            <li>
              <span className="icon-audio" aria-hidden="true"></span>
              <strong>205</strong>
               dishes
            </li>
          </ul>
        </div>

        <button className="card-button">Book table</button>
      </article>

      <div className="form">
        <label htmlFor="cardSize">Change the size:</label>
        <input
          id="cardSize"
          type="range"
          min="-5"
          max="5"
          value={cardSize}
          onChange={handleCardSizeChange}
        />
      </div>
    </div>
    </article>
    <article>
    <div className="center">
      <article
        id="card"
        className="card"
        style= {{ transform: `scale(${1 + cardSize / 10})` }}
      >
        <figure className="card-image">
          <img
            src="../images/alliance.jpg"
            alt=""
          />
        </figure>

        <div className="card-content">
          <header className="card-header">
            <h2>Alliance</h2>

            <address>
              <span className="icon-pin" aria-hidden="true"></span>
              27 old glousester ST, 4563
            </address>

            <span>Average price: $30</span>
          </header>

          <ul className="card-stats">
            <li>
              <span className="icon-chat" aria-hidden="true"></span>
              <strong>350</strong>
              reviews
            </li>

            <li>
              <span className="icon-camera" aria-hidden="true"></span>
              <strong>130</strong>
              photos
            </li>

            <li>
              <span className="icon-audio" aria-hidden="true"></span>
              <strong>200</strong>
              dishes
            </li>
          </ul>
        </div>

        <button className="card-button">Book table</button>
      </article>

      <div className="form">
        <label htmlFor="cardSize">Change the size:</label>
        <input
          id="cardSize"
          type="range"
          min="-5"
          max="5"
          value={cardSize}
          onChange={handleCardSizeChange}
        />
      </div>
    </div>
    </article>
    <article>
    <div className="center">
      <article
        id="card"
        className="card"
        style= {{ transform: `scale(${1 + cardSize / 10})` }}
      >
        <figure className="card-image">
          <img
            src="../images/soushigold.jpg"
            alt=""
          />
        </figure>

        <div className="card-content">
          <header className="card-header">
            <h2>Shushi Gold</h2>

            <address>
              <span className="icon-pin" aria-hidden="true"></span>
              OLD Shire LN
            </address>

            <span>Average price: $100</span>
          </header>

          <ul className="card-stats">
            <li>
              <span className="icon-chat" aria-hidden="true"></span>
              <strong>300</strong>
              reviews
            </li>

            <li>
              <span className="icon-camera" aria-hidden="true"></span>
              <strong>150</strong>
              photos
            </li>

            <li>
              <span className="icon-audio" aria-hidden="true"></span>
              <strong>200</strong>
              dishes
            </li>
          </ul>
        </div>

        <button className="card-button">Book table</button>
      </article>

      <div className="form">
        <label htmlFor="cardSize">Change the size:</label>
        <input
          id="cardSize"
          type="range"
          min="-5"
          max="5"
          value={cardSize}
          onChange={handleCardSizeChange}
        />
      </div>
    </div>
    </article>
    </section>
    
  );
};

export default BestDeal;

