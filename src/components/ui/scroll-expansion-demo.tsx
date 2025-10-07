'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from './scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    poster: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    background: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Precision Weighing Excellence',
    date: 'Since 2005',
    scrollToExpand: 'Scroll to Discover More',
    about: {
      overview:
        'Scales & Software (K) Ltd has been transforming businesses across East Africa with cutting-edge weighing technology and comprehensive software solutions. Our commitment to precision and excellence has made us the trusted partner for industries ranging from dairy cooperatives to major industrial operations.',
      conclusion:
        'With nearly two decades of experience, we continue to innovate and provide unmatched precision in weighing solutions, backed by 24/7 technical support and maintenance services across Kenya, Uganda, and Rwanda.',
    },
  },
  image: {
    src: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1280',
    background: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Industrial Scale Solutions',
    date: 'East Africa',
    scrollToExpand: 'Scroll to Explore',
    about: {
      overview:
        'Our comprehensive range of industrial scales serves businesses across multiple sectors. From weighbridges for heavy-duty applications to precision laboratory equipment, we provide solutions that enhance business efficiency and profitability.',
      conclusion:
        'Every scale we provide comes with professional installation, calibration services, and ongoing technical support to ensure optimal performance and compliance with industry standards.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-white'>
        About Our Solutions
      </h2>
      <p className='text-lg mb-8 text-gray-200'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-gray-200'>
        {currentMedia.about.conclusion}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">Our Expertise</h3>
          <ul className="text-gray-200 space-y-2">
            <li>• Weighbridge Solutions</li>
            <li>• Industrial Scales</li>
            <li>• Retail Equipment</li>
            <li>• Precision Laboratory Scales</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">Our Promise</h3>
          <ul className="text-gray-200 space-y-2">
            <li>• 24/7 Technical Support</li>
            <li>• Professional Installation</li>
            <li>• OIML Certified Equipment</li>
            <li>• ISO 9001:2015 Quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CompanyShowcase = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default CompanyShowcase;