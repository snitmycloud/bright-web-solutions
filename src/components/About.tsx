
import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience to every project."
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Focused Solutions",
      description: "We deliver targeted solutions that meet your specific business needs."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Quality First",
      description: "We maintain the highest standards of quality in everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Us
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking company dedicated to providing innovative solutions that drive business growth. 
            With our expertise in web development, digital transformation, and strategic consulting, we help businesses 
            achieve their goals and stay ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
