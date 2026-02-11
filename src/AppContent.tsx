// src/AppContent.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import CheckOut from './component/Modals/Subpages/CheckOut';
import Home from './Pages/Home/Home';
import Faqs from './Pages/FAQs/Faqs';
import Services from './Pages/Service/Services';
import EligibleTest from './Pages/EligibleTest/EligibleTest';
import AboutUs from './Pages/About/AboutUs';
import BookedService from './Pages/BookedService/BookedService';
import Content from './component/ServicePages/Content';
import Test from './component/EligibletestPages/Test';
import Nationals from './component/EligibletestPages/Nationals';
import NationalsStep2 from './component/EligibletestPages/NationalsStep2';
import Travelers from './component/EligibletestPages/Travelers';
import TravelersStep2 from './component/EligibletestPages/TravelersStep2';

import SmoothCardPage from './component/Modals/Subpages/SmoothCardPage';
import ContactUs from './component/Modals/ContactUs/ContactUs';
import LayoutWrapper from './Layout/LayoutWrapper';
import { useState } from 'react';
import "./App.css"
const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = [
    '/smoothcard', 
    '/contactus', 
    '/test',
    '/travelers', 
    '/travelers/step2', 
    '/nationals', 
    '/nationals/step2'
  ];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname.toLowerCase());

  
  const [isContactVisible, setContactVisible] = useState(true);

  return (
    <div className="app">
      <div className='app-container'>
        {!shouldHideNavbar && <LayoutWrapper />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/eligible-test" element={<EligibleTest />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/bookedservice" element={<BookedService />} />
        <Route path="/content" element={<Content />} />
        <Route path="/test" element={<Test />} />
        <Route path="/nationals" element={<Nationals />} />
        <Route path="/nationals/step2" element={<NationalsStep2 />} />
        <Route path="/travelers" element={<Travelers />} />
        <Route path="/travelers/step2" element={<TravelersStep2 />} />

       
        <Route path="/smoothcard" element={<SmoothCardPage />} />

       
        <Route 
          path="/contactus" 
          element={
            <ContactUs
              isVisible={isContactVisible}
              onClose={() => setContactVisible(false)}
            />
          } 
        />
      </Routes>
    </div>
  );
};

export default AppContent;
