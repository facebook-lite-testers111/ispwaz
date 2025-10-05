import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');

function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { messages: [] };
  }
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeData(data: any) {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET: Read all messages
export async function GET() {
  try {
    const data = readData();
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
    const data = readData();
    
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
    writeData(data);
    
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
    const data = readData();
    
    if (!data.messages) {
      data.messages = [];
    }
    
    const messageIndex = data.messages.findIndex((m: any) => m.id === id);
    if (messageIndex !== -1) {
      data.messages[messageIndex].isRead = isRead;
      writeData(data);
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
    
    const data = readData();
    
    if (!data.messages) {
      data.messages = [];
    }
    
    data.messages = data.messages.filter((m: any) => m.id !== id);
    writeData(data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
