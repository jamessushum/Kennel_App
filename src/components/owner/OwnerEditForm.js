import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';

const OwnerEditForm = ({...props}) => {
  const [owner, setOwner] = useState({
    name: "",
    email: ""
  })

  const [isLoading, setIsloading] = useState(true)

  const handleFieldChange = event => {
    const stateToChange = {...owner}
    stateToChange[event.target.id] = event.target.value
    setOwner(stateToChange)
  }

  const updateExistingOwner = event => {
    event.preventDefault()
    setIsloading(true)

    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      email: owner.email
    }

    OwnerManager.update(editedOwner)
      .then(() => props.history.push("/owners"))
  }

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId)
      .then(response => {
        setOwner(response)
        setIsloading(false)
      })
  }, [props.match.params.ownerId])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" id="name" onChange={handleFieldChange} value={owner.name} />
            <label htmlFor="name">Edit Name</label>
            <input type="email" required className="form-control" id="email" onChange={handleFieldChange} value={owner.email} />
            <label htmlFor="email">Edit Email</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} className="btn btn-primary" onClick={updateExistingOwner}>Update</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default OwnerEditForm;