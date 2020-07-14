import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = ({...props}) => {
  const [owner, setOwner] = useState({
    name: "",
    email: ""
  })

  const [isLoading, setIsloading] = useState(false)

  const handleFieldChange = (event) => {
    const stateToChange = {...owner}
    stateToChange[event.target.id] = event.target.value
    setOwner(stateToChange)
  }

  const constructNewOwner = (event) => {
    event.preventDefault()
    if (owner.name === "" || owner.email === "") {
      window.alert("Please input an owner name and email")
    } else {
      setIsloading(true)
      OwnerManager.post(owner)
        .then(() => props.history.push('/owners'))
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Owner name" />
            <label htmlFor="name">Name</label>
            <input type="email" required onChange={handleFieldChange} id="email" placeholder="Owner email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewOwner}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default OwnerForm;