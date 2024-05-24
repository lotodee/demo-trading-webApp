/* eslint-disable react/prop-types */

import Text from '../../atoms/Text/Text';
import { Link } from 'react-router-dom';
import './NavLink.css';
const NavLink = ({className}) => {
  return (
    <>
      <div className={className}>
        <Link to="/wallets" className='link'>
        <Text text="Wallets"  className="nav__left-text"/>
        </Link>
      
       
        
      <Link to="/roqquhub" className='link'>
      <Text text="Roqqu Hub" className="nav__left-text"/>
      </Link>
    

       <Link to="/exchange" className='link'>
       <Text text="Exchange" className="nav__left-text" />
       </Link>
           
       <Link to="/auth" className='link'>
       <Text text="AuthScreen" className="nav__left-text" />
       </Link>
            
           
        </div>
    </>
  )
}

export default NavLink