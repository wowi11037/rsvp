import React from 'react';
import { User } from 'lucide-react';

export default function ProfilePhoto({ photoUrl, size = 'large', className = '' }) {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-40 h-40 md:w-48 md:h-48',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Decorative frame con borde dorado */}
      <div className={`${sizeClasses[size]} rounded-sm bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] p-1 shadow-xl shadow-[#D4AF37]/30`}>
        <div className="w-full h-full rounded-sm bg-white p-1">
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt="Foto de perfil" 
              className="w-full h-full rounded-sm object-cover"
            />
          ) : (
            <div className="w-full h-full rounded-sm bg-gradient-to-br from-[#FDF5F5] to-[#F5E6E8] flex items-center justify-center">
              <User className="w-1/3 h-1/3 text-[#E8B4B8]" />
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 text-2xl text-[#E8B4B8] animate-pulse">✿</div>
      <div className="absolute -bottom-1 -left-2 text-xl text-[#E8B4B8] animate-pulse delay-300">❀</div>
    </div>
  );
}