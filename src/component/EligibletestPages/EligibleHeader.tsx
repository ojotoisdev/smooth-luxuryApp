
import Group3 from "../../assets/icons/Group 3.png"
import Group2 from "../../assets/icons/Group 2.png"

import "./EligibleHeader.css"
const EligibleHeader = () => {
  return (
    <div className="Eligibe-container">
      <img src={Group2} alt="" className="Group2" />
      <div className="test-heading">
        <div className="test-menu">
          <h1>Free Eligibility Test</h1>
          <p>Your eligibility and worthiness is our <br /> utmost concern</p>
          <img src={Group3} alt="" className='' />
        </div>
        
        <div className="test-paragraph">
          
          <p>This is to notify the General Public that Nigeria Immigration <br /> Service (NIS) has rolled out a new Visa on Arrival Application <br /> Process for all Business Travelers and African Union Countries <br /> except ECOWAS member Countries. <br />Accordingly, all visitors coming to Nigeria from these countries <br /> shall be required to follow the procedure below:</p>
          <p>The VoA facility is available to two categories of travelers:</p>
          <ul>
            <li>Frequently traveled High Net Worth Investors with business <br /> interest in Nigeria</li>
            <li>Citizens of African Countries.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EligibleHeader
