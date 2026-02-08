
import './HeadMenu.css'
import Group3 from "../../assets/icons/Group 3.png"
import Frame from "../../assets/images/Images-frame.png"
import Active from "../../assets/images/Active.png"
import Images from "../../assets/images/Images (2).png"
import Group2 from "../../assets/icons/Group 2.png"


const HeadMenu = () => {
  return (
    <div className="Van">
      <div className="vision">
        <div className='header'>
          <h1>Our mission & vision statement</h1>
          <p>It is service at the core of all <br /> operations and services</p>
        </div>
        <div className='text-menu'>
          <img src={Group2} alt="" className='' />
          <p>Smooth luxury is an indigenous travel and logistics <br /> company existing to bring the best inter-state and intra- <br />state luxury travel service to Nigerians at the most <br /> competitive price, delivering our services in style, safety <br /> and optimum luxury. <br /> It is our mission to provide the best alternative to air travels <br /> by parading state-of-the art operational vehicles, having safety <br /> and comfort as our core vlaues</p>
        </div>
      </div>
      <img src={Group3} alt="" className='Group3' />
      <div className='Experts'>
        
        <div className='content-sub'>
        <h1>The Local Experts in V.I.P Travel Assistance</h1>
        <div className="VIP-IMAGE">
          <img src={Frame} alt="" className='frame' />
          <div className='sub-images'>
            <img src={Active} alt="" />
            <img src={Images} alt="" />
          </div>
        </div>
        <p>Smooth Luxury Logistics is a reputable, reliable, and competent security company that offers armed and <br /> unarmed security services to clients across different industries. We operate on the principles of responsiveness, <br /> proactiveness, and reliability to guarantee the highest level of protection and safety. <br /> We aim to be the leading security company in the industry by providing innovative and effective solutions to <br /> our clients. Smooth Luxury Logistics is a registered security and logistics company with full compliance of the <br /> decree No. 33 of 1985 for private security operations in Nigeria. Smooth Luxury Logistics began the business of <br /> providing competent and efficient security services in Lagos, Nigeria in the year 2021. We are proud to state <br /> that we are still maintaining this service and have expanded to cover all other locations in the southwest region <br /> of Nigeria. Our clientele has expanded to cover other multinationals, national and institutional organizations as <br /> the accompanying clients’ lists would attest. To effectively manage our workforce and optimize our efficiency to <br /> our clients, we have a dynamic administration and operational management structure set up to successfully <br /> meet the challenges of the security industry in our target market.</p>
        </div>
      </div>
    </div>
  )
}

export default HeadMenu