
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css"
import { useState } from 'react'
import Close from "../../../assets/icons/Close X.png";
import Send from "../../../assets/icons/Send.png"
import type { ModalProps } from "../ModalProps/Index";
import Button from '../../Button/Button';
import './ContactUs.css'

const ContactUs = ({isVisible, onClose}: ModalProps) => {
  const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
      if(e.target instanceof HTMLElement && e.target.id === 'wrapper') onClose();
    }
    
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    message: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, } = e.target;
  
    setFormData((prevData) =>({
    ...prevData,
    [name]: value,
    
     }));
  };
  const [errors, setErrors] = useState({
  firstName: "",
  middleName: "",
  lastName: "",
  message: '',
  phone: "",

  notes: "",
 

})



const validateForm = () => {
  let valid = true;
  const newErrors = {
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    message: '',
    notes: "",
  };

  if(!formData.firstName.trim()) {
    newErrors.firstName = "*";
    valid = false;
  }

  if(!formData.middleName.trim()) {
    newErrors.middleName = "*";
    valid = false;
  }
  if(!formData.message.trim()){
    newErrors.message = "*"
    valid =false;
  }
  if(!formData.lastName.trim()) {
    newErrors.lastName = "*";
    valid = false;
  }
  
   
  if(!formData.phone) {
    newErrors.phone = "*";
    valid = false;
  }
  
  
  setErrors(newErrors);
  return valid;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if( validateForm()){
    
    
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      notes: "",
      message: '',
     
    });
    setErrors({
      firstName: "",
      middleName: "",
      lastName: "",
      message: '',
      phone: "",
      notes: "",
  
    });
  }
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
    phone: value
  }));
};
if (!isVisible) return null;

  return (
    <div className='cont-a' id="wrapper" onClick={handleClose}>
      <div className='form-value'>

        <div className="contact-head">
          <span>
            <h1>Contact us</h1>
            <p>We appreciate you reaching out to us, our team will get back to you.</p>
          </span>
          <img
            src={Close}
            alt="close"
            className="booked-close"
            onClick={() => onClose()}
          />
        </div>
        
        


        <hr className='line' />
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="first-form">
              <div className='first-name'>
                <input
                   type='text'
                   className="input-field"
                   name='firstName'
                   placeholder=""
                   value={formData.firstName}
                   onChange={handleChange}
                  required
                  
                />
                <label htmlFor="First Name" className="input-group">First Name</label>
                {formData.firstName && (
                  <span className="clear-message" onClick={() => clearField("firstName")}>x</span>
                )}
                
                  {errors.firstName && <p style={{color: "red" , fontSize:"50px"}}>{errors.firstName}</p>}
                
              </div>
              <div className='first-name'>
                <input
                   type='text'
                   className="input-field"
                   name='middleName'
                   placeholder=""
                   value={formData.middleName}
                   onChange={handleChange}
                  required
                />
                <label htmlFor="middleName" className="input-group">Middle Name</label>
                {formData.middleName && (
                  <span className="clear-message" onClick={() => clearField("middleName")}>x</span>
                )}
                  {errors.middleName && <p style={{color: "red" , fontSize:"50px"}}>{errors.middleName}</p>}
                
              </div>
              <div className='first-name'>
                <input
                  type='text'
                  className="input-field"
                   name='lastName'
                   placeholder=""
                   value={formData.lastName}
                   onChange={handleChange}
                  required
                />
                 
                <label htmlFor="lastName" className="input-group">Last Name</label>
                {formData.lastName && (
                  <span className="clear-message" onClick={() => clearField("lastName")}>x</span>
                )}
                  {errors.lastName && <p style={{color: "red" , fontSize:"50px"}}>{errors.lastName}</p>}
                 
                
              </div>
              
            </div>
                <div className="message-input">
                  <div>
                    <PhoneInput 
                       country={"ng"}
                       placeholder="Phone"
                       value={formData.phone} 
                       enableSearch ={true}
                       disableCountryCode={true}
                       disableDropdown={false}
                       buttonStyle={{backgroundColor: 'transparent', border:'none', }}

                       inputStyle={{width: '568px',height: '56px', border: 'none',borderRadius: "15px",
                        paddingLeft:'40px'
                        , background: '#FAFAFF'}}

                        containerClass="custom-phone-input-container"
                        inputClass="custom-phone-input"
                        onChange={handlePhoneChange}
                    
                    />
                    
                  </div>
                  <div className='first-name'>
                    <input
                      type='text'
                      
                      name= "message"
                      className="message-two"
                      placeholder='Message subject'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    { formData.message && (
                      <span id="clear-all" className="clear-message" onClick={() => clearField("message")}>x</span>
                    )}
                    
                     {errors.message && <p style={{color: "red" , fontSize:"50px"}}>{errors.message}</p>}
                     
                    
                  </div>
                </div>
            <div className="text-area">
              
                <textarea  name="notes" placeholder="Let us know what’s on your mind" value={formData.notes} required onChange={handleChange}></textarea>
            </div>
            <div className="my-down-submit-button">
              {/* <button type="submit">Submit</button> */}
              {/* <img src={Send} alt="" /> */}
              <Button icon={Send} variant="primary" iconAlt="Book">Submit</Button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    
  )
}

export default ContactUs
