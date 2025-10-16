"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

import { Button } from "./button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

// Image Modal Component
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string; 
  title: string; 
}) => {
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-7xl max-h-[90vh] mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10"
        >
          ✕ Close
        </button>
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-200 text-sm">CLASS 2 - Medium Quality Weighbridge</p>
        </div>
      </div>
    </div>
  );
};
const Gallery4 = ({
  title = "Complete Solution Categories",
  description = "Comprehensive weighing solutions for every industry and application across East Africa",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', title: '' });

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <>
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-red-600">
              {title}
            </h2>
            <p className="max-w-lg text-black">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto text-black hover:bg-black/10"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto text-black hover:bg-black/10"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div
                  className="group rounded-xl cursor-pointer"
                  onClick={() => {
                    window.location.href = item.href;
                  }}
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.id === 'indicators' ? '/images/Screenshot_26-8-2025_1025_.jpeg' :
                           item.id === 'field-scales' ? '/images/Screenshot_26-8-2025_21456_.jpeg' :
                           item.id === 'precision-scales' ? '/images/Screenshot_26-8-2025_21621_.jpeg' :
                           item.id === 'industrial-scales' ? '/images/WhatsApp Image industrial scales.jpg' :
                           item.id === 'retail-scales' ? '/images/Screenshot_26-8-2025_21549_.jpeg' :
                           item.id === 'weighing-software' ? '/images/Screenshot_26-8-2025_21816_.jpeg' :
                           item.id === 'personal-digital-assistants' ? '/images/Screenshot_26-8-2025_21721_.jpeg' :
                           item.id === 'accessories-consumables-and-spares' ? '/images/WhatsApp Image 2025-10-01 at 03.22.01_e2866457.jpg' :
                           item.id === 'weighbridges' ? '/images/NEW.jpg' :
                           item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        objectFit: item.id === 'precision-scales' || item.id === 'weighing-software' || item.id === 'personal-digital-assistants' || item.id === 'retail-scales' || item.id === 'accessories-consumables-and-spares' || item.id === 'indicators' ? 'contain' : 'cover',
                        backgroundColor: item.id === 'precision-scales' || item.id === 'weighing-software' || item.id === 'personal-digital-assistants' || item.id === 'retail-scales' || item.id === 'accessories-consumables-and-spares' || item.id === 'indicators' ? '#f8f9fa' : 'transparent'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${item.image} for ${item.title}`);
                        e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg';
                      }}
                      onLoad={() => console.log(`Successfully loaded image for ${item.title}`)}
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-gray-200">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-red-400">
                        Learn more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-red-600" : "bg-white/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
    
    <ImageModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      imageSrc={modalImage.src}
      title={modalImage.title}
    />
    </>
  );
};

export { Gallery4 };