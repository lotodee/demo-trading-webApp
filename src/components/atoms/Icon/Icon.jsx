import React from 'react'
import "./Icon.css"

const Icon = ({ icon, className = '' }) => {
    return <img src={icon} alt="icon" className={className} />;
  };

export default Icon