import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Country, State } from "country-state-city";
import type { ICountry, IState } from "country-state-city";
import Back from '../../../assets/icons/check-back.png'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css"
import './CheckOut.css'
import Information from "../../Shared/Footer/Information";








/* ─────────────── Types and Constants ─────────────── */
type BookingCard = {
  price: string;
  time: string;
  category: string;
  title: string;
};

const DEFAULT_TITLES: Record<string, string> = {
  Transportation: "Luxury SUV Pickup (within 10 km)",
  "VISA on arrival": "Individual",
  "Airport facilitation": "Departure – Individual",
  "Hotel booking": "Hotel Reservation – Individual",
  "Travel planning": "Custom itinerary",
};

const STORAGE = {
  bookings: "bookings",
  serviceList: "serviceList",
};

/* ─────────────── Helper Function ─────────────── */
const buildCards = (
  serviceList: string[],
  bookings: number[]
): BookingCard[] => {
  const cards: BookingCard[] = [];

  serviceList.forEach((cat, i) => {
    const qty = bookings[i] ?? 0;
    for (let k = 0; k < qty; k++) {
      cards.push({
        price: "$ 75",
        time: "1hr 20min",
        category: cat,
        title: DEFAULT_TITLES[cat] ?? "Service details",
      });
    }
  });

  return cards;
};

/* ─────────────── Component ─────────────── */
const CheckOut = () => {
    const [filled, setFilled] = useState(false);
    
  const [formData, setFormData] =useState({
  first: "",
  middle: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  region: "",
  country: "",
  state: "",
  date: "",
  notes: "",
  checked: "",
});

const [checked, setChecked] = useState(false);
const handleCheckedboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(e.target.checked);
  
}
 
const clearField = (fieldName: string) => {
  setFormData(prev => ({
    ...prev,
    [fieldName]: "",

  }));
};



const countries: ICountry[] = useMemo(() => Country.getAllCountries(), []);
  const states: IState[] = useMemo(
    () => (formData.country ? State.getStatesOfCountry(formData.country) : []),
    [formData.country]
  );


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const {name, value, } = e.target;
  
  setFormData((prevData) =>({
    ...prevData,
    [name]: value,
    ...(name === "country" && { state: ""}),
  }));
};

const handlePhoneChange = (value: string) => {
  setFormData((prev) => ({
    ...prev,
    phone: value
  }));
};
const [errors, setErrors] = useState({
  first: "",
  middle: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  region: "",
  country: "",
  state: "",
  date: "",
  notes: "",
  checked: "",

})
const [submitted, setSubmitted] = useState(false);
const [submittedName, setSubmittedName] =useState("");

const validateForm = () => {
  let valid = true;
  const newErrors = {
    first: "",
  middle: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  region: "",
  country: "",
  state: "",
  date: "",
  notes: "",
  checked: "",

  };
  if(!formData.first.trim()) {
    newErrors.first = "*";
    valid = false;
  }
  if(!formData.middle.trim()) {
    newErrors.middle = "*";
    valid = false;
  }
  if(!formData.last.trim()) {
    newErrors.last = "*";
    valid = false;
  }
  if(!formData.email.trim()) {
    newErrors.email = "*";
    valid = false;
  }else if (!/\S+@\S+\.\S+/.test(formData.email)){
    newErrors.email = '*';
    valid =false;
  }
   if(!formData.address.trim()) {
    newErrors.address = "*";
    valid = false;
  }
  if(!formData.phone) {
    newErrors.phone = "*";
    valid = false;
  }
  if(!formData.country) {
    newErrors.country = "*";
    valid = false;
  }
  if(!formData.state.trim()) {
    newErrors.state = "*";
    valid = false;
  }
  
  setErrors(newErrors);
  return valid;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if( validateForm()){
    setSubmittedName(formData.first);
    setSubmitted(true);
    setChecked(true);
    setFormData({
      first: "",
     middle: "",
      last: "",
     email: "",
     phone: "",
     address: "",
     region: "",
     country: "",
     state: "",
     date: "",
     notes: "",
     checked: "",
    });
    setErrors({
      first: "",
  middle: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  region: "",
  country: "",
  state: "",
  date: "",
  notes: "",
  checked: "",
    });
  }
};




  const { state } = useLocation();
  const navigate = useNavigate();

  const transientCards: BookingCard[] | undefined = state?.cards;

  const [cards, setCards] = useState<BookingCard[]>([]);

  useEffect(() => {
    if (transientCards && transientCards.length > 0) {
      setCards(transientCards);
    } else {
      const serviceList: string[] = JSON.parse(
        localStorage.getItem(STORAGE.serviceList) || "[]"
      );
      const bookings: number[] = JSON.parse(
        localStorage.getItem(STORAGE.bookings) || "[]"
      );
      const rebuilt = buildCards(serviceList, bookings);
      setCards(rebuilt);
    }
  }, [transientCards]);

  // 🔢 Total calculations
  const totalServices = cards.length;
  const totalAmount = cards.reduce((sum, card) => {
    const price = parseFloat(card.price.replace(/[^\d.-]/g, "")) || 0;
    return sum + price;
  }, 0);


