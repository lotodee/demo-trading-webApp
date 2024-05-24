/* eslint-disable react/prop-types */

import "./Panelinfo.css"

import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
const Panelinfo = ({className,src,text}) => {
  return (
    <div className="panel__info panel__info--change">
    <div className="panel__info-top">
     
      <Image src={src} alt="change icon" />
      <Text text="24h change" className="panel__info-top-text"/>

    </div>  
    <Text className={` panel__info-bottom ${className}`} text={text}/>
    
  </div>
  )
}

export default Panelinfo