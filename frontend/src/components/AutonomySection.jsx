import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Plane, 
  Map, 
  BarChart3, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { autonomyData } from '../data/mock';

const AutonomySection = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4">
            Smart Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {autonomyData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {autonomyData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {autonomyData.features.map((feature, index) => {
            const icons = [Plane, Map, BarChart3];
            const IconComponent = icons[index];
            
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white h-full"
              >
                <CardHeader className="pb-4">
                  <div className="p-4 bg-purple-100 rounded-2xl w-fit mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile App Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Mobile Control
                </Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {autonomyData.appFeatures.title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {autonomyData.appFeatures.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {autonomyData.appFeatures.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={autonomyData.appFeatures.image}
                  alt="Mobile app control for agricultural drone"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Drone Online</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float animation-delay-1000">
                <div className="text-xs text-gray-500 mb-1">Coverage</div>
                <div className="text-lg font-bold text-gray-900">4.2 acres</div>
                <div className="text-xs text-green-600">+0.3 this hour</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Accuracy", value: "99.5%", desc: "GPS precision" },
            { label: "Uptime", value: "99.8%", desc: "System reliability" },
            { label: "Response", value: "<100ms", desc: "Control latency" },
            { label: "Updates", value: "Real-time", desc: "Data sync" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutonomySection;