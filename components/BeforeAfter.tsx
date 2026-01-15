import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent | React.PointerEvent, info: any) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in info.point ? info.point.x : info.point.x; // Framer motion normalize points

    // Calculate percentage based on pointer position relative to container
    // However, Framer Motion drag constraints are easier for the handle.
    // Let's use a simpler approach: update state based on drag x position.
  };

  // Using native event handling for slider logic as it's often smoother for this specific UI pattern
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1 || !containerRef.current) return;
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    updateSlider(e.touches[0].clientX);
  };

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - left) / width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPosition(pos);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">La différence ZenMove</h2>
          <p className="text-stone-500">Glissez pour voir la transformation.</p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => updateSlider(e.clientX)}
        >
          {/* "Before" Image (Base layer) - Messy/Stressful */}
          <div className="absolute inset-0 bg-stone-300 flex items-center justify-center overflow-hidden">
            {/* Simulating an image with a div and pattern/color since we can use picsum */}
            <img
              src="/before-move.png"
              alt="Appartement en désordre"
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded text-red-800 font-bold shadow-sm">
              AVANT
            </div>
          </div>

          {/* "After" Image (Top layer, clipped) - Clean/Zen */}
          <div
            className="absolute inset-0 bg-blue-50 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="/after-move.png"
              alt="Appartement zen"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 bg-white/90 px-4 py-2 rounded text-green-800 font-bold shadow-sm">
              APRÈS
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-stone-400">
              <GripVertical size={20} />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4 text-sm font-medium text-stone-400 px-2">
          <span>Solo, stressé, dépassé</span>
          <span>Accompagné, serein, installé</span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;