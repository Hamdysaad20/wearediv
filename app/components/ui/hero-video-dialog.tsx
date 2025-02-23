"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { cn } from "../../../lib/utils";
import Image from "next/image";

type AnimationStyle = "from-bottom" | "from-center" | "from-top" | "from-left" | "from-right" | "fade";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
};

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants["from-center"];

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8] brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <div className="relative flex h-20 w-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-white/30 to-white shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play className="h-8 w-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Only close if clicking the backdrop
              if (e.target === e.currentTarget) {
                setIsVideoOpen(false);
              }
            }}
            className="fixed inset-0 z-modal flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-16 right-0 rounded-full bg-black/50 p-3 text-xl text-white backdrop-blur-md hover:bg-black/70 transition-all duration-200 z-[1001]"
              >
                <X className="h-6 w-6" />
              </motion.button>
              <div className="relative z-[1000] h-full w-full overflow-hidden rounded-2xl border-2 border-white/20">
                <iframe
                  src={`${videoSrc}?autoplay=1&rel=0&showinfo=0`}
                  className="h-full w-full rounded-2xl bg-black"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1000 }}
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}