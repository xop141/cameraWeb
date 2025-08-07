import React from 'react'
import { mockData } from '@/data/mockData'
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
   <section id="about" className="px-6 bg-slate-900/50 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About WatchPoint Monitoring
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Founded in 2020, WatchPoint Monitoring has been at the forefront of intelligent 
                security solutions. We combine cutting-edge technology with reliable service to 
                provide comprehensive surveillance systems for businesses of all sizes.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Our team of security experts and technology professionals work tirelessly to 
                ensure your premises are protected 24/7 with the most advanced monitoring 
                solutions available.
              </p>
              <div className="space-y-4">
                {mockData.aboutHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Company Stats</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Active Installations</span>
                  <span className="text-2xl font-bold text-blue-400">1,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Years of Experience</span>
                  <span className="text-2xl font-bold text-blue-400">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Security Events Detected</span>
                  <span className="text-2xl font-bold text-blue-400">50K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-blue-400">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
