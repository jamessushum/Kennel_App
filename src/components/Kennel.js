import React, { useState } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Kennel.css';

// Function responsible for what gets rendered in the DOM, child components get passed-in.
const Kennel = () => {
  // Method to check if credentials are stored in session storage
  const isAuthenticated = () => sessionStorage.getItem('credentials') !== null

  // Initializing user state with isAuthenticated method checking if session storage contains user credentials
  const [hasUser, setHasUser] = useState(isAuthenticated())

  // Method accepts user credentials as parameter and sets credentials in session storage, sets the hasUser state checking if credentials exist in session storage
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user))
    setHasUser(isAuthenticated())
  }

  // Returning JSX of NavBar and ApplicationViews, passing user state and setUser method as props
  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  )
}

export default Kennel;