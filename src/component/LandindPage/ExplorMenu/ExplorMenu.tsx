import './ExplorMenu.css'
import Spaceship from '../../../assets/icons/Spaceship.png';
import Check from '../../../assets/icons/Check.png';
import Group from '../../../assets/icons/Group250.png';

import Car from '../../../assets/icons/Icon.png'
import Greet from '../../../assets/icons/Icon (1).png'
import Ticket from '../../../assets/icons/Icon (2).png'
import Booking from '../../../assets/icons/Icon (3).png'
import Button from '../../Button/Button';
import Aeroplane from '../../../assets/images/Rectangle 563.png'
import { Fragment } from 'react/jsx-runtime';
import SmoothcardFormModal from '../../Modals/Subpages/SmoothcardFormModal';
import { useState } from 'react';


const ExplorMenu = ( ) => {
  
const [showModal, setShowModal] = useState(false)
    const services = [
    "Armed and unarmed security guards",
    "Mobile patrol services",
    "Event security management",
    "Surveillance and investigation services",
    "Risk assessment and analysis",
    "Armed Escort Services",
    "Security Awareness training for Clients"
  ];
  return (
    <Fragment>
    <div className="container-2">
        <h1 className='sub-head'>What we offer</h1>
        <p className='child'>Smooth Luxury Logistics utilizes our proprietary systems to provide information and services to people desiring to visit <br /> Nigeria, whether foreigners or Nigerians in Diaspora. <br />We operate luxurious vehicles that take you smoothly to your destination anywhere in the country, get you the best rates <br /> at our network of hotels, and even help you book Domestic Flights throughout the country without putting pressure on your <br /> budge, Feel free to allow us to manage your next trip to Nigeria!</p>
      <div className='offer-menue'>
        <div className="menu-items ">
            <div className="features">
                <img src={Car} alt="" className='imgo' />
                <h1>IMMIGRATION SUPPORT SERVICES</h1>
                <p>Our Visa On Arrival submission service is <br /> the culmination of experience, our unique expertise, and <br /> the relationships we have built throughout Nigeria. <br /> Our Visa On Arrival couriers do the "leg-work" for you, <br /> to insure your paperwork is processed efficiently <br /> and potential issues with your travel plans are identified <br /> immediately. The Service guides you through the <br /> hurdles you will encounter along the way.</p>
            </div>
            <div id='Greet' className="features">
                <img src={Greet} alt="" className='imgo' />
                <h1>MEET & GREET</h1>
                <p>A Smooth Luxury Logistics team member will meet you as <br /> you arrive at the Airport and escort you through the <br /> process, from disembarking the plan until processing <br /> through Customs. We offer the assurance of efficient,<br /> lawful movement throughout the entry stations, with the <br /> proper paperwork already secured for you to enter <br /> Nigeria in the 'Smoothest' possible way!</p>
            </div>
        </div>
        <div  className="menu-items imgo-1">
            <div className="Booking">
                <img src={Ticket} alt="" className='imgo' />
                <h1>TICKETING</h1>
                <p>Let Smooth Luxury Logistics take care of navigating your <br /> travel arrangements. With new travel restrictions, Visa <br /> Applications, and other paperwork challenges, getting <br /> your travel plans set is a challenge. We work with you to <br /> develop your itinerary - flight times, <br /> arrival times, departure times, seating arrangements, and more. Let <br /> Smooth Luxury Logistics be your Agent for travel <br /> throughout Nigeria!</p>
            </div>
            <div id='' className="features ">
                <img src={Booking} alt="" className='imgo' />
                <h1>HOTEL BOOKING</h1>
                <p>We know Lagos! Whether traveling to Nigeria on <br /> business, for vacation or coming home for the holidays, <br /> our Concierge Service will book your Hotel room in the <br /> heart of your travel plans. Be centrally located for your <br /> meetings and travel destinations, or enjoy the charm of <br /> the local neighborhood restaurants. We know Lagos, and <br /> you'll love the convenience you'll experience when our <br /> team does the work for you!</p>
            </div>
        </div>
        <div id='ticket' className="menu-items  ">
            <div className="Provision">
                <img src={Ticket} alt="" className='imgo' />
                <h1>PROVISION OF LUXURIOUS SUVS</h1>
                <p>We operate luxurious vehicles, primarily the Lexus <br /> GX460, to take you 'Smoothly' to your destination- <br /> anywhere in the country without putting pressure on your <br /> budget. Or, we'll handle your rental reservations so you <br /> don't have to worry and can travel freely to your <br /> destination of choice.</p>
            </div>
            <div>
              <img src={Aeroplane} alt=""  className='Aeroplane'/>
            </div>
            
        </div>
      </div>
        
    <div className="information">
      <div className="div-contents">

        {/* Left Section */}
        <div className="service-categories">
          <img src={Spaceship} alt="Spaceship" className="Spaceship" />
          <h1>Why choose us</h1>
          <p className='p-text'>
            Travel With Smooth Luxury Logistics, it is stressless, <br />
            fast and an excellent experience with us.
          </p>

          {services.map((item, index) => (
            <div className="service-item" key={index}>
              <img src={Check} alt="Check icon" />
              <p>{item}</p>
            </div>
          ))}

          <div className='Apply-container'>
            <Button icon={Group} variant="primary" onClick={() => setShowModal(true)}/>
            
          </div>
          
        </div>

        {/* Right Section */}
        <div className="text-icons">
          <div>
            <p>
              Smooth Luxury Logistics will provide top-notch armed and <br />
              unarmed security services across several industries, including <br />
              corporate, government, retail, and private individuals. Through <br />
              comprehensive evaluation and strategization, we aim to offer <br />
              customized protection plans to meet every client's specific <br />
              needs and budget.
            </p>
          </div>
          <div>
            <p>
              Our operational tactics will rely on state-of-the-art <br />
              technology, real-time monitoring, and risk assessment tools, <br />
              enabling us to identify and mitigate potential threats before <br />
              they even happen. We understand that each client's security <br />
              needs are unique, and we will work closely with them to <br />
              develop a comprehensive security plan that reflects their <br />
              individual requirements and concerns.
            </p>
          </div>
          <div>
            <p>
              Our team comprises of experienced security professionals with <br />
              extensive backgrounds in law enforcement, immigration, <br />
              military, and private security sectors. We are committed to <br />
              providing responsive, proactive, and reliable services to our <br />
              clients, ensuring the highest level of safety and protection.
            </p>
          </div>
        </div>

      </div>
    </div>
        
    </div>
    <SmoothcardFormModal isVisible={showModal} onClose={() => setShowModal(false) }/>
    </Fragment>
  )
}

export default ExplorMenu
