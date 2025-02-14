"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';
import { motion } from 'framer-motion'
import { AnimatedGradientText } from '../hero/AnimatedGradientText'
import {LogoSection} from "../header/LogoSection"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


export const Services = () => {
  // Add the slides data structure
  const slides = [
    {
      text: "Fuel Your Creativity",
      animation: "/dotlottie/Music.lottie",
    },
    {
      text: "Expand Your Reach",
      animation: "/dotlottie/rocket.lottie",
    },
    {
      text: "Own Your Success",
      animation: "/dotlottie/crown.lottie",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Add the animation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [

    {
      title: 'Artists',
      description: 'Take control of your music, grow your fanbase, and keep 100% of your royalties.',
      color: '#F43F5E',
    },
    {
      title: 'Creators',
      description: 'Level up your YouTube & socials with pro tools for audience growth & monetization.',
      color: '#EAB308',
    },
    {
      title: 'Labels',
      description: 'Get powerful analytics & distribution to scale your reach like never before.',
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

      <div className="mb-20 flex flex-col items-center text-center relative" ref={mainTitleRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <div className='w-full max-w-[1000px] relative'>
         <div className="mb-1 flex  items-center justify-center w-full">
            <LogoSection 
              logoWidth={32}
              logoHeight={32}
              logoColor="#000000"
              logoClassName="mr-2"
              textGradientFrom="gray-900"
              textGradientTo="gray-600"
              className="flex justify-center items-center scale-90"
              textClassName="text-2xl font-bold"
            />
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <AnimatedGradientText colors={{
              from: '#fffff',
              via: '#111111',
              to: '#222222'
            }}>
              <span className="whitespace-pre-line text-white flex flex-col items-center gap-4">
                <span className="flex flex-wrap items-center justify-center gap-4">
                  <span className="inline-flex items-center gap-2">
                    <motion.div 
                      className="rounded-full overflow-hidden px-6 bg-black min-w-20 p-1 flex items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.span 
                        key={slides[currentIndex].text}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mr-3"
                      >
                        {slides[currentIndex].text}
                      </motion.span>
                      <motion.div
                        key={slides[currentIndex].animation}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ filter: 'blur(0.5px)' }}
                      >
                        <DotLottieReact
                          src={slides[currentIndex].animation}
                          autoplay
                          loop
                          style={{ height: 65, width: 65, display: 'inline-block', verticalAlign: 'middle' }}
                        />
                      </motion.div>
                    </motion.div>
                  </span>
                </span>
              </span>
            </AnimatedGradientText>
          </h1>
         </div>
          <h3 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
          </h3>
          <motion.p 
            className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            You create. We amplify. Own your content, grow your fanbase, and get paid—no middlemen, no limits. 
            Whether you're dropping tracks, building your brand, or running a label, 
            we've got the tools to help you break through and make an impact.
          </motion.p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full relative">
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