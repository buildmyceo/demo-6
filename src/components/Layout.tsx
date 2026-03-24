import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, Heart } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Video Consult', href: '#video-consultation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-slate-900/5 backdrop-blur-sm border-b border-slate-200/20 py-2 hidden md:block">
          <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><Phone size={12} className="text-primary" /> 24/7 Helpline: +1 (555) 123-4567</span>
              <span className="flex items-center gap-2"><MessageCircle size={12} className="text-primary" /> WhatsApp: +1 (555) 999-0000</span>
            </div>
            <div className="flex gap-6">
              <a href="#contact" className="hover:text-primary transition-colors">Find a Centre</a>
              <a href="#contact" className="hover:text-primary transition-colors">Free Consultation</a>
            </div>
          </div>
        </div>
      )}

      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Bloom <span className="text-primary">IVF</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-bold"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bloom <span className="text-primary">IVF</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to helping couples achieve their dreams of parenthood through advanced technology and compassionate care.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">IVF Treatment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">IUI Treatment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Egg Freezing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Fertility Testing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Male Infertility</a></li>
              <li><a href="#video-consultation" className="hover:text-primary transition-colors font-bold text-primary">Video Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <span>support@bloomivf.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 mt-1 bg-primary rounded-full shrink-0" />
                <span>123 Fertility Way, Medical District, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2026 Bloom IVF & Fertility Centre. All rights reserved.</p>
            <p className="text-slate-500 italic">sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">buildmyceo(buildmyceo.com)</a></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const StickyActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} />
      </a>
      <a 
        href="tel:+15551234567" 
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};
