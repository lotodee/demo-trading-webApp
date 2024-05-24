
import "./Footer.css"
import fbicon  from "../../../assets/images/facebook.svg"
import xicon  from "../../../assets/images/twitter.svg"
import igicon  from "../../../assets/images/instagram.svg"
import IconLink from "../../molecules/IconLink/IconLink"
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container">
        <div className="footer__copyright">
            &copy; 2024  <span>RAVENPAY</span>   All rights reserved.
        </div>
        <div className="footer__social-media">
               <IconLink path="https://facebook.com" LinkClassName="footer__social-media-icon" IconClassName="footer__social-media-icon-img" src={fbicon}/>
               <IconLink path="https://twitter.com" LinkClassName="footer__social-media-icon" IconClassName="footer__social-media-icon-img" src={xicon}/>
               <IconLink path="https://instagram.com" LinkClassName="footer__social-media-icon" IconClassName="footer__social-media-icon-img" src={igicon}/>
           
        </div>
        <div className="footer__contact">
            <p className="footer__contact-link">ravenpay@ravenpay.com</p>
        </div>
    </div>
</footer>

  )
}

export default Footer
