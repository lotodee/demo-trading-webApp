/* eslint-disable react/prop-types */

import "./DropDownWIthValue.css"
import arrow from "../../../assets/images/arrowdowndark.svg"
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
const DropDownWIthValue = ({text}) => {
  return (
    <div className="orderbook__top-right">
   
    <Text text={text} className="orderbook__value"/>
    <Image src={arrow} className="orderbook__dropdown-icon"/>
    
</div>
  )
}

export default DropDownWIthValue