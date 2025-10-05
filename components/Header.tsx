'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Menu, X, User, Phone } from 'lucide-react';

interface LogoSettings {
  useImage: boolean;
  showText: boolean;
  textColor: string;
  imageUrl: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
  badge?: number;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSettings, setLogoSettings] = useState<LogoSettings>({
    useImage: true,
    showText: true,
    textColor: 'blue-600',
    imageUrl: '/logo.jpg'
  });
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '+880 1234 567890',
    email: 'Mail.soheilbd5@gmail.com',
    address: 'Waz Online, Dhaka'
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
    
    // Fetch contact info from API
    fetch('/api/content?key=contactInfo')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setContactInfo(data);
        }
      })
      .catch(error => {
        console.error('Error loading contact info:', error);
      });
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Our Packages', href: '#packages' },
    { name: 'FTP/TV', href: '#ftp-tv' },
    { name: 'Contact', href: '#contact' },
    { name: 'Coverage', href: '#coverage' },
  ];

  // Function to get a random phone number from contact info
  const getRandomPhoneNumber = () => {
    const phoneNumbers = contactInfo.phone.split(',').map(num => num.trim()).filter(num => num);
    if (phoneNumbers.length === 0) return contactInfo.phone;
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };

  const handleCallNow = () => {
    const phoneNumber = getRandomPhoneNumber();
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg border-b border-blue-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {logoSettings.useImage && (
                <img 
                  src={logoSettings.imageUrl} 
                  alt="Waz Online Logo" 
                  className="logo-image w-14 h-14 rounded-lg transition-all duration-300"
                  onError={(e) => {
                    console.warn('Logo image failed to load, using fallback');
                    e.currentTarget.src = '/logo.jpg';
                  }}
                />
              )}
              {logoSettings.showText && (
                <span className="text-xl font-bold">
                  <span className={logoSettings.textColor === 'blue-600' ? 'text-blue-300' : 
                                   logoSettings.textColor === 'red-500' ? 'text-red-300' :
                                   logoSettings.textColor === 'green-600' ? 'text-green-300' :
                                   logoSettings.textColor === 'purple-600' ? 'text-purple-300' :
                                   'text-white'}>Waz</span>
                  <span className="text-white">Online</span>
                </span>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                        className={`relative text-sm font-medium transition-colors hover:text-blue-300 ${
                          item.active ? 'text-blue-300' : 'text-blue-100'
                        }`}
              >
                {item.name}
                {item.badge && (
                  <Badge className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 min-w-0 h-5">
                    {item.badge}
                  </Badge>
                )}
                        {item.active && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300" />
                        )}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={handleCallNow}
              className="bg-blue-600 hover:bg-blue-700 text-white border-0"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-blue-100 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }
                    }
                  }}
                          className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                            item.active ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                          }`}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.badge && (
                      <Badge className="bg-red-500 text-white text-xs">4</Badge>
                    )}
                  </div>
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  onClick={handleCallNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}