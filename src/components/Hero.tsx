
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Excellent</span>
            <br />
            Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your business with our innovative web solutions, cutting-edge technology, and expert consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg group transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
