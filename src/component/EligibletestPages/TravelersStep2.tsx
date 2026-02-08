import {  useNavigate } from "react-router-dom";
import FlowLayout from "./FlowLayout";
import List from "./List";
import Return from "../../assets/icons/return x.png"
import './TravelersStep2.css';

const Travelers = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="tral">
      <div className="business-img"></div>
      <div className="itemsone">
      <FlowLayout >
        <div className="travellers">
          <div className="">
            <div className="Business-travel">
              <span>
                <h1>Business Travelers</h1>
                <p>How to Apply for Visa on Arrival (African Nationals)</p>
              </span>

              <div className="business-button">
                <button onClick={goBack}>
                  <img src={Return} alt="" />
                </button>
              </div>
            </div>

            <div className="list-document">
              <h2>Step 2: Arrive at the Port of Entry and proceed for Biometric <br /> Enrollment, visa issuance and Immigration Clearance</h2>
              <p className="sub-topic">Upon arrival at the Port of Entry, proceed to the desk marked <br /> ‘Visa on Arrival’ for Biometric Enrollment and issuance of entry Visa. <br /> Present the following documents in hard copy at the Port of Entry:</p>
 
                  <List type="ul" className="sub-ul" >
                    <li>Passport Photo</li>
                    <li>Induction/Application Letter</li>
                    <li>Copy of Passport Data Pages</li>
                    <li>Copy of Airline Return Ticket</li>
                    <li>Invitation Letter from Host Company</li>
                    <li>
                      Corporative Affairs Commission Certificate from Host Company,
                      <br />
                      or in case of NGO's a Letter of Permission.
                    </li>
                  </List>
                
                
              
            </div>
          </div>

        </div>
        
      </FlowLayout>
      </div>
    </div>
  );
};

export default Travelers;
