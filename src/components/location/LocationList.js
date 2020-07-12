import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import LocationCard from './LocationCard';

const LocationList = ({...props}) => {
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

  // Delete location function invoking delete method in API, then invoking getAll method in API and passing response to setLocations re-rendering JSX
  const deleteLocation = (id) => {
    LocationManager.delete(id).then(() => LocationManager.getAll().then(setLocations))
  }

  // Returning JSX for each location card using map and passing the state as a prop to <LocationCard />
  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => props.history.push('/locations/new')}>Add Location</button>
      </section>
      <div className="container-cards">
        {locations.map(location => <LocationCard key={location.id} locationObj={location} deleteLocation={deleteLocation} />)}
      </div>
    </>
  )
}

export default LocationList;