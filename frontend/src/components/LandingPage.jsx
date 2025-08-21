import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SpecificationsSection from './SpecificationsSection';
import ImpactSection from './ImpactSection';
import VisionModelSection from './VisionModelSection';
import AutonomySection from './AutonomySection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SpecificationsSection />
        <ImpactSection />
        <VisionModelSection />
        <AutonomySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;