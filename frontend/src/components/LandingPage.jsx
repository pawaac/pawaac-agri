import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SpecificationsSection from './SpecificationsSection';
import ImpactSection from './ImpactSection';
import AutonomySection from './AutonomySection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SpecificationsSection />
        <ImpactSection />
        <AutonomySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;