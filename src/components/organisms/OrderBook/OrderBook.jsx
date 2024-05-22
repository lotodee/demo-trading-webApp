import React from 'react'
import "./OrderBook.css"

import Image from '../../atoms/Image/Image'
import DropDownWIthValue from '../../molecules/DropdownWIthValue/DropDownWIthValue'
import OrderIcons from '../../molecules/OrderIcons/OrderIcons'
import OrderOptionsPanel from '../../molecules/OrderOptionsPanel/OrderOptionsPanel'
import Table from '../../molecules/Table/Table'
import TableBody from '../../molecules/Table/TableBody/TableBody'
const OrderBook = () => {
  return (
    <div class="orderbook">
        <OrderOptionsPanel/>
    {/* <div class="orderbook__options-panel">
        <div class="orderbook__options-item orderbook__options-item--active">Order Book</div>
        <div class="orderbook__options-item">Recent Trades</div>
    </div> */}
    <div class="orderbook__top">
        <OrderIcons/>
       
        <DropDownWIthValue text={10}/>
     
    </div>

    {/* <!-- top order table --> */}
    <div class="orderbook-table">
        <Table />
       
        
    </div>

    {/* <!-- readings --> */}
    <div class="readings">
        <p class="readings__text readings__text--active">36,641.20</p>
        <img src="/images/arrowupgreen.svg" alt="" class="readings__icon"/>
        <p class="readings__text">36,641.20</p>
    </div>
    {/* <!-- readings --> */}


    {/* <!-- bottom order table --> */}
    <div class="bottom-orderbook-table">
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
    </div>
    
    {/* <!-- bottom order table --> */}
</div>
  )
}

export default OrderBook