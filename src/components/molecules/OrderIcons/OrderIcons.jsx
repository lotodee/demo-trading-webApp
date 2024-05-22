import React from 'react'
import icon1 from "../../../assets/images/orderbkicon1.svg"
import icon2 from "../../../assets/images/orderbkicon2.svg"
import icon3 from "../../../assets/images/orderbkicon3.svg"
import Image from '../../atoms/Image/Image'
const OrderIcons = () => {
  return (
    <div class="orderbook__top-left">
    <Image src={icon1} className="orderbook__icon"/>
    <Image src={icon2} className="orderbook__icon"/>
    <Image src={icon3} className="orderbook__icon"/>
 
</div>
  )
}

export default OrderIcons