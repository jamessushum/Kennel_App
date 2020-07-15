import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import './AnimalForm.css'

const AnimalForm = ({...props}) => {
  // Setting initial state for animal data
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    employeeId: ""
  })

  // Initializing state housing all employees
  const [employees, setEmployees] = useState([])
  
  // Setting initital state for boolean flag 
  const [isLoading, setIsloading] = useState(false)

  // Method makes copy of animal state, assigns property being modified with user value, and sets the state
  const handleFieldChange = event => {
    const stateToChange = {...animal}
    stateToChange[event.target.id] = event.target.value
    setAnimal(stateToChange)
  }

  // Method for submit button, validates input fields, disables button, creates new animal object and invokes animal post(newAnimalObj) API method passing-in new object then redirects user to animal list page
  const constructNewAnimal = event => {
    event.preventDefault()
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed")
    } else {
      setIsloading(true)

      const newAnimalObj = {
        name: animal.name,
        breed: animal.breed,
        employeeId: parseInt(animal.employeeId)
      }

      AnimalManager.post(newAnimalObj)
        .then(() => props.history.push('/animals'))
    }
  }

  // useEffect invoking employee getAll() API method, then setting employees state with the response
  useEffect(() => {
    EmployeeManager.getAll()
      .then(response => setEmployees(response))
  }, [])

  // Returns JSX for input fields and employee dropdown selection, mapping through the employees state to dynamically create <option />. First select option is disabled and the default value.
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Animal name" />
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="breed" placeholder="Breed" />
            <label htmlFor="breed">Breed</label>
            <select className="form-control" id="employeeId" onChange={handleFieldChange} defaultValue="">
              <option value="" disabled>Select an employee</option>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
            </select>
            <label>Assign Employee</label>
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