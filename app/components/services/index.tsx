"use client";

import React, { useRef, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Ripple } from '../ui/ripple';

export const Services = () => {
  const services = [
    {
      title: 'Network',
      description: 'Empowering creators with industry-leading analytics and global distribution solutions.',
      color: '#9333EA', // Changed to a different purple
    },
    {
      title: 'Artists',
      description: 'A complete platform to manage your music, grow your audience, and keep 100% of your royalties.',
      color: '#F43F5E',
    },
    {
      title: 'Creators',
      description: 'Boost your YouTube and social channels with expert-driven tools for audience growth and monetization.',
      color: '#EAB308',
    },
    {
      title: 'Labels',
      description: 'White-label solutions, advanced analytics, and full-scale distribution services to elevate your label\'s reach.',
      color: '#E879F9', // Original pink/purple
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    serviceRefs.current = new Array(services.length).fill(null);
  }, []);

  return (
    <section className="py-24 px-8 relative flex flex-col items-center bg-gradient-to-b from-white to-gray-50 text-black min-h-screen overflow-hidden" ref={containerRef}>
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] opacity-30 bg-gradient-radial from-purple-200 via-transparent to-transparent" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[100rem] h-[100rem] opacity-30 bg-gradient-radial from-pink-200 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="mb-20 flex flex-col items-center text-center relative " ref={mainTitleRef}>
        <Ripple>
          <Logo 
            width={90} 
            height={90} 
            color="#00000"
            className="opacity-90 hover:opacity-100 transition-opacity mb-6 group-hover:scale-110 transform duration-500"
          />
        </Ripple>
        <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Divzoon Network</span>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">Empowering digital creators with innovative solutions and global reach</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full relative">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-10 relative  bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 group cursor-pointer min-h-[280px] flex flex-col hover:-translate-y-2"
            ref={(el: HTMLDivElement | null) => {
              serviceRefs.current[index] = el;
            }}
            onClick={() => window.location.href = `/${service.title.toLowerCase()}`}
            style={{
              background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${service.color}0a, transparent 40%)`,
            } as React.CSSProperties}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Logo 
                  width={45} 
                  height={45} 
                  color={service.color}
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="mt-auto flex items-center text-gray-900 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Learn more 
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};