const toMinutes = (t: string): number => {
    const hr = parseInt((t.match(/(\d+)\s*hr/i) || [])[1] || "0", 10);
    const min = parseInt((t.match(/(\d+)\s*min/i) || [])[1] || "0", 10);
    return hr * 60 + min;
  };

  const totalMinutes = cards.reduce((sum, c) => sum + toMinutes(c.time), 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const totalTimeStr =
    hours > 0
      ? `${hours} hr${hours !== 1 ? "s" : ""}${minutes ? ` ${minutes} min` : ""}`
      : `${minutes} min`;




  return (
    <div >
      <div className="checkout-root">
        <button onClick={() => navigate(-1)} className="back-button">
          { <img src={Back} alt="Pay icon" />}

        </button>
        <header className="checkout">
          <h1>Checkout booked services</h1>
          <p>
            Complete your checkout process by filling out the details below and
            proceed to make payment
          </p>
        </header>

        <div className="book-infor">
          <div className="child-infor">
            <h1>Service booking summary</h1>
            <p>
              All selected services are listed below along with the billing
              summary
            </p>
          </div>

          <hr className="my-hr" />
          <h3>Service summary</h3>

          <div className="list-summary">
            {cards.length === 0 ? (
              <p>No services booked yet.</p>
            ) : (
              <ul className="checkout-list">
                {cards.map((c: BookingCard, i: number) => (
                  <li key={`${c.category}-${i}`} className="checkout-item">
                    <div className="item-info">
                      <hr className="hr" />
                      <strong>{c.category}</strong>
                      <div className="summary">
                        <span className="span2">{c.title} &middot;</span>
                        <span className="span3">
                          <h1 className="price">{c.price}</h1>
                          <p className="small">{c.time}</p>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* 💰 Billing Summary */}
          {cards.length > 0 && (
            <>
              <hr className="my-line" />
              <div className="billing-summary">

                <div className="sum-total">
                  <p className="strong">
                    <strong>{totalServices}</strong> booked service
                  </p>
                  <p className="span2">
                    <strong>Total pricing & time</strong> 
                  </p>
                </div>
                
                <div>
                  <span className="sum">
                    
                    <p className="price">
                      ${totalAmount.toFixed(2)}
                    </p>
                    <p className="small">{totalTimeStr}</p>

                  </span>
                  
                </div>
              </div>
            </>
          )}

          </div>
          <h1 className="Form-head">Checkout information</h1>
          <div className="form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="child-Form">
                <div className="form-input">
                <input
                type="text"
                name="first"
                value={formData.first}
                placeholder=""
                className="input-field"
                required
                onChange={handleChange}
                />
                <label htmlFor="" className="input-group">First name</label>
                {formData.first && (
                  <span className="clear-message" onClick={() => clearField("first")}>x</span>
                )}
                {errors.first && <p style={{color: "red" , fontSize:"50px"}}>{errors.first}</p>}
                
                </div>


                <div className="form-input">
                <input
                type="text"
                name="middle"
                placeholder=""
                value={formData.middle}
                required
                 className="input-field"
                onChange={handleChange}
                />
                <label htmlFor="" className="input-group">Middle name</label>
                {formData.middle && (
                  <span className="clear-message" onClick={() => clearField("middle")}>x</span>
                )}
                  {errors.middle && <p style={{color: "red", fontSize:"50px"}}>{errors.middle}</p>}
                
                </div>

                <div className="form-input">
                <input
                type="text"
                name="last"
                value={formData.last}
                placeholder=""
                required
                 className="input-field"
                onChange={handleChange}
                />
                <label htmlFor="" className="input-group">Last name</label>
                {formData.last && (
                  <span className="clear-message" onClick={() => clearField("last")}>x</span>
                )}
                  {errors.last && <p style={{color: "red" , fontSize:"50px"}}>{errors.last}</p>}
                
                </div>
                    <div className="">
                
                      <PhoneInput 
                       country={"ng"}
                       placeholder="Phone"
                       value={formData.phone} 
                       enableSearch ={true}
                       disableCountryCode={true}
                       disableDropdown={false}
                       buttonStyle={{backgroundColor: 'transparent', border:'none',}}

                       inputStyle={{width: '100%',height: '56px', border: 'none',borderRadius: "15px",
                        paddingLeft:'40px'
                        , background: ' #f5f5f8ff'}}

                        containerClass="custom-phone-input-container"
                        inputClass="custom-phone-input"
                        
                       onChange={handlePhoneChange} 

                      />
                       {errors.phone && <p style={{color: "red", fontSize:"50px"}}>{errors.phone}</p>}
                       <span className="clear-input" onClick={() => clearField("phone")}>x</span>
                    </div>

                    <div className="form-input">
                      <input type="email"
                       name="email"
                       placeholder=""
                        
                       value={formData.email} 
                       required 
                       onChange={handleChange} 
                        className="input-field"
                       />
                       <label htmlFor="" className="input-group">Email address</label>
                       {formData.email && (
                         <span className="clear-message" onClick={() => clearField("email")}>x</span>
                        )}
                         {errors.email && <p style={{color: "red", fontSize:"50px"}}>{errors.email}</p>}
                       
                    </div>

                    <div className="form-input">
                      <input type="text"
                         name="address"
                         placeholder=""
                       
                         value={formData.address}
                         required
                         onChange={handleChange}
                          className="input-field"
                         />
                         <label htmlFor="" className="input-group">Address</label>
                         {formData.address && (
                           <span className="clear-message" onClick={() => clearField("address")}>x</span>
                          )}
                          {errors.address && <p style={{color: "red", fontSize:"50px"}}>{errors.address}</p>}
                         
                    </div>


                      <input type="text"
                       name="region"
                       placeholder="Region" 
                       value={formData.region} 
                       required 
                       onChange={handleChange} 
                       className="input-field"
                       />
                       
                      {/* country + state dropdowns */}
              <select
              className="state"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >+
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </option>
                ))}
              </select>


              <select
                      className="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                disabled={!formData.country}
              >
                <option value="">
                  {formData.country
                    ? " State "
                    : "Pick a country first"}
                </option>
                {states.map((s) => (
                  <option key={s.isoCode} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
                
                      
              </div>
              <div className="second-form">
                <div className="date-input-wrapper">
                  <input className="state" type="date" name="departure"
                  value={formData.phone}
                   required
                  
                  onChange={(e) => setFilled(e.target.value !== "")}
                   />
                  {!filled && <span className="date-placeholder">Depature date</span>}

                </div>
                
                <textarea id="state" name="notes" placeholder="Notes" value={formData.notes} required onChange={handleChange}></textarea>
              </div>
              <div className="checkbox">
                <div className="box">
                  <input 

                  type="checkbox"
                  name= "terms"
                  checked= {checked}
                  onChange={handleCheckedboxChange}

                  />
                  {errors && <p style={{color: "red"}}>{errors.checked}</p>}
                </div>
                <p>Cancellation due to your ineligibility entitles you to a 75% refund of Smooth LL Fees, but not the fees of the Nigerian <br /> Government. All Government fees are fully realized at the moment of application. Transportation Cancelations are <br /> nonrefundable for times booked and canceled within 24 hr of scheduled pickup - No Exceptions. Daily and 3+hours bookings <br /> must speak to management before cancelation can be arranged.</p>
              </div>
              <div className="pay-button">
                <button type="submit">checkout & pay</button>
                <img src="" alt="" />
              </div>
            </form>
            {submitted && <h2 style={{color: "green"}}>Hello {submittedName} ! your details has been recorded</h2>}
          </div>
          
        </div>
      </div>
      <Information/>
    </div>
  );
};

export default CheckOut;
