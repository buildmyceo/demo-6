import React, { useState, useEffect } from 'react';
import { Header, Footer, StickyActions } from './components/Layout';
import { Home } from './pages/Home';
import { VideoConsultation } from './pages/VideoConsultation';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {currentPath === '#video-consultation' ? <VideoConsultation /> : <Home />}
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
