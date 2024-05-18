import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const reasons = [
  "1. They enhance your V-taper physique.",
  "2. Clothes fit better and look more tailored.",
  "3. They can give you a more athletic appearance.",
  "4. They improve your overall posture.",
  "5. They help you carry heavy loads more easily.",
  "6. They are often associated with strength and confidence.",
  "7. They can make your waist look smaller.",
  "8. They provide better support for your head and neck.",
  "9. They can make you look taller.",
  "10. They can boost your self-esteem and body image."
];

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-light">10 Reasons Why Having Broad Shoulders is Awesome</h1>
      <Carousel controls={true} indicators={false} interval={null}>
        {reasons.map((reason, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
              <h3 className="text-light">{reason}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
