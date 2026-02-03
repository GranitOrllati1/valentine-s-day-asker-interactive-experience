import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, PartyPopper, X, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [noScale, setNoScale] = useState(1);
  const moveButton = useCallback(() => {
    // Keep it within a reasonable viewport area
    const padding = 100;
    const maxX = window.innerWidth / 2 - padding;
    const maxY = window.innerHeight / 2 - padding;
    // Generate random position
    const randomX = (Math.random() - 0.5) * maxX * 1.5;
    const randomY = (Math.random() - 0.5) * maxY * 1.5;
    setNoPosition({ x: randomX, y: randomY });
    setHasMoved(true);
    // Shrink slightly each time it runs away
    setNoScale((prev) => Math.max(0.5, prev - 0.05));
  }, []);
  const handleYes = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4785', '#FFB6C1', '#FFD700', '#ffffff']
    });
  };
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#FFF5F7] overflow-hidden selection:bg-kid-pink selection:text-white">
      <ThemeToggle />
      <FloatingHearts />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isAccepted ? (
              <motion.div
                key="ask"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                className="bg-white border-[4px] border-black rounded-[32px] p-8 md:p-12 shadow-hard-lg max-w-lg w-full text-center space-y-8"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center"
                >
                  <div className="bg-kid-pink-light p-6 rounded-full border-[3px] border-black">
                    <Heart size={64} fill="#FF4785" className="text-kid-pink" />
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-display font-black text-black leading-tight">
                    Will you be my <span className="text-kid-pink">Valentine?</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium">
                    I've been waiting all year to ask you! ✨
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 relative">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={handleYes}
                      className="bg-kid-pink hover:bg-kid-pink text-white text-2xl font-black h-20 px-12 rounded-2xl border-[4px] border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all animate-pulse-playful"
                    >
                      YES! 💖
                    </Button>
                  </motion.div>
                  <motion.div
                    animate={hasMoved ? { x: noPosition.x, y: noPosition.y, scale: noScale } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onMouseEnter={moveButton}
                    onTouchStart={moveButton}
                    className={hasMoved ? 'fixed z-50' : 'relative'}
                  >
                    <Button
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-black text-xl font-bold h-14 px-8 rounded-xl border-[3px] border-black shadow-hard hover:shadow-none transition-all"
                    >
                      No <X className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-[4px] border-black rounded-[40px] p-8 md:p-16 shadow-hard-lg max-w-xl w-full text-center space-y-8"
              >
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 10 }}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="bg-kid-yellow p-8 rounded-3xl border-[4px] border-black">
                    <PartyPopper size={80} className="text-black" />
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-display font-black text-black">
                    YAYYY! 🎉
                  </h1>
                  <p className="text-2xl font-bold text-kid-pink">
                    I knew you'd say yes! 
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Our date is going to be amazing! See you soon, Valentine! 💌
                  </p>
                </div>
                <div className="flex justify-center pt-4">
                   <div className="bg-kid-pink-light/30 px-6 py-3 rounded-full border-[2px] border-dashed border-kid-pink flex items-center gap-2">
                      <HeartHandshake className="text-kid-pink" />
                      <span className="font-bold text-black">Forever & Always</span>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <footer className="fixed bottom-4 left-0 right-0 text-center text-sm font-bold text-black/40 pointer-events-none">
        made with ❤��� for you
      </footer>
    </div>
  );
}