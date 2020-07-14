import React from 'react';
import './Employee.css'

// Function responsible for rendering the employee cards.
const EmployeeCard = ({employeeObj, deleteEmployee, ...props}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-name">
          Name: <span className="card-employeeName">{employeeObj.name}</span>
        </h3>
        <button type="button" onClick={() => props.history.push(`/employees/${employeeObj.id}/details`)}>Details</button>
        <button type="button" onClick={() => props.history.push(`/employees/${employeeObj.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => deleteEmployee(employeeObj.id)}>Fire</button>
      </div>
    </div>
  )
}

export default EmployeeCard;