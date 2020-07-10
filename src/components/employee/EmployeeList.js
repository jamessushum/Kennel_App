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

  const deleteEmployee = (id) => {
    EmployeeManager.delete(id).then(() => EmployeeManager.getAll().then(setEmployees))
  }

  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} employeeObj={employee} deleteEmployee={deleteEmployee} />)}
    </div>
  )
}

export default EmployeeList;