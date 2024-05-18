// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitlePage from './TitlePage';
import SlidesPage from './SlidesPage';

const App = () => {
  const [showSlides, setShowSlides] = useState(false);

  const handlePageClick = () => {
    setShowSlides(!showSlides);
  };
  
  return (
    <div className="overlay">
      {showSlides ? <SlidesPage onClick={handlePageClick} /> : <TitlePage onClick={handlePageClick} />}
    </div>
  );
}

export default App;
