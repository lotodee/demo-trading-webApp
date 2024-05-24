
import NavLink from '../../molecules/NavLink/NavLink'
import "./Navbar.css"
import logo from "../../../assets/images/logo.svg"
import world from "../../../assets/images/world.svg"
import logout from "../../../assets/images/Logout.svg"
import Image from '../../atoms/Image/Image'
import ProfileBox from '../../molecules/ProfileBox/ProfileBox'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

   <nav className="nav">
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
</nav>
  
  )
}

export default Navbar
