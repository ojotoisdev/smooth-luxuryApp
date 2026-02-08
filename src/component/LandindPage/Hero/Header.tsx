import Group from "../../../assets/icons/Group250.png";
import { useState } from 'react';
import vector from '../../../assets/icons/Vector (3).png'
import card from '../../../assets/icons/Card.png'
import forwardArrow from '../../../assets/icons/Forward Arrow.png'
import Frame from '../../../assets/images/Frame 908.png'
import Rectangle from '../../../assets/images/Rectangle 5.png'
import Rect from '../../../assets/images/Rectangle 7.png'
import Rectanglesix from '../../../assets/images/Rectangle 6.png'
import Active from '../../../assets/images/Active.png'
import Comments from '../../../assets/icons/Comment.png'
import Group3 from "../../../assets/icons/Group 3.png"
import Group2 from "../../../assets/icons/Group 2.png"
import {  useNavigate } from "react-router-dom";
import "./Header.css"
import Button from "../../Button/Button";
import { Fragment } from "react/jsx-runtime";
import SmoothcardFormModal from '../../Modals/Subpages/SmoothcardFormModal';


const Header = () => {
  
  const [showModal, setShowModal] = useState(false)
  
  const navigate = useNavigate();
  return (
    <Fragment>
    <div className="main-containers-1">
        <div className="text">
          <img src={Group2} alt="" className="Group2" />
            <h1>We offer you the best personalized travel assistance</h1>
            <p>Smooth Luxury Logistics is a full-service Nigerian travel concierge service <br /> and airport VIP service facilitator. We assist our clients with all your travel <br /> needs to ensure secure first-class business or vacation travel.</p>
            
        </div>
        <div className="book-scesion">
          <div className='icon'>
            
           <Button icon={Group} variant="primary" iconAlt="Book" onClick={() => navigate("/Services")}>Book now</Button>
            
          </div>
          
          <div className='icon'>
            
            <Button icon={vector} variant="outline" iconAlt="Book" onClick={() => navigate("/")}>Apply for visa</Button>
          </div>
        </div>
        <img src={Group3} alt="" className='Group3' />
        <div className='smooth-card'> 
          <button onClick={() => setShowModal(true)}>
            <img src={card} alt="" className='card' />
            introducing!!! <br /> <strong>The smooth card</strong>
           
            <img src={forwardArrow} alt="" className='forward' />
          </button>
        </div>
        <div className="menu">
          <img src={Frame} alt="" className='frame butt' />
          <div className="image-two">
            <img src={Rectangle} alt="" className='active' />
            <img src={Rect} alt=""  className='butt'/>
          </div>
          <div className="image-three">
            <button className="message">
              <img src={Comments} alt="" />
            </button>
            <img src={Rectanglesix} alt=""  className='rectangle butt'/>
            <img src={Active} alt="" className='active' />
          </div>
        </div>
      
    </div>
    <SmoothcardFormModal isVisible={showModal} onClose={() => setShowModal(false) }/>
      </Fragment>
  )
}

export default Header
