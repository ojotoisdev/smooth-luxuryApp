
import LogoONE from "../../../assets/images/Ellipse 14.png"
import LogoTwo from "../../../assets/images/Ellipse 20 (1).png"
import LogoThree from "../../../assets/images/Ellipse 21.png"
import LogoFour from "../../../assets/images/Ellipse 15.png"
import LogoFive from "../../../assets/images/Ellipse 22.png"
import LogoSix from "../../../assets/images/Ellipse 19.png"
import LogoSeven from "../../../assets/images/Ellipse 16.png"
import LogoEight from "../../../assets/images/Ellipse 17 (1).png"
import LogoNine from "../../../assets/images/Ellipse 18.png"
import LogoTen from "../../../assets/images/Ellipse 13 (1).png"

import './LogoPartner.css'

const LogoPartner = () => {
  
  return (
    <div className="Partner-container">
      <h1>Our Partners</h1>
      <p>We partner with key players in the industry to serve and deliver top tier services</p>
      <div className="partner-logo">
        <div id="logo-categories" className="logo-categories">
            <img src={LogoONE} alt="" />
            <img src={LogoTwo} alt="" />
            <img src={LogoThree} alt="" />
            <img src={LogoFour} alt="" />
            <img src={LogoFive} alt="" />
            <img src={LogoSix} alt="" />
        </div>
        <div className="logo-categories">
            <img src={LogoSeven} alt="" />
            <img src={LogoEight} alt="" />
            <img src={LogoNine} alt="" />
            <img src={LogoTen} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default LogoPartner
