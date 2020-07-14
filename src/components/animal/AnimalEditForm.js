import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager'
import './AnimalForm.css'

const AnimalEditForm = ({...props}) => {
  // Initializing state for single animal 
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    employeeId: ""
  })

  // Initializing state for employees, all employees will be stored here
  const [employees, setEmployees] = useState([])

  // Initializing state for boolean flag
  const [isLoading, setIsloading] = useState(true)

  // Method spreads the animal state, modifies the property being changed to user input value, then sets the animal state with user changes
  const handleFieldChange = event => {
    const stateToChange = {...animal}
    stateToChange[event.target.id] = event.target.value
    setAnimal(stateToChange)
  }

  // Method for update button, sets boolean flag to true so update button is disabled, creates an editedAnimal object passing in id from props, name, breed and employeeId from modified animal state, invokes update API method passing-in editedAnimal object to update existing animal object in API, then re-directs user to animal list page
  const updateExistingAnimal = event => {
    event.preventDefault()
    setIsloading(true)

    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: parseInt(animal.employeeId)
    }

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push('/animals'))
  }

  // useEffect invokes animal get(id) API method passing-in animadId from props, then invokes employee getAll() then sets the animal state with the response from animal API, sets the employees state with response from employee API and sets boolean flag to false to enable update button, passing animalId as a dependency so useEffect will re-invoke when id changes
  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(responseAnimal => {
        EmployeeManager.getAll().then(responseEmployee => {
          setAnimal(responseAnimal)
          setEmployees(responseEmployee)
          setIsloading(false)
        })
      })
  }, [props.match.params.animalId])

  // JSX returns form with name and breed input fields, dropdown of employees with <option />'s mapped from the employees state, and update button
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" id="name" onChange={handleFieldChange} value={animal.name} />
            <label htmlFor="name">Edit Name</label>
            <input type="text" required className="form-control" id="breed" onChange={handleFieldChange} value={animal.breed} />
            <label htmlFor="breed">Edit Breed</label>
            <select className="form-control" id="employeeId" value={animal.employeeId} onChange={handleFieldChange}>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
            </select>
            <label htmlFor="employeeId">Edit Employee</label>
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