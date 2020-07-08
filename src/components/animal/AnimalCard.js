import React from 'react';

// Function responsible for rendering the animal cards.
const AnimalCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./images/dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  )
}

export default AnimalCard;