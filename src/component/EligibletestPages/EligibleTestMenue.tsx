
import Testicon from  "../../assets/icons/Vector-test.png"
import Globe from "../../assets/images/Group (11).png"
import Forward from "../../assets/icons/Forward Arrow.png"

import "./EligibleTestMenu.css"
import { useNavigate } from "react-router-dom"



const EligibleTestMenu = () => {

  
  const navigate = useNavigate();
  const goToTravelersFlow = () => {
    navigate('/travelers');
  }
  const goToNationalsFlow = () => {
    navigate('/nationals');
  }
  return (
    <div className="Menu-test">
      <div className="main-test">
      <div className="map-color">
        <h1>To be Eligible</h1>
        <ul>
          <li>Frequently travelled Business persons of <br /> international Repute</li>
          <li>Executives of Multinational Companies</li>
          <li>Members Government Delegations</li>
          <li>Holders of United Nations Laissez-Passer</li>
          <li>Holders of African Union Laisser-passer.</li>
          <li>Holders of any other Official travel documents of <br /> other recognized International Organizations who <br /> intend to visit Nigeria.</li>
        </ul>
        <p>Note: Visa on Arrival is available to citizens of all countries <br /> except ECOWAS Nationals who do not require visa to visit <br /> Nigeria and other countries which Nigeria has entered into visa <br /> abolition agreements.</p>
        <div className="test-button">
          <button onClick={() => navigate("/Test")}>
            Take eligibility test
            
          </button>
          <img src={Testicon} alt="" />
        </div>
        <img src={Globe} alt="" className="globe" />

      </div>
      <div className="Map-img">
        <div className="image-tab-one">
          <div className="child-tab">
          <div className="Tab-content">
            <h1>African Nationals</h1>
            <p>How to Apply for Visa on Arrival (African Nationals)</p>
          </div>
          <div className="Tab-button">
            <button onClick={goToNationalsFlow}><img src={Forward} alt="" /></button>
          </div>
          </div>
        </div>
        <div className="image-tab">
          <div className="child-tab">
          <div className="Tab-content">
            <h1>Business Travelers</h1>
            <p>How to Apply for Visa on Arrival (Business Travelers)</p>
          </div>
          <div className="Tab-button">
            <button onClick={goToTravelersFlow}><img src={Forward} alt="" /></button>
          </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default EligibleTestMenu
