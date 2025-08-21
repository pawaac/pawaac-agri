import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Brain, 
  TrendingUp, 
  Target,
  Eye,
  Cpu,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { visionModelData } from '../data/mock';

const iconMap = {
  Brain,
  TrendingUp,
  Target
};

const VisionModelSection = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 mb-4">
            AI-Powered Innovation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {visionModelData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {visionModelData.subtitle}
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {visionModelData.description}
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {visionModelData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white relative overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-indigo-100 rounded-2xl group-hover:bg-indigo-500 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700">
                        {feature.metrics.accuracy || feature.metrics.efficiency || feature.metrics.timeline}
                      </div>
                      <div className="text-xs text-gray-500">
                        {feature.metrics.accuracy ? 'Accuracy' : 
                         feature.metrics.efficiency ? 'Efficiency' : 'Prediction'}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Metrics Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                    <span>{feature.metrics.coverage || feature.metrics.precision || feature.metrics.timeline}</span>
                    <span>{feature.metrics.detection || feature.metrics.waste || 'Real-time'}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Results
              </h3>
              <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
                Our AI vision model delivers measurable improvements across all farming operations
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {visionModelData.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {benefit.value}
                  </div>
                  <div className="text-white font-semibold mb-2">
                    {benefit.title}
                  </div>
                  <div className="text-indigo-100 text-sm leading-relaxed">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Technical Specs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Cpu className="w-8 h-8 text-indigo-600" />
              </div>
              <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                Technical Excellence
              </Badge>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {visionModelData.techSpecs.title}
            </h3>
            
            <div className="space-y-4">
              {visionModelData.techSpecs.specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-700">{spec.label}</span>
                  <span className="font-bold text-indigo-600">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 group">
                Learn More About AI Vision
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* AI Vision Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={visionModelData.image}
                alt="AI Vision Model for precision farming"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating AI Elements */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Eye className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Scanning</div>
                    <div className="text-xs text-gray-600">Real-time analysis</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Processing</div>
                    <div className="text-xs text-gray-600">< 100ms</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Crop Health Analysis</div>
                    <div className="text-xs text-gray-600">AI-powered detection</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">98.5%</div>
                    <div className="text-xs text-gray-500">Healthy</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Disease Detection</span>
                    <span>Nutrient Analysis</span>
                    <span>Growth Monitoring</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-green-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="bg-blue-200 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="bg-purple-200 h-2 rounded-full">
                      <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionModelSection;