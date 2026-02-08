import './Information.css'
import Areas from '../../../assets/icons/Areas.png'
import Email from "../../../assets/icons/Mail.png"
import Call from "../../../assets/icons/Call.png"
import { Link } from 'react-router-dom';
import Logo from "../../../assets/images/logo.png"
import Twitter from "../../../assets/icons/Line.png"
import Linkedin from "../../../assets/icons/linkedin.png"
import Instagram from "../../../assets/icons/instagram.png"
import Arrowup from "../../../assets/icons/Arrow Up.png"


const Information = () => {
  return (
    <div className='infor-container'>
        <div className='main-infor'>
      <div className="header-8">
        <h1>For more information </h1>
        <p>We are available and ready to assist you through the following channels</p>
      </div>
      <div className="sub-headings">
        <div className='child-headings'>
            <div  className='sub-address'>
                <hr />
                <figure>
                    <img src={Areas} alt="" />
                </figure>
                <h1>Nigerian address</h1>
                <p>40f Oba Dosumu Street, GRA Ikeja Lagos, Nigeria</p>
            </div>
            <div className='sub-address'>
               <hr />
                <figure>
                    <img src={Areas} alt=""  className='areas'/>
                </figure>
                <h1>United states address</h1>
                <p>8707 Harford RdSuite A4Parkville, MD 21234</p>
            </div>
        </div>
        <div className="child-headings">
            <div id='address' className='sub-address'>
               
                <figure>
                    <hr />
                    <img src={Email} alt=""  />
                </figure>
                <h1>Email address</h1>
                <p><a href="mailto:info@smoothluxurylogistics.com">info@smoothluxurylogistics.com</a></p>
            </div>
            <div id='sub-address' className='sub-address'>
                
                <figure>
                    <hr />
                    <img src={Call} alt="" />
                </figure>
                <h1>Mobile number</h1>
                <p><a href="tel:+234 901 234 5678">+234 901 234 5678</a></p>
            </div>
        </div>
      </div>
      <div className='footer'>
        <div className="footer-logo">
            <img src={Logo} alt=""  className='Down-logo'/>
            <h1>We offer you the best Travel Assistance</h1>
        </div>
        <div className="back-button">
            
            <button className='Arrow-back-button'
            

             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={Arrowup} alt="" />
            </button>

        </div>
        <div className="down-footer">
            <div className='link'>
                <ul >
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/eligible-test">Eligible test</Link></li>
                  <li><Link to="/services">Our services</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                </ul>
            </div>
            <div className='icon-image'>
                <a href=""><img src={Twitter} alt="" /></a>
                <a href=""><img src={Linkedin} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
                
                
            </div>
            <div className='anchor-tags'>
                <a href="">Disclaimer and Terms of  Service</a>
                <a href="">Privacy policy</a>
            </div>
        </div>
        <div className="copyright">
            <h1>Copyright © 2021  LLC. All rights reserved</h1>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Information
