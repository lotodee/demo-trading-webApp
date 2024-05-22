import React from 'react'
import "./Text.css"
const Text = ({text ,className}) => {
  return (
    <p className={className}>{text}</p>
  )
}

export default Text