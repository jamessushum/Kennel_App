import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';

const LocationDetail = ({locationId, ...props}) => {
  // Initialize state of the data to be displayed
  const [location, setLocation] = useState({
    name: "",
    address: ""
  })
  // Initialize state to disable/enable elements once data is loaded such as the delete button
  const [isLoaded, setIsloaded] = useState(true)

  // Invoke API method getting single location object and populate the state with the API response, executed as a side effect
  useEffect(() => {
    LocationManager.get(locationId)
      .then(response => {setLocation({
        name: response.name,
        address: response.address
      })
        setIsloaded(false)
    })
  }, [locationId])

  // Delete method re-sets setIsloaded flag back to 'true' and invoked API method to delete single item, then re-directs user back to locationList
  const handleDelete = () => {
    setIsloaded(true)
    LocationManager.delete(locationId)
      .then(() => props.history.push('/locations'))
  }

  // JSX that will be rendered in DOM using data from state
  return (
    <div className="card">
      <div className="card-content">
        <h3>{location.name}</h3>
        <p>{location.address}</p>
        <button type="button" disabled={isLoaded} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  )
}

export default LocationDetail;