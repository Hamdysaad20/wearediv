import { motion } from 'framer-motion';
import { AnimatedGradientText } from '../hero/AnimatedGradientText';



export const AnimatedTitle = () => {
  return (
    <div className="mb-20 flex flex-col items-start sm:items-center text-left sm:text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="bg-gray-100 text-gray-900 px-4 py-1 rounded-full text-sm font-medium mb-6 self-start sm:self-center inline-block">
          Our Services
        </div>

        <h1 className="text-5xl sm:text-center text-left max-w-[1000px] md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mx-auto mb-4">
          <AnimatedGradientText colors={{
            from: '#ffffff',
            via: '#a8a8a8',
            to: '#d4d4d4'
          }}>
            <span className="block sm:hidden text-[90px] leading-[0.95] mt-8">
              Built<br/>
              For Your<br/>
              Needs to<br/>
              Grow
              
            </span>
            <span className="hidden sm:block">
              Built For Your Needs<br className="hidden sm:block"/> to Grow Fast
            </span>
          </AnimatedGradientText>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 text-left sm:text-center max-w-[500px] sm:max-w-[600px] leading-relaxed mx-auto">
          Powerful tools designed for your growth. Streamline your workflow and maximize your potential.
        </p>

  
      </motion.div>
    </div>
  );
};