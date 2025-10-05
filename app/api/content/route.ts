import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read data from file
function readData() {
  ensureDataDirectory();
  
  if (!fs.existsSync(DATA_FILE)) {
    // Create default data file if it doesn't exist
    const defaultData = {
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
          type: "REGULAR",
          name: "Regular 840",
          price: 840,
          color: "bg-yellow-100",
          textColor: "text-blue-600",
          features: [
            "40 Mb/s ( 20 Mb/s + 20 Mb/s Bonus) Internet (Shared)",
            "Bufferless Cached Content",
            "Up to 100 Mb/s VAS",
            "Public IP (IPv6)"
          ]
        },
        {
          id: "2",
          type: "REGULAR",
          name: "Regular 1050",
          price: 1050,
          color: "bg-yellow-100",
          textColor: "text-blue-600",
          features: [
            "60 Mb/s ( 40 Mb/s + 20 Mb/s Bonus) Internet (Shared)",
            "Bufferless Cached Content",
            "Up to 150 Mb/s VAS",
            "Public IP (IPv6)"
          ]
        },
        {
          id: "3",
          type: "REGULAR",
          name: "Regular 1260",
          price: 1260,
          color: "bg-yellow-100",
          textColor: "text-blue-600",
          features: [
            "70 Mb/s ( 50 Mb/s + 20 Mb/s Bonus)",
            "Bufferless Cached Content",
            "Up to 150 Mb/s VAS",
            "Public IP (IPv6)"
          ]
        },
        {
          id: "4",
          type: "TURBO",
          name: "Turbo 1200",
          price: 1200,
          color: "bg-blue-100",
          textColor: "text-green-600",
          features: [
            "30 Mb/s Internet",
            "Upto 200 Mb/s VAS Speed",
            "Bufferless YT, FB, CDN",
            "Public IP (IPv6)"
          ]
        }
      ],
      ftpServices: [
        {
          id: "1",
          name: "FTP Server 1",
          description: "High-speed file transfer server",
          link: "ftp://ftp.example.com",
          isActive: true
        }
      ],
      tvServices: [
        {
          id: "1",
          name: "TV Service 1",
          description: "Premium TV channels",
          link: "http://tv.example.com",
          isActive: true
        }
      ],
      coverageAreas: [
        {
          id: "1",
          area: "Dhaka Central",
          status: "Available",
          description: "Full coverage in Dhaka Central area"
        }
      ],
      offers: [
        {
          id: "1",
          title: "New Connection Offer",
          description: "Get 50% off on first month",
          isActive: true
        }
      ],
      messages: [],
      cardDesigns: {
        package: "default-website",
        ftp: "default-website",
        coverage: "default-website",
        offer: "default-website"
      }
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
  
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write data to file
function writeData(data: any) {
  try {
    ensureDataDirectory();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    // Vercel has read-only filesystem, log the error but don't fail
    console.warn('Unable to write to filesystem (Vercel read-only):', error);
    return false;
  }
}

// GET: Read all content
export async function GET(request: NextRequest) {
  try {
    const data = readData();
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

// POST: Update content
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, value } = body;
    
    if (!key) {
      return NextResponse.json({ error: 'Key is required' }, { status: 400 });
    }
    
    const data = readData();
    data[key] = value;
    const writeSuccess = writeData(data);
    
    if (!writeSuccess) {
      // On Vercel, writes fail but we return success to prevent errors
      console.warn('Data not persisted (read-only filesystem)');
      return NextResponse.json({ 
        success: true, 
        data: data[key],
        warning: 'Changes not persisted on serverless environment'
      });
    }
    
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
    const writeSuccess = writeData(body);
    
    if (!writeSuccess) {
      // On Vercel, writes fail but we return success to prevent errors
      console.warn('Data not persisted (read-only filesystem)');
      return NextResponse.json({ 
        success: true, 
        data: body,
        warning: 'Changes not persisted on serverless environment'
      });
    }
    
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
