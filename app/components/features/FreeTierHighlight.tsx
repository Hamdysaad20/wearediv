'use client';

import { motion } from 'framer-motion';
import { Ripple } from '../ui/ripple';

export const FreeTierHighlight = () => {
  const features = [
    {
      category: "Distribution",
      items: [
        "Unlimited Music Distribution",
        "Delivery to 150+ DSPs",
        "High Quality Audio Formats",
      ]
    },
    {
      category: "Management",
      items: [
        "Use Your UPC & ISRC",
        "Track Credits",
        "Unlimited Release Edits",
      ]
    },
    {
      category: "Marketing",
      items: [
        "Unlimited Pre-Save Links",
        "YouTube Content ID",
        "Basic Analytics Dashboard",
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-6xl mx-auto px-4">
        <Ripple 
          mainCircleSize={400}
          numCircles={4}
          mainCircleOpacity={0.15}
          fromColor="purple-900"
          toColor="rose-900"
          color="purple"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden md:border-0 border  border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 text-white/70 mb-6"
              >
                Get Started
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white max-w-4xl mx-auto">
                Think better with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-rose-600 bg-clip-text text-transparent">
                  Divzoon
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
                Never miss a note, idea or connection.
              </p>
              
              <div className="mb-12">
                <div className="text-6xl md:text-8xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl mr-2">$</span>0
                </div>
                <p className="text-white/60 text-lg">Forever Free Plan</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
                {features.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.category}</h3>
                    <ul className="space-y-4 text-left">
                      {category.items.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 3 + featureIndex) * 0.1 }}
                          className="flex items-center text-white/80"
                        >
                          <svg className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm md:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-purple-50 transition-all shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.8)]"
              >
                Create a free account
              </motion.button>
            </div>
          </motion.div>
        </Ripple>
      </div>
    </section>
  );
};