
import { Fragment } from 'react/jsx-runtime'
 import Group from '../../../assets/icons/Group250.png'
import vector from '../../../assets/icons/Vector (3).png'
import SmoothcardFormModal from '../../Modals/Subpages/SmoothcardFormModal'
import './SmoothCard.css'

import { useState } from 'react'
import Button from '../../Button/Button'
const SmoothCard = () => {
 
  const [ showModal, setShowModal] = useState(false)

  return (
    <Fragment>
    <div className="Partner-container">
      
      <div className="Trip">
        <div className="curve"></div>
        <h1>A Smooth Journey on your next trip!</h1>
        <p>Sign up to get special offers, discounts and travel advisories!</p>
        <div className="button">
            <div>
                <Button icon={Group} variant="primary" onClick={() => setShowModal(true)}/>
            </div>
            <div>
                <Button icon={vector} variant="secondary" iconAlt="Book">Learn more</Button>
            </div>
        </div>
        <div className="down-curve"></div>
      </div>

      
    </div>
     <SmoothcardFormModal isVisible={showModal} onClose={() => setShowModal(false) }/>
    </Fragment>
   
  )
}

export default SmoothCard
