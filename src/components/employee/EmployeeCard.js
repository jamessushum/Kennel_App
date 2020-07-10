import React from 'react';
import './Employee.css'

// Function responsible for rendering the employee cards.
const EmployeeCard = ({employeeObj, deleteEmployee}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-name">
          Name: <span className="card-employeeName">{employeeObj.name}</span>
        </h3>
        <button type="button" onClick={() => deleteEmployee(employeeObj.id)}>Fire</button>
      </div>
    </div>
  )
}

export default EmployeeCard;