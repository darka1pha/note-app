'use client';
import { useEffect } from 'react';

const ServiceWorker = ({ children }: { children: React.ReactNode }) => {
  // Service Worker Registration
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);
  return <>{children}</>;
};

export default ServiceWorker;
