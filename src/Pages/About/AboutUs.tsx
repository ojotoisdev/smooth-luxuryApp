
import HeadMenu from "../../component/AboutPages/HeadMenu"
import Teams from "../../component/AboutPages/Teams"
import Information from "../../component/Shared/Footer/Information"

import SmoothCard from "../../component/Shared/JournyWithUs/SmoothCard"
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div>
      <HeadMenu/>
      <Teams/>
      <SmoothCard/>
      <Information/>
    </div>
  )
}

export default AboutUs
