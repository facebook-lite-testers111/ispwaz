import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');
const KV_KEY = 'isp_content_data';

// Check if we're in a Vercel environment
const isVercel = process.env.VERCEL === '1' || process.env.KV_REST_API_URL;

// Read data from KV or file system
async function readData() {
  try {
    if (isVercel) {
      const data = await kv.get(KV_KEY);
      return data || { messages: [] };
    } else {
      if (!fs.existsSync(DATA_FILE)) {
        return { messages: [] };
      }
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Error reading data:', error);
    return { messages: [] };
  }
}

// Write data to KV or file system
async function writeData(data: any) {
  try {
    if (isVercel) {
      await kv.set(KV_KEY, data);
      return true;
    } else {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
      return true;
    }
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// GET: Read all messages
export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json(data.messages || []);
  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json({ error: 'Failed to read messages' }, { status: 500 });
  }
}

// POST: Add new message
export async function POST(request: NextRequest) {
  try {
    const message = await request.json();
    const data = await readData();
    
    if (!data.messages) {
      data.messages = [];
    }
    
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      isRead: false
    };
    
    data.messages.push(newMessage);
    const writeSuccess = await writeData(data);
    
    if (!writeSuccess) {
      return NextResponse.json({ 
        error: 'Failed to save message'
      }, { status: 500 });
    }
    
    console.log('✅ Message saved successfully');
    return NextResponse.json({ success: true, message: newMessage });
  } catch (error) {
    console.error('Error adding message:', error);
    return NextResponse.json({ error: 'Failed to add message' }, { status: 500 });
  }
}

// PATCH: Mark message as read
export async function PATCH(request: NextRequest) {
  try {
    const { id, isRead } = await request.json();
    const data = await readData();
    
    if (!data.messages) {
      data.messages = [];
    }
    
    const messageIndex = data.messages.findIndex((m: any) => m.id === id);
    if (messageIndex !== -1) {
      data.messages[messageIndex].isRead = isRead;
      const writeSuccess = await writeData(data);
      
      if (!writeSuccess) {
        return NextResponse.json({ 
          error: 'Failed to update message'
        }, { status: 500 });
      }
      
      console.log('✅ Message updated successfully');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

// DELETE: Delete message
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    const data = await readData();
    
    if (!data.messages) {
      data.messages = [];
    }
    
    data.messages = data.messages.filter((m: any) => m.id !== id);
    const writeSuccess = await writeData(data);
    
    if (!writeSuccess) {
      return NextResponse.json({ 
        error: 'Failed to delete message'
      }, { status: 500 });
    }
    
    console.log('✅ Message deleted successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}