'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  "Unlimited Music Distribution",
  "Delivery to 150+ DSPs",
  "Use Your UPC & ISRC",
  "Track Credits",
  "Unlimited Release Edits",
  "Unlimited Pre-Save Links",
  "YouTube Content ID",
  "High Quality Formats",
  "Video Distribution",
  "Music Publishing",
  "Feature Requests & Playlist Promotion",
  "Bulk Uploads",
  "Daily Streaming Analytics",
  "Account Manager",
  "Use Your Own Distribution Agreements",
  "Mass Importing of Users",
  "Integrations with Microsoft 365",
  "Integrations with Odoo CRM",
  "Real-time Analytics (Soon)"
];

const plans = [
  {
    name: "Divzoon Network",
    description: "Start your journey",
    price: "Free",
    features: features.slice(0, 7),
    buttonText: "Apply",
    buttonVariant: "outline"
  },
  {
    name: "Divzoon Network",
    description: "Most Popular",
    price: "$150",
    period: "/year",
    features: features.slice(0, 14),
    buttonText: "Join Head",
    buttonVariant: "solid",
    highlighted: true
  },
  {
    name: "Divzoon Network",
    description: "Enterprise Grade",
    price: "Custom",
    features: features,
    buttonText: "Contact Sales",
    buttonVariant: "outline"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Which plan suits you best?</h2>
          <Link 
            href="/services/labels" 
            className="text-rose-500 hover:text-rose-600 transition-colors"
          >
            View full pricing breakdown →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-white text-black' 
                  : 'bg-black/80 backdrop-blur-sm text-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-70">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg opacity-70">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-rose-500' : 'text-rose-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-semibold transition-colors ${
                  plan.buttonVariant === 'solid'
                    ? 'bg-rose-500 text-white hover:bg-rose-600'
                    : 'border-2 border-current hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};