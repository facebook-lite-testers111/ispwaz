'use client';

import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LogoSettings {
  useImage: boolean;
  showText: boolean;
  textColor: string;
  imageUrl: string;
}

export default function Footer() {
  const [logoSettings, setLogoSettings] = useState<LogoSettings>({
    useImage: true,
    showText: true,
    textColor: 'blue-600',
    imageUrl: '/logo.jpg'
  });

  useEffect(() => {
    // Fetch logo settings from API
    fetch('/api/content?key=logoSettings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setLogoSettings(data);
        }
      })
      .catch(error => {
        console.error('Error loading logo settings:', error);
      });
  }, []);
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo Section - No Background */}
          <div className="mb-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4">
              {logoSettings.useImage && (
                <img 
                  src={logoSettings.imageUrl} 
                  alt="Waz Online Logo" 
                  className="logo-image w-24 h-24 rounded-xl transition-all duration-300"
                  onError={(e) => {
                    console.warn('Logo image failed to load, using fallback');
                    e.currentTarget.src = '/logo.jpg';
                  }}
                />
              )}
              {logoSettings.showText && (
                <div className="text-center">
                  <span className="text-2xl font-bold block">
                    <span className={logoSettings.textColor === 'blue-600' ? 'text-blue-300' : 
                                     logoSettings.textColor === 'red-500' ? 'text-red-300' :
                                     logoSettings.textColor === 'green-600' ? 'text-green-300' :
                                     logoSettings.textColor === 'purple-600' ? 'text-purple-300' :
                                     'text-white'}>Waz</span>
                    <span className="text-white">Online</span>
                  </span>
                  <p className="text-sm text-blue-200 mt-1 font-medium">Premium Internet Service</p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Copyright */}
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-blue-100 text-sm font-medium">
              © 2025 Waz Online | All Rights Reserved
            </p>
            <p className="text-blue-200 text-xs mt-1">
              Reliable • Fast • Affordable Internet Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}