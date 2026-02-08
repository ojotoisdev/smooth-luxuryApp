import {  useNavigate } from "react-router-dom";
import FlowLayout from "./FlowLayout";
import List from "./List";
import Return from "../../assets/icons/return x.png"
import './NationalStep2.css';

const Travelers = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="tral">
      <div className="National-img"></div>
      <div className="itemsone">
      <FlowLayout >
        <div className="travellers">
          <div className="">
            <div className="Business-travel">
              <span>
                <h1>African Nationals</h1>
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
                    <li>Visa Approval letter (Pre-approved visa letter), valid for 14 days <br />from the date of issuance</li>
                    <li>Evidence of online payment</li>
                    <li>Valid Passport with minimum of six months validity</li>
                    <li>Valid rerurn ticket</li>
                    <li>Invitation Letter from Host Company</li>
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
