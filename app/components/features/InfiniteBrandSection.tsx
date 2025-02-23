'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const platforms = [
  { name: 'Spotify', logo: '/platforms/spotify.svg' },
  { name: 'Apple Music', logo: '/platforms/apple-music.svg' },
  { name: 'YouTube Music', logo: '/platforms/youtube-music.svg' },
  { name: 'Amazon Music', logo: '/platforms/amazon-music.svg' },
  { name: 'Deezer', logo: '/platforms/deezer.svg' },
  { name: 'SoundCloud', logo: '/platforms/soundcloud.svg' },
  { name: 'TikTok', logo: '/platforms/tiktok.svg' },
  { name: 'Instagram', logo: '/platforms/instagram.svg' },
  { name: 'Facebook', logo: '/platforms/facebook.svg' },
  { name: 'Anghami', logo: '/platforms/anghami.svg' }
];

export const InfiniteBrandSection = () => {
  const [duplicatedPlatforms, setDuplicatedPlatforms] = useState(platforms);

  useEffect(() => {
    // Duplicate the platforms array to create a seamless loop
    setDuplicatedPlatforms([...platforms, ...platforms]);
  }, []);

  return (
    <div className="w-full bg-black/90 max-w-[1400px] py-12 md:py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-10" />
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          Distribute Your Music Everywhere
        </h2>
        <p className="text-gray-400 text-center text-lg">
          Reach millions of listeners across all major platforms
        </p>
      </div>
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex items-center gap-12 md:gap-16"
      >
        {duplicatedPlatforms.map((platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex-shrink-0 w-24 md:w-32 aspect-square relative group"
          >
            <div className="absolute inset-0 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300" />
            <div className="relative z-0 w-full h-full p-4 md:p-6 flex items-center justify-center">
              <Image
                src={platform.logo}
                width={100}
                height={100}
                alt={`${platform.name} logo`}
                className="w-full h-full object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};