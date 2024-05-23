import React, { useState } from 'react'
import "./BuyandSell.css"
import ic  from "../../../assets/images/u_info-circle.svg"
import ud  from "../../../assets/images/u_angle-down.svg"
import ck  from "../../../assets/images/u_check.svg"
const BuyandSell = () => {


    const [limitPrice, setLimitPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0.00);


    const handleLimitPriceChange = (e) => {
        const value = e.target.value;
        setLimitPrice(value);
        updateTotal(value, amount);
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        updateTotal(limitPrice, value);
    };

    const updateTotal = (price, amt) => {
        const totalValue = parseFloat(price) * parseFloat(amt);
        setTotal(isNaN(totalValue) ? 0.00 : totalValue);
    };

  return (
<div class="buy-sell">
        {/* <!-- buy sell options panel --> */}
        <div class="buy-sell__options-panel">
            <div class="buy-sell__options-item buy-sell__options-item--buy">Buy</div>
            <div class="buy-sell__options-item buy-sell__options-item--sell">Sell</div>
        </div>
        {/* <!-- buy sell options panel -->
       
        <!-- buy sell limit options panel --> */}
        <div class="buy-sell__limit-options">
            <div class="buy-sell__limit-option buy-sell__limit-option--limit">Limit</div>
            <div class="buy-sell__limit-option buy-sell__limit-option--market">Market</div>
            <div class="buy-sell__limit-option buy-sell__limit-option--stop-limit">Stop-Limit</div>
        </div>
        {/* <!-- buy sell limit options panel -->

        <!-- buy sell input panels --> */}
        <div class="buy-sell__input-panel">
            <div class="buy-sell__input buy-sell__input--limit">
                <div class="buy-sell__input-label buy-sell__input-label--limit">
                    <p class="buy-sell__label-text">Limit price</p>
                    <img src={ic} alt="" class="buy-sell__label-icon"/>
                </div>
                <input
                        type="text"
                        placeholder="0.00 USD"
                        className="buy-sell__input-field"
                        value={limitPrice}
                        onChange={handleLimitPriceChange}
                    />
            </div>

            <div class="buy-sell__input buy-sell__input--amount">
                <div class="buy-sell__input-label buy-sell__input-label--amount">
                    <p class="buy-sell__label-text">Amount</p>
                    <img src={ic} alt="" class="buy-sell__label-icon"/>
                </div>
                <input
                        type="text"
                        placeholder="0.00 USD"
                        className="buy-sell__input-field"
                        value={amount}
                        onChange={handleAmountChange}
                    />
            </div>

            <div class="buy-sell__input buy-sell__input--type">
                <div class="buy-sell__input-label buy-sell__input-label--type">
                    <p class="buy-sell__label-text">Type</p>
                    <img src={ic} alt="" class="buy-sell__label-icon"/>
                </div>
                <div class="buy-sell__type-options">
                    <p class="buy-sell__type-text">Good till cancelled</p>
                    <img src={ud} alt=""/>
                </div>
            </div>
        </div>
        {/* <!-- buy sell input panels -->

        <!-- checkbox --> */}
        <div class="buy-sell__checkbox">
            <img src={ck} alt="" class="buy-sell__checkbox-image"/>
            <div class="buy-sell__checkbox-post">
                <p class="buy-sell__label-text">Post Only</p>
                <img src={ic} alt="" class="buy-sell__label-icon"/>
            </div>
        </div>
        {/* <!-- checkbox -->

        <!-- total --> */}
        <div class="buy-sell__total">
            <p class="buy-sell__label-text">Total</p>
            <p className="buy-sell__label-text">{total.toFixed(2)}</p>
        </div>
        {/* <!-- total --> */}

        <button class="buy-sell__btn buy-sell__btn--buy">
            Buy BTC
        </button>
        <hr class="buy-sell__divider"/>

        {/* <!-- values panel --> */}
        <div class="values-panel">
            <div class="values-panel__top">
                <div class="values-panel__top-left">
                    <p class="values-panel__text">Total account value</p>
                    <p class="values-panel__value">0.00</p>
                </div>
                <div class="values-panel__top-right">
                    <p class="values-panel__currency">NGN</p>
                    <img src={ud} alt="" class="values-panel__currency-icon"/>
                </div>
            </div>
            <div class="values-panel__bottom">
                <div class="values-panel__bottom-left">
                    <p class="values-panel__text">Open Orders</p>
                    <p class="values-panel__value">0.00</p>
                </div>
                <div class="values-panel__bottom-right">
                    <p class="values-panel__text">Available</p>
                    <p class="values-panel__value">0.00</p>
                </div>
            </div>
        </div>
        {/* <!-- values panel --> */}
    </div>
  )
}

export default BuyandSell