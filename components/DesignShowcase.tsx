'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Gift, MapPin, Server, ExternalLink, Heart, Zap, Shield, Globe, Wifi, Download, Upload, Users, Clock, Award, Target, Rocket, Crown, Diamond, Flame, Sparkles, TrendingUp, Activity, Box, Layers, Package as PackageIcon } from 'lucide-react';

// Sample data for demo
const sampleData: any = {
  package: {
    name: 'Premium 1500',
    price: 1500,
    description: '100 Mb/s ( 80 Mb/s + 20 Mb/s Bonus) Internet (Shared)',
    type: 'package'
  },
  ftp: {
    name: 'Waz Online FTP Server',
    description: 'Access our high-speed FTP server for file sharing and downloads',
    type: 'ftp'
  },
  coverage: {
    area: 'Dhaka City',
    description: 'Full coverage in Dhaka city with 99.9% uptime guarantee',
    status: 'Available',
    type: 'coverage'
  },
  offer: {
    title: 'New Year Special',
    description: 'Get 3 months free with annual subscription',
    type: 'offer'
  }
};

// All card designs - showing first 5 for brevity, full list continues...
export const cardDesigns = [
  {
    id: 'default-website',
    name: 'Default Website',
    component: ({ data, type }: { data: any, type: string }) => {
      // Package type - horizontal layout with colored section
      if (type === 'package') {
        return (
          <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full group">
            <CardContent className="p-6 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Package Type */}
                <div className="lg:col-span-3 bg-yellow-100 p-6 flex flex-col justify-center items-center text-center">
                  <Badge variant="secondary" className="text-yellow-700 bg-transparent text-lg font-bold mb-2">
                    HOME
                  </Badge>
                  <h3 className="text-base font-bold text-gray-900">
                    {data.name}
                  </h3>
                </div>

                {/* Features */}
                <div className="lg:col-span-6 p-6">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{data.description}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">High-speed connection</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">24/7 customer support</span>
                    </div>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="lg:col-span-3 p-6 flex flex-col justify-center items-center text-center border-l border-gray-100">
                  <div className="mb-3">
                    <span className="text-xl font-bold text-gray-900">BDT {data.price}</span>
                    <span className="text-gray-600 block text-xs">/month</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full transform group-hover:scale-105 transition-transform duration-300">
                    Purchase
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      }
      
      // FTP type - vertical layout with badges
      if (type === 'ftp') {
        return (
          <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 h-full flex flex-col group">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{data.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{data.description}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      FTP Server
                    </Badge>
                    <Badge className="bg-green-500 text-white text-xs">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto transform group-hover:scale-105 transition-transform duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Access Server
              </Button>
            </CardContent>
          </Card>
        );
      }
      
      // Coverage type - status badge layout
      if (type === 'coverage') {
        return (
          <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-green-300 transition-all duration-300 h-full group">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900">{data.area}</h3>
                </div>
                <Badge className="bg-green-500 text-white text-xs">
                  {data.status || 'Available'}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {data.description}
              </p>
            </CardContent>
          </Card>
        );
      }
      
      // Offer type - gift icon layout
      return (
        <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-pink-300 transition-all duration-300 h-full group">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-lg text-gray-900 leading-tight">
                  {data.title}
                </h3>
              </div>
              <Badge className="bg-blue-600 text-white text-xs">
                <Star className="w-3 h-3 mr-1" />
                OFFER
              </Badge>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.description}
            </p>
          </CardContent>
        </Card>
      );
    }
  },
  {
    id: 'holographic',
    name: 'Holographic',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden border-2 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 p-6 group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            {type === 'package' && <Crown className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Globe className="w-8 h-8 text-white" />}
            {type === 'coverage' && <Target className="w-8 h-8 text-white" />}
            {type === 'offer' && <Diamond className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-purple-200 text-xs mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-2xl font-bold shadow-lg transition-all duration-300">
              {type === 'package' ? 'ACTIVATE' : 'ACCESS'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'brutalist',
    name: 'Brutalist',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-200 border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 p-6 group">
        <div className="border-2 border-black p-3 mb-4">
          <h3 className="text-xl font-black text-black uppercase tracking-tighter">{data.name || data.title || data.area}</h3>
        </div>
        <div className="bg-black text-white p-3 mb-4">
          <p className="font-mono text-xs uppercase">{data.description}</p>
        </div>
        {type === 'package' && (
          <div className="bg-yellow-400 border-2 border-black p-3 mb-4">
            <div className="text-3xl font-black text-black">৳{data.price}</div>
          </div>
        )}
        {(type === 'package' || type === 'ftp') && (
          <button className="w-full bg-black text-white border-2 border-black hover:bg-white hover:text-black py-3 font-black uppercase tracking-wider transition-all duration-200">
            {type === 'package' ? 'BUY NOW' : 'CONNECT'}
          </button>
        )}
      </div>
    )
  },
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-black border-2 border-cyan-400 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-6 group">
        <div className="text-center">
          <div className="w-14 h-14 bg-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            {type === 'package' && <Zap className="w-7 h-7 text-black" />}
            {type === 'ftp' && <Download className="w-7 h-7 text-black" />}
            {type === 'coverage' && <Globe className="w-7 h-7 text-black" />}
            {type === 'offer' && <Flame className="w-7 h-7 text-black" />}
          </div>
          <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-xs mb-3 font-mono">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-cyan-400 mb-3 font-mono">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-cyan-400 text-black hover:bg-cyan-300 font-mono font-bold py-2.5 rounded-lg transition-all">
              {type === 'package' ? 'INITIATE' : 'CONNECT'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'glass-light',
    name: 'Glass Light',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            {type === 'package' && <Check className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-xs mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-blue-600 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all">
              {type === 'package' ? 'Get Started' : 'Access Now'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'amber-corporate',
    name: 'Amber Corporate',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                {type === 'package' && <Wifi className="w-5 h-5 text-white" />}
                {type === 'ftp' && <Server className="w-5 h-5 text-white" />}
                {type === 'coverage' && <MapPin className="w-5 h-5 text-white" />}
                {type === 'offer' && <Gift className="w-5 h-5 text-white" />}
              </div>
              <Badge className="bg-blue-100 text-blue-700 text-xs">{type.toUpperCase()}</Badge>
            </div>
            {type === 'package' && (
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">৳{data.price}</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">{data.description}</p>
          {(type === 'package' || type === 'ftp') && (
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2 rounded-lg font-semibold text-sm transition-all">
                {type === 'package' ? 'Get Started' : 'Access Now'}
              </button>
              <button className="px-3 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'dot-minimal',
    name: 'Dot Minimal',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{data.name || data.title || data.area}</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{type}</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {type === 'package' && <Activity className="w-6 h-6 text-orange-600" />}
              {type === 'ftp' && <Server className="w-6 h-6 text-orange-600" />}
              {type === 'coverage' && <Target className="w-6 h-6 text-orange-600" />}
              {type === 'offer' && <Sparkles className="w-6 h-6 text-orange-600" />}
            </div>
          </div>
          <p className="text-gray-600 text-xs mb-4 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-black text-gray-900">৳{data.price}</span>
              <span className="text-gray-500 ml-2 text-xs">/mo</span>
            </div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
              {type === 'package' ? 'Subscribe Now' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'mime-image',
    name: 'MiME Image',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        {/* Image Background */}
        <div className="relative h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              {type === 'package' && <Wifi className="w-8 h-8 text-white" />}
              {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
              {type === 'coverage' && <Globe className="w-8 h-8 text-white" />}
              {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 text-gray-900 font-bold text-xs">{type.toUpperCase()}</Badge>
          </div>
          {type === 'package' && (
            <div className="absolute bottom-3 left-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <div className="text-xl font-black text-gray-900">৳{data.price}</div>
                <div className="text-xs text-gray-600">per month</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">{data.description}</p>
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-xl font-bold shadow-lg transition-all">
              {type === 'package' ? 'Choose Plan' : 'Access Server'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'table-layout',
    name: 'Table Layout',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100">
        <div className="grid grid-cols-12 gap-0">
          {/* Left Section - Icon & Type */}
          <div className="col-span-3 bg-gradient-to-br from-indigo-600 to-purple-600 p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
              {type === 'package' && <Zap className="w-6 h-6 text-white" />}
              {type === 'ftp' && <Server className="w-6 h-6 text-white" />}
              {type === 'coverage' && <MapPin className="w-6 h-6 text-white" />}
              {type === 'offer' && <Gift className="w-6 h-6 text-white" />}
            </div>
            <Badge className="bg-white/20 text-white text-xs">{type.toUpperCase()}</Badge>
          </div>
          
          {/* Middle Section - Details */}
          <div className="col-span-6 p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1">{data.name || data.title || data.area}</h3>
            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{data.description}</p>
          </div>
          
          {/* Right Section - Price & Action */}
          <div className="col-span-3 bg-gray-50 p-4 flex flex-col items-center justify-center border-l-2 border-gray-100">
            {type === 'package' && (
              <div className="text-center mb-2">
                <div className="text-xl font-black text-indigo-600">৳{data.price}</div>
                <div className="text-xs text-gray-500">/mo</div>
              </div>
            )}
            {(type === 'package' || type === 'ftp') && (
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold text-xs transition-all">
                {type === 'package' ? 'Buy' : 'Access'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'floating-badge',
    name: 'Floating Badge',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 border border-gray-200">
        {/* Floating Badge */}
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform">
          {type === 'package' && <Check className="w-8 h-8 text-white" />}
          {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
          {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
          {type === 'offer' && <Star className="w-8 h-8 text-white" />}
        </div>
        
        <div className="mb-3">
          <Badge className="bg-green-100 text-green-700 mb-2 text-xs">{type.toUpperCase()}</Badge>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-xs leading-relaxed">{data.description}</p>
        </div>
        
        {type === 'package' && (
          <div className="mb-4">
            <div className="inline-block bg-green-50 rounded-xl px-4 py-2">
              <div className="text-2xl font-black text-green-600">৳{data.price}</div>
              <div className="text-xs text-green-600">per month</div>
            </div>
          </div>
        )}
        
        {(type === 'package' || type === 'ftp') && (
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'Get Started' : 'Connect Now'}
          </button>
        )}
      </div>
    )
  },
  {
    id: 'bordered-accent',
    name: 'Bordered Accent',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border-l-8 border-blue-600">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                {type === 'package' && <Wifi className="w-4 h-4 text-blue-600" />}
                {type === 'ftp' && <Server className="w-4 h-4 text-blue-600" />}
                {type === 'coverage' && <Globe className="w-4 h-4 text-blue-600" />}
                {type === 'offer' && <Gift className="w-4 h-4 text-blue-600" />}
              </div>
              <Badge className="bg-blue-100 text-blue-700 text-xs font-bold">{type.toUpperCase()}</Badge>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{data.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {type === 'package' && (
            <div>
              <div className="text-2xl font-black text-blue-600">৳{data.price}</div>
              <div className="text-xs text-gray-500">per month</div>
            </div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all ml-auto">
              {type === 'package' ? 'Subscribe' : 'Access'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'stacked-info',
    name: 'Stacked Info',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2">
            {type === 'package' && <TrendingUp className="w-6 h-6 text-white" />}
            {type === 'ftp' && <Server className="w-6 h-6 text-white" />}
            {type === 'coverage' && <MapPin className="w-6 h-6 text-white" />}
            {type === 'offer' && <Star className="w-6 h-6 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{data.name || data.title || data.area}</h3>
          <Badge className="bg-white/20 text-white text-xs">{type.toUpperCase()}</Badge>
        </div>
        
        {/* Body */}
        <div className="p-4">
          <p className="text-gray-600 text-xs mb-4 leading-relaxed text-center">{data.description}</p>
          
          {type === 'package' && (
            <div className="text-center mb-4 py-3 bg-teal-50 rounded-xl">
              <div className="text-3xl font-black text-teal-600">৳{data.price}</div>
              <div className="text-xs text-teal-600 mt-1">per month</div>
            </div>
          )}
          
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all">
              {type === 'package' ? 'Choose This Plan' : 'Connect Now'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-100 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all duration-300 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Check className="w-8 h-8 text-gray-600" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-gray-600" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-gray-600" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-gray-600" />}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-xs mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-gray-800 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gray-100 text-gray-800 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] py-3 rounded-full font-semibold transition-all duration-300">
              {type === 'package' ? 'Select' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'gaming-rgb',
    name: 'Gaming RGB',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border-2 border-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_35px_rgba(147,51,234,0.5)] transition-all duration-300 p-5">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              {type === 'package' && <Rocket className="w-8 h-8 text-white" />}
              {type === 'ftp' && <Download className="w-8 h-8 text-white" />}
              {type === 'coverage' && <Globe className="w-8 h-8 text-white" />}
              {type === 'offer' && <Sparkles className="w-8 h-8 text-white" />}
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-mono">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-xs mb-3">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-purple-400 mb-3 font-mono">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2.5 rounded-xl shadow-lg transition-all">
              {type === 'package' ? 'LEVEL UP' : 'DOWNLOAD'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'origami',
    name: 'Origami',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-blue-500 border-l-[40px] border-l-transparent"></div>
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-sm flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45">
                {type === 'package' && <Check className="w-6 h-6 text-blue-600" />}
                {type === 'ftp' && <Server className="w-6 h-6 text-blue-600" />}
                {type === 'coverage' && <MapPin className="w-6 h-6 text-blue-600" />}
                {type === 'offer' && <Gift className="w-6 h-6 text-blue-600" />}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{data.name || data.title || data.area}</h3>
              {type === 'package' && (
                <div className="text-xl font-bold text-blue-600">৳{data.price}</div>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">{data.description}</p>
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 transform hover:translate-x-1 transition-all">
              {type === 'package' ? 'Select Plan' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-2xl"></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Check className="w-8 h-8 text-blue-600" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-purple-600" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-pink-600" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-blue-600" />}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-blue-600 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-blue-400/80 to-purple-400/80 backdrop-blur-sm hover:from-blue-500/90 hover:to-purple-500/90 text-white py-2.5 rounded-2xl font-semibold transition-all">
              {type === 'package' ? 'Choose' : 'Access'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'line-art',
    name: 'Line Art',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-all duration-300 p-6">
        <div className="border-b-2 border-gray-200 pb-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">{data.name || data.title || data.area}</h3>
            <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
              {type === 'package' && <Check className="w-5 h-5 text-blue-600" />}
              {type === 'ftp' && <Server className="w-5 h-5 text-blue-600" />}
              {type === 'coverage' && <MapPin className="w-5 h-5 text-blue-600" />}
              {type === 'offer' && <Gift className="w-5 h-5 text-blue-600" />}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{data.description}</p>
        {type === 'package' && (
          <div className="border-t-2 border-b-2 border-gray-200 py-3 mb-4">
            <div className="text-2xl font-bold text-gray-900 text-center">৳{data.price}</div>
          </div>
        )}
        {(type === 'package' || type === 'ftp') && (
          <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg font-semibold transition-all">
            {type === 'package' ? 'Select' : 'Connect'}
          </button>
        )}
      </div>
    )
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 p-6">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
        <div className="relative text-center">
          <div className="mb-4">
            <div className="text-4xl font-black text-white mb-2 font-mono tracking-wider" style={{ textShadow: '3px 3px 0px rgba(0,255,255,0.5), -3px -3px 0px rgba(255,0,255,0.5)' }}>
              {data.name || data.title || data.area}
            </div>
          </div>
          <p className="text-white text-sm mb-4 font-mono">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-black text-yellow-300 mb-4 font-mono" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-500 hover:to-pink-500 text-purple-900 font-black py-3 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all font-mono">
            {type === 'package' ? 'BUY NOW' : type === 'ftp' ? 'CONNECT' : type === 'coverage' ? 'CHECK' : 'GET IT'}
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'magazine',
    name: 'Magazine',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="bg-black text-white p-4">
          <div className="flex items-center justify-between">
            <Badge className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-none">
              {type.toUpperCase()}
            </Badge>
            {type === 'package' && (
              <div className="text-2xl font-black">৳{data.price}</div>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight leading-tight">{data.name || data.title || data.area}</h3>
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">{data.description}</p>
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 font-bold uppercase tracking-wider transition-all">
              {type === 'package' ? 'Subscribe' : 'Access'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'comic-book',
    name: 'Comic Book',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-yellow-100 border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-5">
        <div className="bg-white border-2 border-black rounded p-3 mb-4">
          <h3 className="text-xl font-black text-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>{data.name || data.title || data.area}</h3>
        </div>
        <div className="bg-blue-500 border-2 border-black rounded p-3 mb-4">
          <p className="text-white font-bold text-sm">{data.description}</p>
        </div>
        {type === 'package' && (
          <div className="relative bg-red-500 border-2 border-black rounded p-3 mb-4">
            <div className="text-3xl font-black text-white text-center" style={{ fontFamily: 'Impact, sans-serif' }}>৳{data.price}</div>
            <div className="absolute -top-2 -right-2 bg-yellow-300 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
              <Star className="w-6 h-6 text-black" />
            </div>
          </div>
        )}
        {(type === 'package' || type === 'ftp') && (
          <button className="w-full bg-green-500 hover:bg-green-600 border-4 border-black text-black font-black py-3 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            {type === 'package' ? 'POW!' : 'ZAP!'}
          </button>
        )}
      </div>
    )
  },
  {
    id: 'luxury-gold',
    name: 'Luxury Gold',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 border border-yellow-600">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            {type === 'package' && <Crown className="w-8 h-8 text-gray-900" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-gray-900" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-gray-900" />}
            {type === 'offer' && <Diamond className="w-8 h-8 text-gray-900" />}
          </div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-yellow-400 mb-4">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all">
            {type === 'package' ? 'Premium' : type === 'ftp' ? 'Elite Access' : type === 'coverage' ? 'Exclusive' : 'VIP Offer'}
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'isometric-3d',
    name: 'Isometric 3D',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 p-6" style={{ transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' }}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg" style={{ transform: 'translateZ(20px)' }}>
              {type === 'package' && <Check className="w-7 h-7 text-white" />}
              {type === 'ftp' && <Server className="w-7 h-7 text-white" />}
              {type === 'coverage' && <MapPin className="w-7 h-7 text-white" />}
              {type === 'offer' && <Gift className="w-7 h-7 text-white" />}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{data.name || data.title || data.area}</h3>
              {type === 'package' && (
                <div className="text-2xl font-bold text-blue-600">৳{data.price}</div>
              )}
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-4">{data.description}</p>
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2.5 rounded-lg font-semibold shadow-lg transition-all">
              {type === 'package' ? 'Select' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'neon-pink',
    name: 'Neon Pink',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 p-6 border-2 border-pink-500">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent"></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-pink-500/20 border-2 border-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
            {type === 'package' && <Zap className="w-8 h-8 text-pink-400" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-pink-400" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-pink-400" />}
            {type === 'offer' && <Flame className="w-8 h-8 text-pink-400" />}
          </div>
          <h3 className="text-xl font-bold text-pink-400 mb-2" style={{ textShadow: '0 0 10px rgba(236,72,153,0.5)' }}>{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-pink-400 mb-4" style={{ textShadow: '0 0 10px rgba(236,72,153,0.5)' }}>৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all">
              {type === 'package' ? 'Get It' : 'Access'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'nature-organic',
    name: 'Nature Organic',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-green-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            {type === 'package' && <Check className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-green-700 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-green-600 mb-4">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-full font-semibold shadow-lg transition-all">
            {type === 'package' ? 'Choose' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'Explore' : 'Get'}
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'tech-grid',
    name: 'Tech Grid',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-cyan-500">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center">
              {type === 'package' && <Check className="w-6 h-6 text-cyan-400" />}
              {type === 'ftp' && <Server className="w-6 h-6 text-cyan-400" />}
              {type === 'coverage' && <MapPin className="w-6 h-6 text-cyan-400" />}
              {type === 'offer' && <Gift className="w-6 h-6 text-cyan-400" />}
            </div>
            <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500 font-mono">
              {type.toUpperCase()}
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-mono">{data.name || data.title || data.area}</h3>
          <p className="text-gray-400 text-sm mb-4 font-mono text-xs">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-cyan-400 mb-4 font-mono">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 py-2.5 rounded font-bold font-mono transition-all">
              {type === 'package' ? 'EXECUTE' : 'CONNECT'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'gradient-mesh',
    name: 'Gradient Mesh',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-400/30 to-transparent rounded-full blur-3xl"></div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            {type === 'package' && <Check className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-700 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all">
              {type === 'package' ? 'Select' : 'Access'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'dark-minimal',
    name: 'Dark Minimal',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 border border-gray-800">
        <div className="text-center">
          <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Check className="w-7 h-7 text-gray-400" />}
            {type === 'ftp' && <Server className="w-7 h-7 text-gray-400" />}
            {type === 'coverage' && <MapPin className="w-7 h-7 text-gray-400" />}
            {type === 'offer' && <Gift className="w-7 h-7 text-gray-400" />}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-400 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-white mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold transition-all">
              {type === 'package' ? 'Select' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'cosmic-space',
    name: 'Cosmic Space',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 p-6">
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-12 right-16 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            {type === 'package' && <Rocket className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Globe className="w-8 h-8 text-white" />}
            {type === 'coverage' && <Target className="w-8 h-8 text-white" />}
            {type === 'offer' && <Star className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-purple-200 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-yellow-400 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold py-3 rounded-xl shadow-lg transition-all">
              {type === 'package' ? 'Launch' : 'Explore'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'clean-minimal',
    name: 'Clean Minimal',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Check className="w-6 h-6 text-blue-600" />}
            {type === 'ftp' && <Server className="w-6 h-6 text-blue-600" />}
            {type === 'coverage' && <MapPin className="w-6 h-6 text-blue-600" />}
            {type === 'offer' && <Gift className="w-6 h-6 text-blue-600" />}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-gray-900 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-all">
              {type === 'package' ? 'Select' : 'Connect'}
            </button>
          )}
        </div>
      </div>
    )
  },
  {
    id: 'soft-shadow',
    name: 'Soft Shadow',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all duration-300 p-6">
        <div className="text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            {type === 'package' && <Check className="w-7 h-7 text-blue-600" />}
            {type === 'ftp' && <Server className="w-7 h-7 text-blue-600" />}
            {type === 'coverage' && <MapPin className="w-7 h-7 text-blue-600" />}
            {type === 'offer' && <Gift className="w-7 h-7 text-blue-600" />}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="text-2xl font-bold text-blue-600 mb-4">৳{data.price}</div>
          )}
          {(type === 'package' || type === 'ftp') && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-all">
              {type === 'package' ? 'Choose Plan' : 'Access Now'}
            </button>
          )}
        </div>
      </div>
    )
  }
];

interface Props {
  onClose?: () => void;
}

export default function DesignShowcase({ onClose }: Props) {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [currentType, setCurrentType] = useState('package');
  const [showPreview, setShowPreview] = useState(false);

  const handleApplyDesign = (designId: string, designName: string) => {
    try {
      localStorage.setItem(`wazonline-card-design-${currentType}`, designId);
      
      // Create custom alert dialog
      const alertDiv = document.createElement('div');
      alertDiv.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;';
      alertDiv.innerHTML = `
        <div style="background: white; border-radius: 16px; padding: 32px; max-width: 500px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
          <div style="text-align: center;">
            <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
              <svg style="width: 32px; height: 32px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 style="font-size: 24px; font-weight: bold; color: #111827; margin-bottom: 12px;">Applied: ${designName}</h2>
            <p style="color: #6b7280; margin-bottom: 12px; font-size: 14px;">This design will now be used for all <strong>${currentType.charAt(0).toUpperCase() + currentType.slice(1)}</strong> section cards.</p>
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 12px; margin-bottom: 24px;">
              <p style="color: #dc2626; font-weight: 600; font-size: 14px; margin: 0;">
                ⚠️ IMPORTANT: Click "Save All Changes" button at the top to save to server!
              </p>
            </div>
            <button onclick="this.closest('div[style*=fixed]').remove()" style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 12px 32px; border-radius: 12px; border: none; font-weight: 600; cursor: pointer; font-size: 16px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
              Got it!
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(alertDiv);
      
      // Remove on click outside
      alertDiv.addEventListener('click', (e) => {
        if (e.target === alertDiv) alertDiv.remove();
      });
    } catch (e) {
      console.error('Error saving selected design', e);
      alert('Failed to save design.');
    }
  };

  const handlePreview = () => {
    if (!selectedDesign) {
      alert('Please select a design first');
      return;
    }
    setShowPreview(true);
  };

  // Get selected design component
  const selectedDesignObj = cardDesigns.find(d => d.id === selectedDesign);

  return (
    <div className="space-y-6">
      {/* Preview Modal */}
      {showPreview && selectedDesignObj && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPreview(false)}>
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Live Preview - {selectedDesignObj.name}</h2>
                  <p className="text-blue-100 text-sm mt-1">How this design will look on your main page</p>
                </div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
            </div>
            
            <div className="p-8 bg-gray-50">
              <div className="mb-6 text-center">
                <Badge className="bg-blue-100 text-blue-700 text-sm px-4 py-2">
                  {currentType.toUpperCase()} Section Preview
                </Badge>
              </div>

              {/* Preview Grid - Shows multiple cards like on main page */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample data for preview */}
                {currentType === 'package' && [
                  { name: 'Basic 840', price: 840, description: '40 Mb/s Internet with 20 Mb/s Bonus - Perfect for home use', type: 'package' },
                  { name: 'Standard 1050', price: 1050, description: '60 Mb/s Internet with 20 Mb/s Bonus - Great for families', type: 'package' },
                  { name: 'Premium 1500', price: 1500, description: '100 Mb/s Internet with 20 Mb/s Bonus - Best for power users', type: 'package' }
                ].map((data, idx) => {
                  const CardComponent = selectedDesignObj.component;
                  return <CardComponent key={idx} data={data} type={currentType} />;
                })}

                {currentType === 'ftp' && [
                  { name: 'Main FTP Server', description: 'High-speed file transfer server with 24/7 availability', type: 'ftp' },
                  { name: 'Media FTP Server', description: 'Dedicated server for movies and entertainment content', type: 'ftp' },
                  { name: 'Games FTP Server', description: 'Gaming content server with latest releases', type: 'ftp' }
                ].map((data, idx) => {
                  const CardComponent = selectedDesignObj.component;
                  return <CardComponent key={idx} data={data} type={currentType} />;
                })}

                {currentType === 'coverage' && [
                  { area: 'Mugda Area', description: 'Full coverage in Mugda with 99.9% uptime', status: 'Available', type: 'coverage' },
                  { area: 'Basabo Area', description: 'Complete fiber optic coverage in Basabo', status: 'Available', type: 'coverage' },
                  { area: 'Malibagh Area', description: 'High-speed internet coverage in Malibagh', status: 'Available', type: 'coverage' }
                ].map((data, idx) => {
                  const CardComponent = selectedDesignObj.component;
                  return <CardComponent key={idx} data={data} type={currentType} />;
                })}

                {currentType === 'offer' && [
                  { title: 'New Year Special', description: 'Get 3 months free with annual subscription', type: 'offer' },
                  { title: 'Student Discount', description: '20% off on all packages for students', type: 'offer' },
                  { title: 'Referral Bonus', description: 'Get 1 month free for each referral', type: 'offer' }
                ].map((data, idx) => {
                  const CardComponent = selectedDesignObj.component;
                  return <CardComponent key={idx} data={data} type={currentType} />;
                })}
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowPreview(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-bold transition-all mr-3"
                >
                  Close Preview
                </button>
                <button 
                  onClick={() => {
                    handleApplyDesign(selectedDesignObj.id, selectedDesignObj.name);
                    setShowPreview(false);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
                >
                  Apply This Design
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Type Selector */}
      <div className="flex justify-center space-x-4 mb-6">
        {['package', 'ftp', 'coverage', 'offer'].map((type) => (
          <button
            key={type}
            onClick={() => setCurrentType(type)}
            className={`px-6 py-2 rounded-full transition-all font-semibold ${
              currentType === type 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 border-2 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Action Buttons - Only show when design is selected */}
      {selectedDesign && selectedDesignObj && (
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={handlePreview}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Preview on Main Page</span>
          </button>
        </div>
      )}

      {/* Designs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardDesigns.map((design, index) => {
          const CardComponent = design.component;
          const isSelected = selectedDesign === design.id;
          
          return (
            <div key={design.id} className="relative">
              <div 
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setSelectedDesign(design.id)}
              >
                <CardComponent data={sampleData[currentType]} type={currentType} />
              </div>
              
              {/* Design Info */}
              <div className="mt-3 text-center">
                <h3 className="font-semibold text-gray-900 text-sm">{design.name}</h3>
                <p className="text-xs text-gray-500">Design #{index + 1}</p>
                {isSelected && (
                  <div className="mt-2">
                    <button 
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all"
                      onClick={() => handleApplyDesign(design.id, design.name)}
                    >
                      Apply This Design
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info - Only show if there are designs */}
      {cardDesigns.length > 0 && (
        <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Total designs:</strong> {cardDesigns.length} | 
            <strong className="ml-2">Selected type:</strong> {currentType.charAt(0).toUpperCase() + currentType.slice(1)}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Click on a design to select it, then click "Apply This Design" to use it on your website.
          </p>
        </div>
      )}
    </div>
  );
}
