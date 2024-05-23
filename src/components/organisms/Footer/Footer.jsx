import React from 'react'
import "./Footer.css"
import fb  from "../../../assets/images/facebook.svg"
import x  from "../../../assets/images/twitter.svg"
import ig  from "../../../assets/images/instagram.svg"
const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer__container">
        <div class="footer__copyright">
            &copy; 2024  <span>RAVENPAY</span>   All rights reserved.
        </div>
        <div class="footer__social-media">
            <a href="https://facebook.com" class="footer__social-media-icon">
                <img src={fb} alt="Facebook"/>
            </a>
            <a href="https://twitter.com" class="footer__social-media-icon">
                <img src={x} alt="Twitter"/>
            </a>
            <a href="https://instagram.com" class="footer__social-media-icon">
                <img src={ig} alt="Instagram"/>
            </a>
        </div>
        <div class="footer__contact">
            <a href="mailto:contact@yourcompany.com" class="footer__contact-link">ravenpay@ravenpay.com</a>
        </div>
    </div>
</footer>

  )
}

export default Footer
