import {  useNavigate } from "react-router-dom";
import FlowLayout from "./FlowLayout";
import List from "./List";
import Return from "../../assets/icons/return x.png"
import './Nationals.css';

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
              <h2>Step 1: Apply and Make Payment online</h2>

              <List type="ol" className="instruction">
                <li>
                  To begin your Application, please visit the <a href="">NIS portal.</a>
                </li>
                <li>Complete the Application and make payments</li>
                
                  
                  <List type="ul" className="national-list">
                    <li>You will be required to upload the following  <br /> documents:</li>
                    <li>Passport Photo</li>
                    <li>Induction/Application Letter</li>
                    <li>Copy of Passport Data Pages</li>
                    <li>Copy of Airline Return Ticket</li>
                  </List>
                
                <li>
                  Once the Application is submitted successfully, a printable
                  <br />
                  receipt would be issued, with another copy sent to your email.
                </li>
                <li>
                  The Application would be processed, after which, an Approval
                  <br />
                  confirmation and Approval Letter would be sent to your email
                  <br />
                  within 48hrs (2 working days).
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
