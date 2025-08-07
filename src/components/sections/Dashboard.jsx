import React from 'react'
import { Badge } from '../ui/badge'
import { mockData } from '@/data/mockData'

const Dashboard = () => {
  return (
    <section
      id="dashboard"
      className="px-6 min-h-screen snap-start flex items-center justify-center"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col flex-grow max-h-[90vh] overflow-auto">
        <div
          className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex-grow overflow-auto"
          style={{ minHeight: 0 }}
        >
          <div className="bg-slate-900 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Live Camera Feeds</h3>
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                All Systems Online
              </Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockData.cameras.map((camera, index) => (
                <div
                  key={index}
                  className="relative bg-slate-800 rounded-lg overflow-hidden aspect-video"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800"></div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                      {camera.name}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{camera.location}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Live</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-4 border border-blue-500/30 rounded">
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  {stat.icon}
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
