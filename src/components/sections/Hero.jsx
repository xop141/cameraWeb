import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-6 h-screen">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
              Professional Security Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Camera
              <span className="text-blue-500"> Monitoring</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
              Secure your premises with intelligent surveillance. Real-time monitoring, 
              instant alerts, and cloud-based storage for complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                {/* <Play className="h-5 w-5 mr-2" /> */}
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                Learn More
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
