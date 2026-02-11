import './Location.css'
import Locate from '../../../assets/icons/Location.png'
import Areas from '../../../assets/icons/Location (1).png'
import Service from '../../../assets/icons/Map.png'
const Locations = () => {
  return (
    <div className='Location'>
      <div className="su-area">
      <div className="service-area">
        <img src={Service} alt="" />
        <h1>Service area</h1>
        <p>As we expand to serve you better we are currently active <br /> and operational in the following cities across the world</p>
      </div>
      <div className="service-location">
        <div className='Bounderies'>
          <img src={Locate} alt="" className='img' />
          <button className='A-button'> 
            <span className='span'>
              <h1>Abuja-Nigeria</h1>
              <h2>NNAMDI AZIKIWEINTERNATIONAL AIRPORT</h2>
            </span>
          </button>
        </div >
        <div className='Bounderies'>
          <img src={Areas} alt=""  className='image'/>
          <button className='Areas'>
            <span className='other'>
              <h1>Lagos-Nigeria</h1>
              <h2>NNAMDI AZIKIWEINTERNATIONAL AIRPORT</h2>
            </span>
          </button>
        </div>
        <div  className='Bounderies'>
          <img src={Areas} alt=""  className='image' />
          <button className='Areas'>
            <span className='other'>
              <h1>Abuja-Nigeria</h1>
              <h2>NNAMDI AZIKIWEINTERNATIONAL AIRPORT</h2>
            </span>
          </button>
        </div>
        <div  className='Bounderies'>
          <img src={Areas} alt=""  className='image' />
          <button className='Areas'>
            <span className='other'>
              <h1>Abuja-nigeria</h1>
              <h2>NNAMDI AZIKIWEINTERNATIONAL AIRPORT</h2>
            </span>
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Locations
