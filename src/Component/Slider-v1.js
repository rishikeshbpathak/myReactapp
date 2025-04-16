import React, { useState, useEffect, useRef } from 'react';

export default function Slider() {
  const slides = [
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Lls-ESp8-xo',
      // fallbackImage: 'https://freerangeamerican.us/wp-content/uploads/2021/06/john-wick-5-posters.jpeg',
      title: 'John Wick 5 Trailer',
      description: "The legendary assassin returns for another action-packed adventure."
    },
    {
      type: 'image',
      src: 'https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg',
      title: 'The Dark Knight Rises',
      description: "The epic conclusion to Christopher Nolan's Batman trilogy."
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Lls-ESp8-xo', // Empty video URL (will fallback to image)
      // fallbackImage: 'https://picklemonkads.in/wp-content/uploads/2022/07/PM_FilmPublicity_1920x700Artboard-1-100.jpg.webp',
      title: 'Upcoming Movie',
      description: "Check out our latest releases coming soon."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [slides.length, isPaused]);

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsVideoLoading(true);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsVideoLoading(true);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsVideoLoading(true);
  };

  const renderSlideContent = (slide) => {
    if (slide.type === 'video' && slide.src) {
      return (
        <div className="relative h-full w-full">
          <iframe
            src={`${slide.src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.src.split('/').pop()}`}
            title={slide.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            onLoad={() => setIsVideoLoading(false)}
            onError={() => setIsVideoLoading(true)}
          />
          {isVideoLoading && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.fallbackImage || slide.src})` }}
            />
          )}
        </div>
      );
    }
    
    return (
      <div 
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.src || slide.fallbackImage})` }}
      />
    );
  };

  return (
    <div 
      className="h-[200px] sm:h-[600px] w-full overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {renderSlideContent(slide)}
          
          {/* Slide caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}