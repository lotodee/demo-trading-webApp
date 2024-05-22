import React from 'react'
import "./Table.css"
import TableBody from './TableBody/TableBody'
import TableHeader from './TableHeader/TableHeader'
const Table = () => {
  return (
    <div class="orderbook-table">
        <TableHeader/>
        <TableBody price="36920.12" amount="0.758965" total="28,020.9"/>
        <TableBody price="36920.12" amount="0.758965" total="28,020.9"/>
        <TableBody price="36920.12" amount="0.758965" total="28,020.9"/>
        <TableBody price="36920.12" amount="0.758965" total="28,020.9"/>
    </div>
  )
}

export default Table