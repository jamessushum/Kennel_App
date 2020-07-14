import React, { useState, useEffect } from 'react';
import AnimalSpotlight from '../animal/AnimalSpotlight';
import AnimalManager from '../../modules/AnimalManager';

// Function responsible for rendering the home page content.
const Home = () => {
  // Initializing state for spotlight id, initial value of 0 means the conditional will render as falsy on first pass
  const [spotlightId, setSpotlightId] = useState(0)

  // Method for Reload button, invokes getRandomId() API method to generate random id from animal array, then sets the spotlight state with the response
  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId()
      .then(response => {
        setSpotlightId(response)
      })
  }

  // useEffect invokes refreshSpotlightAnimal() after initial pass
  useEffect(() => {
    refreshSpotlightAnimal()
  }, [])

  // Returns JSX with Reload button as well as conditional checking if spotlightId from state is truthy, if so it'll evaluate <AnimalSpotlight /> passing-through the spotlightId or animalId
  return (
    <>
      <h3>Welcome!</h3>
      <address>
        Visit us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {spotlightId && <AnimalSpotlight animalId={spotlightId} />}
    </>
  )
}

export default Home;