/* eslint-disable react/prop-types */

import "./StyledInput.css"
const StyledInput = ({value,onChange,placeholder}) => {
  return (
    <>
  
    <input
    type="text"
    placeholder={placeholder}
    className="buy-sell__input-field"
    value={value}
    onChange={onChange}
/>
</>
  )
}

export default StyledInput
