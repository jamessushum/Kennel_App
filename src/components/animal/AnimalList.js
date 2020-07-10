import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
  // Initializing the state of animals to an empty array w/ useState(), useState returns 2 values, animals - which holds the current stat
  const [animals, setAnimals] = useState([])

  // Function invokes getAll method fetching array of all animals, then setting state with fetch response
  const getAnimals = () => {
    return AnimalManager.getAll().then(response => {
      setAnimals(response)
    })
  }

  // useEffect runs after initial render and only once, invoking the function fetching array of all animals from API
  useEffect(() => {
    getAnimals()
  }, [])

  // Delete animal function takes in the animal id and invokes delete method in API. Then getAll method is invoked to retrieve updated list and the response is passed-in to setAnimals triggering the re-rendering of the JSX.
  const deleteAnimal = (id) => {
    AnimalManager.delete(id)
    .then(() => AnimalManager.getAll().then(setAnimals))
  }

  // returns JSX list of animal cards, by mapping through each animal object in animal array and passing data to <AnimalCard />
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animalObj={animal} deleteAnimal={deleteAnimal} />)}
    </div>
  )
}

export default AnimalList;