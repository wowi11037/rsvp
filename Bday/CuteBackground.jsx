import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import CuteBackground from '@/components/party/CuteBackground';
import Navigation from '@/components/party/Navigation';
import ProfilePhoto from '@/components/party/ProfilePhoto';
import FestiveButton from '@/components/party/FestiveButton';

export default function Home() {
  const { data: settings } = useQuery({
    queryKey: ['partySettings'],
    queryFn: async () => {
      const list = await base44.entities.PartySettings.list();
      return list[0] || null;
    },
  });

  const partyDate = settings?.party_date ? new Date(settings.party_date) : new Date();
  const formattedDate = format(partyDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });

  return (
    <CuteBackground>
      <Navigation currentPage="Home" />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Decorative top element */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <ProfilePhoto photoUrl={settings?.profile_photo} size="large" />
          </div>

          {/* Title */}
          <h1 className="font-dancing text-5xl md:text-7xl text-[#E8B4B8] mb-4">
            ¡Celebremos mi Cumpleaños!
          </h1>
          
          <p className="font-dancing text-2xl md:text-3xl text-[#8B7355] mb-6">
            {format(partyDate, "d 'de' MMMM 'de' yyyy", { locale: es })}
          </p>

          {/* Welcome Message */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20">
            <p className="text-[#8B7355] text-lg leading-relaxed">
              {settings?.welcome_message || 
                'Con mucha alegría te invito a celebrar conmigo un año más de vida. Tu presencia hará este día aún más especial. ¡Te espero con los brazos abiertos!'}
            </p>
          </div>

          {/* Date Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
import React from 'react';

export default function CuteBackground({ children }) {
  return (
    <div className="min-h-screen relative">
      {/* Patrón de Hello Kitty */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E8B4B8' fill-rule='evenodd'%3E%3C!-- Hello Kitty face --%3E%3Ccircle cx='50' cy='45' r='18' fill='none' stroke='%23E8B4B8' stroke-width='1.5'/%3E%3Ccircle cx='44' cy='43' r='2' fill='%23E8B4B8'/%3E%3Ccircle cx='56' cy='43' r='2' fill='%23E8B4B8'/%3E%3Cellipse cx='50' cy='48' rx='3' ry='2' fill='%23E8B4B8'/%3E%3Cline x1='50' y1='48' x2='50' y2='52' stroke='%23E8B4B8' stroke-width='1'/%3E%3Cpath d='M38 48 Q44 50 50 48 M50 48 Q56 50 62 48' stroke='%23E8B4B8' stroke-width='1' fill='none'/%3E%3C!-- Bow --%3E%3Cpath d='M58 32 Q60 28 65 28 Q68 28 68 32 Q68 35 65 36 Q62 36 60 34 M60 34 Q58 36 55 36 Q52 36 52 32 Q52 28 55 28 Q58 28 58 32' fill='%23E8B4B8'/%3E%3Ccircle cx='58' cy='32' r='2' fill='%23E8B4B8'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Fondo rosa claro como en la referencia */}
      <div className="fixed inset-0 bg-[#FDF5F5] pointer-events-none" />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}