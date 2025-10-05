'use client';

import { useState, useEffect } from 'react';
import { Home, Package, Server, Phone } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export default function MobileNavigation() {
  const [activeItem, setActiveItem] = useState('home');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '01782223904 / 01792223905 / 01719259025',
    email: 'Mail.soheilbd5@gmail.com',
    address: 'Dhaka, Bangladesh'
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedContactInfo = localStorage.getItem('wazonline-contact');
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'packages', label: 'Packages', icon: Package, href: '#packages' },
    { id: 'services', label: 'Services', icon: Server, href: '#ftp-tv' },
    { id: 'call', label: 'Call', icon: Phone, href: '#contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveItem(item.id);
    
    if (item.id === 'call') {
      // Handle call functionality
      const phoneNumbers = contactInfo.phone.split(' / ');
      const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
      window.open(`tel:${randomPhone}`, '_self');
    } else if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Clean white background with subtle border */}
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="px-6 py-3">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="relative flex flex-col items-center justify-center py-2 px-4 transition-all duration-300 group"
                >
                  {/* Active state - prominent blue pill background */}
                  {isActive && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 rounded-full px-4 py-2 shadow-lg">
                        <div className="flex flex-col items-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Inactive state */}
                  {!isActive && (
                    <div className="flex flex-col items-center">
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${
                        'text-gray-400 group-hover:text-blue-500'
                      }`} />
                      <span className="text-xs font-medium mt-1 text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}