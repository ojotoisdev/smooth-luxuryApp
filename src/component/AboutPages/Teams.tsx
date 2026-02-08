
import Team from "../../assets/images/Rectangle 573 (1).png"
import feedback from "../../assets/icons/feedback.png"

import './Teams.css'

const Teams = () => {
  

  return (
    <div className="Teams">
      <h1 className="our-teams">Meet our team</h1>
      <div className="sub-teams">
        <div className="Menu-teams">
            <img src={Team} alt="" />
            <div className="text-box">
                <h1>Kedrick Scribner</h1>
                <p>Associate/Partner</p>
            </div>
            
        </div>
        <div className="Menu-teams">
            <img src={Team} alt="" />
            <div className="text-box">
                <h1>Jessica Okorie</h1>
                <p>Group chief executive officer</p>
            </div>
            
        </div>
        <div className="Menu-teams">
            <img src={Team} alt="" />
            <div className="text-box">
                <h1>Kolade Lukmon</h1>
                <p>Operation manager</p>
            </div>
            
        </div>
        <div className="Menu-teams">
            <img src={Team} alt="" />
            <div className="text-box">
                <h1>Barr. OgechiObasi</h1>
                <p>Legal Aid</p>
            </div>
            
        </div>
      </div>
      <div className="Client">
        <div className="client-testimonials">
          <h1>What our clients say</h1>
          <p>Testimonials from some of our clientele </p>
        </div>
        <div className="Client-message">
          <div className="feedback">
            <div className="feed-image">
              <img src={feedback} alt="" />
            </div>
           <div className="feed-button">
             <button>1/3</button>
           </div>
          </div>
          <div className="customer-text">
            <h1>Mr Frank Charpline ESQ</h1>
            <p>Our Visa On Arrival submission service is the culmination of <br /> experience, our unique expertise, and the relationships we have <br /> built throughout Nigeria. Our Visa On Arrival couriers do the "leg <br />-work" for you, to insure your paperwork is processed efficiently and <br /> potential issues with your travel plans are identified immediately. <br /> The Service guides you through the hurdles you will encounter <br /> along the way.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Teams