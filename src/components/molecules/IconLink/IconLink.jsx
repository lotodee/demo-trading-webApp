/* eslint-disable react/prop-types */


import "./IconLink.css"
import { Link } from 'react-router-dom'
import Image from '../../atoms/Image/Image'

const IconLink = ({src,LinkClassName,path,IconClassName}) => {
  return (
    <>
    <Link to={path} className={LinkClassName}>
    <Image src={src} className={IconClassName}/>
    </Link>
    {/* <a href="https://facebook.com" className="footer__social-media-icon"/>
    <img src={fb} alt="Facebook"/> */}
    </>
  )
}

export default IconLink
