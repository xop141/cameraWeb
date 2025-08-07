"use client"
import React, { useState } from 'react';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
   <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
  <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Shield className="h-8 w-8 text-blue-500" />
        <span className="text-2xl font-bold text-white">Camera</span>
        <span className="text-sm text-slate-400 font-medium">Monitoring</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {item.name}
          </a>
        ))}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu Button and Menu */}
      <div className="md:hidden relative group">
        <button className="text-white">
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden group-hover:flex flex-col absolute right-0 mt-2 w-48 bg-slate-900 rounded-md shadow-lg border border-slate-800 p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </nav>
</header>

  );
};

export default Header;