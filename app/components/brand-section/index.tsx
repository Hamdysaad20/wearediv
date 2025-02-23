'use client';

import React from 'react';
import Image from 'next/image';

const platforms = [
  { name: 'Spotify', logo: '/platforms/spotify.svg' },
  { name: 'Apple Music', logo: '/platforms/apple-music.svg' },
  // Duplicate the array to create a seamless loop
  { name: 'Spotify', logo: '/platforms/spotify.svg' },
  { name: 'Apple Music', logo: '/platforms/apple-music.svg' },
];

export const BrandSection = () => {
  return (
    <div className="w-full py-12 bg-black overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {platforms.map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex items-center justify-center mx-12 min-w-[120px]"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={80}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300 text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};