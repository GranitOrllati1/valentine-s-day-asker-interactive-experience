import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const hearts = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * (40 - 20) + 20,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * (6 - 3) + 3,
  delay: Math.random() * 5,
}));
export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
            y: [-20, -120],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: heart.left,
            top: heart.top,
          }}
        >
          <Heart
            size={heart.size}
            fill="#FF4785"
            className="text-kid-pink opacity-30"
          />
        </motion.div>
      ))}
    </div>
  );
}