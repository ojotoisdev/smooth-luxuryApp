import type { ReactNode } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Test from '../../assets/icons/Test.png'
import Infor from '../../assets/icons/Info.png'
import Forward from '../../assets/icons/Next arrow.png'
import Backward from '../../assets/icons/RedBack Arrow.png'
import './FlowLayout.css';

type FlowLayoutProps = {
  children: ReactNode;
};

const flows = {
  travelers: [
    { path: '/travelers', label: 'Step 1' },
    { path: '/travelers/step2', label: 'Step 2' },
  ],
  nationals: [
    { path: '/nationals', label: 'Step 1' },
    { path: '/nationals/step2', label: 'Step 2' },
  ],
};

export default function FlowLayout({ children }: FlowLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isTravelers = location.pathname.startsWith('/travelers');
  const isNationals = location.pathname.startsWith('/nationals');

  const currentFlow = isTravelers
    ? flows.travelers
    : isNationals
    ? flows.nationals
    : [];

  const currentIndex = currentFlow.findIndex((step) => step.path === location.pathname);

  const handleNext = () => {
    if (isTravelers && currentIndex === currentFlow.length - 1) {
      navigate('/nationals'); // Move to National Step 1
    } else if (currentIndex < currentFlow.length - 1) {
      navigate(currentFlow[currentIndex + 1].path);
    }
  };

  const handlePrev = () => {
    if (isNationals && currentIndex === 0) {
      navigate('/travelers/step2'); // Back to Travelers Step 2
    } else if (currentIndex > 0) {
      navigate(currentFlow[currentIndex - 1].path);
    }
  };

  const renderIndicator = () => {
    const stepLabel = `${currentIndex + 1}/${currentFlow.length}`;
    if (isTravelers && currentIndex === 0) {
      return stepLabel; // "1/2"
    }
    if (isTravelers && currentIndex === 1) {
      return `${stepLabel} Next: African National`;
    }
    if (isNationals && currentIndex === 0) {
      return ` Previous: African national ${stepLabel}`;
    }
    return stepLabel;
  };

  return (
    <div >
      
      <div className="content">{children}</div>
      <div className="flow-layout">
      <div className='img-infor'>
        <img src={Infor} alt="" />
        <img onClick={() => navigate('/Test')} src={Test} alt="" />
      </div>
      <div className="step-footer">
        <button onClick={handlePrev} disabled={isTravelers && currentIndex === 0}>
          <img src={Backward} alt="" />
        </button>

        
        <span className="step-indicator">{renderIndicator()}</span>

        <div className="next-section">
          
          <button
            onClick={handleNext}
            disabled={isNationals && currentIndex === currentFlow.length - 1}
          >
            {isTravelers && currentIndex === currentFlow.length - 1
              ? <img src={Forward} alt="" /> 
              : <img src={Forward} alt="" /> }
              
          </button>
          
        </div>
      </div>
      </div>
    </div>
  );
}
