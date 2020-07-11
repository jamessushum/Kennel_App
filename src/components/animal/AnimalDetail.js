import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css';

// Function responsible for rendering the animal details.
const AnimalDetail = ({animalId}) => {
  // Initializing state with object of 2 properties currently empty.
  const [animal, setAnimal] = useState({name: "", breed: ""})

  // useEffect invokes get(id) method in API passing-in the animalId being passed-in as a prop from ApplicationViews Route. Then setting the state with the response from API. useEffect will be re-invoked when there are changes to the [animalId].
  useEffect(() => {
    AnimalManager.get(animalId)
      .then(response => {
        setAnimal({
          name: response.name,
          breed: response.breed
        })
      })
  }, [animalId])

  // Return the JSX of the animal card to be displayed in animal details.
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./images/dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{color: 'darkslategrey'}}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  )
}

export default AnimalDetail;