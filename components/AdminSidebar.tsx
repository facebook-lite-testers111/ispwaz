'use client';

import { useState, useEffect } from 'react';
import { 
  Package, 
  Server, 
  Tv, 
  MapPin, 
  Badge, 
  Mail, 
  Edit, 
  Monitor,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

interface LogoSettings {
  useImage: boolean;
  showText: boolean;
  imageUrl: string;
  textColor: string;
}

interface AdminSettings {
  username: string;
  password: string;
}

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  unreadCount: number;
}

export default function AdminSidebar({ activeTab, onTabChange, onLogout, unreadCount }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [logoSettings, setLogoSettings] = useState<LogoSettings>({
    useImage: true,
    showText: true,
    imageUrl: '/logo.jpg',
    textColor: 'blue-600'
  });
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    username: 'wazonlin',
    password: 'Sadik@2023'
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedLogoSettings = localStorage.getItem('wazonline-logo-settings');
      if (savedLogoSettings) {
        setLogoSettings(JSON.parse(savedLogoSettings));
      }
      
      const savedAdminSettings = localStorage.getItem('wazonline-admin-settings');
      if (savedAdminSettings) {
        setAdminSettings(JSON.parse(savedAdminSettings));
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  }, []);

  const menuItems = [
    { id: 'designs', label: 'Card Designs', icon: Sparkles },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'contact', label: 'Contact Info', icon: Edit },
    { id: 'ftp', label: 'FTP Services', icon: Server },
    { id: 'tv', label: 'TV Services', icon: Tv },
    { id: 'coverage', label: 'Coverage', icon: MapPin },
    { id: 'offers', label: 'Offers', icon: Badge },
    { id: 'messages', label: 'Messages', icon: Mail, badge: unreadCount },
    { id: 'mainpage', label: 'Main Page', icon: Monitor },
    { id: 'logo', label: 'Logo', icon: Settings },
    { id: 'admin', label: 'Admin', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 
        shadow-2xl border-r border-blue-700 z-50 transition-all duration-300 ease-in-out
        ${isCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              {logoSettings.useImage && (
                <img 
                  src={logoSettings.imageUrl} 
                  alt="Waz Online Logo" 
                  className="logo-image w-8 h-8 rounded-lg transition-all duration-300"
                  onError={(e) => {
                    console.warn('Logo image failed to load, using fallback');
                    e.currentTarget.src = '/logo.jpg';
                  }}
                />
              )}
              <div>
                <h1 className="text-lg font-bold text-white">Waz Online</h1>
                <p className="text-xs text-blue-200">Admin Panel</p>
              </div>
            </div>
          )}
          
          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-200"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
                  }
                `}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-blue-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            {!isCollapsed && (
              <div>
                <p className="text-white text-sm font-medium">Admin</p>
                <p className="text-blue-200 text-xs">{adminSettings.username}</p>
              </div>
            )}
          </div>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/50 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content Spacer */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'ml-64'}`} />
    </>
  );
}
