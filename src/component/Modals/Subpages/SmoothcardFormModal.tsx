
import { useNavigate } from "react-router-dom";
import Close from "../../../assets/icons/Close X.png";
import './SmoothcardFormModal.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"
import { useState } from "react";
import Send from "../../../assets/icons/Send.png"
import type { ModalProps } from "../ModalProps/Index";
import Button from "../../Button/Button";

 
  const SmoothcardFormModal = ({isVisible, onClose}: ModalProps) => {
   
    const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
      if(e.target instanceof HTMLElement && e.target.id === 'wrapper') onClose();
    }

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    cardNumber: "",
    cardType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const clearField = (fieldName: string) => {
  setFormData(prev => ({
    ...prev,
    [fieldName]: "",

  }));
};


  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Simple Validation (example)
  if (!formData.firstName || !formData.lastName || !formData.phone ) {
    alert("Please fill in all required fields.");
    return;
  }

  // You can log or send to API
  const submissionData = {
    ...formData,
  };

  console.log("Submitting form data:", submissionData);

  // Example: Simulate API call
  // Replace with your real API call (axios, fetch, etc.)
  setTimeout(() => {
    alert("Form submitted successfully!");
    // Optionally navigate away
    navigate(-1); // or navigate(-1)
  }, 1000);
};

  const navigate = useNavigate();

  if (!isVisible) return null;
  return (
    <div className='smooth-card-container' id="wrapper" onClick={handleClose}>
      <div className="smooth-form">
        <div className="smooth-head">
          <span>
            <h1>Apply for smooth card</h1>
            <p>Get access to facilities and services owned by our partners </p>
          </span>
          <img
            src={Close}
            alt="close"
            className="booked-close"
            onClick={() => onClose()}
          />
        </div>

        <hr />
        <form  onSubmit={handleSubmit}>
          <div className="smooth-content-form">
            <div className='name'>
              <input
              type="text"
              name="firstName"
              className="smooth-test"
              value={formData.firstName}
              placeholder=""
              onChange={handleChange}
              required
              />
              <label htmlFor="" className="group">First name</label>
              {formData.firstName && (
                  <span className="delet-message" onClick={() => clearField("firstName")}>x</span>
                )}
            </div>
            <div className='name'>
              <input type="text"
              className="smooth-test"
              name="middleName"
              value={formData.middleName}
              placeholder=""
              onChange={handleChange} 
              required
              />
              <label htmlFor="" className="group"> Middle name</label>
              {formData.middleName && (
                  <span className="delet-message" onClick={() => clearField("middleName")}>x</span>
                )}
            </div>
            <div className='name'>
              <input type="text"
              className="smooth-test" 
              name="lastName"
              value={formData.lastName}
              placeholder=""
              onChange={handleChange}
              required
              />
              <label htmlFor="" className="group">Last name</label>
              {formData.lastName && (
                  <span className="delet-message" onClick={() => clearField("lastName")}>x</span>
                )}
            </div>
          </div>
          <div className="last-input">
            <div>
              <PhoneInput
              country={'ng'}
              value={formData.phone}
              placeholder="Phone" 
              enableSearch ={true}
              disableCountryCode={true}
              disableDropdown={false}
              onChange={handlePhoneChange}
              buttonStyle={{backgroundColor: 'transparent', border:'none',}}
              inputStyle={{width: '568px',height: '56px', border: 'none',borderRadius: "15px",
              paddingLeft:'40px',
              background: ' #f5f5f8ff'}}
              />
            </div>
            <div>
               
               <select
                  id="cardType"
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  required
                  className="select"
                >
                 <option value="">Card type</option>
                 <option value="Visa">Visa</option>
                 <option value="Verve">Verve</option>
                 <option value="Mastercard">Mastercard</option>
                 <option value="American Express">American Express</option>
                 <option value="Discover">Discover</option>
                 <option value="UnionPay">UnionPay</option>
                 <option value="JCB">JCB</option>
                 <option value="Diners Club">Diners Club</option>
                </select>
            </div>

          </div>
          <div className="my-down-submit-button">
              {/* <button type="submit">Submit</button> */}
              {/* <img src={Send} alt="" /> */}
              <Button icon={Send} variant="primary" iconAlt="Book">Submit</Button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SmoothcardFormModal
