import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeEditForm = ({...props}) => {
  const [employee, setEmployee] = useState({
    name: ""
  })

  const [isLoading, setIsloading] = useState(true)

  const handleFieldChange = event => {
    const stateToChange = {...employee}
    stateToChange[event.target.id] = event.target.value
    setEmployee(stateToChange)
  }

  const updateExistingEmployee = event => {
    event.preventDefault()
    setIsloading(true)

    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name
    }

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push('/employees'))
  }

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId)
      .then(response => {
        setEmployee(response)
        setIsloading(false)
      })
  }, [props.match.params.employeeId])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" id="name" onChange={handleFieldChange} value={employee.name} />
            <label htmlFor="name">Edit Name</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} className="btn btn-primary" onClick={updateExistingEmployee}>Update</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default EmployeeEditForm;