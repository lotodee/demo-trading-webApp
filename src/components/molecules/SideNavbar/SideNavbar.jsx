
import NavLink from '../NavLink/NavLink'
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
import Divider from '../../atoms/DIvider/Divider'
import logout from "../../../assets/images/Logout.svg"
import "./SideNavbar.css"
const SideNavbar = () => {
  return (
    <div className='side-nav'>
    <NavLink/>
    <Divider className="side-divider"/>
    <div className='logout'>
      <Text text="Logout" className="logout-text" />
    <Image src={logout} className="logout-icon"/> 
      </div>
  
  </div>
  )
}

export default SideNavbar
