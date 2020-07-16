import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

// Function responsible for rendering the nav bar with corresponding <Link />. Using ternary oprators to check if user has signed in to modify nav bar display options
const NavBar = ({hasUser, clearUser, ...props}) => {
  // Method invokes clearUser from parent Kennel.js to remove user from session storage and re-directs user to home page
  const handleLogout = () => {
    clearUser()
    props.history.push('/')
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {hasUser ? <li><Link className="nav-link" to="/animals">Animals</Link></li> : null}
          <li>
            <Link className="nav-link" to="/locations">Locations</Link>
          </li>
          {hasUser ? <li><Link className="nav-link" to="/employees">Employees</Link></li> : null}
          {hasUser ? <li><Link className="nav-link" to="/owners">Owners</Link></li> : null}
          {hasUser ? <li><span className="nav-link" onClick={handleLogout}>Logout</span></li> : <li><Link className="nav-link" to="/login">Login</Link></li>}
        </ul>
      </nav>
    </header>
  )
}

// Wrapping NavBar() with withRouter from react-router-dom to have access to props.history.push when handleLogout is invoked otherwise <Route /> would be needed
export default withRouter(NavBar);