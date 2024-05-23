import React from 'react'
import Text from '../../atoms/Text/Text';
import { Link } from 'react-router-dom';
import './NavLink';
const NavLink = ({className}) => {
  return (
    <>
      <div class={className}>
      
        <Text text="Wallets"  className="nav__left-text"/>
        
      
        <Text text="Roqqu Hub" className="nav__left-text"/>
       
            <Text text="Exchange" className="nav__left-text" />
            
           
        </div>
    </>
  )
}

export default NavLink