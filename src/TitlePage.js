import React from 'react';
import './TitlePage.css';

const TitlePage = ({ onClick }) => {
  return (
    <div className="title-container">
      <div>
      <h2 className="title-text">23 Reasons</h2>
      <h2 className='title-text'>Why Having <i>Broad Shoulders</i> Is</h2>
        <button className="btn btn-link title-button" onClick={onClick}>
        <h1 className="title-text awesome">AWESOME</h1>
        </button>
      </div>
    </div>
  );
}

export default TitlePage;
