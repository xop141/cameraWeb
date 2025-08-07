"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea' // Make sure this exists or create one
import { Button } from '../ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react' // Or your icon lib

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted', formData)
    // Add actual submit logic here
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to secure your premises? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Send us a message</CardTitle>
              <CardDescription className="text-slate-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                </div>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your security needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: <Phone className="h-6 w-6 text-blue-500" />,
                title: 'Phone',
                info: '+1 (555) 123-4567',
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-500" />,
                title: 'Email',
                info: 'contact@watchpointmonitoring.com',
              },
              {
                icon: <MapPin className="h-6 w-6 text-blue-500" />,
                title: 'Office',
                info: '123 Security Ave, Tech City, TC 12345',
              },
              {
                icon: <Clock className="h-6 w-6 text-blue-500" />,
                title: 'Business Hours',
                info: (
                  <>
                    <p>Mon-Fri: 8AM-6PM</p>
                    <p>24/7 Support Available</p>
                  </>
                ),
              },
            ].map(({ icon, title, info }, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{title}</h3>
                      <div className="text-slate-400 text-sm">{info}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
