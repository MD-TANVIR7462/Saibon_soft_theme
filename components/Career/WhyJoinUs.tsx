import React from 'react';
import { Rocket, Heart, Globe, Zap, Book, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="w-6 h-6 text-sky-400" />,
    title: "Innovation First",
    description: "Work on cutting-edge technologies and shape the future of digital transformation"
  },
  {
    icon: <Heart className="w-6 h-6 text-sky-400" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, unlimited PTO, and remote-first culture"
  },
  {
    icon: <Globe className="w-6 h-6 text-sky-400" />,
    title: "Global Impact",
    description: "Join a diverse team working with clients from over 30+ countries"
  },
  {
    icon: <Zap className="w-6 h-6 text-sky-400" />,
    title: "Rapid Growth",
    description: "Fast-track your career with our accelerated growth programs"
  },
  {
    icon: <Book className="w-6 h-6 text-sky-400" />,
    title: "Learning & Development",
    description: "Access to premium learning resources and certification programs"
  },
  {
    icon: <Users className="w-6 h-6 text-sky-400" />,
    title: "Collaborative Culture",
    description: "Work alongside industry experts and thought leaders"
  }
];

export const WhyJoinUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-7 text-blue-400 ">Why Join SaibonSoft?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className=" rounded-xl p-6 hover:bg-blue-600/10 transition-all duration-300 border border-blue-900/30">
              <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};