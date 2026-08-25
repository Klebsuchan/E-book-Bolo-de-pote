import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from 'motion/react';

export default function InteractiveCakeImage() {
  // Motion values to track accumulated pan/drag
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Smooth springs for fluid 3D motion
  const springX = useSpring(dragX, { stiffness: 150, damping: 20 });
  const springY = useSpring(dragY, { stiffness: 150, damping: 20 });

  // Map drag to 3D rotation angles
  // X drag rotates around Y axis, Y drag rotates around X axis
  const rotateY = useTransform(springX, (v) => `${v * 0.4}deg`);
  const rotateX = useTransform(springY, (v) => `${-v * 0.4}deg`);

  // Parallax translation for the image inside the frame to give deep 3D illusion
  const imgTranslateX = useTransform(springX, (v) => `${-v * 0.1}px`);
  const imgTranslateY = useTransform(springY, (v) => `${-v * 0.1}px`);

  const handlePan = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Accumulate the drag distance
    dragX.set(dragX.get() + info.delta.x);
    
    // Clamp the vertical rotation so the card doesn't flip entirely upside down
    const newY = dragY.get() + info.delta.y;
    dragY.set(Math.max(-120, Math.min(120, newY)));
  };

  const resetRotation = () => {
    // Slowly reset to 0 when double clicked or via button if desired,
    // but here we let it stay where the user left it to feel like a real object
    dragX.set(0);
    dragY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="relative z-20 flex justify-center items-center w-full h-full touch-none">
      {/* Decorative Gold Glow behind the card */}
      <div className="absolute inset-x-0 -inset-y-10 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        onPan={handlePan}
        onDoubleClick={resetRotation}
        className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-[2.5rem] cursor-grab active:cursor-grabbing z-10"
      >
        <motion.div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[#111]"
        >
          {/* Draggable/Moving image layer */}
          <motion.img 
            style={{
              x: imgTranslateX,
              y: imgTranslateY,
              scale: 1.1
            }}
            src="/regenerated_image_1777319966035.png" 
            alt="Bolo de Pote" 
            className="w-[120%] h-[120%] object-contain origin-center pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent opacity-90 pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] pointer-events-none" />
        </motion.div>

        {/* 3D Floating elements */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] pointer-events-none"
        >
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl py-5 px-6 shadow-2xl flex flex-col items-center text-center">
             <h3 className="font-serif italic text-xl md:text-2xl text-white mb-1 drop-shadow-lg">Manual Completo</h3>
             <p className="text-[#D4AF37] text-[9px] md:text-[11px] font-bold tracking-[0.25em] uppercase drop-shadow">Gire para interagir</p>
          </div>
        </motion.div>

        <motion.div
          style={{ transform: "translateZ(120px)" }}
          className="absolute top-8 right-8 pointer-events-none bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
