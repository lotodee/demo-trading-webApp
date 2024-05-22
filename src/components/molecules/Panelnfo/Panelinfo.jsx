import React from 'react'
import "./Panelinfo.css"
import change from "../../../assets/images/change.svg"
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
const Panelinfo = ({className,src,text}) => {
  return (
    <div class="panel__info panel__info--change">
    <div class="panel__info-top">
     
      <Image src={src} alt="change icon" />
      <Text text="24h change" className="panel__info-top-text"/>

    </div>  
    <Text className={` panel__info-bottom ${className}`} text={text}/>
    {/* <div class="panel__info-bottom panel__info-bottom--change">520.80+1.25%</div>   */}
  </div>
  )
}

export default Panelinfo