import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');
const KV_KEY = 'isp_content_data';

// Check if we're in a Vercel environment
const isVercel = process.env.VERCEL === '1' || process.env.KV_REST_API_URL;

// Default data structure
const getDefaultData = () => ({
  mainPageContent: {
    heroTitle: "High Speed Broadband Internet in Waz Online",
    heroSubtitle: "Reliable, Affordable & 100% Fiber Optic Connection for Homes and Businesses",
    heroImage: "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=600",
    featuresTitle: "Exciting features",
    featuresSubtitle: "Join now and enjoy the exciting features from Waz Online",
    packagesTitle: "Flexible pricing",
    packagesSubtitle: "You check our reasonable and flexible pricing below",
    ftpTitle: "FTP/TV Services",
    ftpSubtitle: "Access our FTP and TV services",
    coverageTitle: "Service Coverage",
    coverageSubtitle: "Check if we cover your area",
    offersTitle: "Special Offers",
    offersSubtitle: "Limited time offers and promotions"
  },
  logoSettings: {
    useImage: true,
    showText: true,
    textColor: "blue-600",
    imageUrl: "/logo.jpg"
  },
  contactInfo: {
    phone: "01782223904 / 01792223905 / 01719259025",
    email: "Mail.soheilbd5@gmail.com",
    address: "Dhaka, Bangladesh"
  },
  packages: [
    {
      id: "1",
      name: "Basic Plan",
      price: 500,
      speed: "15 Mbps",
      description: "Perfect for home users and light browsing",
      features: ["15 Mbps Speed", "Unlimited Data", "24/7 Support", "WiFi Router Included"],
      category: "home",
      popular: false
    },
    {
      id: "2",
      name: "Standard Plan",
      price: 800,
      speed: "25 Mbps",
      description: "Great for streaming and small families",
      features: ["25 Mbps Speed", "Unlimited Data", "24/7 Support", "Free Installation", "BDIX included"],
      category: "home",
      popular: true
    },
    {
      id: "3",
      name: "Premium Plan",
      price: 1200,
      speed: "50 Mbps",
      description: "Best for gaming and large families",
      features: ["50 Mbps Speed", "Unlimited Data", "Priority Support", "Free Installation", "OTT Subscription"],
      category: "home",
      popular: false
    }
  ],
  ftpServices: [
    {
      id: "1",
      name: "Movie Server",
      description: "Latest HD movies collection",
      icon: "film",
      size: "10 TB"
    },
    {
      id: "2",
      name: "TV Series Hub",
      description: "Popular TV series archive",
      icon: "tv",
      size: "5 TB"
    }
  ],
  tvServices: [
    {
      id: "1",
      name: "Live TV Streaming",
      description: "Watch live TV channels",
      icon: "tv",
      channels: "100+"
    }
  ],
  coverageAreas: [
    {
      id: "1",
      area: "Mirpur",
      description: "Full coverage in Mirpur area",
      status: "available"
    },
    {
      id: "2",
      area: "Dhanmondi",
      description: "Expanding coverage",
      status: "coming-soon"
    }
  ],
  offers: [
    {
      id: "1",
      title: "New Year Special",
      description: "Get 2 months free on annual subscription",
      discount: "20%",
      validUntil: "2025-12-31",
      isActive: true
    }
  ],
  cardDesigns: {
    package: 'modern',
    ftp: 'modern',
    coverage: 'modern',
    offer: 'modern'
  },
  messages: []
});

// Ensure data directory exists (for local dev)
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read data from KV or file system
async function readData() {
  try {
    if (isVercel) {
      // Production: Use Vercel KV
      console.log('Reading from Vercel KV...');
      const data = await kv.get(KV_KEY);
      
      if (!data) {
        console.log('No data in KV, initializing with defaults...');
        const defaultData = getDefaultData();
        await kv.set(KV_KEY, defaultData);
        return defaultData;
      }
      
      return data;
    } else {
      // Local dev: Use file system
      console.log('Reading from local file system...');
      ensureDataDirectory();
      
      if (!fs.existsSync(DATA_FILE)) {
        const defaultData = getDefaultData();
        fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
        return defaultData;
      }
      
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error reading data:', error);
    return getDefaultData();
  }
}

// Write data to KV or file system
async function writeData(data: any) {
  try {
    if (isVercel) {
      // Production: Use Vercel KV
      console.log('Writing to Vercel KV...');
      await kv.set(KV_KEY, data);
      return true;
    } else {
      // Local dev: Use file system
      console.log('Writing to local file system...');
      ensureDataDirectory();
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
      return true;
    }
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// GET: Read all content or specific key
export async function GET(request: NextRequest) {
  try {
    const data = await readData();
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (key) {
      return NextResponse.json(data[key] || null);
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

// POST: Update specific key
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, value } = body;
    
    if (!key) {
      return NextResponse.json({ error: 'Key is required' }, { status: 400 });
    }
    
    const data = await readData();
    data[key] = value;
    const writeSuccess = await writeData(data);
    
    if (!writeSuccess) {
      return NextResponse.json({ 
        error: 'Failed to save data'
      }, { status: 500 });
    }
    
    console.log(`✅ Updated ${key} successfully`);
    return NextResponse.json({ success: true, data: data[key] });
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

// PUT: Update entire content
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const writeSuccess = await writeData(body);
    
    if (!writeSuccess) {
      return NextResponse.json({ 
        error: 'Failed to save data'
      }, { status: 500 });
    }
    
    console.log('✅ Updated all data successfully');
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}