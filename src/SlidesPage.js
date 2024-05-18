// SlidesPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './SlidesPage.css';

const reasons = [
    "They enhance your V-taper physique.",
    "Clothes fit better and look more tailored.",
    "They can give you a more athletic appearance.",
    "They improve your overall posture.",
    "They help you carry heavy loads more easily.",
    "They are often associated with strength and confidence.",
    "They can make your waist look smaller.",
    "They provide better support for your head and neck.",
    "They can make you look taller.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image.",
    "They can boost your self-esteem and body image."
  ];

  const SlidesPage = ({ onClick }) => {
    console.log("Reasons:", reasons);

    const handleBackButtonClick = () => {
        onClick();
      };

    return (
      <div className="container mt-5">
        <Carousel controls={true} indicators={false} interval={null}>
        {reasons.map((reason, index) => (
             <Carousel.Item key={index}>
             <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '200px' }}>
               <h1 className="text-light">{reason}</h1>
               <p className="slide-number">{index + 1}/{reasons.length}</p>
             </div>
           </Carousel.Item>
        ))}
        </Carousel>
        <div className="back-button-container" onClick={handleBackButtonClick}>
        <div className="back-button-wrapper">
          <img src="/hbd.png" alt="Back Button" className="back-button" />
        </div>
        </div>
      </div>
    );
  }

export default SlidesPage;
