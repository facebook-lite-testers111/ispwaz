'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, 
  Users, 
  Wifi, 
  Network, 
  Zap, 
  Clock 
} from 'lucide-react';

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

export default function Features() {
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
      console.log('Features - Loading main page content:', {
        savedMainPageContent: savedMainPageContent ? JSON.parse(savedMainPageContent) : 'none'
      });
      
      if (savedMainPageContent) {
        setMainPageContent(JSON.parse(savedMainPageContent));
      }
    } catch (error) {
      console.error('Error loading main page content:', error);
    }
  }, []);
  const features = [
    {
      icon: Package,
      title: 'Unlimited Package',
      description: 'We have unlimited monthly package with reasonable service charge.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Friendly Employee',
      description: 'We have professional & friendly employee working on Exord Online.',
      color: 'text-blue-600'
    },
    {
      icon: Wifi,
      title: 'Stable Connection',
      description: "Exord's has super strong & stable internet connectivity with no downtime.",
      color: 'text-blue-600'
    },
    {
      icon: Network,
      title: 'Multiple Upstream',
      description: 'Exordonline pass the request to more than one upstream server.',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Fiber Optic Network',
      description: 'With our fiber-optic network, you can get a fast internet connection.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Customer Support',
      description: 'We provide our customers knowledgeable advice to gain maximum benefit.',
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 relative">
            {/* Network Signal Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-blue-600 rounded-full network-node"></div>
              <div className="absolute w-8 h-8 border border-blue-400 rounded-full signal-wave"></div>
              <div className="absolute w-10 h-10 border border-blue-300 rounded-full signal-wave" style={{animationDelay: '0.5s'}}></div>
            </div>
            {/* Network Flow Lines */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-blue-500 network-flow" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-blue-400 network-flow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-blue-300 network-flow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {mainPageContent.featuresTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {mainPageContent.featuresSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="relative group perspective-1000">
              <Card className="relative bg-white border-0 shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-y-2 hover:rotate-x-1 hover:shadow-3xl">
                {/* Modern Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"></div>
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6, #06b6d4)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 3s ease infinite'
                }}></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} transition-transform duration-300 hover:scale-110`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}