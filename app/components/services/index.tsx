"use client";

import React from 'react';
import { ServiceCard } from './ServiceCard';
import { AnimatedTitle } from './AnimatedTitle';
import { services } from './constants';

export const Services = () => {


  return (
    <section className="py-24  relative flex flex-col items-center bg-gradient-to-b bg-black text-white min-h-screen overflow-hidden">
      <div className='bg-black p-2 rounded-3xl items-center relative w-full flex flex-col justify-center md:py-24 py-12'>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/3 -right-1/3 w-[90rem] h-[90rem] opacity-25 bg-gradient-radial from-purple-300/40 via-purple-900/5 to-transparent rotate-12" />
          <div className="absolute -bottom-1/3 -left-1/3 w-[90rem] h-[90rem] opacity-25 bg-gradient-radial from-pink-300/40 via-pink-900/5 to-transparent -rotate-12" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        </div>

        <AnimatedTitle  />

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