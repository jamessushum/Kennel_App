import React from 'react';

// Function responsible for rendering the employee cards.
const EmployeeCard = () => {
  return (
    <div className="employeeCard">
      <h3 className="employeeCard-name">
        Jane Doe
      </h3>
      <p className="employeeCard-animal">
        Animal in care: Doodles the poodle
      </p>
    </div>
  )
}

export default EmployeeCard;