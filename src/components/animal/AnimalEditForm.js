import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalEditForm = ({...props}) => {
  // Initializing state for single animal 
  const [animal, setAnimal] = useState({
    name: "",
    breed: ""
  })

  // Initializing state for boolean flag
  const [isLoading, setIsloading] = useState(true)

  // Method spreads the animal state, modifies the property being changed to user input value, then sets the animal state with user changes
  const handleFieldChange = event => {
    const stateToChange = {...animal}
    stateToChange[event.target.id] = event.target.value
    setAnimal(stateToChange)
  }

  // Method for update button, sets boolean flag to true so update button is disabled, creates an editedAnimal object passing in id from props, name and breed from modified animal state, invokes update API method passing-in editedAnimal object to update existing animal object in API, then re-directs user to animal list page
  const updateExistingAnimal = event => {
    event.preventDefault()
    setIsloading(true)

    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed
    }

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push('/animals'))
  }

  // useEffect invokes get(id) API method passing-in animadId from props, then sets the animal state with the response, and sets boolean flag to false to enable update button, passing animalId as a dependency so useEffect will re-invoke when id changes
  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(response => {
        setAnimal(response)
        setIsloading(false)
      })
  }, [props.match.params.animalId])

  // JSX returns form with name and breed input fields, and update button
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" id="name" onChange={handleFieldChange} value={animal.name} />
            <label htmlFor="name">Edit Name</label>
            <input type="text" required className="form-control" id="breed" onChange={handleFieldChange} value={animal.breed} />
            <label htmlFor="breed">Edit Breed</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={updateExistingAnimal} className="btn btn-primary">Update</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default AnimalEditForm;