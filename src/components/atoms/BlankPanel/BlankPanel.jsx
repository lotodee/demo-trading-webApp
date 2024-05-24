/* eslint-disable react/prop-types */

import "./BlankPanel.css"
const BlankPanel = ({children}) => {
  return (
    <div className="orderbook__options-panel">
        {children}
    </div>
  )
}

export default BlankPanel