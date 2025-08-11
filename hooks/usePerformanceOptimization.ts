'use client';

import { useState, useEffect } from 'react';

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
    const checkMobile = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      setIsMobile(
        width < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      );
    };

    const checkPerformance = () => {
      // Check device performance indicators
      const connection = (navigator as any).connection;
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      
      const isSlowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      const isLowEndDevice = hardwareConcurrency <= 2;
      
      setIsLowPerformanceDevice(isSlowConnection || isLowEndDevice);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    checkMobile();
    checkPerformance();

    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  const shouldReduceAnimations = prefersReducedMotion || (isMobile && isLowPerformanceDevice);

  const getOptimizedMotionProps = (props: any) => {
    if (shouldReduceAnimations) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 },
        whileHover: {},
        whileTap: {},
      };
    }

    // Add performance optimizations for mobile
    if (isMobile) {
      return {
        ...props,
        transition: {
          ...props.transition,
          type: 'tween', // Use tween instead of spring for better mobile performance
          ease: 'easeOut',
        },
        style: {
          ...props.style,
          willChange: 'transform',
          transform: 'translateZ(0)', // Force GPU acceleration
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