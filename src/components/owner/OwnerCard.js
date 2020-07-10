import React from 'react';
import './Owner.css'

// Function responsible for rendering the owner cards.
const OwnerCard = ({ownerObj, deleteOwner}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-name">
          Name: <span className="card-ownerName">{ownerObj.name}</span>
        </h3>
        <p className="card-email">
          Email: <span className="card-ownerEmail">{ownerObj.email}</span>
        </p>
        <button type="button" onClick={() => deleteOwner(ownerObj.id)}>Remove</button>
      </div>
    </div>
  )
}

export default OwnerCard;