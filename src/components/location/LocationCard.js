import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css'

// Function responsible for rendering the location cards. Each locationObj is being passed-in as a prop as well as deleteLocation method from parent component, using destructuring.
const LocationCard = ({locationObj, deleteLocation, ...props}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-name">
          {locationObj.name}
        </h3>
        <p className="card-address">
          {locationObj.address}
        </p>
        <Link to={`/locations/${locationObj.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.history.push(`/locations/${locationObj.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => deleteLocation(locationObj.id)}>Close</button>
      </div>
    </div>
  )
}

export default LocationCard;