'use client';

import { useState, useEffect } from 'react';
import DynamicCard from './DynamicCard';
import { Gift, Star } from 'lucide-react';

interface Offer {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
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

export default function OffersSection() {
  console.log('OffersSection component is rendering');
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
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    // Load main page content
    const savedMainPageContent = localStorage.getItem('wazonline-main-page-content');
    if (savedMainPageContent) {
      setMainPageContent(JSON.parse(savedMainPageContent));
    }

    const savedOffers = localStorage.getItem('wazonline-offers');
    
    if (savedOffers) {
      setOffers(JSON.parse(savedOffers));
    } else {
      // Demo data - only for display, not saved to localStorage
      console.log('OffersSection - Setting demo data');
      setOffers([
        {
          id: '1',
          title: 'নতুন সংযোগের জন্য ব্রেকার চার্জ ২০০/- টেকনিশিয়ান সার্ভিস ফ্রি।',
          description: 'New connection breaker charge 200/- Technician service free.',
          isActive: true
        },
        {
          id: '2',
          title: 'Make a Referral and Earn BDT 500!',
          description: 'বন্ধুদের রেফার করে ৫০০ টাকা পুরস্কার নিয়ে নিন',
          isActive: true
        },
        {
          id: '3',
          title: '500 BDT Discount on Connection Charge',
          description: 'নতুন সংযোগে ৫০০ টাকা ছাড়',
          isActive: true
        },
        {
          id: '4',
          title: 'Free Connection Charge on 4 Months Advance Payment',
          description: '৪ মাসের অগ্রিম চার্জ প্রদানে ফ্রি কানেকশন চার্জ',
          isActive: true
        }
      ]);
    }
  }, []);

  return (
    <section id="offers" className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {mainPageContent.offersTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {mainPageContent.offersSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {offers.length === 0 ? (
            <div className="text-center py-8 text-gray-500 col-span-full">
              <p>No offers available</p>
              <p className="text-sm">Check admin panel to add offers</p>
            </div>
          ) : (
            offers.map((offer) => (
              <div key={offer.id} className="h-full">
                <DynamicCard 
                  data={offer}
                  type="offer"
                />
              </div>
            ))
          )}
        </div>

        {offers.length === 0 && (
          <div className="text-center py-12">
            <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Special offers will be announced soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}
