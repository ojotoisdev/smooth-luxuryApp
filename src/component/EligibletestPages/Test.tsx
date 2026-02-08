import { useState } from 'react'
import Globe from "../../assets/images/Group (11).png"
import Testicon from "../../assets/icons/Spaceship-up.png"
import Return from "../../assets/icons/return x.png"
import Send from '../../assets/icons/Send.png'
import './Test.css'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate();
  const fields = [
    {name: 'fullName', label: 'Fullname'},
    {name: 'email', label: 'Email address'},
    {name: 'phone', label: 'Mobile number'},
    {name: 'birth', label: 'What is your date of birth'},
    {name: 'country', label: 'country'},
    {name: 'choose', label: 'Preferred Country'},
  ];

   const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birth: '',
    country: '',
    choose: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };




  return (
    <div className="test-form-main-container">
      <div className="test-form-container">
       <div className="world-color">
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
          <button >
            submit eligibility test
            
          </button>
          <img src={Testicon} alt="" />
        </div>
        <img src={Globe} alt="" className="globe" />

       </div>
       <div className="test-form">
        <div className='child-test-form'>
          <span>
            <h1>Free Eligibility Test form</h1>
            <p>How to Apply for Visa on Arrival (African Nationals)</p>
          </span>
          <div>
            <button onClick={() => navigate(-1)}>
              <img src={Return} alt="" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-grid'>
          {fields.map(field => (
            
            <div key={field.name} className='form-attribute'>
              
              <input 
              type="text"
              placeholder={field.label} 
              className='object'
              name={field.name}
              value={formData[field.name as keyof typeof formData]}  
              onChange={handleChange}
              />
              
            </div>
          ))}
          </div>
          <div className="select-radio">
            <div className=''>
              <h3>Are you a citizen of your home country</h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" /> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" /> No
                </label>
              </div>
              
            </div>
            <div className='set-answer'>
              <h3>Do you have a Passport Photo </h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" onChange={handleChange} /> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" onChange={handleChange}/> No
                </label>
              </div>
              
            </div>
          </div>
          <div className="select-radio">
             <div className=''>
              <h3>Do you need an Introduction/ <br />Application Letter * </h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" onChange={handleChange}/> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" onChange={handleChange}/> No
                </label>
              </div>
              
            </div>
             <div className='set-two'>
              <h3>Would you like smooth luxury logistics <br /> to procure your intro letters? </h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" onChange={handleChange}/> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" onChange={handleChange}/> No
                </label>
              </div>
              
            </div>
          </div>
          <div className="select-radio">
            <div className='set-four'>
              <h3>Do you have a Copy of Passport Data <br /> Page  </h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" onChange={handleChange}/> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" onChange={handleChange}/> No
                </label>
              </div>
              
            </div>

            <div className='set-three'>
              <h3>Do you have a Copy of Airline Return <br /> Ticket  </h3>
              <div className='label'>
                <label className='name-label' htmlFor="">
                   <input type="radio" name="answer" value= 'yes' id="" onChange={handleChange}/> Yes
                </label>

                <label className='name-label' htmlFor="">
                  <input type="radio" name="answer" value= 'no' id="" onChange={handleChange}/> No
                </label>
              </div>
              
            </div>
          </div>
          <div className='radio-btn'>
            <button type="submit">Submit eligible test </button>
            <img src={Send} alt="" />
          </div>
        </form>

      </div>
      </div>
      
      
    </div>
  )
}

export default Test
