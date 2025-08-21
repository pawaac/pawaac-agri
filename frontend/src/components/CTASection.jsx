import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { ctaData } from '../data/mock';

const CTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleDemoRequest = () => {
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {ctaData.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {ctaData.subtitle}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {ctaData.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {ctaData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleDemoRequest}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Request Submitted!
                  </>
                ) : (
                  <a href='#request' className='flex items-center'>
                    {ctaData.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
              >
                <a href='tel:+1 (555) 123-4567' className='flex items-center'>
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Call Sales
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href='tel:+1 (555) 123-4567'>+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href='mail:demo@pawaac.com'>demo@pawaac.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Same-day scheduling</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ctaData.image}
                alt="Agricultural drone demonstration"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-xs text-gray-600">Happy Farmers</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">ROI Improvement</div>
                    <div className="text-xs text-gray-600">Average customer results</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-600">+40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-sm border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Leading Agricultural Operations
            </h3>
            <p className="text-gray-600">
              Join the growing community of progressive farmers transforming their operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Acres Covered Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Farm Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;