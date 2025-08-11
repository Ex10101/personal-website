'use client';

import { useState, useEffect } from 'react';
import { 
  isMobileDevice, 
  isLowPerformanceDevice as checkLowPerformanceDevice, 
  shouldReduceMotion 
} from '../utils/deviceDetection';

interface PerformanceOptimization {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  isLowPerformanceDevice: boolean;
  shouldReduceAnimations: boolean;
  getOptimizedMotionProps: (props: any) => any;
}

export const usePerformanceOptimization = (): PerformanceOptimization => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

  useEffect(() => {
    const updateMobileStatus = () => {
      setIsMobile(isMobileDevice());
    };

    const updatePerformanceStatus = () => {
      setIsLowPerformanceDevice(checkLowPerformanceDevice());
    };

    const updateMotionPreference = () => {
      setPrefersReducedMotion(shouldReduceMotion());
    };

    // Initial checks
    updateMobileStatus();
    updatePerformanceStatus();
    updateMotionPreference();

    // Event listeners
    window.addEventListener('resize', updateMobileStatus);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      window.removeEventListener('resize', updateMobileStatus);
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  const shouldReduceAnimations = prefersReducedMotion || isMobile;

  const getOptimizedMotionProps = (props: any) => {
    if (shouldReduceAnimations) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 },
        whileHover: {},
        whileTap: {},
        style: {
          ...props.style,
          willChange: 'auto', // Disable will-change to reduce GPU usage
        },
      };
    }

    return props;
  };

  return {
    isMobile,
    prefersReducedMotion,
    isLowPerformanceDevice,
    shouldReduceAnimations,
    getOptimizedMotionProps,
  };
};