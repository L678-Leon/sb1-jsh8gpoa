import React, { useState, useEffect } from 'react';

interface RandomBackgroundImagesProps {
  images: string[];
}

interface ImageElement {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  isVisible: boolean;
}

export const RandomBackgroundImages: React.FC<RandomBackgroundImagesProps> = ({ images }) => {
  const [backgroundImages, setBackgroundImages] = useState<ImageElement[]>([]);

  useEffect(() => {
    const maxImages = 6; // Maximum number of images on screen at once
    let imageCounter = 0;

    const createRandomImage = (): ImageElement => {
      return {
        id: imageCounter++,
        src: images[Math.floor(Math.random() * images.length)],
        x: Math.random() * 80, // 0-80% from left
        y: Math.random() * 80, // 0-80% from top
        size: 150 + Math.random() * 200, // 150px to 350px
        opacity: 0.1 + Math.random() * 0.15, // 0.1 to 0.25 opacity
        isVisible: false,
      };
    };

    const addImage = () => {
      setBackgroundImages(prev => {
        if (prev.length >= maxImages) return prev;
        
        const newImage = createRandomImage();
        const updatedImages = [...prev, newImage];
        
        // Make image visible after a brief delay
        setTimeout(() => {
          setBackgroundImages(current => 
            current.map(img => 
              img.id === newImage.id ? { ...img, isVisible: true } : img
            )
          );
        }, 100);

        return updatedImages;
      });
    };

    const removeRandomImage = () => {
      setBackgroundImages(prev => {
        if (prev.length === 0) return prev;
        
        const visibleImages = prev.filter(img => img.isVisible);
        if (visibleImages.length === 0) return prev;
        
        const randomIndex = Math.floor(Math.random() * visibleImages.length);
        const imageToRemove = visibleImages[randomIndex];
        
        return prev.map(img => 
          img.id === imageToRemove.id ? { ...img, isVisible: false } : img
        ).filter(img => img.id !== imageToRemove.id || img.isVisible);
      });
    };

    // Add initial images
    const initialInterval = setInterval(() => {
      addImage();
    }, 800);

    // Stop adding initial images after 5 seconds
    setTimeout(() => {
      clearInterval(initialInterval);
      
      // Start main animation cycle
      const mainInterval = setInterval(() => {
        if (Math.random() > 0.5) {
          addImage();
        } else {
          removeRandomImage();
        }
      }, 2000 + Math.random() * 3000); // 2-5 seconds random interval

      return () => clearInterval(mainInterval);
    }, 5000);

    return () => clearInterval(initialInterval);
  }, [images]);

  // Clean up disappeared images
  useEffect(() => {
    const cleanup = setInterval(() => {
      setBackgroundImages(prev => prev.filter(img => img.isVisible));
    }, 10000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {backgroundImages.map((image) => (
        <div
          key={image.id}
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            image.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${image.x}%`,
            top: `${image.y}%`,
            width: `${image.size}px`,
            height: `${image.size}px`,
            opacity: image.isVisible ? image.opacity : 0,
          }}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-full object-cover rounded-lg"
            style={{ 
              filter: 'blur(1px) brightness(0.8)',
              mixBlendMode: 'multiply'
            }}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400';
            }}
          />
        </div>
      ))}
    </div>
  );
};