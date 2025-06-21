
import React from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-yellow-500" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-yellow-500" />,
      title: "Mobile Solutions",
      description: "Responsive mobile applications that provide excellent user experiences across all devices."
    },
    {
      icon: <Cloud className="h-12 w-12 text-yellow-500" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations."
    },
    {
      icon: <Database className="h-12 w-12 text-yellow-500" />,
      title: "Data Management",
      description: "Comprehensive data solutions including analytics, storage, and business intelligence."
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Security Solutions",
      description: "Advanced cybersecurity measures to protect your digital assets and customer data."
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with our optimization services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
