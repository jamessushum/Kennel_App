import React from 'react';

// Function responsible for rendering the owner cards.
const OwnerCard = ({ownerObj}) => {
  return (
    <div className="ownerCard">
      <h3 className="ownerCard-name">
        {ownerObj.name}
      </h3>
      <p className="ownerCard-email">
        {ownerObj.email}
      </p>
    </div>
  )
}

export default OwnerCard;