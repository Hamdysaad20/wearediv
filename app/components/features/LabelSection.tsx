'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedGradientText } from '../hero/AnimatedGradientText';
import { ProgressSlider, SliderContent, SliderWrapper, SliderBtnGroup, SliderBtn } from '../ui/progress-slider';

// Dynamic import for Ripple
const Ripple = dynamic(() => import('../ui/ripple').then(mod => mod.Ripple), { ssr: false });

const labelSlides = [
  {
    title: 'Distribute',
    desc: 'Release music worldwide effortlessly.',
    sliderName: 'distribute',
    icon: '🌍',
  },
  {
    title: 'Protect',
    desc: 'Ensure full copyright control.',
    sliderName: 'protect',
    icon: '🔐',
  },
  {
    title: 'Optimize',
    desc: 'Drive revenue with Content ID.',
    sliderName: 'optimize',
    icon: '💫',
  },
  {
    title: 'Lead',
    desc: 'Dominate the industry with tools.',
    sliderName: 'lead',
    icon: '👑',
  },
];

export const LabelSection = () => {
  const sliderContent = useMemo(() => (
    <SliderContent>
      {labelSlides.map((slide) => (
        <SliderWrapper key={slide.sliderName} value={slide.sliderName}>
          <div className="min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-purple-900 to-black rounded-2xl p-4 md:p-8">
            <div className="text-center text-white">
              <span className="text-7xl mb-8 block">{slide.icon}</span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h3>
              <p className="text-xl text-gray-300">{slide.desc}</p>
            </div>
          </div>
        </SliderWrapper>
      ))}
    </SliderContent>
  ), []);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-24 px-4 relative overflow-hidden">
      <Ripple 
        mainCircleOpacity={0.3}
        fromColor="purple-400"
        toColor="purple-900"
        mainCircleSize={typeof window !== 'undefined' ? (window.innerWidth < 768 ? 150 : 210) : 210}
        numCircles={typeof window !== 'undefined' ? (window.innerWidth < 768 ? 6 : 8) : 8}
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 items-center flex justify-center flex-col text-center"
          >
            <div className="bg-purple-100 text-purple-900 px-4 py-1 rounded-full text-sm font-medium mb-6 self-start sm:self-center">
              For Labels
            </div>
            <h2 className="text-5xl sm:text-center text-left max-w-[1000px] md:text-5xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
              <AnimatedGradientText colors={{
                from: '#ffffff',
                via: '#a8a8a8',
                to: '#d4d4d4'
              }}>
                Control Global Reach<br className="hidden sm:block"/> Lead the Industry
              </AnimatedGradientText>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 text-left sm:text-center max-w-[500px] sm:max-w-[900px] leading-relaxed mx-auto">
              Empower your label with modern tools. Distribute globally and maximize revenue across platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <ProgressSlider vertical={false} activeSlider="distribute" className="relative">
            {sliderContent}
            <SliderBtnGroup className="absolute bottom-0 h-fit text-white bg-black/80 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-xl w-full">
              {labelSlides.map((slide, index) => (
                <SliderBtn
                  key={index}
                  value={slide.sliderName}
                  className="text-left p-4 border-r border-white/10"
                  progressBarClass="bg-purple-500/20 h-full"
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