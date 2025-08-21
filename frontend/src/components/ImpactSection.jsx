import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Clock, 
  Droplets, 
  TrendingUp, 
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { impactData } from '../data/mock';

const iconMap = {
  Clock,
  Droplets,
  TrendingUp,
  DollarSign
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {impactData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {impactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impactData.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-blue-50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {benefit.stat}
                    </div>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {benefit.improvement}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={impactData.image}
                alt="Precision farming with agricultural drone"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Coverage Efficiency</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Traditional Method</span>
                    <span className="text-sm text-gray-600">AG 365 Drone</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-1/6"></div>
                    </div>
                    <span className="text-xs text-gray-500">vs</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 acre/hour</span>
                    <span>6 acres/hour</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of progressive farmers who have already revolutionized their operations 
            with precision agriculture technology.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Proven technology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Measurable ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;