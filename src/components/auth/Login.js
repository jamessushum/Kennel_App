import React, { useState } from 'react';

const Login = ({setUser, ...props}) => {
  // Initializing state for user credentials
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  // Method spreads the credentials state, modifies the selected property with user value, and sets the credentials state with modified values
  const handleFieldChange  = event => {
    const stateToChange = {...credentials}
    stateToChange[event.target.id] = event.target.value
    setCredentials(stateToChange)
  }

  // Method for submit button, checks if input fields are empty, invokes setUser(user) method from Kennel parent storing the user credentials in session storage and setting the hasUser state to 'true', then re-directing user to home page
  const handleLogin = event => {
    event.preventDefault()
    if (credentials.email === "" || credentials.password === "") {
      window.alert("Email and password required")
    } else {
      setUser(credentials)
      props.history.push('/')
    }
  }

  // JSX returning form fields for email, password and submit button, attaching corresponding methods
  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please Sign In</h3>
        <div className="formgrid">
          <input type="email" id="email" required="" autoFocus="" placeholder="Email address" onChange={handleFieldChange} />
          <label htmlFor="email">Email Address</label>
          <input type="password" id="password" required="" placeholder="Password" onChange={handleFieldChange} />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  )
}

export default Login;