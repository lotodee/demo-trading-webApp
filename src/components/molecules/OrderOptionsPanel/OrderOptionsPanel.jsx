import React from 'react'
import BlankPanel from '../../atoms/BlankPanel/BlankPanel'
import TextButton from '../../atoms/TextButton/TextButton'
import "./OrderOptionsPanel.css"
const OrderOptionsPanel = () => {
  return (
    <>
     {/* <div class="orderbook__options-panel">
         <div class="orderbook__options-item orderbook__options-item--active">Order Book</div>
     <div class="orderbook__options-item">Recent Trades</div>
 </div> */}
<BlankPanel>
    <TextButton text="Order Book" className="orderbook__options-item orderbook__options-item--active"/>
    <TextButton text="Recent Trades" className="orderbook__options-item"/>
</BlankPanel>
    </>
   
  )
}

export default OrderOptionsPanel