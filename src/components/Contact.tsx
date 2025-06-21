
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6">Send us a message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're here to help you succeed. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p className="text-gray-300">contact@snitsolutions.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-300">123 Business Ave, Suite 100<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
