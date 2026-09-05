import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, MonitorPlay } from 'lucide-react';

const Footer = () => {
  const appStoreUrl = "https://apps.apple.com/app/coresculpt/id6450630737";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.keepwellmantras.coresculpt";

  return (
    <footer className="bg-[#080510] border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold whitespace-nowrap text-white tracking-wide">
                CORE<span className="text-brand-primary">SCULPT</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Unleash the Iron Power of Your Core with Prapti Dutt. The ultimate fitness transformational app for your body and mind.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/keepwellmantras" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
              <a 
                href="https://wa.me/447584236848" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-primary hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-2.203c1.66.984 3.285 1.503 4.907 1.504 5.518 0 10.007-4.407 10.01-9.82.001-2.624-1.019-5.092-2.87-6.948-1.853-1.855-4.322-2.877-6.953-2.878-5.521 0-10.01 4.408-10.014 9.822-.001 1.721.453 3.4 1.314 4.887l-.995 3.636 3.73-.969c1.428.784 2.923 1.186 4.316 1.186z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/testimonials" className="text-slate-400 hover:text-brand-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/packages" className="text-slate-400 hover:text-brand-primary transition-colors">Packages</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Download App</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-12 bg-slate-900 hover:bg-slate-800 rounded-md border border-slate-800 hover:border-brand-primary flex items-center justify-center gap-2 text-sm font-bold text-slate-300 transition-colors"
              >
                <Smartphone className="w-4 h-4" /> App Store
              </a>
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-12 bg-slate-900 hover:bg-slate-800 rounded-md border border-slate-800 hover:border-brand-primary flex items-center justify-center gap-2 text-sm font-bold text-slate-300 transition-colors"
              >
                <MonitorPlay className="w-4 h-4" /> Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} KeepWell Mantras. All rights reserved. 🇬🇧
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-600 text-xs mt-4 md:mt-0">
            Designed and developed for Prapti Dutt CoreSculpt App.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
