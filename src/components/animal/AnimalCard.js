import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers';
import './Animal.css'

// Function responsible for rendering the animal cards. Takes in animalObj props to dynamically create each animal card with animal data from API. Also takes in deleteAnimal method as prop from parent component and is invoked onClick passing-in the id. <Link /> on Details button takes the animal id and sets the link's path to the corresponding animal id which is later read by the router. Takes {...props} from AnimalList to use props.history.push and redirects user to animal edit form when Edit button is clicked.
const AnimalCard = ({animalObj, deleteAnimal, ...props}) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./images/dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{firstLetterCase(animalObj.name)}</span>
        </h3>
        <p>Breed: {firstLetterCase(animalObj.breed)}</p>
        <Link to={`/animals/${animalObj.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.history.push(`/animals/${animalObj.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => deleteAnimal(animalObj.id)}>Discharge</button>
      </div>
    </div>
  )
}

export default AnimalCard;