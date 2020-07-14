import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import {firstLetterCase} from '../../modules/helpers'
import './AnimalSpotlight.css'

const AnimalSpotlight = ({animalId}) => {
  // Initializing animal state to be rendered in JSX
  const [animal, setAnimal] = useState({
    name: "",
    breed: ""
  })

  // useEffect invoked get(id) API method to retrive single animal passing-in the animal id from home.js, then setting the animal state with the corresponding properties, adding animalId as a dependency so state/JSX re-renders when id changes
  useEffect(() => {
    AnimalManager.get(animalId)
      .then(response => setAnimal({
        name: response.name,
        breed: response.breed
      }))
  }, [animalId])

  // Returning JSX with animal data from state
  return (
    <div className="animal-spotlight">
      <img src={require('./images/dog.svg')} alt="My Dog" />
      <div>
        <h3>{firstLetterCase(animal.name)}</h3>
        <p>{firstLetterCase(animal.breed)}</p>
      </div>
    </div>
  )
}

export default AnimalSpotlight;