import { Route } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import AnimalCard from './animal/AnimalCard';
import LocationCard from './location/LocationCard';
import EmployeeCard from './employee/EmployeeCard';
import OwnerCard from './owner/OwnerCard';

// Function responsible for what gets rendered in the display area of the application according to the user's input in the nav bar. <Route /> from the react-router-dom library delineates what gets rendered according to the <Link />'s path. <React.Fragment /> or </> is used in lieu of any additional containers.
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route 
        exact
        path="/"
        render={props => {
          return <Home />
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalCard />
        }}
      />
      <Route 
        exact
        path="/locations"
        render={props => {
          return <LocationCard />
        }}
      />
      <Route 
        exact
        path="/employees"
        render={props => {
          return <EmployeeCard />
        }}
      />
      <Route 
        exact
        path="/owners"
        render={props => {
          return <OwnerCard />
        }}
      />
    </React.Fragment>
  )
}

export default ApplicationViews;