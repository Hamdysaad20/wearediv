'use client';

import { ProgressSlider, SliderContent, SliderWrapper, SliderBtnGroup, SliderBtn } from '../ui/progress-slider';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedGradientText } from '../hero/AnimatedGradientText';
import { useEffect, useState } from 'react';

// Dynamic import for Ripple
const Ripple = dynamic(() => import('../ui/ripple').then(mod => mod.Ripple), { ssr: false });

const creatorSlides = [
  {
    title: 'Monetize',
    desc: 'Maximize content earnings instantly.',
    sliderName: 'monetize',
    icon: '💰',
  },
  {
    title: 'Protect',
    desc: 'Secure your content with ID.',
    sliderName: 'protect',
    icon: '🛡️',
  },
  {
    title: 'Grow',
    desc: 'Increase your reach globally.',
    sliderName: 'grow',
    icon: '📈',
  },
  {
    title: 'Thrive',
    desc: 'Earn loyalty from your audience.',
    sliderName: 'thrive',
    icon: '⭐',
  },
];

export const CreatorSection = () => {
  const [rippleProps, setRippleProps] = useState({
    mainCircleSize: 210,
    numCircles: 8
  });

  useEffect(() => {
    const updateSize = () => {
      setRippleProps({
        mainCircleSize: window.innerWidth < 768 ? 150 : 210,
        numCircles: window.innerWidth < 768 ? 6 : 8
      });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const sliderContent = useMemo(() => (
    <SliderContent>
      {creatorSlides.map((slide) => (
        <SliderWrapper key={slide.sliderName} value={slide.sliderName}>
          <div className="min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 lg:p-8">
            <div className="text-center text-white">
              <span className="text-6xl lg:text-7xl mb-6 lg:mb-8 block">{slide.icon}</span>
              <h3 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">{slide.title}</h3>
              <p className="text-lg lg:text-xl text-gray-300 max-w-md mx-auto">{slide.desc}</p>
            </div>
          </div>
        </SliderWrapper>
      ))}
    </SliderContent>
  ), []);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-24 px-4 relative overflow-hidden">
    <Ripple 
        mainCircleOpacity={0.9}
        fromColor="yellow-500"
        toColor="yellow-600"
        color='yellow'
        mainCircleSize={rippleProps.mainCircleSize}
        numCircles={rippleProps.numCircles}
      >
      <div className="relative z-10 md:grid md:grid-cols-2 md:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-0 flex flex-col items-start justify-center md:pr-8"
        >
          <div className="bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-sm font-medium mb-6">
            For Creators
          </div>
          <h2 className="text-5xl md:text-5xl lg:text-[65px] font-bold mb-6 leading-[1.1] tracking-tight">
            <AnimatedGradientText colors={{
              from: '#ffffff',
              via: '#a8a8a8',
              to: '#d4d4d4'
            }}>
              Monetize Your Passion <br className="hidden md:block"/>& Turn It Into Profit
            </AnimatedGradientText>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Transform your creative content into a thriving business. Reach global audiences and maximize earnings while doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full md:w-fit">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors min-w-[200px]"
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors min-w-[200px]"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <ProgressSlider vertical={false} activeSlider="monetize" className="relative md:-mr-4 lg:-mr-8">
          {sliderContent}
          <SliderBtnGroup className="absolute -bottom-4 h-fit text-white bg-black/80 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-xl w-full">
            {creatorSlides.map((slide) => (
              <SliderBtn
                key={slide.sliderName}
                value={slide.sliderName}
                className="text-left p-4 border-r border-white/10 hover:bg-white/5 transition-colors"
                progressBarClass="bg-white/20 h-full"
              >
                <h2 className="text-lg font-bold mb-1">{slide.title}</h2>
                <p className="text-sm text-gray-300 line-clamp-2">{slide.desc}</p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
      </Ripple>
    </div>
  );
};