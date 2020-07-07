import React from 'react';
import AnimalCard from './animal/AnimalCard'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'
import EmployeeCard from './employee/EmployeeCard'
import './Kennel.css';

const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
      <div>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>
      <div>
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
      <div>
        <OwnerCard />
        <OwnerCard />
        <OwnerCard />
      </div>
      <div>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  )
}

export default Kennel;