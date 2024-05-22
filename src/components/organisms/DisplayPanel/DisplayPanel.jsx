import React from 'react'
import "./DisplayPanel.css"
import logo from "../../../assets/images/dummylogo.svg"
import dropdown from "../../../assets/images/dropdown.svg"
import change from "../../../assets/images/change.svg"
import high from "../../../assets/images/high.svg"
import low from "../../../assets/images/low.svg"
import volume from "../../../assets/images/volume.svg"
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
import Panelinfo from '../../molecules/Panelnfo/Panelinfo'

const DisplayPanel = () => {
  return (
    <section class="panel">
    <div class="panel__left">
       <Image src={logo}/>
       
        <Text text="BTC/USDT" className="panel__left-text"/>
       <Image src={dropdown}/>
    </div>
    <div class="panel__right">
        <Text text="$20,634" className="panel__balance"/>
        
      <Panelinfo text="520.80+1.25%" src={change} className="panel__info-bottom--change"/>
      <Panelinfo text="520.80+1.25%" src={low}/>
      <Panelinfo text="520.80+1.25%" src={high}/>
      <Panelinfo text="75.655.26" src={volume}/>
    
    </div>
</section>

  )
}

export default DisplayPanel