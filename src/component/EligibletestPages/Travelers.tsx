import {  useNavigate } from "react-router-dom";
import FlowLayout from "./FlowLayout";
import List from "./List";
import Return from "../../assets/icons/return x.png"
import './Travelers.css';

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
                <p>How to Apply for Visa on Arrival (Business Travelers)</p>
              </span>

              <div className="business-button">
                <button onClick={goBack}>
                  <img src={Return} alt="" />
                </button>
              </div>
            </div>

            <div className="list-document">
              <h2>Step 1: Apply and Make Payment online</h2>

              <List type="ol" className="instruction-list">
                <li>
                  To begin your Application, please visit the <a href="">NIS portal.</a>
                </li>
                <li>Complete Application and make payments</li>
                <li>
                  You will be required to upload the following original documents:
                  <List type="ul" className="sub-list">
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
                </li>
                <li>
                  Once the Application is submitted successfully, a printable
                  <br />
                  receipt would be issued.
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
