'use client';

import { useState, useEffect } from 'react';
import { cardDesigns } from './DesignShowcase';

interface DynamicCardProps {
  data: any;
  type: 'package' | 'ftp' | 'coverage' | 'offer';
  onClick?: () => void;
}

export default function DynamicCard({ data, type, onClick }: DynamicCardProps) {
  const [selectedDesignId, setSelectedDesignId] = useState<string>('default-website');

  useEffect(() => {
    // Load selected design from API (per-type)
    fetch('/api/content?key=cardDesigns')
      .then(res => res.json())
      .then(data => {
        console.log(`DynamicCard [${type}] - Loaded designs from API:`, data);
        if (data && data[type]) {
          console.log(`DynamicCard [${type}] - Using design: ${data[type]}`);
          setSelectedDesignId(data[type]);
        } else {
          console.log(`DynamicCard [${type}] - No design found, using default`);
          setSelectedDesignId('default-website');
        }
      })
      .catch(error => {
        console.error('Error loading card design:', error);
        setSelectedDesignId('default-website');
      });
  }, [type]);

  // Find the selected design
  const selectedDesign = cardDesigns.find(d => d.id === selectedDesignId);
  
  // If design not found, use default
  const designToUse = selectedDesign || cardDesigns[0];
  
  // Get the component
  const CardComponent = designToUse.component;

  return (
    <div onClick={onClick} className="h-full">
      <CardComponent data={data} type={type} />
    </div>
  );
}