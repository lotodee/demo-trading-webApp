import  { useState } from 'react'
import "./BuyandSell.css"
import ic  from "../../../assets/images/u_info-circle.svg"
import ud  from "../../../assets/images/u_angle-down.svg"
import ck  from "../../../assets/images/u_check.svg"
import BlankPanel from '../../atoms/BlankPanel/BlankPanel'
import TextButton from '../../atoms/TextButton/TextButton'
import InputContainer from '../../atoms/InputContainer/InputContainer'
import LabeledIcon from '../../molecules/LabeledIcon/LabeledIcon'
import StyledInput from '../../atoms/StyledInput/StyledInput'
import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image'
import LabelandValue from '../../molecules/LabelandValue/LabelandValue'
import Button from '../../atoms/Button/Button'
import Divider from '../../atoms/DIvider/Divider'
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
<div className="buy-sell">
        {/* <!-- buy sell options panel --> */}

        <BlankPanel>
            <TextButton text="Buy" className="buy-sell__options-item buy-sell__options-item--buy"/>
            <TextButton text="Sell" className="buy-sell__options-item buy-sell__options-item--sell"/>
        </BlankPanel>
     
        {/* <!-- buy sell options panel -->
       
        <!-- buy sell limit options panel --> */}
        <div className="buy-sell__limit-options">
            <div className="buy-sell__limit-option buy-sell__limit-option--limit">Limit</div>
            <div className="buy-sell__limit-option buy-sell__limit-option--market">Market</div>
            <div className="buy-sell__limit-option buy-sell__limit-option--stop-limit">Stop-Limit</div>
        </div>
        {/* <!-- buy sell limit options panel -->

        <!-- buy sell input panels --> */}
        <div className="buy-sell__input-panel">
            {/* <div className="buy-sell__input buy-sell__input--limit">
                <div className="buy-sell__input-label buy-sell__input-label--limit">
                    <p className="buy-sell__label-text">Limit price</p>
                    <img src={ic} alt="" className="buy-sell__label-icon"/>
                </div>
                <input
                        type="text"
                        placeholder="0.00 USD"
                        className="buy-sell__input-field"
                        value={limitPrice}
                        onChange={handleLimitPriceChange}
                    />
            </div> */}

<InputContainer>
<LabeledIcon labelText="LimitPrice" LabelIcon={ic}/>
<StyledInput onChange={handleLimitPriceChange} value={limitPrice} placeholder="0.00USD"/>
</InputContainer>


<InputContainer>
<LabeledIcon labelText="Amount" LabelIcon={ic}/>
<StyledInput onChange={handleAmountChange} value={amount} placeholder="0.00USD"/>
</InputContainer>


<InputContainer>
<LabeledIcon labelText="Type" LabelIcon={ic}/>
<div className="buy-sell__type-options">

    <Text text="Good till cancelled" className="buy-sell__type-text"/>
    <Image src={ud}/>
                 
                  
                </div>
</InputContainer>
           
        </div>
        {/* <!-- buy sell input panels -->

        <!-- checkbox --> */}
        <div className="buy-sell__checkbox">
           
         <Image src={ck} className="buy-sell__checkbox-image"/>
            <div className="buy-sell__checkbox-post">
            <LabeledIcon labelText="Post" LabelIcon={ic}/>
            </div>
        </div>
        {/* <!-- checkbox -->

        <!-- total --> */}
        <div className="buy-sell__total">
            <Text text="Total" className="buy-sell__label-text"/>
            <Text text={total.toFixed(2)} className="buy-sell__label-text"/>
          
           
        </div>
        {/* <!-- total --> */}

<Button 
className="buy-sell__btn buy-sell__btn--buy"
buttonText="Buy BTC"
/>
    <Divider className="buy-sell__divider"/>
  

        {/* <!-- values panel --> */}
        <div className="values-panel">
            <div className="values-panel__top">
                {/* <div className="values-panel__top-left">
                    <Text text="Total account value" className="values-panel__text"/>
                    <Text text="0.00" className="values-panel__value"/>
                    
                </div> */}
                <LabelandValue
                labelText="Total account value"
                valueText="0.00"
             
                
                />
                
                <div className="values-panel__top-right">
                    <p className="values-panel__currency">NGN</p>
                    <img src={ud} alt="" className="values-panel__currency-icon"/>
                </div>
            </div>
            <div className="values-panel__bottom">
               
                  <LabelandValue
                labelText="Open Orders"
                valueText="0.00"
           
                
                /> 

<LabelandValue
                labelText="Available"
                valueText="0.00"
           
                
                /> 
          
         
            </div>
            <Button
            className="btn btn--deposit"
              buttonText="Deposit"

            />
          
        </div>
        {/* <!-- values panel --> */}
    </div>
  )
}

export default BuyandSell