import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Home, Heart, Gift, HandHeart, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'Home', icon: Home },
  { name: 'RSVP', page: 'RSVPPage', icon: Heart },
  { name: 'Regalos', page: 'Gifts', icon: Gift },
  { name: 'Donaciones', page: 'Donations', icon: HandHeart },
  { name: 'Contacto', page: 'Contact', icon: Mail },
];

export default function Navigation({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to={createPageUrl('Home')} 
            className="font-dancing text-2xl bg-gradient-to-r from-[#D4AF37] to-[#C19A6B] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            ✿ Celebración ✿
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#D4AF37]/10 text-[#B8956A]' 
                      : 'text-[#8B7355] hover:bg-[#D4AF37]/5 hover:text-[#B8956A]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-[#D4AF37]/10 text-[#B8956A] hover:bg-[#D4AF37]/20 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D4AF37]/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-[#D4AF37]/10 text-[#B8956A]' 
                        : 'text-[#8B7355] hover:bg-[#D4AF37]/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}