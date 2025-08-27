import React, { useEffect } from 'react';
import { useLocation } from '@umijs/max';  // Using Umi's version of useLocation

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top whenever the location changes
  }, [location]);

  return null;  // This component doesn't render anything
};

export default ScrollToTop;
