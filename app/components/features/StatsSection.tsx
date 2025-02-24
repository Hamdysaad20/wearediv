'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const StatsSection = () => {
  const stats = [
    {
      number: '2.5X',
      title: 'Expanding Reach',
      description: 'Distributing music with Divzoon Network increases artist reach 2.5X across global platforms.'
    },
    {
      number: '+70%',
      title: 'More Revenue Growth',
      description: 'Artists and creators using Divzoon\'s monetization tools see 70% higher earnings.'
    },
    {
      number: '3X',
      title: 'Faster Audience Growth',
      description: 'Labels and creators experience 3X faster audience growth with Divzoon\'s marketing tools.'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${
                index === 1 ? 'md:-mt-12' : ''
              }`}
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 h-full min-h-[320px] flex flex-col justify-between">
                {index === 1 && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src="/Images/AdsSpot-VerticalLPs-FinServ-HERO.jpg"
                      alt="Statistics"
                      fill
                      className="object-cover opacity-40"
                    />
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {stat.number}
                    </h3>
                    <h4 className="text-2xl font-semibold mb-4 text-white">
                      {stat.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};