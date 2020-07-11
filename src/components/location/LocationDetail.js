import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';

const LocationDetail = ({locationId}) => {
  // Initialize state of the data to be displayed
  const [location, setLocation] = useState({
    name: "",
    address: ""
  })

  // Invoke API method getting single location object and populate the state with the API response, executed as a side effect
  useEffect(() => {
    LocationManager.get(locationId)
      .then(response => setLocation({
        name: response.name,
        address: response.address
      }))
  }, [locationId])

  // JSX that will be rendered in DOM using data from state
  return (
    <div className="card">
      <div className="card-content">
      <h3>{location.name}</h3>
      <p>{location.address}</p>
      </div>
    </div>
  )
}

export default LocationDetail;