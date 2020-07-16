import React, { useState } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Kennel.css';

// Function responsible for what gets rendered in the DOM, child components get passed-in.
const Kennel = () => {
  // Method to check if credentials are stored in session storage, returns true or false
  const isAuthenticated = () => sessionStorage.getItem('credentials') !== null

  // Initializing user state with isAuthenticated method checking if session storage contains user credentials
  const [hasUser, setHasUser] = useState(isAuthenticated())

  // Method accepts user credentials as parameter and sets credentials in session storage, sets the hasUser state checking if credentials exist in session storage
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user))
    setHasUser(isAuthenticated())
  }

  // Method clears user from session storage and sets hasUser state to 'false'
  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  // Returning JSX of NavBar and ApplicationViews, passing user state, setUser and clearUser method as props
  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  )
}

export default Kennel;