/**
 * Utility functions for device detection and performance optimization
 */

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  const width = window.innerWidth;
  
  // Check for mobile user agents
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUA = mobileRegex.test(userAgent);
  
  // Check for small screen size
  const isSmallScreen = width < 768;
  
  // Check for touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return isMobileUA || (isSmallScreen && hasTouch);
};

export const isLowPerformanceDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const connection = (navigator as any).connection;
  const hardwareConcurrency = navigator.hardwareConcurrency || 2;
  
  // Check for slow connection
  const isSlowConnection = connection && 
    (connection.effectiveType === 'slow-2g' || 
     connection.effectiveType === '2g' ||
     connection.effectiveType === '3g');
  
  // Check for low-end device (less than 4 CPU cores)
  const isLowEndDevice = hardwareConcurrency <= 2;
  
  // Check for limited memory (if available)
  const deviceMemory = (navigator as any).deviceMemory;
  const hasLimitedMemory = deviceMemory && deviceMemory <= 2;
  
  return isSlowConnection || isLowEndDevice || hasLimitedMemory;
};

export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

export const getOptimalImageQuality = (): 'low' | 'medium' | 'high' => {
  if (isMobileDevice() || isLowPerformanceDevice()) {
    return 'low';
  }
  
  const connection = (navigator as any).connection;
  if (connection) {
    if (connection.effectiveType === '4g') return 'high';
    if (connection.effectiveType === '3g') return 'medium';
    return 'low';
  }
  
  return 'medium';
};