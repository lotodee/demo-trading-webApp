/* eslint-disable react/prop-types */

import "./Image.css"

const Image = ({src,className,alt,onClick}) => {
  return (
  <>
  <img src={src} alt={alt}  className={className} onClick={onClick} />
  </>
  )
}

export default Image
