import React from 'react'
import "./BlankPanel.css"
const BlankPanel = ({children}) => {
  return (
    <div class="orderbook__options-panel">
        {children}
    </div>
  )
}

export default BlankPanel