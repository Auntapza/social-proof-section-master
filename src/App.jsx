import React from "react";
import star from "./assets/images/icon-star.svg"
import bgTop from "./assets/images/bg-pattern-top-desktop.svg"
import bgBottom from "./assets/images/bg-pattern-bottom-desktop.svg"

import profile1 from "./assets/images/image-colton.jpg"
import profile2 from "./assets/images/image-irene.jpg"
import profile3 from "./assets/images/image-anne.jpg"

const App = () => {

  return (
    <>
    <img alt="" className="bg top"/>
    <img alt="" className="bg bottom"/>
      <div className="container">
        <div className="info">
          <div className="text">
            <h1>10,000+ of our users love our products.</h1>
            <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
          </div>
          <div className="rate">
            <div className="rate-box">
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text">Rated 5 Stars in Reviews</p>
            </div>

            <div className="rate-box">
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text">Rated 5 Stars in Report Guru</p>
            </div>

            <div className="rate-box">
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text">Rated 5 Stars in BestTech</p>
            </div>
          </div>
        </div>
        <div className="all-card">
          <div className="card">
            <div className="profile">
              <img src={profile1} alt="" />
              <div className="name">
                <p className="username">Colton Smith </p>
                <p className="stat">Verified Buyer</p>
              </div>
            </div>
            <div className="details">
              <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
            </div>
          </div>
          
          <div className="card">
            <div className="profile">
              <img src={profile2} alt="" />
              <div className="name">
                <p className="username">Irene Roberts </p>
                <p className="stat">Verified Buyer</p>
              </div>
            </div>
            <div className="details">
              <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
            </div>
          </div>

          <div className="card">
            <div className="profile">
              <img src={profile3} alt="" />
              <div className="name">
                <p className="username">Anne Wallace</p>
                <p className="stat">Verified Buyer</p>
              </div>
            </div>
            <div className="details">
              <p>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}

export default App