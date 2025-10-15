import React from 'react';

// Product images with names from the actual product catalog
const productData = [
  {
    name: "Industrial Scales",
    image: "/images/WhatsApp Image industrial scales.jpg"
  },
  {
    name: "Scales Equipment",
    image: "/images/SCALES IMAGE copy.jpg"
  },
  {
    name: "EHB Precision Scale",
    image: "/images/Screenshot_26-8-2025_21621_.jpeg"
  },
  {
    name: "XK315 Field Scale",
    image: "/images/XK315.jpg"
  },
  {
    name: "Weighbridge System",
    image: "/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg"
  },
  {
    name: "Weighing Solutions",
    image: "/images/WhatsApp Image 2025-09-30 at 21.33.46_d557234c.jpg"
  },
  {
    name: "Indicators & Software",
    image: "/images/Screenshot_26-8-2025_21832_.jpeg"
  },
  {
    name: "Weighing Software",
    image: "/images/Screenshot_26-8-2025_21816_.jpeg"
  },
  {
    name: "Accessories & Spares",
    image: "/images/WhatsApp Image 2025-10-01 at 03.22.01_e2866457.jpg"
  }
];

export const Component = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...productData, ...productData];
  
  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .product-label {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(220, 38, 38, 0.3);
        }
      `}</style>
      
      <div className="w-full h-64 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden flex items-center justify-center py-4">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full max-w-7xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((product, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 flex flex-col items-center"
                >
                  {/* Product image */}
                  <div className="w-[240px] h-[220px] relative rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to a default image if product image fails
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};