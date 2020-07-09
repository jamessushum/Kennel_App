import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import OwnerCard from './OwnerCard';

const OwnerList = () => {
  const [owners, setOwners] = useState([])

  const getOwners = () => {
    return OwnerManager.getAll().then(response => {
      setOwners(response)
    })
  }

  useEffect(() => {
    getOwners()
  }, [])

  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard key={owner.id} ownerObj={owner} />)}
    </div>
  )
}

export default OwnerList;