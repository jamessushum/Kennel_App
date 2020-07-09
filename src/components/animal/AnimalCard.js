import React from 'react';
import './Animal.css'

// Function responsible for rendering the animal cards. Takes in animalObj props to dynamically create each animal card with animal data from API.
const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./images/dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animalObj.name}</span>
        </h3>
        <p>Breed: {props.animalObj.breed}</p>
      </div>
    </div>
  )
}

export default AnimalCard;