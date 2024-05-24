/* eslint-disable react/prop-types */

import "./InputContainer.css"
const InputContainer = ({children}) => {
  return (
    <div className="buy-sell__input buy-sell__input--limit">

        {children}
                {/* <div className="buy-sell__input-label buy-sell__input-label--limit">
                    <p className="buy-sell__label-text">Limit price</p>
                    <img src={ic} alt="" className="buy-sell__label-icon"/>
                </div>
                <input
                        type="text"
                        placeholder="0.00 USD"
                        className="buy-sell__input-field"
                        value={limitPrice}
                        onChange={handleLimitPriceChange}
                    /> */}
            </div>
  )
}

export default InputContainer
