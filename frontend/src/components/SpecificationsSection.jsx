import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Layers, 
  Weight, 
  Droplets, 
  Clock, 
  Radar, 
  Smartphone, 
  Zap, 
  Radio, 
  MapPin 
} from 'lucide-react';
import { droneHighlights } from '../data/mock';

const iconMap = {
  Layers,
  Weight,
  Droplets,
  Clock,
  Radar,
  Smartphone,
  Zap,
  Radio,
  MapPin
};

const SpecificationsSection = () => {
  return (
    <section id="specifications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
            Technical Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {droneHighlights.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {droneHighlights.subtitle}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {droneHighlights.specifications.map((spec, index) => {
            const IconComponent = iconMap[spec.icon];
            
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {spec.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {spec.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Highlight */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maximum Efficiency
          </h3>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Our advanced drone technology combines precision, speed, and reliability to deliver 
            unmatched performance in agricultural operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-green-100">Acres/Hour</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-white">2km</div>
              <div className="text-green-100">Range</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold text-white">11L</div>
              <div className="text-green-100">Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;