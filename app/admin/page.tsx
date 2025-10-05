'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Trash2, Save, RotateCcw, Phone, Mail, MapPin, Server, Tv, LogOut, Package, Edit, Image, Monitor, Eye, Sparkles, Check, Star, Gift, Heart, Zap, Shield, Globe, Wifi, Download, Upload, Users, Clock, Award, Target, Rocket, Crown, Diamond, Flame, TrendingUp, Activity, Box, Layers } from 'lucide-react';
import AdminLogin from '@/components/AdminLogin';
import AdminSidebar from '@/components/AdminSidebar';
import DesignShowcase from '@/components/DesignShowcase';

interface Package {
  id: string;
  type: string;
  name: string;
  price: number;
  color: string;
  textColor: string;
  features: string[];
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

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

interface CoverageArea {
  id: string;
  area: string;
  status: string;
  description: string;
}

interface Offer {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface LogoSettings {
  useImage: boolean;
  showText: boolean;
  textColor: string;
  imageUrl: string;
}

interface AdminSettings {
  username: string;
  password: string;
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

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('designs');
  const [packages, setPackages] = useState<Package[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '01782223904 / 01792223905 / 01719259025',
    email: 'Mail.soheilbd5@gmail.com',
    address: 'Dhaka, Bangladesh'
  });
  const [ftpServices, setFtpServices] = useState<FTPService[]>([]);
  const [tvServices, setTvServices] = useState<TVService[]>([]);
  const [coverageAreas, setCoverageAreas] = useState<CoverageArea[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [logoSettings, setLogoSettings] = useState<LogoSettings>({
    useImage: true,
    showText: true,
    textColor: 'blue-600',
    imageUrl: '/logo.jpg'
  });
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    username: 'wazonlin',
    password: 'Sadik@2023'
  });
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

  const [newPackage, setNewPackage] = useState<Partial<Package>>({
    type: 'REGULAR',
    name: '',
    price: 0,
    color: 'bg-yellow-100',
    textColor: 'text-blue-600',
    features: []
  });
  const [newFtpService, setNewFtpService] = useState<Partial<FTPService>>({
    name: '',
    description: '',
    link: '',
    isActive: true
  });
  const [newTvService, setNewTvService] = useState<Partial<TVService>>({
    name: '',
    description: '',
    link: '',
    isActive: true
  });
  const [newCoverageArea, setNewCoverageArea] = useState<Partial<CoverageArea>>({
    area: '',
    status: 'Available',
    description: ''
  });
  const [newOffer, setNewOffer] = useState<Partial<Offer>>({
    title: '',
    description: '',
    isActive: true
  });
  const [editingPackage, setEditingPackage] = useState<string | null>(null);
  const [editingFtpService, setEditingFtpService] = useState<string | null>(null);
  const [editingTvService, setEditingTvService] = useState<string | null>(null);
  const [editingCoverageArea, setEditingCoverageArea] = useState<string | null>(null);
  const [editingOffer, setEditingOffer] = useState<string | null>(null);

  // Check authentication and load data from localStorage on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem('admin-authenticated') === 'true';
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      const savedPackages = localStorage.getItem('wazonline-packages');
      const savedContactInfo = localStorage.getItem('wazonline-contact');
      const savedFtpServices = localStorage.getItem('wazonline-ftp-services');
      const savedTvServices = localStorage.getItem('wazonline-tv-services');
      const savedCoverageAreas = localStorage.getItem('wazonline-coverage-areas');
      const savedOffers = localStorage.getItem('wazonline-offers');
      const savedMessages = localStorage.getItem('wazonline-messages');
      const savedLogoSettings = localStorage.getItem('wazonline-logo-settings');
      const savedAdminSettings = localStorage.getItem('wazonline-admin-settings');
      const savedMainPageContent = localStorage.getItem('wazonline-main-page-content');
      
