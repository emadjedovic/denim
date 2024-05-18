// TitlePage.js
import React from 'react';

const TitlePage = ({ onClick }) => {
    return (
      <div className="container mt-5">
        <button className="btn btn-link" onClick={onClick} style={{ textDecoration: 'none' }}>
          <h1 className="text-light">23 Reasons Why Having Broad Shoulders Is Awesome</h1>
        </button>
      </div>
    );
  }

export default TitlePage;
