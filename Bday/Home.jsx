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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 rounded-2xl p-8 mb-10 border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-7 h-7 text-[#E8B4B8]" />
              <h2 className="font-dancing text-3xl text-[#E8B4B8]">Fecha del Evento</h2>
            </div>
            
            <p className="text-2xl md:text-3xl font-semibold text-[#8B7355] capitalize mb-6">
              {formattedDate}
            </p>

            <div className="flex items-center justify-center gap-3 text-[#8B7355]">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-lg italic">Ubicación por confirmar</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <FestiveButton to="RSVPPage" size="large" variant="primary">
              <Sparkles className="w-5 h-5" />
              Confirmar Asistencia
              <Sparkles className="w-5 h-5" />
            </FestiveButton>
          </motion.div>

          {/* Decorative bottom */}
          <div className="mt-16 flex justify-center gap-2 text-[#E8B4B8] text-2xl">
            ❀ ✿ ❀ ✿ ❀
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>Con amor ♥</p>
      </footer>
    </CuteBackground>
  );
}