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
    // Load selected design from localStorage (per-type)
    const savedDesignId = localStorage.getItem(`wazonline-card-design-${type}`);
    if (savedDesignId) {
      setSelectedDesignId(savedDesignId);
    } else {
      setSelectedDesignId('default-website');
    }
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