import React from 'react';

// Function responsible for rendering the location cards. Each locationObj is being passed-in as a prop, using destructuring.
const LocationCard = ({locationObj}) => {
  return (
    <div className="locationCard">
      <h3 className="locationCard-name">
        {locationObj.name}
      </h3>
      <p className="locationCard-address">
        {locationObj.address}
      </p>
    </div>
  )
}

export default LocationCard;