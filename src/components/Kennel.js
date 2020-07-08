import React from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import './Kennel.css';

// Function responsible for what gets rendered in the DOM, child components get passed-in.
const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  )
}

export default Kennel;