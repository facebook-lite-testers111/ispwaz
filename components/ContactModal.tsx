'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '01782223904 / 01792223905 / 01719259025',
    email: 'Mail.soheilbd5@gmail.com',
    address: 'Dhaka, Bangladesh'
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send message to API
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.phone,
          message: formData.message
        }),
      });

      if (response.ok) {
        // Reset form and close modal
        setFormData({ name: '', phone: '', message: '' });
        setIsOpen(false);
        
        // Show success message
        alert('Message sent successfully! We will get back to you soon.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Load contact info from API
  useEffect(() => {
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

  const handleCallClick = (phoneNumber: string) => {
    // Remove any spaces and special characters for tel: link
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    window.open(`tel:${cleanNumber}`, '_self');
  };

  const getPhoneNumbers = () => {
    return contactInfo.phone.split('/').map(num => num.trim()).filter(num => num);
  };

  // Add event listeners for contact buttons
  React.useEffect(() => {
    const handleContactClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a');
      if (button) {
        const text = button.textContent?.toLowerCase() || '';
        if (text.includes('contact') || text.includes('get a connection') || text.includes('purchase')) {
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                <p className="text-sm text-gray-600">Phone Numbers</p>
              </div>
              <div className="space-y-2">
                {getPhoneNumbers().map((phoneNumber, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">{phoneNumber}</span>
                    <Button
                      onClick={() => handleCallClick(phoneNumber)}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full"
              />
            </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
