import React from 'react';
import pic from "../images/image01.jpg";
import "./card.scss";



const Card = ({ isReady }) => {
    return (
      <div className="card" style={isReady ? {opacity:"1", top:"50%"}: {opacity:"0", top:"55%"}}>
        <div className="img-div">
            <img src={pic}  alt="mountain"/>
        </div>
        <div className="txt-div">
            <h1>Alex Smith</h1>
            <p>Aplied Psychometrics Specialist</p>
            <div className="social-icons">
                <ul>
                    <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                    <li> <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="mailto:abc@abc.com?Subject=ABC&Body=Body"><i className="fas fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  
  export default Card;