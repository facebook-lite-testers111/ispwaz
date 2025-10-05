'use client';

import { useState, useEffect } from 'react';
import DynamicCard from './DynamicCard';
import { MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface CoverageArea {
  id: string;
  area: string;
  status: string;
  description: string;
}

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

export default function CoverageSection() {
  console.log('CoverageSection component is rendering');
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
  const [coverageAreas, setCoverageAreas] = useState<CoverageArea[]>([]);

  useEffect(() => {
    // Load main page content from API
    fetch('/api/content?key=mainPageContent')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMainPageContent(data);
        }
      })
      .catch(error => {
        console.error('Error loading main page content:', error);
      });

    // Load coverage areas from API
    fetch('/api/content?key=coverageAreas')
      .then(res => res.json())
      .then(data => {
        if (data !== undefined && data !== null) {
          console.log('CoverageSection - Loaded from API');
          setCoverageAreas(data);
        } else {
          // Set default demo data if no areas exist (first time only)
          console.log('CoverageSection - Setting demo data');
          setCoverageAreas([
        {
          id: '1',
          area: 'Dhaka',
          status: 'Available',
          description: 'Full coverage available with high-speed internet'
        },
        {
          id: '2',
          area: 'Chittagong',
          status: 'Available',
          description: 'Complete service coverage in Chittagong area'
        },
        {
          id: '3',
          area: 'Dhanmondi',
          status: 'Coming Soon',
          description: 'Service expansion planned for next quarter'
        },
        {
          id: '4',
          area: 'Gulshan',
          status: 'Limited',
          description: 'Limited coverage in selected areas'
        }
      ]);
        }
      })
      .catch(error => {
        console.error('Error loading coverage areas:', error);
      });
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Available':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Coming Soon':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'Limited':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500';
      case 'Coming Soon':
        return 'bg-yellow-500';
      case 'Limited':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="coverage" className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {mainPageContent.coverageTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {mainPageContent.coverageSubtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-6 auto-rows-fr ${
          coverageAreas.length >= 3 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'max-w-2xl mx-auto'
        }`}>
          {coverageAreas.length === 0 ? (
            <div className="text-center py-8 text-gray-500 col-span-full">
              <p>No coverage areas available</p>
              <p className="text-sm">Check admin panel to add coverage areas</p>
            </div>
          ) : (
            coverageAreas.map((area) => (
              <div key={area.id} className="h-full">
                <DynamicCard 
                  data={area}
                  type="coverage"
                />
              </div>
            ))
          )}
        </div>

        {coverageAreas.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Coverage information will be updated soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}
