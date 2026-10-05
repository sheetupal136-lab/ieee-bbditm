import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ExternalLink,
  Mail
} from 'lucide-react';
import { ContactModal } from './ContactModal';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { toggleTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Societies', href: '/societies' },
    { name: 'Team', href: '/faculty' },
    { name: 'Awards', href: '/achievements' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav-light dark:glass-nav-dark shadow-md py-2' 
            : 'bg-white/95 dark:bg-[#071529]/95 backdrop-blur-md py-2.5 border-b border-slate-200/70 dark:border-slate-800/70'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 lg:gap-4">
            
            {/* BRAND DUAL LOGO AREA - BBDITM (Far Left) + IEEE Student Branch (Next) */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group focus:outline-none mr-auto lg:mr-0"
              title="BBDITM & IEEE Student Branch"
            >
              {/* 1. BBDITM Institutional Logo (Far Left) */}
              <div className="h-10 sm:h-11 md:h-12 px-2.5 sm:px-3 py-1 flex items-center bg-white rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-102 transition-transform">
                <img 
                  src="/images/bbditm-logo.png" 
                  alt="Babu Banarasi Das Institute of Technology and Management Logo" 
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain max-w-[150px] sm:max-w-[200px] md:max-w-[240px]"
                />
              </div>

              {/* 2. IEEE Student Branch Logo (Next) */}
              <div className="h-10 sm:h-11 md:h-12 px-2.5 sm:px-3 py-1 flex items-center bg-white rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-102 transition-transform">
                <img 
                  src="/branch-logo.png" 
                  alt="IEEE BBDITM Student Branch Logo" 
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain max-w-[130px] sm:max-w-[170px] md:max-w-[190px]"
                />
              </div>
            </Link>

            {/* DESKTOP INLINE NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href === '/societies' && location.pathname === '/chapters');
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold rounded-lg transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#002855] text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-[#002855] hover:text-white dark:hover:bg-[#002855] dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Contact Button */}
              <button
                onClick={() => setContactOpen(true)}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-[#002855] hover:text-white dark:hover:bg-[#002855] dark:hover:text-white transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </nav>

            {/* RIGHT CONTROLS: SEARCH, THEME TOGGLE, JOIN CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-[#002855] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                title="Search (Ctrl + K)"
              >
                <Search className="w-4 sm:w-4.5 h-4 sm:h-4.5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                title={`Theme: ${resolvedTheme}`}
                className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs transition-all shadow-sm"
              >
                {resolvedTheme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline text-[11px]">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-600" />
                    <span className="hidden sm:inline text-[11px]">Dark</span>
                  </>
                )}
              </button>

              {/* Join IEEE External CTA */}
              <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                title="Join IEEE on ieee.org"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-bold text-white bg-[#002855] hover:bg-[#003B75] dark:bg-[#00629B] dark:hover:bg-[#0085CA] rounded-lg transition-all shadow-sm whitespace-nowrap"
              >
                <span>Join IEEE</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
                className="lg:hidden p-1.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-5 bg-white dark:bg-[#071322] border-b border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-150">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/societies' && location.pathname === '/chapters');
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3.5 py-2 text-sm font-bold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#002855] text-white'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-[#002855] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setContactOpen(true);
              }}
              className="w-full text-left px-3.5 py-2 text-sm font-bold rounded-lg text-slate-800 dark:text-slate-200 hover:bg-[#002855] hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Counselor / Committee</span>
            </button>

            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-white bg-[#002855] hover:bg-[#003B75] rounded-lg shadow-md mt-2"
            >
              <span>Join IEEE Official Portal (ieee.org)</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
            </a>
          </div>
        )}
      </header>

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
