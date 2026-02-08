import { useState } from "react";
import SmoothcardFormModal from "./SmoothcardFormModal";

const SmoothCardPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SmoothcardFormModal
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
    />
  );
};

export default SmoothCardPage;
