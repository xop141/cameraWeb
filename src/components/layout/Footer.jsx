import React from 'react'
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">WatchPoint</span>
                <span className="text-sm text-slate-400 font-medium">Monitoring</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Professional camera monitoring solutions for businesses. 
                Secure, reliable, and intelligent surveillance systems.
              </p>
              <p className="text-sm text-slate-500">
                © 2024 WatchPoint Monitoring. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Real-time Monitoring</li>
                <li>Cloud Storage</li>
                <li>Instant Alerts</li>
                <li>24/7 Support</li>
                <li>System Installation</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
