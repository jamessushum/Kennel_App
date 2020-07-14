import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './Location.css';

const LocationEditForm = ({...props}) => {
  const [location, setLocation] = useState({
    name: "",
    address: ""
  })

  const [isLoading, setIsloading] = useState(true)

  const handleFieldChange = (event) => {
    const stateToChange = {...location}
    stateToChange[event.target.id] = event.target.value
    setLocation(stateToChange)
  }

  const updateExistingLocation = (event) => {
    event.preventDefault()
    setIsloading(true)

    const editedLocation = {
      id: props.match.params.locationId,
      name: location.name,
      address: location.address
    }

    LocationManager.update(editedLocation)
      .then(() => props.history.push('/locations'))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(response => {
        setLocation(response)
        setIsloading(false)
      })
  }, [props.match.params.locationId])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" id="name" onChange={handleFieldChange} value={location.name} />
            <label htmlFor="name">Edit Name</label>
            <input type="text" required className="form-control" id="address" onChange={handleFieldChange} value={location.address} />
            <label htmlFor="address">Edit Address</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} className="btn btn-primary" onClick={updateExistingLocation}>Update</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LocationEditForm;