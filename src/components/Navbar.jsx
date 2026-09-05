import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-brand-border bg-[#0c0814d9] backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 px-6">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-wide">
            CORE<span className="text-brand-primary">SCULPT</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link to="/" className="text-slate-300 hover:text-brand-primary transition-colors font-medium">Home</Link>
          <Link to="/testimonials" className="text-slate-300 hover:text-brand-primary transition-colors font-medium">Testimonials</Link>
          <Link to="/packages" className="text-slate-300 hover:text-brand-primary transition-colors font-medium">Packages</Link>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a 
            href={`https://wa.me/447584236848?text=${encodeURIComponent("Hi Prapti! I'd like to start my free trial with CoreSculpt.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-2 inline-flex items-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-700" 
          aria-controls="navbar-mobile" 
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            {isOpen ? (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            ) : (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="w-full md:hidden mt-4 bg-slate-950/95 border border-slate-800 rounded-[15px] p-4 space-y-3 backdrop-blur-lg animate-fade-in" id="navbar-mobile">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="block py-2 px-3 text-slate-300 hover:text-brand-primary hover:bg-slate-900/50 rounded-lg transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/testimonials" 
              onClick={closeMenu} 
              className="block py-2 px-3 text-slate-300 hover:text-brand-primary hover:bg-slate-900/50 rounded-lg transition-colors font-medium"
            >
              Testimonials
            </Link>
            <Link 
              to="/packages" 
              onClick={closeMenu} 
              className="block py-2 px-3 text-slate-300 hover:text-brand-primary hover:bg-slate-900/50 rounded-lg transition-colors font-medium"
            >
              Packages
            </Link>
            <div className="pt-2 border-t border-slate-900">
              <a 
                href={`https://wa.me/447584236848?text=${encodeURIComponent("Hi Prapti! I'd like to start my free trial with CoreSculpt.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu} 
                className="btn-primary text-sm px-6 py-2.5 w-full flex justify-center items-center gap-2"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
