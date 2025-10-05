'use client';

import { useState, useEffect } from 'react';
import DynamicCard from './DynamicCard';
import { Server, ExternalLink, Play, Phone } from 'lucide-react';

interface FTPService {
  id: string;
  name: string;
  description: string;
  link: string;
  isActive: boolean;
}

interface TVService {
  id: string;
  name: string;
  description: string;
  link: string;
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

export default function FTPTVSection() {
  console.log('FTPTVSection component is rendering');
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
  const [ftpServices, setFtpServices] = useState<FTPService[]>([]);
  const [tvServices, setTvServices] = useState<TVService[]>([]);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return;
    
    try {
      // Load main page content
      const savedMainPageContent = localStorage.getItem('wazonline-main-page-content');
      if (savedMainPageContent) {
        setMainPageContent(JSON.parse(savedMainPageContent));
      }

      const savedFtpServices = localStorage.getItem('wazonline-ftp-services');
      const savedTvServices = localStorage.getItem('wazonline-tv-services');
      
      console.log('FTPTVSection - Loading services:', {
        savedFtpServices: savedFtpServices ? JSON.parse(savedFtpServices) : 'none',
        savedTvServices: savedTvServices ? JSON.parse(savedTvServices) : 'none'
      });
      
      console.log('FTPTVSection - Current state:', {
        ftpServices: ftpServices,
        tvServices: tvServices
      });
      
      if (savedFtpServices) {
        setFtpServices(JSON.parse(savedFtpServices));
      } else {
        // Demo data - only for display, not saved to localStorage
        setFtpServices([
          {
            id: '1',
            name: 'Waz Online FTP Server',
            description: 'Access our high-speed FTP server for file sharing and downloads',
            link: 'http://103.83.83.3:3000',
            isActive: true
          },
          {
            id: '2',
            name: 'Media FTP',
            description: 'Download movies, TV shows, and other media content',
            link: 'ftp://media.wazonline.net',
            isActive: true
          },
          {
            id: '3',
            name: 'Software Repository',
            description: 'Download software, games, and applications',
            link: 'ftp://software.wazonline.net',
            isActive: true
          },
          {
            id: '4',
            name: 'Document Archive',
            description: 'Access documents, PDFs, and educational materials',
            link: 'ftp://docs.wazonline.net',
            isActive: true
          },
          {
            id: '5',
            name: 'Music Library',
            description: 'Download music, albums, and audio content',
            link: 'ftp://music.wazonline.net',
            isActive: true
          },
          {
            id: '6',
            name: 'Game Server',
            description: 'Download games, mods, and gaming content',
            link: 'ftp://games.wazonline.net',
            isActive: true
          }
        ]);
      }

      if (savedTvServices) {
        setTvServices(JSON.parse(savedTvServices));
      } else {
        // Demo data - only for display, not saved to localStorage
        setTvServices([
          {
            id: '1',
            name: 'IPTV Live TV',
            description: 'Watch live TV channels with high quality streaming',
            link: 'http://iptv.wazonline.net',
            isActive: true
          },
          {
            id: '2',
            name: 'On-Demand Movies',
            description: 'Stream movies and TV series on demand',
            link: 'http://movies.wazonline.net',
            isActive: true
          },
          {
            id: '3',
            name: 'Sports Channel',
            description: 'Live sports events and sports news',
            link: 'http://sports.wazonline.net',
            isActive: true
          },
          {
            id: '4',
            name: 'Kids Entertainment',
            description: 'Cartoons, educational shows, and kids content',
            link: 'http://kids.wazonline.net',
            isActive: true
          },
          {
            id: '5',
            name: 'News & Documentaries',
            description: 'Latest news, documentaries, and current affairs',
            link: 'http://news.wazonline.net',
            isActive: true
          },
          {
            id: '6',
            name: 'Music Videos',
            description: 'Watch music videos, concerts, and live performances',
            link: 'http://music.wazonline.net',
            isActive: true
          },
          {
            id: '7',
            name: 'Educational Content',
            description: 'Educational programs, tutorials, and learning materials',
            link: 'http://education.wazonline.net',
            isActive: true
          },
          {
            id: '8',
            name: 'International Channels',
            description: 'International TV channels from around the world',
            link: 'http://international.wazonline.net',
            isActive: true
          }
        ]);
      }
    } catch (error) {
      console.error('Error loading FTP/TV services:', error);
    }
  }, []);

  const handleServiceClick = (link: string) => {
    window.open(link, '_blank');
  };

  // Hide entire section if both FTP and TV have 0 active services
  const activeFtpCount = ftpServices.filter(s => s.isActive).length;
  const activeTvCount = tvServices.filter(s => s.isActive).length;
  
  if (activeFtpCount === 0 && activeTvCount === 0) {
    return null;
  }

  return (
    <section id="ftp-tv" className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {mainPageContent.ftpTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {mainPageContent.ftpSubtitle}
          </p>
        </div>

        <div className={`grid gap-8 ${activeFtpCount > 0 && activeTvCount > 0 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-3xl mx-auto'}`}>
          {/* FTP Services - Only show if there are active services */}
          {activeFtpCount > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Server className="w-6 h-6 mr-2 text-purple-600" />
              FTP Services
              <span className="ml-2 text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">({activeFtpCount} active)</span>
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {ftpServices.filter(s => s.isActive).map((service) => (
                <div key={service.id} className="h-full">
                  <DynamicCard 
                    data={service}
                    type="ftp"
                    onClick={() => handleServiceClick(service.link)}
                  />
                </div>
              ))}
            </div>
          </div>
          )}

          {/* TV Services - Only show if there are active services */}
          {activeTvCount > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Play className="w-6 h-6 mr-2 text-indigo-600" />
              TV Services
              <span className="ml-2 text-sm text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">({activeTvCount} active)</span>
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {tvServices.filter(s => s.isActive).map((service) => (
                <div key={service.id} className="h-full">
                  <DynamicCard 
                    data={service}
                    type="ftp"
                    onClick={() => handleServiceClick(service.link)}
                  />
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
