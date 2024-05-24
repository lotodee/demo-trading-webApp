/* eslint-disable react/prop-types */

import "./Button.css"
const Button = ({buttonText,className}) => {
  return (
  <button className={className}>
    {buttonText}
  </button>
  )
}

export default Button
