
import "./ProfileBox.css"
import dummypic from "../../../assets/images/dummypic.svg"
import angleright from "../../../assets/images/u_angle-right.svg"
import Image from '../../atoms/Image/Image'
const ProfileBox = () => {
  return (
<>
<div className="nav__profile-box" >
           <Image src={dummypic} className='.nav__profile-pic' />
            <p className="nav__profile-name">Olakunle Te...</p>
           <Image src={angleright}/>
      </div>
</>
  )
}

export default ProfileBox