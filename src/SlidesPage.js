// SlidesPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './SlidesPage.css';

const reasons = [
    "Broad shoulders often give the appearance of a strong and athletic physique.",
    "Clothes fit better and look more tailored.",
    "They can make you look more confident and assertive.",
    "They help you carry heavy loads more easily.",
    "They are often associated with strength and confidence.",
    "They provide better support for your head and neck.",
    "They can boost your self-esteem and body image.",
    "They can improve posture by naturally pulling the shoulders back.",
    "They provide better support for carrying heavy loads or backpacks.",
    "Broad shoulders can give you a more commanding presence in social situations.",
    "Broad shoulders can make you stand out in a crowd.",
    "They may give you an advantage in certain sports, such as swimming, where shoulder strength is crucial.",
    "They can make you appear more imposing, which can be useful in certain situations.",
    "They can make you look more mature and adult-like.",
    "Broad shoulders can enhance your silhouette in photographs.",
    "They can improve your overall body symmetry.",
    "Broad shoulders can make it easier to carry out physical tasks, like lifting furniture or groceries.",
    "They can make you feel more attractive to others.",
    "Broad shoulders can make it easier to reach and grasp objects.",
    "They can make you feel more balanced and stable.",
    "Broad shoulders can help balance out a wider waistline, creating a more proportionate look.",
    "Broad shoulders can help prevent certain shoulder injuries by providing better support and stability.",
    "Broad shoulders can give the impression of being more dominant and authoritative."
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
               <h3 className="text-light">{reason}</h3>
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
