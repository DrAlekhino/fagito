import React, { useEffect, useState } from 'react';

export default function BackgroundImage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    {
      src: './images/home-1-sm.avif',
      srcSet: './images/home-1-sm.avif 639w, ./images/home-1-md.avif 767w, ./images/home-1-lg.avif 1024w, ./images/home-1-xl.avif 1400w',
      alt: "Delicious food"
    },
    {
      src: '/images/home-2-sm.avif',
      srcSet: './images/home-2-sm.avif 639w, ./images/home-2-md.avif 767w, ./images/home-2-lg.avif 1024w, ./images/home-2-xl.avif 1400w',
      alt: "Delicious food"
    },
    {
      src: "/images/home-3-sm.avif",
      srcSet: "/images/home-3-sm.avif 639w, /images/home-3-md.avif 767w, /images/home-3-lg.avif 1024w, /images/home-3-xl.avif 1400w",
      alt: "Delicious food"
    },
    {
      src: "/images/home-4-sm.avif",
      srcSet: "/images/home-4-sm.avif 639w, /images/home-4-md.avif 767w, /images/home-4-lg.avif 1024w, /images/home-4-xl.avif 1400w",
      alt: "Our Cocktails"
    },
    {
      src: "/images/home-5-sm.avif",
      srcSet: "/images/home-5-sm.avif 639w, /images/home-5-md.avif 767w, /images/home-5-lg.avif 1024w, /images/home-5-xl.avif 1400w",
      alt: "Wine paired dinner"
    },
    {
      src: "/images/home-6-sm.avif",
      srcSet: "/images/home-6-sm.avif 639w, /images/home-6-md.avif 767w, /images/home-6-lg.avif 1024w, /images/home-6-xl.avif 1400w",
      alt: "Delicious food"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ${index === slideIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(max-width: 639px) 639px, (max-width: 767px) 767px, (max-width: 1024px) 1024px, 1400px"
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
      {/*The dots */}
      <aside className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-600 ${index === slideIndex ? 'bg-gray-700' : 'bg-gray-400'}`}
            onClick={() => setSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </aside>
    </section>
  );
}
