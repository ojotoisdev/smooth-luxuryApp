

import Locations from '../../component/LandindPage/Area/Location'
import ExplorMenu from '../../component/LandindPage/ExplorMenu/ExplorMenu'
import Header from '../../component/LandindPage/Hero/Header'
import LogoPartner from '../../component/LandindPage/OurPartner/LogoPartner'
import Information from '../../component/Shared/Footer/Information'




import SmoothCard from '../../component/Shared/JournyWithUs/SmoothCard'




const Home = () => {
  return (
    <div>
      <Header/>
      <ExplorMenu/>
      
      <Locations/>
      <LogoPartner/>
      <SmoothCard/>
      <Information/>
    </div>
  )
}

export default Home
