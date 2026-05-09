'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TarotCardProps {
  title: string;
  description: string;
  backImage: string;
}

export default function TarotCard({ title, description, backImage }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96 cursor-pointer" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Frente de la carta */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-[#ec1a82]/20 shadow-[0_20px_50px_rgba(43,16,32,0.12)]">
          <Image src="/Fondo2.png" alt="Carta Fondo" fill className="object-cover scale-130" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1020]/30 via-transparent to-transparent" />
        </div>

        {/* Reverso de la carta */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-[#ec1a82]/20 shadow-[0_20px_50px_rgba(43,16,32,0.12)]">
          <Image src={backImage} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1020]/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-[#ec1a82]/90 p-4 text-center shadow-lg shadow-[#2b1020]/15">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}