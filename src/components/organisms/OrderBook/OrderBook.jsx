import React from 'react'
import "./OrderBook.css"

import Image from '../../atoms/Image/Image'
import DropDownWIthValue from '../../molecules/DropdownWIthValue/DropDownWIthValue'
import OrderIcons from '../../molecules/OrderIcons/OrderIcons'
import OrderOptionsPanel from '../../molecules/OrderOptionsPanel/OrderOptionsPanel'
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
        <div class="orderbook-table__header-row">
            <div class="orderbook-table__header-cell orderbook-table__header-cell--price">Price(USDT)</div>
            <div class="orderbook-table__header-cell orderbook-table__header-cell--amounts">Amounts(BTC)</div>
            <div class="orderbook-table__header-cell orderbook-table__header-cell--total">Total</div>
        </div>
        <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">36920.12</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">0.758965</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">36920.12</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">0.758965</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">36920.12</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">0.758965</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">36920.12</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">0.758965</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="orderbook-table__body-row">
            <div class="orderbook-table__body-cell orderbook-table__body-cell--price">36920.12</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--amounts">0.758965</div>
            <div class="orderbook-table__body-cell orderbook-table__body-cell--total">28,020.9</div>
        </div>
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
        <div class="bottom-orderbook-table__body-row">
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--price">36920.12</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--amounts">0.758965</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="bottom-orderbook-table__body-row">
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--price">36920.12</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--amounts">0.758965</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="bottom-orderbook-table__body-row">
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--price">36920.12</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--amounts">0.758965</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--total">28,020.9</div>
        </div>
        <div class="bottom-orderbook-table__body-row">
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--price">36920.12</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--amounts">0.758965</div>
            <div class="bottom-orderbook-table__body-cell bottom-orderbook-table__body-cell--total">28,020.9</div>
        </div>
    </div>
    
    {/* <!-- bottom order table --> */}
</div>
  )
}

export default OrderBook