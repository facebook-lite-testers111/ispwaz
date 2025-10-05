'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DynamicCard from './DynamicCard';
import { Check } from 'lucide-react';

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

export default function Pricing() {
  console.log('Pricing component is rendering');
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
  const [packages, setPackages] = useState([
    {
      id: '1',
      type: 'REGULAR',
      name: 'Regular 840',
      price: 840,
      color: 'bg-yellow-100',
      textColor: 'text-blue-600',
      features: [
        '40 Mb/s ( 20 Mb/s + 20 Mb/s Bonus) Internet (Shared)',
        'Bufferless Cached Content',
        'Up to 100 Mb/s VAS',
        'Public IP (IPv6)'
      ]
    },
    {
      id: '2',
      type: 'REGULAR',
      name: 'Regular 1050',
      price: 1050,
      color: 'bg-yellow-100',
      textColor: 'text-blue-600',
      features: [
        '60 Mb/s ( 40 Mb/s + 20 Mb/s Bonus) Internet (Shared)',
        'Bufferless Cached Content',
        'Up to 150 Mb/s VAS',
        'Public IP (IPv6)'
      ]
    },
    {
      id: '3',
      type: 'REGULAR',
      name: 'Regular 1260',
      price: 1260,
      color: 'bg-yellow-100',
      textColor: 'text-blue-600',
      features: [
        '70 Mb/s ( 50 Mb/s + 20 Mb/s Bonus)',
        'Bufferless Cached Content',
        'Up to 150 Mb/s VAS',
        'Public IP (IPv6)'
      ]
    },
    {
      id: '4',
      type: 'TURBO',
      name: 'Turbo 1200',
      price: 1200,
      color: 'bg-blue-100',
      textColor: 'text-green-600',
      features: [
        '30 Mb/s Internet',
        'Upto 200 Mb/s VAS Speed',
        'Bufferless YT, FB, CDN',
        'Public IP (IPv6)'
      ]
    }
  ]);

  // Load packages from API on component mount
  useEffect(() => {
    fetch('/api/content?key=packages')
      .then(res => res.json())
      .then(data => {
        if (data !== undefined && data !== null) {
          console.log('Pricing - Loaded packages from API:', data);
          setPackages(data);
        }
      })
      .catch(error => {
        console.error('Error loading packages:', error);
      });
  }, []);

  // Load main page content from API
  useEffect(() => {
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
  }, []);

  // Note: Packages are saved manually from admin panel, not automatically

  return (
    <section id="packages" className="py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {mainPageContent.packagesTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {mainPageContent.packagesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {packages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No packages available</p>
              <p className="text-sm">Check admin panel to add packages</p>
            </div>
          ) : (
            packages.map((pkg) => (
              <div key={pkg.id} className="h-full">
                <DynamicCard 
                  data={pkg}
                  type="package"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}