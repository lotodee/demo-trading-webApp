
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
import { useEffect, useState } from "react"

const DisplayPanel = () => {
  const [small,setSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');
    
   
    setSmall(mediaQuery.matches);

  
    const handleMediaQueryChange = (event) => {
      setSmall(event.matches);
    };

    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

  
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);





  
  return (
    <section className={`${small? `panel-small` : `panel`}`}>
    <div className="panel__left">
       <Image src={logo}/>
       
        <Text text="BTC/USDT" className="panel__left-text"/>
       <Image src={dropdown}/>
       <Text text="$20,634" className="panel__balance"/>
    </div>
    <div className="panel__right">
       
        
      <Panelinfo text="520.80+1.25%" src={change} className="panel__info-bottom--change"/>
      <Panelinfo text="520.80+1.25%" src={low}/>
      <Panelinfo text="520.80+1.25%" src={high}/>
      <Panelinfo text="75.655.26" src={volume}/>
    
    </div>
</section>

  )
}

export default DisplayPanel