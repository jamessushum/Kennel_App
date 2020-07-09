import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import LocationCard from './LocationCard';

const LocationList = () => {
  // Initialize state
  const [locations, setLocations] = useState([])

  // Function invoking method to fetch all locations data from API and setting to state
  const getLocations = () => {
    return LocationManager.getAll().then(response => {
      setLocations(response)
    })
  }

  // useEffect to invoke getLocations() and re-render animal list in DOM
  useEffect(() => {
    getLocations()
  }, [])

  // Returning JSX for each location card using map and passing the state as a prop to <LocationCard />
  return (
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} locationObj={location} />)}
    </div>
  )
}

export default LocationList;