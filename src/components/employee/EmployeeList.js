import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard';
import './Employee.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = (() => {
    return EmployeeManager.getAll().then(response => {
      setEmployees(response)
    })
  })

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employeeObj={employee} />)}
    </div>
  )
}

export default EmployeeList;