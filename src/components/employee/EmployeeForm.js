import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = ({...props}) => {
  const [employee, setEmployee] = useState({
    name: ""
  })

  const [isLoading, setIsloading] = useState(false)

  const handleFieldChange = (event) => {
    const stateToChange = {...employee}
    stateToChange[event.target.id] = event.target.value
    setEmployee(stateToChange)
  }

  const constructNewEmployee = (event) => {
    event.preventDefault()
    if (employee.name === "") {
      window.alert("Please input employee name")
    } else {
      setIsloading(true)
      EmployeeManager.post(employee)
        .then(() => props.history.push('/employees'))
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Employee name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewEmployee}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default EmployeeForm;