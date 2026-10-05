import React from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { AboutSection } from '../components/AboutSection';
import { OfficeBearersBanner } from '../components/OfficeBearersBanner';
import { JoinSection } from '../components/JoinSection';
import { ScrollPop } from '../components/ScrollPop';

interface HomePageProps {
  onJoinClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onJoinClick }) => {
  return (
    <div className="space-y-4">
      {/* 1. Hero with Photorealistic 3D Earth Globe & Orbiting Worldwide Branches */}
      <Hero onJoinClick={onJoinClick} />

      {/* 2. Verified Branch Statistics Row */}
      <ScrollPop direction="up">
        <Statistics />
      </ScrollPop>

      {/* 3. About Our Student Branch (with Official Team Photo & Info Cards) */}
      <ScrollPop direction="up">
        <AboutSection />
      </ScrollPop>

      {/* 4. Official 2026 Office Bearers & Executive Committee Banner */}
      <ScrollPop direction="up">
        <OfficeBearersBanner />
      </ScrollPop>

      {/* 5. Join IEEE Official CTA & Contact Counselor */}
      <ScrollPop direction="up">
        <JoinSection onJoinClick={onJoinClick} />
      </ScrollPop>
    </div>
  );
};

