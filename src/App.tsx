import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AIChatbot } from './components/AIChatbot';

// Dedicated Sub-pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ChaptersPage } from './pages/ChaptersPage';
import { FacultyPage } from './pages/FacultyPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { JoinPage } from './pages/JoinPage';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleJoinClick = () => {
    // Open official IEEE join portal
    window.open('https://www.ieee.org/membership/join/index.html', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07111E] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#002855] selection:text-white transition-colors duration-300 flex flex-col justify-between">
      <ScrollToTop />

      {/* Top Sticky Navigation Bar */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Multi-Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onJoinClick={handleJoinClick} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* Support both /societies and /chapters */}
          <Route path="/societies" element={<ChaptersPage />} />
          <Route path="/chapters" element={<ChaptersPage />} />
          {/* Support both /faculty and /team */}
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/team" element={<FacultyPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/join" element={<JoinPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage onJoinClick={handleJoinClick} />} />
        </Routes>
      </main>

      {/* Real-time AI Assistant / Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <Footer />

      {/* Global Search Modal (Ctrl + K) */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
