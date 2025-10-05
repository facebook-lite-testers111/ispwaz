'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Gift, MapPin, Server, Play, ExternalLink, Heart, Zap, Shield, Globe, Wifi, Download, Upload, Users, Clock, Award, Target, Rocket, Crown, Diamond, Flame, Sparkles, TrendingUp, Activity, Box, Layers, Package } from 'lucide-react';

// 21 Completely Unique Card Designs (including default website design)
const originalDesigns = [
  // 1. Default Website Design
  {
    id: 'default-website',
    name: 'Default Website',
    component: ({ data, type }: { data: any, type: string }) => (
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Type Badge */}
            <div className={`lg:col-span-3 ${type === 'package' ? 'bg-yellow-100' : type === 'ftp' ? 'bg-blue-100' : type === 'coverage' ? 'bg-green-100' : 'bg-pink-100'} p-8 flex flex-col justify-center items-center text-center`}>
              <Badge variant="secondary" className={`${type === 'package' ? 'text-blue-600' : type === 'ftp' ? 'text-blue-600' : type === 'coverage' ? 'text-green-600' : 'text-pink-600'} bg-transparent text-2xl font-bold mb-2`}>
                {type.toUpperCase()}
              </Badge>
              <h3 className="text-xl font-bold text-gray-900">
                {data.name || data.title || data.area}
              </h3>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 p-8">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{data.description}</span>
                </div>
              </div>
            </div>

            {/* Price and Action */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center items-center text-center border-l border-gray-100">
              {type === 'package' && (
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">৳{data.price}</span>
                  <span className="text-gray-600 block text-sm">/month</span>
                </div>
              )}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                {type === 'package' ? 'Purchase' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Get Offer'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },

  // 2. Holographic Futuristic
  {
    id: 'holographic',
    name: 'Holographic',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden border-2 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-500 p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            {type === 'package' && <Crown className="w-10 h-10 text-white" />}
            {type === 'ftp' && <Globe className="w-10 h-10 text-white" />}
            {type === 'coverage' && <Target className="w-10 h-10 text-white" />}
            {type === 'offer' && <Diamond className="w-10 h-10 text-white" />}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{data.name || data.title || data.area}</h3>
          <p className="text-purple-200 text-sm mb-6 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
            {type === 'package' ? 'ACTIVATE' : type === 'ftp' ? 'ACCESS' : type === 'coverage' ? 'LOCATE' : 'CLAIM'}
          </button>
        </div>
      </div>
    )
  },

  // 3. Brutalist Concrete
  {
    id: 'brutalist',
    name: 'Brutalist',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-200 border-8 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-8">
        <div className="border-4 border-black p-4 mb-6">
          <h3 className="text-3xl font-black text-black uppercase tracking-tighter">{data.name || data.title || data.area}</h3>
        </div>
        <div className="bg-black text-white p-4 mb-6">
          <p className="font-mono text-sm uppercase">{data.description}</p>
        </div>
        {type === 'package' && (
          <div className="bg-yellow-400 border-4 border-black p-4 mb-6">
            <div className="text-5xl font-black text-black">৳{data.price}</div>
          </div>
        )}
        <button className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black py-4 font-black uppercase tracking-wider transition-all duration-200">
          {type === 'package' ? 'BUY NOW' : type === 'ftp' ? 'CONNECT' : type === 'coverage' ? 'CHECK' : 'GRAB IT'}
        </button>
      </div>
    )
  },

  // 4. Origami Paper Fold
  {
    id: 'origami',
    name: 'Origami',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-none shadow-lg hover:shadow-2xl transition-all duration-500" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'}}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 flex items-center justify-center">
              <div className="transform -rotate-45">
                {type === 'package' && <Package className="w-8 h-8 text-white" />}
                {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
                {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
                {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
              </div>
            </div>
            <div className="w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-orange-400"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-orange-500 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-none font-semibold hover:from-orange-500 hover:to-red-600 transition-all">
            {type === 'package' ? 'Choose Plan' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Claim'}
          </button>
        </div>
      </div>
    )
  },

  // 5. Neon Cyberpunk
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-black border-2 border-cyan-400 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            {type === 'package' && <Zap className="w-8 h-8 text-black" />}
            {type === 'ftp' && <Download className="w-8 h-8 text-black" />}
            {type === 'coverage' && <Globe className="w-8 h-8 text-black" />}
            {type === 'offer' && <Flame className="w-8 h-8 text-black" />}
          </div>
          <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-4 font-mono">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-cyan-400 mb-4 font-mono">৳{data.price}</div>
          )}
          <button className="w-full bg-cyan-400 text-black hover:bg-cyan-300 font-mono font-bold py-3 rounded-lg transition-all">
            {type === 'package' ? 'INITIATE' : type === 'ftp' ? 'CONNECT' : type === 'coverage' ? 'SCAN' : 'ACTIVATE'}
          </button>
        </div>
      </div>
    )
  },

  // 6. Watercolor Artistic
  {
    id: 'watercolor',
    name: 'Watercolor',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 p-8" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(173, 216, 230, 0.3) 0%, transparent 50%)'}}>
        <div className="relative">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              {type === 'package' && <Star className="w-8 h-8 text-purple-600" />}
              {type === 'ftp' && <Server className="w-8 h-8 text-blue-600" />}
              {type === 'coverage' && <MapPin className="w-8 h-8 text-pink-600" />}
              {type === 'offer' && <Gift className="w-8 h-8 text-purple-600" />}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-purple-600 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-white/80 backdrop-blur-sm text-purple-600 hover:bg-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            {type === 'package' ? 'Select' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Claim'}
          </button>
        </div>
      </div>
    )
  },

  // 7. Minimalist Line Art
  {
    id: 'line-art',
    name: 'Line Art',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white border border-gray-900 rounded-none shadow-none hover:shadow-lg transition-all duration-300 p-10">
        <div className="text-left">
          <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center mb-6">
            {type === 'package' && <Check className="w-6 h-6 text-gray-900" />}
            {type === 'ftp' && <Server className="w-6 h-6 text-gray-900" />}
            {type === 'coverage' && <MapPin className="w-6 h-6 text-gray-900" />}
            {type === 'offer' && <Gift className="w-6 h-6 text-gray-900" />}
          </div>
          <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">{data.name || data.title || data.area}</h3>
          <div className="w-16 h-px bg-gray-900 mb-4"></div>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed font-light">{data.description}</p>
          {type === 'package' && (
            <div className="text-5xl font-light text-gray-900 mb-8">৳{data.price}</div>
          )}
          <button className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-4 rounded-none font-light tracking-widest uppercase transition-all duration-300">
            {type === 'package' ? 'Select' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Get'}
          </button>
        </div>
      </div>
    )
  },

  // 8. Neumorphic Soft
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-100 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all duration-300 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mx-auto mb-6">
            {type === 'package' && <Check className="w-10 h-10 text-gray-600" />}
            {type === 'ftp' && <Server className="w-10 h-10 text-gray-600" />}
            {type === 'coverage' && <MapPin className="w-10 h-10 text-gray-600" />}
            {type === 'offer' && <Gift className="w-10 h-10 text-gray-600" />}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-gray-800 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-gray-100 text-gray-800 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] py-4 rounded-full font-semibold transition-all duration-300">
            {type === 'package' ? 'Select' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'View' : 'Claim'}
          </button>
        </div>
      </div>
    )
  },

  // 9. Retro 80s Vaporwave
  {
    id: 'vaporwave',
    name: 'Vaporwave',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-b from-purple-900 via-pink-600 to-orange-500 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 p-8">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>
        <div className="relative text-center">
          <div className="inline-block mb-6 transform -rotate-12">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
              {type === 'package' && <Star className="w-10 h-10 text-white" />}
              {type === 'ftp' && <Server className="w-10 h-10 text-white" />}
              {type === 'coverage' && <MapPin className="w-10 h-10 text-white" />}
              {type === 'offer' && <Gift className="w-10 h-10 text-white" />}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 font-mono uppercase tracking-wider" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>{data.name || data.title || data.area}</h3>
          <p className="text-white/90 text-sm mb-6 font-mono">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-cyan-300 mb-6 font-mono" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-cyan-400 to-pink-400 text-purple-900 hover:from-cyan-300 hover:to-pink-300 py-4 rounded-lg font-bold uppercase tracking-wider shadow-lg transition-all">
            {type === 'package' ? 'RADICAL' : type === 'ftp' ? 'CONNECT' : type === 'coverage' ? 'EXPLORE' : 'AWESOME'}
          </button>
        </div>
      </div>
    )
  },

  // 10. Magazine Editorial
  {
    id: 'magazine',
    name: 'Magazine',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-none shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-red-600 to-pink-600 relative">
          <div className="absolute top-4 left-4">
            <div className="text-white text-xs font-bold uppercase tracking-widest">{type}</div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              {type === 'package' && <Check className="w-8 h-8 text-red-600" />}
              {type === 'ftp' && <Server className="w-8 h-8 text-red-600" />}
              {type === 'coverage' && <MapPin className="w-8 h-8 text-red-600" />}
              {type === 'offer' && <Gift className="w-8 h-8 text-red-600" />}
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-black text-gray-900 mb-3 uppercase tracking-tight leading-tight">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-black text-gray-900">৳{data.price}</span>
              <span className="text-gray-500 ml-2">/mo</span>
            </div>
          )}
          <button className="w-full bg-red-600 text-white hover:bg-red-700 py-4 rounded-none font-bold uppercase tracking-wider transition-all">
            {type === 'package' ? 'Subscribe' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'Discover' : 'Get Now'}
          </button>
        </div>
      </div>
    )
  },

  // 11. Glass Morphism Light
  {
    id: 'glass-light',
    name: 'Glass Light',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            {type === 'package' && <Check className="w-10 h-10 text-white" />}
            {type === 'ftp' && <Server className="w-10 h-10 text-white" />}
            {type === 'coverage' && <MapPin className="w-10 h-10 text-white" />}
            {type === 'offer' && <Gift className="w-10 h-10 text-white" />}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-blue-600 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all">
            {type === 'package' ? 'Get Started' : type === 'ftp' ? 'Access Now' : type === 'coverage' ? 'Check Coverage' : 'Get Deal'}
          </button>
        </div>
      </div>
    )
  },

  // 12. Comic Book Style
  {
    id: 'comic',
    name: 'Comic Book',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-yellow-50 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-6">
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-500 border-4 border-black rounded-full flex items-center justify-center transform rotate-12">
          <span className="text-white font-black text-xs transform -rotate-12">NEW!</span>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 border-4 border-black rounded-lg flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Zap className="w-10 h-10 text-yellow-300" />}
            {type === 'ftp' && <Server className="w-10 h-10 text-yellow-300" />}
            {type === 'coverage' && <MapPin className="w-10 h-10 text-yellow-300" />}
            {type === 'offer' && <Gift className="w-10 h-10 text-yellow-300" />}
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>{data.name || data.title || data.area}</h3>
          <p className="text-gray-700 text-sm mb-4 font-bold">{data.description}</p>
          {type === 'package' && (
            <div className="bg-white border-4 border-black rounded-lg p-3 mb-4">
              <div className="text-3xl font-black text-red-600">৳{data.price}</div>
            </div>
          )}
          <button className="w-full bg-red-500 border-4 border-black text-white hover:bg-red-600 py-3 rounded-lg font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            {type === 'package' ? 'POW!' : type === 'ftp' ? 'ZAP!' : type === 'coverage' ? 'BOOM!' : 'BANG!'}
          </button>
        </div>
      </div>
    )
  },

  // 13. Luxury Gold
  {
    id: 'luxury',
    name: 'Luxury Gold',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-yellow-600/20"></div>
        <div className="relative text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            {type === 'package' && <Crown className="w-10 h-10 text-gray-900" />}
            {type === 'ftp' && <Server className="w-10 h-10 text-gray-900" />}
            {type === 'coverage' && <MapPin className="w-10 h-10 text-gray-900" />}
            {type === 'offer' && <Diamond className="w-10 h-10 text-gray-900" />}
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-3 tracking-wide">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-yellow-400 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 py-4 rounded-xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'PREMIUM' : type === 'ftp' ? 'ELITE ACCESS' : type === 'coverage' ? 'EXCLUSIVE' : 'VIP OFFER'}
          </button>
        </div>
      </div>
    )
  },

  // 14. Isometric 3D
  {
    id: 'isometric',
    name: 'Isometric 3D',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 transform hover:-translate-y-2">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
        <div className="relative">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm transform rotate-45 flex items-center justify-center mb-6 shadow-xl">
            <div className="transform -rotate-45">
              {type === 'package' && <Box className="w-12 h-12 text-white" />}
              {type === 'ftp' && <Layers className="w-12 h-12 text-white" />}
              {type === 'coverage' && <Globe className="w-12 h-12 text-white" />}
              {type === 'offer' && <Gift className="w-12 h-12 text-white" />}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-white/90 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-white mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-white text-purple-600 hover:bg-white/90 py-4 rounded-xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'Choose' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Claim'}
          </button>
        </div>
      </div>
    )
  },

  // 15. Neon Pink Glow
  {
    id: 'neon-pink',
    name: 'Neon Pink',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-black border-2 border-pink-500 rounded-xl shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(236,72,153,0.6)]">
            {type === 'package' && <Heart className="w-8 h-8 text-black" />}
            {type === 'ftp' && <Wifi className="w-8 h-8 text-black" />}
            {type === 'coverage' && <Globe className="w-8 h-8 text-black" />}
            {type === 'offer' && <Sparkles className="w-8 h-8 text-black" />}
          </div>
          <h3 className="text-xl font-bold text-pink-500 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-pink-500 mb-4">৳{data.price}</div>
          )}
          <button className="w-full bg-pink-500 text-black hover:bg-pink-400 font-bold py-3 rounded-lg transition-all">
            {type === 'package' ? 'Love It' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'Explore' : 'Sparkle'}
          </button>
        </div>
      </div>
    )
  },

  // 16. Nature Organic
  {
    id: 'nature',
    name: 'Nature Organic',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            {type === 'package' && <Check className="w-10 h-10 text-white" />}
            {type === 'ftp' && <Server className="w-10 h-10 text-white" />}
            {type === 'coverage' && <MapPin className="w-10 h-10 text-white" />}
            {type === 'offer' && <Gift className="w-10 h-10 text-white" />}
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-green-700 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-green-900 mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold shadow-lg transition-all">
            {type === 'package' ? 'Go Green' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'Explore' : 'Get Offer'}
          </button>
        </div>
      </div>
    )
  },

  // 17. Tech Grid Matrix
  {
    id: 'tech-grid',
    name: 'Tech Grid',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
            {type === 'package' && <Check className="w-8 h-8 text-green-400" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-blue-400" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-purple-400" />}
            {type === 'offer' && <Gift className="w-8 h-8 text-pink-400" />}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-gray-900 mb-4">৳{data.price}</div>
          )}
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-all">
            {type === 'package' ? 'Select' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Get'}
          </button>
        </div>
      </div>
    )
  },

  // 18. Gaming RGB
  {
    id: 'gaming',
    name: 'Gaming RGB',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border-2 border-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_35px_rgba(147,51,234,0.5)] transition-all duration-300 p-6">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              {type === 'package' && <Rocket className="w-10 h-10 text-white" />}
              {type === 'ftp' && <Download className="w-10 h-10 text-white" />}
              {type === 'coverage' && <Globe className="w-10 h-10 text-white" />}
              {type === 'offer' && <Sparkles className="w-10 h-10 text-white" />}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-mono">{data.name || data.title || data.area}</h3>
          <p className="text-gray-300 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-purple-400 mb-4 font-mono">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
            {type === 'package' ? 'LEVEL UP' : type === 'ftp' ? 'DOWNLOAD' : type === 'coverage' ? 'EXPLORE' : 'UNLOCK'}
          </button>
        </div>
      </div>
    )
  },

  // 19. Gradient Mesh Modern
  {
    id: 'gradient-mesh',
    name: 'Gradient Mesh',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        <div className="relative text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            {type === 'package' && <Star className="w-10 h-10 text-white" />}
            {type === 'ftp' && <Upload className="w-10 h-10 text-white" />}
            {type === 'coverage' && <Target className="w-10 h-10 text-white" />}
            {type === 'offer' && <Crown className="w-10 h-10 text-white" />}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{data.name || data.title || data.area}</h3>
          <p className="text-white/90 text-sm mb-6">{data.description}</p>
          {type === 'package' && (
            <div className="text-4xl font-bold text-white mb-6">৳{data.price}</div>
          )}
          <button className="w-full bg-white text-purple-600 hover:bg-white/90 py-3 rounded-2xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'Choose Plan' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'Explore' : 'Claim Now'}
          </button>
        </div>
      </div>
    )
  },

  // 20. Dark Minimal Pro
  {
    id: 'dark-minimal',
    name: 'Dark Minimal',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              {type === 'package' && <Shield className="w-6 h-6 text-white" />}
              {type === 'ftp' && <Wifi className="w-6 h-6 text-white" />}
              {type === 'coverage' && <Users className="w-6 h-6 text-white" />}
              {type === 'offer' && <Diamond className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{data.name || data.title || data.area}</h3>
              {type === 'package' && (
                <p className="text-2xl font-bold text-purple-400">৳{data.price}</p>
              )}
            </div>
          </div>
          <Badge className="bg-purple-600 text-white">
            {type === 'package' ? 'PRO' : type === 'ftp' ? 'FTP' : type === 'coverage' ? 'COVERAGE' : 'OFFER'}
          </Badge>
        </div>
        <p className="text-gray-300 text-sm mb-4">{data.description}</p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all">
          {type === 'package' ? 'Upgrade Now' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'Check' : 'Claim'}
        </button>
      </div>
    )
  },

  // 21. Cosmic Space
  {
    id: 'cosmic',
    name: 'Cosmic Space',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl border-2 border-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_35px_rgba(147,51,234,0.5)] transition-all duration-300 p-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            {type === 'package' && <Rocket className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Download className="w-8 h-8 text-white" />}
            {type === 'coverage' && <Globe className="w-8 h-8 text-white" />}
            {type === 'offer' && <Sparkles className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-purple-200 text-sm mb-4">{data.description}</p>
          {type === 'package' && (
            <div className="text-3xl font-bold text-purple-300 mb-4">৳{data.price}</div>
          )}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
            {type === 'package' ? 'LAUNCH' : type === 'ftp' ? 'DOWNLOAD' : type === 'coverage' ? 'EXPLORE' : 'ACTIVATE'}
          </button>
        </div>
      </div>
    )
  },

  // 22. Amber IT Style - Professional Corporate
  {
    id: 'amber-corporate',
    name: 'Amber Corporate',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                {type === 'package' && <Wifi className="w-6 h-6 text-white" />}
                {type === 'ftp' && <Server className="w-6 h-6 text-white" />}
                {type === 'coverage' && <MapPin className="w-6 h-6 text-white" />}
                {type === 'offer' && <Gift className="w-6 h-6 text-white" />}
              </div>
              <div>
                <Badge className="bg-blue-100 text-blue-700 text-xs">{type.toUpperCase()}</Badge>
              </div>
            </div>
            {type === 'package' && (
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">৳{data.price}</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{data.description}</p>
          <div className="flex items-center space-x-2">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2.5 rounded-lg font-semibold transition-all">
              {type === 'package' ? 'Get Started' : type === 'ftp' ? 'Access Now' : type === 'coverage' ? 'Check Area' : 'Claim Offer'}
            </button>
            <button className="px-4 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  },

  // 23. Dot Internet Style - Modern Minimalist
  {
    id: 'dot-minimal',
    name: 'Dot Minimal',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{data.name || data.title || data.area}</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{type}</span>
              </div>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {type === 'package' && <Activity className="w-7 h-7 text-orange-600" />}
              {type === 'ftp' && <Server className="w-7 h-7 text-orange-600" />}
              {type === 'coverage' && <Target className="w-7 h-7 text-orange-600" />}
              {type === 'offer' && <Sparkles className="w-7 h-7 text-orange-600" />}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">{data.description}</p>
          {type === 'package' && (
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-black text-gray-900">৳{data.price}</span>
              <span className="text-gray-500 ml-2 text-sm">/mo</span>
            </div>
          )}
          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
            {type === 'package' ? 'Subscribe Now' : type === 'ftp' ? 'Connect' : type === 'coverage' ? 'View Coverage' : 'Get Deal'}
          </button>
        </div>
      </div>
    )
  },

  // 24. MiME Style - Image Card with Overlay
  {
    id: 'mime-image',
    name: 'MiME Image',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        {/* Image Background */}
        <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              {type === 'package' && <Wifi className="w-10 h-10 text-white" />}
              {type === 'ftp' && <Server className="w-10 h-10 text-white" />}
              {type === 'coverage' && <Globe className="w-10 h-10 text-white" />}
              {type === 'offer' && <Gift className="w-10 h-10 text-white" />}
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-gray-900 font-bold">{type.toUpperCase()}</Badge>
          </div>
          {type === 'package' && (
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-black text-gray-900">৳{data.price}</div>
                <div className="text-xs text-gray-600">per month</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{data.description}</p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'Choose Plan' : type === 'ftp' ? 'Access Server' : type === 'coverage' ? 'View Details' : 'Get Offer'}
          </button>
        </div>
      </div>
    )
  },

  // 25. Professional Table Layout
  {
    id: 'table-layout',
    name: 'Table Layout',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100">
        <div className="grid grid-cols-12 gap-0">
          {/* Left Section - Icon & Type */}
          <div className="col-span-3 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              {type === 'package' && <Zap className="w-8 h-8 text-white" />}
              {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
              {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
              {type === 'offer' && <Gift className="w-8 h-8 text-white" />}
            </div>
            <Badge className="bg-white/20 text-white text-xs">{type.toUpperCase()}</Badge>
          </div>
          
          {/* Middle Section - Details */}
          <div className="col-span-6 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
          </div>
          
          {/* Right Section - Price & Action */}
          <div className="col-span-3 bg-gray-50 p-6 flex flex-col items-center justify-center border-l-2 border-gray-100">
            {type === 'package' && (
              <div className="text-center mb-4">
                <div className="text-3xl font-black text-indigo-600">৳{data.price}</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            )}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-all">
              {type === 'package' ? 'Buy' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Claim'}
            </button>
          </div>
        </div>
      </div>
    )
  },

  // 26. Floating Badge Style
  {
    id: 'floating-badge',
    name: 'Floating Badge',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200">
        {/* Floating Badge */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform">
          {type === 'package' && <Check className="w-10 h-10 text-white" />}
          {type === 'ftp' && <Server className="w-10 h-10 text-white" />}
          {type === 'coverage' && <MapPin className="w-10 h-10 text-white" />}
          {type === 'offer' && <Star className="w-10 h-10 text-white" />}
        </div>
        
        <div className="mb-4">
          <Badge className="bg-green-100 text-green-700 mb-3">{type.toUpperCase()}</Badge>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
        </div>
        
        {type === 'package' && (
          <div className="mb-6">
            <div className="inline-block bg-green-50 rounded-xl px-6 py-3">
              <div className="text-3xl font-black text-green-600">৳{data.price}</div>
              <div className="text-xs text-green-600">per month</div>
            </div>
          </div>
        )}
        
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3.5 rounded-xl font-bold shadow-lg transition-all">
          {type === 'package' ? 'Get Started' : type === 'ftp' ? 'Connect Now' : type === 'coverage' ? 'Check Coverage' : 'Claim Offer'}
        </button>
      </div>
    )
  },

  // 27. Bordered Accent Style
  {
    id: 'bordered-accent',
    name: 'Bordered Accent',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-l-8 border-blue-600">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                {type === 'package' && <Wifi className="w-5 h-5 text-blue-600" />}
                {type === 'ftp' && <Server className="w-5 h-5 text-blue-600" />}
                {type === 'coverage' && <Globe className="w-5 h-5 text-blue-600" />}
                {type === 'offer' && <Gift className="w-5 h-5 text-blue-600" />}
              </div>
              <Badge className="bg-blue-100 text-blue-700 text-xs font-bold">{type.toUpperCase()}</Badge>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{data.name || data.title || data.area}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {type === 'package' && (
            <div>
              <div className="text-3xl font-black text-blue-600">৳{data.price}</div>
              <div className="text-xs text-gray-500">per month</div>
            </div>
          )}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all ml-auto">
            {type === 'package' ? 'Subscribe' : type === 'ftp' ? 'Access' : type === 'coverage' ? 'View' : 'Get'}
          </button>
        </div>
      </div>
    )
  },

  // 28. Stacked Info Style
  {
    id: 'stacked-info',
    name: 'Stacked Info',
    component: ({ data, type }: { data: any, type: string }) => (
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
            {type === 'package' && <TrendingUp className="w-8 h-8 text-white" />}
            {type === 'ftp' && <Server className="w-8 h-8 text-white" />}
            {type === 'coverage' && <MapPin className="w-8 h-8 text-white" />}
            {type === 'offer' && <Star className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{data.name || data.title || data.area}</h3>
          <Badge className="bg-white/20 text-white text-xs">{type.toUpperCase()}</Badge>
        </div>
        
        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">{data.description}</p>
          
          {type === 'package' && (
            <div className="text-center mb-6 py-4 bg-teal-50 rounded-xl">
              <div className="text-4xl font-black text-teal-600">৳{data.price}</div>
              <div className="text-sm text-teal-600 mt-1">per month</div>
            </div>
          )}
          
          <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3.5 rounded-xl font-bold shadow-lg transition-all">
            {type === 'package' ? 'Choose This Plan' : type === 'ftp' ? 'Connect Now' : type === 'coverage' ? 'View Area' : 'Claim Now'}
          </button>
        </div>
      </div>
    )
  }
];

// Sample data for demo
const sampleData = {
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

export default function DesignShowcase() {
  const [designs] = useState(originalDesigns);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [currentType, setCurrentType] = useState<'package' | 'ftp' | 'coverage' | 'offer'>('package');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Card Design Showcase</h1>
          <p className="text-xl text-gray-600 mb-8">Choose your favorite design for your website cards</p>
          
          {/* Type Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {['package', 'ftp', 'coverage', 'offer'].map((type) => (
              <button
                key={type}
                onClick={() => setCurrentType(type)}
                className={`px-6 py-2 rounded-full transition-all ${
                  currentType === type 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designs.map((design, index) => {
            const CardComponent = design.component;
            return (
              <div key={design.id} className="relative">
                <div 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedDesign === design.id 
                      ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedDesign(design.id)}
                >
                  <CardComponent data={sampleData[currentType]} type={currentType} />
                </div>
                
                {/* Design Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900">{design.name}</h3>
                  <p className="text-sm text-gray-500">Design #{index + 1}</p>
                  {selectedDesign === design.id && (
                    <div className="mt-2">
                      <button 
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all"
                        onClick={() => {
                          // Save selected design ONLY for current type
                          try {
                            localStorage.setItem(`wazonline-card-design-${currentType}`, design.id);
                            alert(`✅ Selected: ${design.name}\n\nApplied to ${currentType} cards only.`);
                          } catch (e) {
                            console.error('Error saving selected design', e);
                            alert('Failed to save selection.');
                          }
                        }}
                      >
                        Select This Design
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Designs Counter */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-xs">
            Total designs: {designs.length}
          </p>
        </div>
      </div>
    </div>
  );
}