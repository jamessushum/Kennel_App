import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = ({...props}) => {
  // Setting initial state for animal data
  const [animal, setAnimal] = useState({
    name: "",
    breed: ""
  })
  
  // Setting initital state for boolean flag 
  const [isLoading, setIsloading] = useState(false)

  // Method makes copy of animal state, assigns property being modified with user value, and sets the state
  const handleFieldChange = event => {
    const stateToChange = {...animal}
    stateToChange[event.target.id] = event.target.value
    setAnimal(stateToChange)
  }

  // Method validates input fields, disables button, posts modified state to API, and redirects user to list of animals.
  const constructNewAnimal = event => {
    event.preventDefault()
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed")
    } else {
      setIsloading(true)
      AnimalManager.post(animal)
        .then(() => props.history.push('/animals'))
    }
  }

  // Returns JSX with handleFieldChange method on input fields and constructNewAnimal method on submit button.
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Animal name" />
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="breed" placeholder="Breed" />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewAnimal}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default AnimalForm;