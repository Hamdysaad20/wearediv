'use client';

import { ProgressSlider, SliderContent, SliderWrapper, SliderBtnGroup, SliderBtn } from '../ui/progress-slider';
import { motion } from 'framer-motion';

const artistSlides = [
  {
    title: 'Distribute',
    desc: 'Global music distribution made easy.',
    sliderName: 'distribute',
    icon: '🎵',
  },
  {
    title: 'Claim',
    desc: 'Manage your royalties seamlessly.',
    sliderName: 'claim',
    icon: '💎',
  },
  {
    title: 'Track',
    desc: 'Monitor performance and insights.',
    sliderName: 'track',
    icon: '📊',
  },
  {
    title: 'Excel',
    desc: 'Unlock your true earning potential.',
    sliderName: 'excel',
    icon: '🚀',
  },
];

export const ArtistSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-4 bg-gradient-to-br to-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 items-center flex justify-center flex-col text-center"
      >
        <div className="bg-rose-100 text-rose-900 px-4 py-1 rounded-full text-sm font-medium mb-6">
          For Artists
        </div>
        <h2 className="text-4xl max-w-[1000px] md:text-5xl lg:text-7xl font-bold mb-4">Control Your Sound, Get the Recognition You Deserve</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Take control of your music career</p>
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
        <SliderContent>
          {artistSlides.map((slide, index) => (
            <SliderWrapper key={index} value={slide.sliderName}>
              <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-rose-900 to-black rounded-2xl p-8">
                <div className="text-center text-white">
                  <span className="text-7xl mb-8 block">{slide.icon}</span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h3>
                  <p className="text-xl text-gray-300">{slide.desc}</p>
                </div>
              </div>
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className="absolute bottom-0 h-fit text-white bg-black/80 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-xl w-full">
          {artistSlides.map((slide, index) => (
            <SliderBtn
              key={index}
              value={slide.sliderName}
              className="text-left p-4 border-r border-white/10"
              progressBarClass="bg-rose-500/20 h-full"
            >
              <h2 className="text-lg font-bold mb-1">{slide.title}</h2>
              <p className="text-sm text-gray-300 line-clamp-2">{slide.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </div>
  );
};