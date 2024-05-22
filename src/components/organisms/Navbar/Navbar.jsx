import React from 'react'
import NavLink from '../../molecules/NavLink/NavLink'
import "./Navbar.css"
import logo from "../../../assets/images/logo.svg"
import world from "../../../assets/images/world.svg"
import logout from "../../../assets/images/Logout.svg"
import Image from '../../atoms/Image/Image'
import ProfileBox from '../../molecules/ProfileBox/ProfileBox'
const Navbar = () => {
  return (

   <nav class="nav">
    <div class="nav__left">
        <Image  className="nav__left-logo" alt="logo" src={logo}/>
  
       <NavLink className="nav__left-texts"/>
    </div> 

    <div class="nav__right">
       <ProfileBox/>
        <Image src={world}/>
        <Image src={logout}/>
      
    </div> 
</nav>
  
  )
}

export default Navbar
