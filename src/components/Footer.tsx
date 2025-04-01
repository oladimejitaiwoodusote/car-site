import '../styles/Footer.css'
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='footer_top_left'>
          <span>Follow Us</span>
          <div className='icon_wrapper'><PiInstagramLogoThin/></div>
          <div className='icon_wrapper'><PiTwitterLogoThin/></div>
          <div className='icon_wrapper'><SlSocialFacebook/></div>          
        </div>
        <div className='footer_top_right'>
          <form className='footer_form'>
            <input className='footer_form_input' placeholder='Enter Email For Updates'/>
            <input className='footer_input_submit' type='submit' value='Submit'/>
          </form>
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='footer_column'>
          <span className="footer_title">Luxury.cars</span>
          <span>We help you find your dream Car</span>
        </div>
        <div className='footer_column'>
          <span className="footer_title">information</span>
          <span>About</span>
          <span>Pricing</span>
          <span>Blog</span>
        </div>
        <div className='footer_column'>
          <span className="footer_title">Company</span>
          <span>Community</span>
          <span>Career</span>
          <span>Our Story</span>
        </div>
        <div className='footer_column'>
          <span className="footer_title">Contact</span>
          <span>Getting Started</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
        <p className="footer_copyright">2023 all Right Reserved Term of use LUXURY.CARS</p>
      </div>
    </footer>
  )
}

export default Footer