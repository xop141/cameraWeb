import React from 'react'
import { mockData } from '@/data/mockData'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const Features = () => {
  return (
   <section id="features" className="py-20 px-6 bg-slate-900/50 h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose WatchPoint?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge technology meets reliable security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features
