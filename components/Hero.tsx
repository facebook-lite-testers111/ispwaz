'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MainPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  featuresTitle: string;
  featuresSubtitle: string;
  packagesTitle: string;
  packagesSubtitle: string;
  ftpTitle: string;
  ftpSubtitle: string;
  coverageTitle: string;
  coverageSubtitle: string;
  offersTitle: string;
  offersSubtitle: string;
}

export default function Hero() {
  const [mainPageContent, setMainPageContent] = useState<MainPageContent>({
    heroTitle: 'High Speed Broadband Internet in Waz Online',
    heroSubtitle: 'Reliable, Affordable & 100% Fiber Optic Connection for Homes and Businesses',
    heroImage: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600',
    featuresTitle: 'Exciting features',
    featuresSubtitle: 'Join now and enjoy the exciting features from Waz Online',
    packagesTitle: 'Flexible pricing',
    packagesSubtitle: 'You check our reasonable and flexible pricing below',
    ftpTitle: 'FTP/TV Services',
    ftpSubtitle: 'Access our FTP and TV services',
    coverageTitle: 'Service Coverage',
    coverageSubtitle: 'Check if we cover your area',
    offersTitle: 'Special Offers',
    offersSubtitle: 'Limited time offers and promotions'
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedMainPageContent = localStorage.getItem('wazonline-main-page-content');
      if (savedMainPageContent) {
        setMainPageContent(JSON.parse(savedMainPageContent));
      }
    } catch (error) {
      console.error('Error loading main page content:', error);
    }
  }, []);

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {mainPageContent.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {mainPageContent.heroSubtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Get a Connection
            </Button>
            
            {/* Pagination dots */}
            <div className="flex space-x-2 pt-8">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src={mainPageContent.heroImage}
              alt="Internet connectivity illustration"
              className="hero-image shadow-lg"
              onError={(e) => {
                console.warn('Hero image failed to load, using fallback');
                e.currentTarget.src = 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}