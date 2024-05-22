import React from 'react'
import "./TableBody.css"
const TableBody = ({price,amount,total}) => {
  return (
     <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">{price}</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">{amount}</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">{total}</div>
        </div>
  )
}

export default TableBody