import React from 'react';

// Function responsible for rendering the employee cards.
const EmployeeCard = ({employeeObj}) => {
  return (
    <div className="employeeCard">
      <h3 className="employeeCard-name">
        {employeeObj.name}
      </h3>
    </div>
  )
}

export default EmployeeCard;