import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail';
import LocationDetail from './location/LocationDetail';
import AnimalForm from './animal/AnimalForm';
import EmployeeForm from './employee/EmployeeForm';
import LocationForm from './location/LocationForm';
import OwnerForm from './owner/OwnerForm';
import Login from './auth/Login';
import AnimalEditForm from './animal/AnimalEditForm';
import LocationEditForm from './location/LocationEditForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import OwnerEditForm from './owner/OwnerEditForm';
import EmployeeWithAnimals from './employee/EmployeeWithAnimals';

// Function responsible for what gets rendered in the display area of the application according to the user's input in the nav bar. <Route /> from the react-router-dom library delineates what gets rendered according to the <Link />'s path. <React.Fragment /> or </> is used in lieu of any additional containers. <Route /> for AnimalDetail looks for a path with animalId which is set by the <Link /> in the Details button in AnimalCard, the render then returns the AnimalDetail passing-in the animalId found in props.match.params and props using spread operator to access the history property. Conditional added to animals, locations, employees and owners list to check if user is logged-in.
const ApplicationViews = ({hasUser, setUser}) => {
  return (
    <React.Fragment>
      <Route
        exact path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />
        }}
      />
      <Route 
        exact path="/"
        render={props => {
          return <Home />
        }}
      />
      <Route
        exact path="/animals"
        render={props => hasUser ? <AnimalList {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => hasUser ? <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path ="/animals/new"
        render={props => hasUser ? <AnimalForm {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/animals/:animalId(\d+)/edit"
        render={props => hasUser ? <AnimalEditForm {...props} /> : <Redirect to="/login" />}
      />
      <Route 
        exact path="/locations"
        render={props => <LocationList {...props} />}
      />
      <Route 
        exact path="/locations/:locationId(\d+)"
        render={props => hasUser ? <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/locations/new"
        render={props => hasUser ? <LocationForm {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/locations/:locationId(\d+)/edit"
        render={props => hasUser ? <LocationEditForm {...props} /> : <Redirect to="/login" />}
      />
      <Route 
        exact path="/employees"
        render={props => hasUser ? <EmployeeList {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/employees/new"
        render={props => hasUser ? <EmployeeForm {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/employees/:employeeId(\d+)/edit"
        render={props => hasUser ? <EmployeeEditForm {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/employees/:employeeId(\d+)/details"
        render={props => hasUser ? <EmployeeWithAnimals {...props} /> : <Redirect to="/login" />}
      />
      <Route 
        exact path="/owners"
        render={props => hasUser ? <OwnerList {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/owners/new"
        render={props => hasUser ? <OwnerForm {...props} /> : <Redirect to="/login" />}
      />
      <Route
        exact path="/owners/:ownerId(\d+)/edit"
        render={props => hasUser ? <OwnerEditForm {...props} /> : <Redirect to="/login" />}
      />
    </React.Fragment>
  )
}

export default ApplicationViews;