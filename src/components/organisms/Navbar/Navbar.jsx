
import NavLink from '../../molecules/NavLink/NavLink'
import "./Navbar.css"
import logo from "../../../assets/images/logo.svg"
import world from "../../../assets/images/world.svg"
import logout from "../../../assets/images/Logout.svg"
import dummypic from "../../../assets/images/dummypic.svg"
import menu from "../../../assets/images/Menu.svg"
import Image from '../../atoms/Image/Image'
import ProfileBox from '../../molecules/ProfileBox/ProfileBox'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import SideNavbar from '../../molecules/SideNavbar/SideNavbar'
const Navbar = () => {

  const [side,setSide] = useState(false)
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

   <nav className="nav">
    {!small ? (
      <>
   <div className="nav__left">
      <Link to="/">
      <Image  className="nav__left-logo" alt="logo" src={logo}/>
      </Link>
        
  
       <NavLink className="nav__left-texts"/>
    </div> 

    <div className="nav__right">
       <ProfileBox/>
        <Image src={world}/>
        <Image src={logout}/>
      
    </div>  
    </>
  ):(
    <>
      <div className="nav__left">
      <Link to="/">
      <Image  className="nav__left-logo" alt="logo" src={logo}/>
      </Link>
        
  
   
    </div> 

    <div className="nav__right">
      <Image src={dummypic} className="big-icons"  />
        <Image src={world} className="big-icons"/>
       
        <Image src={menu} className="big-icons" onClick={()=>{setSide(!side)}}  />
      {side &&(
     
<SideNavbar/>
      )}
    </div> 
    </> 
  )}
</nav>
  
  )
}

export default Navbar
