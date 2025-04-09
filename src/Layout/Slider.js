import React from 'react'
import { useEffect } from 'react';

export default function Slider() {
  useEffect(() => {
    const slider = document.querySelector('#slider');
    const moveSlide = () => {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left, behavior: 'smooth' });
        }

        setTimeout(moveSlide, 2000);
    };

    const timeout = setTimeout(moveSlide, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div class="h-100  w-full overflow-hidden flex flex-nowrap text-center" id="slider">
    <div class="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">Your Big Idea</h2>
        <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
    </div>
    <div class="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
        <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
    </div>
    <div class="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">React, Vue, and HTML</h2>
        <p class="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
    </div>
</div>

    </div>
  )
}
