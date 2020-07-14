import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import AnimalCard from '../animal/AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const EmployeeWithAnimals = ({...props}) => {
  // Initializing state for single employee and animals under care
  const [employee, setEmployee] = useState({})
  const [animals, setAnimals] = useState([])

  // useEffect invokes employee getWithAnimals(id) API method to retrieve single employee object including any animals under care using 'embed' JSON relationship in API method, then setting the state for employee and animals with the response, adding employee id as a dependency so useEffect can be re-invoked when employee id changes
  useEffect(() => {
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(response => {
        setEmployee(response)
        setAnimals(response.animals)
      })
  }, [props.match.params.employeeId])

  // Method to delete specific animal, takes animal id as a parameter
  const deleteAnimal = (animalId)  => {
    AnimalManager.delete(animalId)
      .then(() => props.history.push('/animals'))
  }

  // Returns JSX for employee details component showcasing all the animals the employee has under care using map() on the animals state and re-using the <AnimalCard /> component to generate the animal cards
  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal => <AnimalCard key={animal.id} animalObj={animal} {...props} deleteAnimal={deleteAnimal} />)}
    </div>
  )
}

export default EmployeeWithAnimals;