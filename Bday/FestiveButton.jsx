import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function FestiveButton({ 
  children, 
  href, 
  to, 
  onClick, 
  variant = 'primary',
  size = 'default',
  className = '',
  external = false
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#E8B4B8] text-white shadow-lg shadow-[#E8B4B8]/30 hover:shadow-xl hover:bg-[#DFA3A7]",
    secondary: "bg-white border-2 border-[#D4AF37] text-[#B8956A] hover:bg-[#D4AF37]/5 hover:border-[#B8956A]",
    gold: "bg-gradient-to-r from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] text-[#8B7355] shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const allClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={allClasses}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={createPageUrl(to)} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
}