import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AnimatedGradientText } from '../hero/AnimatedGradientText';
import { LogoSection } from "../header/LogoSection";
import { slides } from './constants';

interface AnimatedTitleProps {
  currentIndex: number;
}

export const AnimatedTitle = ({ currentIndex }: AnimatedTitleProps) => {
  return (
    <div className="mb-20 flex flex-col items-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='w-full max-w-[1000px] relative'>
          <div className="mb-1 flex items-center justify-center w-full">
            <LogoSection 
              logoWidth={32}
              logoHeight={32}
              logoColor="#ffffff"
              logoClassName="mr-2"
              textGradientFrom="gray-700"
              textGradientTo="gray-100"
              className="hidden md:flex bg-white/20 px-4 p-2 rounded-full justify-center items-center scale-90"
              textClassName="text-2xl font-bold"
            />
          </div>

          <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <AnimatedGradientText colors={{
              from: '#ffffff',
              via: '#111111',
              to: '#222222'
            }}>
              <span className="whitespace-pre-line text-white flex flex-col items-center gap-4">
                <span className="flex flex-wrap items-center justify-center gap-4">
                  <span className="text-white capitalize text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-0">
                    We give you the tools to
                  </span>
                  <span className="inline-flex items-center gap-2 w-full md:w-auto">
                    <motion.div 
                      className="rounded-full overflow-hidden px-6 md:px-6 bg-black min-w-20 py-3 md:py-1 flex items-center justify-center text-xl md:text-2xl lg:text-3xl w-full md:w-auto"
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
                          style={{ 
                            height: typeof window !== 'undefined' && window.innerWidth < 768 ? 45 : 65, 
                            width: typeof window !== 'undefined' && window.innerWidth < 768 ? 45 : 65, 
                            display: 'inline-block', 
                            verticalAlign: 'middle' 
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </span>
                </span>
              </span>
            </AnimatedGradientText>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};