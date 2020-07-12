import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = ({...props}) => {
  const [location, setLocation] = useState({
    name: "",
    address: ""
  })

  const [isLoading, setIsloading] = useState(false)

  const handleFieldChange = (event) => {
    const stateToChange = {...location}
    stateToChange[event.target.id] = event.target.value
    setLocation(stateToChange)
  }

  const constructNewLocation = (event) => {
    event.preventDefault()
    if (location.name === "" || location.address === "") {
      window.alert("Please input a location name and address")
    } else {
      setIsloading(true)
      LocationManager.post(location)
        .then(() => props.history.push('/locations'))
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Location name" />
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="address" placeholder="Location address" />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewLocation}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LocationForm;