"use client";

import React, { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard';
import { AnimatedTitle } from './AnimatedTitle';
import { services, slides } from './constants';

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:px-8 relative flex flex-col items-center bg-gradient-to-b from-white to-gray-50 text-black min-h-screen overflow-hidden">
      <div className='bg-black p-2 rounded-3xl items-center relative w-full flex flex-col justify-center md:py-24 py-12'>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] opacity-30 bg-gradient-radial from-purple-200 via-transparent to-transparent" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] opacity-30 bg-gradient-radial from-pink-200 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <AnimatedTitle currentIndex={currentIndex} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full relative">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};