      if (savedPackages) {
        setPackages(JSON.parse(savedPackages));
      }
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      }
      if (savedFtpServices) {
        setFtpServices(JSON.parse(savedFtpServices));
      } else {
        // Demo FTP services
        const demoFtpServices = [
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
        ];
        setFtpServices(demoFtpServices);
      }
      if (savedTvServices) {
        setTvServices(JSON.parse(savedTvServices));
      } else {
        // Demo TV services
        const demoTvServices = [
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
        ];
        setTvServices(demoTvServices);
      }
      if (savedCoverageAreas) {
        setCoverageAreas(JSON.parse(savedCoverageAreas));
      } else {
        // Demo coverage areas
        const demoCoverageAreas = [
          {
            id: '1',
            area: 'Waz Online',
            status: 'Available',
            description: 'Full coverage available with high-speed internet'
          },
          {
            id: '2',
            area: 'Maniknagar',
            status: 'Available',
            description: 'Complete service coverage in Maniknagar area'
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
        ];
        setCoverageAreas(demoCoverageAreas);
      }
      
      if (savedOffers) {
        setOffers(JSON.parse(savedOffers));
      } else {
        // Demo offers
        const demoOffers = [
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
        ];
        setOffers(demoOffers);
      }
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      if (savedLogoSettings) {
        try {
          setLogoSettings(JSON.parse(savedLogoSettings));
        } catch (error) {
          console.error('Error loading logo settings:', error);
        }
      }
      if (savedAdminSettings) {
        try {
          setAdminSettings(JSON.parse(savedAdminSettings));
        } catch (error) {
          console.error('Error loading admin settings:', error);
        }
      }
      if (savedMainPageContent) {
        try {
          setMainPageContent(JSON.parse(savedMainPageContent));
        } catch (error) {
          console.error('Error loading main page content:', error);
        }
      }
    }
  }, []);


  const addPackage = () => {
    if (newPackage.name && newPackage.price) {
      const packageToAdd: Package = {
        id: Date.now().toString(),
        type: newPackage.type || 'REGULAR',
        name: newPackage.name,
        price: newPackage.price,
        color: newPackage.color || 'bg-yellow-100',
        textColor: newPackage.textColor || 'text-red-600',
        features: newPackage.features || []
      };
      setPackages([...packages, packageToAdd]);
      setNewPackage({
        type: 'REGULAR',
        name: '',
        price: 0,
        color: 'bg-yellow-100',
        textColor: 'text-blue-600',
        features: []
      });
    }
  };

  const deletePackage = (id: string) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const updatePackage = (id: string, updatedPackage: Partial<Package>) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, ...updatedPackage } : pkg
    ));
    setEditingPackage(null);
  };

  const saveAll = () => {
    localStorage.setItem('wazonline-packages', JSON.stringify(packages));
    localStorage.setItem('wazonline-contact', JSON.stringify(contactInfo));
    localStorage.setItem('wazonline-ftp-services', JSON.stringify(ftpServices));
    localStorage.setItem('wazonline-tv-services', JSON.stringify(tvServices));
    localStorage.setItem('wazonline-coverage-areas', JSON.stringify(coverageAreas));
    localStorage.setItem('wazonline-offers', JSON.stringify(offers));
    localStorage.setItem('wazonline-messages', JSON.stringify(messages));
    localStorage.setItem('wazonline-logo-settings', JSON.stringify(logoSettings));
    localStorage.setItem('wazonline-admin-settings', JSON.stringify(adminSettings));
    localStorage.setItem('wazonline-main-page-content', JSON.stringify(mainPageContent));
    alert('All changes saved successfully!');
  };

  const resetAll = () => {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      localStorage.removeItem('wazonline-packages');
      localStorage.removeItem('wazonline-contact');
      localStorage.removeItem('wazonline-ftp-services');
      localStorage.removeItem('wazonline-tv-services');
      localStorage.removeItem('wazonline-coverage-areas');
      localStorage.removeItem('wazonline-offers');
      localStorage.removeItem('wazonline-messages');
      localStorage.removeItem('wazonline-logo-settings');
      localStorage.removeItem('wazonline-admin-settings');
      window.location.reload();
    }
  };

  const addFeature = (packageId: string) => {
    const feature = prompt('Enter feature:');
    if (feature) {
      setPackages(packages.map(pkg => 
        pkg.id === packageId 
          ? { ...pkg, features: [...pkg.features, feature] }
          : pkg
      ));
    }
  };

  const removeFeature = (packageId: string, featureIndex: number) => {
    setPackages(packages.map(pkg => 
      pkg.id === packageId 
        ? { ...pkg, features: pkg.features.filter((_, index) => index !== featureIndex) }
        : pkg
    ));
  };

  const addFtpService = () => {
    if (newFtpService.name && newFtpService.link) {
      const serviceToAdd: FTPService = {
        id: Date.now().toString(),
        name: newFtpService.name,
        description: newFtpService.description || '',
        link: newFtpService.link,
        isActive: newFtpService.isActive || true
      };
      setFtpServices([...ftpServices, serviceToAdd]);
      setNewFtpService({ name: '', description: '', link: '', isActive: true });
    }
  };

  const deleteFtpService = (id: string) => {
    setFtpServices(ftpServices.filter(service => service.id !== id));
  };

  const addTvService = () => {
    if (newTvService.name && newTvService.link) {
      const serviceToAdd: TVService = {
        id: Date.now().toString(),
        name: newTvService.name,
        description: newTvService.description || '',
        link: newTvService.link,
        isActive: newTvService.isActive || true
      };
      setTvServices([...tvServices, serviceToAdd]);
      setNewTvService({ name: '', description: '', link: '', isActive: true });
    }
  };

  const deleteTvService = (id: string) => {
    setTvServices(tvServices.filter(service => service.id !== id));
  };

  const addCoverageArea = () => {
    if (newCoverageArea.area) {
      const areaToAdd: CoverageArea = {
        id: Date.now().toString(),
        area: newCoverageArea.area,
        status: newCoverageArea.status || 'Available',
        description: newCoverageArea.description || ''
      };
      setCoverageAreas([...coverageAreas, areaToAdd]);
      setNewCoverageArea({ area: '', status: 'Available', description: '' });
    }
  };

  const deleteCoverageArea = (id: string) => {
    setCoverageAreas(coverageAreas.filter(area => area.id !== id));
  };

  const addOffer = () => {
    if (newOffer.title) {
      const offerToAdd: Offer = {
        id: Date.now().toString(),
        title: newOffer.title,
        description: newOffer.description || '',
        isActive: newOffer.isActive || true
      };
      setOffers([...offers, offerToAdd]);
      setNewOffer({ title: '', description: '', isActive: true });
    }
  };

  const deleteOffer = (id: string) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const markMessageAsRead = (id: string) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    );
    setMessages(updatedMessages);
    // Immediately save to localStorage to persist read status
    localStorage.setItem('wazonline-messages', JSON.stringify(updatedMessages));
  };

  const deleteMessage = (id: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    // Immediately save to localStorage to prevent deleted messages from coming back
    localStorage.setItem('wazonline-messages', JSON.stringify(updatedMessages));
  };

  const getUnreadCount = () => {
    return messages.filter(msg => !msg.isRead).length;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('wazonline-admin-auth');
  };

  const updateFtpService = (id: string, updatedService: Partial<FTPService>) => {
    setFtpServices(ftpServices.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
    setEditingFtpService(null);
  };

  const updateTvService = (id: string, updatedService: Partial<TVService>) => {
    setTvServices(tvServices.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
    setEditingTvService(null);
  };

  const updateCoverageArea = (id: string, updatedArea: Partial<CoverageArea>) => {
    setCoverageAreas(coverageAreas.map(area => 
      area.id === id ? { ...area, ...updatedArea } : area
    ));
    setEditingCoverageArea(null);
  };

  const updateOffer = (id: string, updatedOffer: Partial<Offer>) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, ...updatedOffer } : offer
    ));
    setEditingOffer(null);
  };

  const updateLogoSettings = (updatedSettings: Partial<LogoSettings>) => {
    setLogoSettings({ ...logoSettings, ...updatedSettings });
  };

  const updateAdminSettings = (updatedSettings: Partial<AdminSettings>) => {
    setAdminSettings({ ...adminSettings, ...updatedSettings });
  };

  const updateMainPageContent = (updatedContent: Partial<MainPageContent>) => {
    setMainPageContent({ ...mainPageContent, ...updatedContent });
  };

  // File upload handler
  const handleFileUpload = (file: File, callback: (base64: string) => void) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        callback(result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      
      {/* Sidebar */}
      <AdminSidebar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={() => {
          setIsAuthenticated(false);
          localStorage.removeItem('wazonline-admin-auth');
        }}
        unreadCount={getUnreadCount()}
      />

      <div className="ml-64 lg:ml-64 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200">
            <div className="flex flex-wrap gap-4">
          <Button onClick={saveAll} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
          <Button onClick={resetAll} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600 hover:text-red-600 transition-all duration-200 shadow-md hover:shadow-lg">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset All Data
          </Button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="space-y-6">

          {activeTab === 'mainpage' && (
            <div className="space-y-6">
            {/* Image Guidelines */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">📐</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Image Guidelines</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                      <div>
                        <p className="font-medium mb-1">📱 Auto-Responsive System:</p>
                        <ul className="text-xs space-y-1 text-blue-700">
                          <li>• Images automatically resize for all devices</li>
                          <li>• No need for multiple image sizes</li>
                          <li>• CSS handles mobile/tablet/desktop scaling</li>
                          <li>• Upload once, works everywhere</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">⚡ Smart Optimization:</p>
                        <ul className="text-xs space-y-1 text-blue-700">
                          <li>• High-quality images recommended</li>
                          <li>• System auto-optimizes for performance</li>
                          <li>• Supports all modern image formats</li>
                          <li>• Lazy loading for faster page speed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hero Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Monitor className="w-5 h-5 mr-2" />
                    Hero Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
                    <Input
                      value={mainPageContent.heroTitle}
                      onChange={(e) => updateMainPageContent({ heroTitle: e.target.value })}
                      placeholder="Hero section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
                    <Textarea
                      value={mainPageContent.heroSubtitle}
                      onChange={(e) => updateMainPageContent({ heroSubtitle: e.target.value })}
                      placeholder="Hero section subtitle"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                    <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800 font-medium mb-1">📱 Auto-Responsive Images:</p>
                      <p className="text-xs text-green-700">• <strong>Any Size Works:</strong> Images automatically resize for all devices</p>
                      <p className="text-xs text-green-700">• <strong>Recommended:</strong> 1200x600px or higher for best quality</p>
                      <p className="text-xs text-green-700">• <strong>Format:</strong> JPG, PNG, WebP</p>
                      <p className="text-xs text-green-700">• <strong>File Size:</strong> Under 1MB (auto-optimized)</p>
                    </div>
                    <div className="space-y-3">
                      <Input
                        value={mainPageContent.heroImage}
                        onChange={(e) => updateMainPageContent({ heroImage: e.target.value })}
                        placeholder="Hero image URL"
                      />
                      <div className="text-center text-gray-500 text-sm">OR</div>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Image className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> hero image
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 5MB)</p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleFileUpload(file, (base64) => {
                                  updateMainPageContent({ heroImage: base64 });
                                });
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Eye className="w-5 h-5 mr-2" />
                    Features Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features Title</label>
                    <Input
                      value={mainPageContent.featuresTitle}
                      onChange={(e) => updateMainPageContent({ featuresTitle: e.target.value })}
                      placeholder="Features section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features Subtitle</label>
                    <Textarea
                      value={mainPageContent.featuresSubtitle}
                      onChange={(e) => updateMainPageContent({ featuresSubtitle: e.target.value })}
                      placeholder="Features section subtitle"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Packages Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    Packages Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Packages Title</label>
                    <Input
                      value={mainPageContent.packagesTitle}
                      onChange={(e) => updateMainPageContent({ packagesTitle: e.target.value })}
                      placeholder="Packages section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Packages Subtitle</label>
                    <Textarea
                      value={mainPageContent.packagesSubtitle}
                      onChange={(e) => updateMainPageContent({ packagesSubtitle: e.target.value })}
                      placeholder="Packages section subtitle"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* FTP/TV Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Server className="w-5 h-5 mr-2" />
                    FTP/TV Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">FTP/TV Title</label>
                    <Input
                      value={mainPageContent.ftpTitle}
                      onChange={(e) => updateMainPageContent({ ftpTitle: e.target.value })}
                      placeholder="FTP/TV section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">FTP/TV Subtitle</label>
                    <Textarea
                      value={mainPageContent.ftpSubtitle}
                      onChange={(e) => updateMainPageContent({ ftpSubtitle: e.target.value })}
                      placeholder="FTP/TV section subtitle"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    Coverage Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Title</label>
                    <Input
                      value={mainPageContent.coverageTitle}
                      onChange={(e) => updateMainPageContent({ coverageTitle: e.target.value })}
                      placeholder="Coverage section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Subtitle</label>
                    <Textarea
                      value={mainPageContent.coverageSubtitle}
                      onChange={(e) => updateMainPageContent({ coverageSubtitle: e.target.value })}
                      placeholder="Coverage section subtitle"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Offers Section Editor */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Badge className="w-5 h-5 mr-2" />
                    Offers Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Offers Title</label>
                    <Input
                      value={mainPageContent.offersTitle}
                      onChange={(e) => updateMainPageContent({ offersTitle: e.target.value })}
                      placeholder="Offers section title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Offers Subtitle</label>
                    <Textarea
                      value={mainPageContent.offersSubtitle}
                      onChange={(e) => updateMainPageContent({ offersSubtitle: e.target.value })}
                      placeholder="Offers section subtitle"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Section */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardHeader className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-t-xl">
                <CardTitle className="flex items-center text-white">
                  <Eye className="w-5 h-5 mr-2" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Hero Section Preview */}
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900 leading-tight">{mainPageContent.heroTitle}</h1>
                        <p className="text-gray-600">{mainPageContent.heroSubtitle}</p>
                        <div className="w-32 h-8 bg-blue-600 rounded text-white text-sm flex items-center justify-center">
                          Get a Connection
                        </div>
                      </div>
                      <div className="flex justify-center">
                        {mainPageContent.heroImage ? (
                          <img
                            src={mainPageContent.heroImage}
                            alt="Hero preview"
                            className="w-full max-w-xs object-cover rounded-lg shadow-lg"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                            }}
                          />
                        ) : (
                          <div className="w-full max-w-xs h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Other Sections Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-1 h-6 bg-blue-600 mr-2"></div>
                        {mainPageContent.featuresTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{mainPageContent.featuresSubtitle}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-1 h-6 bg-blue-600 mr-2"></div>
                        {mainPageContent.packagesTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{mainPageContent.packagesSubtitle}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-1 h-6 bg-blue-600 mr-2"></div>
                        {mainPageContent.ftpTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{mainPageContent.ftpSubtitle}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-1 h-6 bg-blue-600 mr-2"></div>
                        {mainPageContent.coverageTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{mainPageContent.coverageSubtitle}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          )}

          {activeTab === 'designs' && (
            <div className="space-y-6">
              <Card className="bg-white shadow-lg border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Card Design Showcase - Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">
                    Choose your favorite design for your website cards. Select a card type below to preview designs, 
                    then click on a design and apply it to see it live on your website.
                  </p>
                  
                  <DesignShowcase />
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'packages' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add New Package */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Package
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                      <select
                        value={newPackage.type}
                        onChange={(e) => setNewPackage({...newPackage, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="REGULAR">REGULAR</option>
                        <option value="TURBO">TURBO</option>
                        <option value="PREMIUM">PREMIUM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <Input
                        type="number"
                        value={newPackage.price}
                        onChange={(e) => setNewPackage({...newPackage, price: parseInt(e.target.value) || 0})}
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
                    <Input
                      value={newPackage.name}
                      onChange={(e) => setNewPackage({...newPackage, name: e.target.value})}
                      placeholder="Package name"
                    />
                  </div>
                  <Button onClick={addPackage} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Package
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Existing Packages */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Existing Packages</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-gray-600">
                    {packages.length} packages
                  </Badge>
                  {packages.length > 0 && packages[0].id && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      Auto-detected
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <Card key={pkg.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-4">
                          <Badge className={`${pkg.textColor} bg-transparent text-lg font-bold`}>
                            {pkg.type}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                          <span className="text-2xl font-bold text-gray-900">BDT {pkg.price}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => setEditingPackage(editingPackage === pkg.id ? null : pkg.id)}
                            variant="outline"
                            size="sm"
                          >
                            {editingPackage === pkg.id ? 'Cancel' : 'Edit'}
                          </Button>
                          <Button
                            onClick={() => deletePackage(pkg.id)}
                            variant="outline"
                            size="sm"
                            className="text-blue-500 border-blue-500 hover:bg-blue-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {editingPackage === pkg.id ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                              <Input
                                value={pkg.name}
                                onChange={(e) => updatePackage(pkg.id, { name: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                              <Input
                                type="number"
                                value={pkg.price}
                                onChange={(e) => updatePackage(pkg.id, { price: parseInt(e.target.value) || 0 })}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
                          <div className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                <span className="text-sm">{feature}</span>
                                <Button
                                  onClick={() => removeFeature(pkg.id, index)}
                                  variant="outline"
                                  size="sm"
                                  className="text-blue-500 border-blue-500 hover:bg-blue-50"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              onClick={() => addFeature(pkg.id)}
                              variant="outline"
                              size="sm"
                              className="w-full"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              Add Feature
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl">
                <CardTitle className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Numbers</label>
                  <Input
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    placeholder="Phone numbers"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <Textarea
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                    placeholder="Address"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
            </div>
          )}

          {activeTab === 'ftp' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Server className="w-5 h-5 mr-2" />
                    Add FTP Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                    <Input
                      value={newFtpService.name}
                      onChange={(e) => setNewFtpService({...newFtpService, name: e.target.value})}
                      placeholder="FTP Service Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <Textarea
                      value={newFtpService.description}
                      onChange={(e) => setNewFtpService({...newFtpService, description: e.target.value})}
                      placeholder="Service description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Link/URL</label>
                    <Input
                      value={newFtpService.link}
                      onChange={(e) => setNewFtpService({...newFtpService, link: e.target.value})}
                      placeholder="ftp://example.com"
                    />
                  </div>
                  <Button onClick={addFtpService} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add FTP Service
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Existing FTP Services</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-gray-600">
                    {ftpServices.length} services
                  </Badge>
                  {ftpServices.length > 0 && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      Auto-detected
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {ftpServices.map((service) => (
                  <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                    <CardContent className="p-6">
                      {editingFtpService === service.id ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                            <Input
                              value={service.name}
                              onChange={(e) => updateFtpService(service.id, { name: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <Textarea
                              value={service.description}
                              onChange={(e) => updateFtpService(service.id, { description: e.target.value })}
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
                            <Input
                              value={service.link}
                              onChange={(e) => updateFtpService(service.id, { link: e.target.value })}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`ftp-active-${service.id}`}
                              checked={service.isActive}
                              onChange={(e) => updateFtpService(service.id, { isActive: e.target.checked })}
                              className="rounded"
                            />
                            <label htmlFor={`ftp-active-${service.id}`} className="text-sm text-gray-700">
                              Active
                            </label>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingFtpService(null)}
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditingFtpService(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                            <p className="text-gray-600 mt-1">{service.description}</p>
                            <p className="text-sm text-blue-600 mt-2">{service.link}</p>
                            <Badge className={`mt-2 ${service.isActive ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                              {service.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingFtpService(service.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => deleteFtpService(service.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          )}

          {activeTab === 'tv' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Tv className="w-5 h-5 mr-2" />
                    Add TV Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                    <Input
                      value={newTvService.name}
                      onChange={(e) => setNewTvService({...newTvService, name: e.target.value})}
                      placeholder="TV Service Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <Textarea
                      value={newTvService.description}
                      onChange={(e) => setNewTvService({...newTvService, description: e.target.value})}
                      placeholder="Service description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Link/URL</label>
                    <Input
                      value={newTvService.link}
                      onChange={(e) => setNewTvService({...newTvService, link: e.target.value})}
                      placeholder="http://example.com"
                    />
                  </div>
                  <Button onClick={addTvService} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add TV Service
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Existing TV Services</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-gray-600">
                    {tvServices.length} services
                  </Badge>
                  {tvServices.length > 0 && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      Auto-detected
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {tvServices.map((service) => (
                  <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                    <CardContent className="p-6">
                      {editingTvService === service.id ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                            <Input
                              value={service.name}
                              onChange={(e) => updateTvService(service.id, { name: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <Textarea
                              value={service.description}
                              onChange={(e) => updateTvService(service.id, { description: e.target.value })}
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
                            <Input
                              value={service.link}
                              onChange={(e) => updateTvService(service.id, { link: e.target.value })}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`tv-active-${service.id}`}
                              checked={service.isActive}
                              onChange={(e) => updateTvService(service.id, { isActive: e.target.checked })}
                              className="rounded"
                            />
                            <label htmlFor={`tv-active-${service.id}`} className="text-sm text-gray-700">
                              Active
                            </label>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingTvService(null)}
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditingTvService(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                            <p className="text-gray-600 mt-1">{service.description}</p>
                            <p className="text-sm text-blue-600 mt-2">{service.link}</p>
                            <Badge className={`mt-2 ${service.isActive ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                              {service.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingTvService(service.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => deleteTvService(service.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          )}

          {activeTab === 'coverage' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    Add Coverage Area
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area Name</label>
                    <Input
                      value={newCoverageArea.area}
                      onChange={(e) => setNewCoverageArea({...newCoverageArea, area: e.target.value})}
                      placeholder="e.g., Waz Online, Dhaka"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={newCoverageArea.status}
                      onChange={(e) => setNewCoverageArea({...newCoverageArea, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Available">Available</option>
                      <option value="Coming Soon">Coming Soon</option>
                      <option value="Limited">Limited</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <Textarea
                      value={newCoverageArea.description}
                      onChange={(e) => setNewCoverageArea({...newCoverageArea, description: e.target.value})}
                      placeholder="Additional details about coverage"
                      rows={3}
                    />
                  </div>
                  <Button onClick={addCoverageArea} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Coverage Area
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Coverage Areas</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-gray-600">
                    {coverageAreas.length} areas
                  </Badge>
                  {coverageAreas.length > 0 && (
                    <Badge className="bg-green-500 text-white text-xs">
                      Demo Data
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {coverageAreas.map((area) => (
                  <Card key={area.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                    <CardContent className="p-6">
                      {editingCoverageArea === area.id ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Area Name</label>
                            <Input
                              value={area.area}
                              onChange={(e) => updateCoverageArea(area.id, { area: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                            <select
                              value={area.status}
                              onChange={(e) => updateCoverageArea(area.id, { status: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                              <option value="Available">Available</option>
                              <option value="Coming Soon">Coming Soon</option>
                              <option value="Limited">Limited</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <Textarea
                              value={area.description}
                              onChange={(e) => updateCoverageArea(area.id, { description: e.target.value })}
                              rows={3}
                            />
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingCoverageArea(null)}
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditingCoverageArea(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{area.area}</h3>
                            <p className="text-gray-600 mt-1">{area.description}</p>
                            <Badge className={`mt-2 ${
                              area.status === 'Available' ? 'bg-green-500' :
                              area.status === 'Coming Soon' ? 'bg-yellow-500' :
                              'bg-orange-500'
                            } text-white`}>
                              {area.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingCoverageArea(area.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => deleteCoverageArea(area.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          )}

          {activeTab === 'offers' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Badge className="w-5 h-5 mr-2" />
                    Add New Offer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title</label>
                    <Input
                      value={newOffer.title}
                      onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
                      placeholder="e.g., 500 BDT Discount on Connection"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <Textarea
                      value={newOffer.description}
                      onChange={(e) => setNewOffer({...newOffer, description: e.target.value})}
                      placeholder="Offer details and terms"
                      rows={4}
                    />
                  </div>
                  <Button onClick={addOffer} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Offer
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Current Offers</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-gray-600">
                    {offers.length} offers
                  </Badge>
                  {offers.length > 0 && (
                    <Badge className="bg-orange-500 text-white text-xs">
                      Demo Data
                    </Badge>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {offers.map((offer) => (
                  <Card key={offer.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                    <CardContent className="p-6">
                      {editingOffer === offer.id ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title</label>
                            <Input
                              value={offer.title}
                              onChange={(e) => updateOffer(offer.id, { title: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <Textarea
                              value={offer.description}
                              onChange={(e) => updateOffer(offer.id, { description: e.target.value })}
                              rows={4}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`offer-active-${offer.id}`}
                              checked={offer.isActive}
                              onChange={(e) => updateOffer(offer.id, { isActive: e.target.checked })}
                              className="rounded"
                            />
                            <label htmlFor={`offer-active-${offer.id}`} className="text-sm text-gray-700">
                              Active
                            </label>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingOffer(null)}
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditingOffer(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                            <p className="text-gray-600 mt-1">{offer.description}</p>
                            <Badge className={`mt-2 ${offer.isActive ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                              {offer.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => setEditingOffer(offer.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => deleteOffer(offer.id)}
                              variant="outline"
                              size="sm"
                              className="text-blue-500 border-blue-500 hover:bg-blue-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-gray-600">
                  {messages.length} total messages
                </Badge>
                {getUnreadCount() > 0 && (
                  <Badge className="bg-red-500 text-white">
                    {getUnreadCount()} unread
                  </Badge>
                )}
              </div>
            </div>

            {messages.length === 0 ? (
              <Card className="bg-white shadow-lg border-0 rounded-xl">
                <CardContent className="p-12 text-center">
                  <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Messages Yet</h3>
                  <p className="text-gray-600">Contact form submissions will appear here when customers send messages.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <Card key={message.id} className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl ${!message.isRead ? 'ring-2 ring-red-200' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{message.name}</h3>
                            {!message.isRead && (
                              <Badge className="bg-red-500 text-white text-xs">New</Badge>
                            )}
                          </div>
                          <p className="text-blue-600 text-sm mb-2">{message.email}</p>
                          <p className="text-gray-500 text-xs">{new Date(message.timestamp).toLocaleString()}</p>
                        </div>
                        <div className="flex space-x-2">
                          {!message.isRead && (
                            <Button
                              onClick={() => markMessageAsRead(message.id)}
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Mark Read
                            </Button>
                          )}
                          <Button
                            onClick={() => deleteMessage(message.id)}
                            variant="outline"
                            size="sm"
                            className="text-blue-500 border-blue-500 hover:bg-blue-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">{message.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            </div>
          )}

          {activeTab === 'logo' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    Logo Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Logo Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Logo Type</label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="logo-image-text"
                          name="logoType"
                          checked={logoSettings.useImage && logoSettings.showText}
                          onChange={() => updateLogoSettings({ useImage: true, showText: true })}
                          className="rounded"
                        />
                        <label htmlFor="logo-image-text" className="text-sm text-gray-700">
                          Logo Image + Text
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="logo-image-only"
                          name="logoType"
                          checked={logoSettings.useImage && !logoSettings.showText}
                          onChange={() => updateLogoSettings({ useImage: true, showText: false })}
                          className="rounded"
                        />
                        <label htmlFor="logo-image-only" className="text-sm text-gray-700">
                          Logo Image Only
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="logo-text-only"
                          name="logoType"
                          checked={!logoSettings.useImage && logoSettings.showText}
                          onChange={() => updateLogoSettings({ useImage: false, showText: true })}
                          className="rounded"
                        />
                        <label htmlFor="logo-text-only" className="text-sm text-gray-700">
                          Text Only
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Image Upload/URL */}
                  {logoSettings.useImage && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Logo Image</label>
                      <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800 font-medium mb-1">📱 Auto-Responsive Logo:</p>
                        <p className="text-xs text-green-700">• <strong>Any Size Works:</strong> Logo automatically scales for all devices</p>
                        <p className="text-xs text-green-700">• <strong>Recommended:</strong> 300x300px or higher for best quality</p>
                        <p className="text-xs text-green-700">• <strong>Format:</strong> PNG with transparent background preferred</p>
                        <p className="text-xs text-green-700">• <strong>File Size:</strong> Under 200KB (auto-optimized)</p>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Upload Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  const result = event.target?.result as string;
                                  updateLogoSettings({ imageUrl: result });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                        <div className="text-center text-gray-500 text-sm">OR</div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Image URL</label>
                          <Input
                            value={logoSettings.imageUrl}
                            onChange={(e) => updateLogoSettings({ imageUrl: e.target.value })}
                            placeholder="/logo.jpg or https://example.com/logo.png"
                          />
                        </div>
                        <div className="text-center text-gray-500 text-sm">OR</div>
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-3 pb-4">
                              <Image className="w-6 h-6 mb-2 text-gray-500" />
                              <p className="mb-1 text-xs text-gray-500">
                                <span className="font-semibold">Click to upload</span> logo
                              </p>
                              <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 2MB)</p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  handleFileUpload(file, (base64) => {
                                    updateLogoSettings({ imageUrl: base64 });
                                  });
                                }
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}


                  {/* Text Color */}
                  {logoSettings.showText && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                      <select
                        value={logoSettings.textColor}
                        onChange={(e) => updateLogoSettings({ textColor: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="blue-600">Blue</option>
                        <option value="red-500">Red</option>
                        <option value="green-600">Green</option>
                        <option value="purple-600">Purple</option>
                        <option value="gray-900">Dark Gray</option>
                      </select>
                    </div>
                  )}

                  {/* Preview */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preview</label>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center space-x-3">
                        {logoSettings.useImage && (
                          <img 
                            src={logoSettings.imageUrl} 
                            alt="Logo Preview" 
                            className="w-10 h-10 object-contain rounded-lg border-2 border-blue-200 shadow-lg"
                            onError={(e) => {
                              console.warn('Logo image failed to load, using fallback');
                              e.currentTarget.src = '/logo.jpg';
                            }}
                          />
                        )}
                        {logoSettings.showText && (
                          <span className="text-xl font-bold">
                            <span className={logoSettings.textColor === 'blue-600' ? 'text-blue-600' : 
                                             logoSettings.textColor === 'red-500' ? 'text-red-500' :
                                             logoSettings.textColor === 'green-600' ? 'text-green-600' :
                                             logoSettings.textColor === 'purple-600' ? 'text-purple-600' :
                                             'text-gray-900'}>Waz</span>
                            <span className="text-gray-900">Online</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logo Settings Info */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    Logo Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Image Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Recommended size: 40x40px to 60x60px</li>
                      <li>• Supported formats: JPG, PNG, SVG</li>
                      <li>• Use relative paths like "/logo.jpg" for local files</li>
                      <li>• Use full URLs for external images</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Text Settings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Waz" will use the selected color</li>
                      <li>• "Online" will remain dark gray</li>
                      <li>• Text appears next to logo image</li>
                      <li>• Can be hidden if using image-only logo</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Where Logo Appears:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Website header (navigation)</li>
                      <li>• Website footer</li>
                      <li>• Admin panel header</li>
                      <li>• Browser tab (favicon)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    Admin Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <Input
                      value={adminSettings.username}
                      onChange={(e) => updateAdminSettings({ username: e.target.value })}
                      placeholder="Admin username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <Input
                      type="password"
                      value={adminSettings.password}
                      onChange={(e) => updateAdminSettings({ password: e.target.value })}
                      placeholder="Admin password"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Security Note</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Changing credentials will require new login</li>
                      <li>• Use strong passwords for security</li>
                      <li>• Remember to save changes after updating</li>
                      <li>• Current credentials are stored in localStorage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Admin Settings Info */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <CardHeader className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    Admin Panel Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Settings:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Username:</strong> {adminSettings.username}</li>
                      <li>• <strong>Password:</strong> ••••••••</li>
                      <li>• <strong>Access Level:</strong> Full Admin</li>
                      <li>• <strong>Last Updated:</strong> {new Date().toLocaleDateString()}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Admin Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Manage website packages</li>
                      <li>• Update contact information</li>
                      <li>• Configure FTP/TV services</li>
                      <li>• Manage coverage areas</li>
                      <li>• Control special offers</li>
                      <li>• View contact messages</li>
                      <li>• Customize logo settings</li>
                      <li>• Change admin credentials</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security Tips:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use unique, strong passwords</li>
                      <li>• Don't share admin credentials</li>
                      <li>• Log out when finished</li>
                      <li>• Regularly update credentials</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
