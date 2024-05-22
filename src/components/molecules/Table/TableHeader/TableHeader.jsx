import React from 'react'
import "./TableHeader.css"
const TableHeader = () => {
  return (
    <div class="orderbook-table__header-row">
    <div class="orderbook-table__header-cell orderbook-table__header-cell--price">Price(USDT)</div>
    <div class="orderbook-table__header-cell orderbook-table__header-cell--amounts">Amounts(BTC)</div>
    <div class="orderbook-table__header-cell orderbook-table__header-cell--total">Total</div>
</div>
  )
}

export default TableHeader