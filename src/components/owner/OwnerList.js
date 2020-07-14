import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import OwnerCard from './OwnerCard';

const OwnerList = ({...props}) => {
  const [owners, setOwners] = useState([])

  const getOwners = () => {
    return OwnerManager.getAll().then(response => {
      setOwners(response)
    })
  }

  useEffect(() => {
    getOwners()
  }, [])

  const deleteOwner = (id) => {
    OwnerManager.delete(id).then(() => OwnerManager.getAll().then(setOwners))
  }

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => props.history.push('/owners/new')}>Add Owner</button>
      </section>
      <div className="container-cards">
        {owners.map(owner => <OwnerCard key={owner.id} ownerObj={owner} deleteOwner={deleteOwner} {...props} />)}
      </div>
    </>
  )
}

export default OwnerList;