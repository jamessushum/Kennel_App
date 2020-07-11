import { Route } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail';
import LocationDetail from './location/LocationDetail';

// Function responsible for what gets rendered in the display area of the application according to the user's input in the nav bar. <Route /> from the react-router-dom library delineates what gets rendered according to the <Link />'s path. <React.Fragment /> or </> is used in lieu of any additional containers. <Route /> for AnimalDetail looks for a path with animalId which is set by the <Link /> in the Details button in AnimalCard, the render then returns the AnimalDetail passing-in the animalId found in props.match.params and props using spread operator to access the history property. 
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route 
        exact path="/"
        render={props => {
          return <Home />
        }}
      />
      <Route
        exact path="/animals"
        render={props => {
          return <AnimalList />
        }}
      />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }}
      />
      <Route 
        exact path="/locations"
        render={props => {
          return <LocationList />
        }}
      />
      <Route 
        exact path="/locations/:locationId(\d+)"
        render={props => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }}
      />
      <Route 
        exact path="/employees"
        render={props => {
          return <EmployeeList />
        }}
      />
      <Route 
        exact path="/owners"
        render={props => {
          return <OwnerList />
        }}
      />
    </React.Fragment>
  )
}

export default ApplicationViews;