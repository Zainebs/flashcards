import React, { useState } from 'react';
import '../App.css';

const Card = ({ question, answer, img, isFlipped, setIsFlipped }) => {
  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle flip state on card click
  };

  return (
    <div className={`card-contents ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-front">
        <h2>{!isFlipped ? question : ''}</h2>
      </div>
      <div className="card-back">
        {isFlipped && (
          <>
            <img
              src={img}
              alt="Card Back"
              className="card-img" // Add a class for the image
            />
            <h2 className="card-answer">{answer}</h2> {/* Add a class for the answer */}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;







