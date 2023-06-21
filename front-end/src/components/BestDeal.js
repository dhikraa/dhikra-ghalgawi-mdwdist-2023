import React, { useState } from "react";
//import  "../navigation/BestDeal.css"
const BestDeal = () => {
  const [cardSize, setCardSize] = useState(0);

  const handleCardSizeChange = (e) => {
    setCardSize(parseInt(e.target.value));
  };

  return (
    <section className="articles">
      <article>
        <div className="center">
          <article
            id="card"
            className="card"
            style={{ transform: `scale(${1 + cardSize / 10})` }}
          >
            <figure className="card-image">
              <img
                src="../images/lamonnalisa.jpg"
                alt=""
              />
            </figure>

            <div className="card-content">
              <header className="card-header">
                <h2>Malibo</h2>

                <address>
                  <span className="icon-pin" aria-hidden="true"></span>
                  Djerba Houmet Assouk
                </address>
              </header>

              <ul className="card-stats">
                <li>
                  <span className="icon-chat" aria-hidden="true"></span>
                  <strong>346 </strong>
                  avis
                </li>

                <li>
                  <span className="icon-camera" aria-hidden="true"></span>
                  <strong>165 </strong>
                  photos
                </li>

                <li>
                  <span className="icon-audio" aria-hidden="true"></span>
                  <strong>205</strong>
                  plats
                </li>
              </ul>
            </div>
          </article>

          <div className="form">
            
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
            style={{ transform: `scale(${1 + cardSize / 10})` }}
          >
            <figure className="card-image">
              <img
                src="../images/alliance.jpg"
                alt=""
              />
            </figure>

            <div className="card-content">
              <header className="card-header">
                <h2>Koolfood</h2>

                <address>
                  <span className="icon-pin" aria-hidden="true"></span>
                  Djerba Houmat Assouk
                </address>
              </header>

              <ul className="card-stats">
                <li>
                  <span className="icon-chat" aria-hidden="true"></span>
                  <strong>350</strong>
                  avis
                </li>

                <li>
                  <span className="icon-camera" aria-hidden="true"></span>
                  <strong>130</strong>
                  photos
                </li>

                <li>
                  <span className="icon-audio" aria-hidden="true"></span>
                  <strong>200</strong>
                  plats
                </li>
              </ul>
            </div>
          </article>

          <div className="form">
          
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
            <h2>pappagalou</h2>

            <address>
              <span className="icon-pin" aria-hidden="true"></span>
             djerba midoun
            </address>

         
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

      </article>

      <div className="form">
        
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

