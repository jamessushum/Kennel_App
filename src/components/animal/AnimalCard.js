import React from 'react';
import './Animal.css'

// Function responsible for rendering the animal cards. Takes in animalObj props to dynamically create each animal card with animal data from API. Also takes in deleteAnimal method as prop from parent component and is invoked onClick passing-in the id.
const AnimalCard = ({animalObj, deleteAnimal}) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./images/dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{animalObj.name}</span>
        </h3>
        <p>Breed: {animalObj.breed}</p>
        <button type="button" onClick={() => deleteAnimal(animalObj.id)}>Discharge</button>
      </div>
    </div>
  )
}

export default AnimalCard;