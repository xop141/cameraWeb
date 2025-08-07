import { 
  Eye, 
  Cloud, 
  Bell, 
  Lock, 
  Shield, 
  Monitor,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

export const mockData = {
  features: [
    {
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      title: "Real-Time Monitoring",
      description: "Watch live feeds from all your cameras with crystal clear HD quality and instant notifications."
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      title: "Cloud Storage",
      description: "Secure cloud-based storage with 30-day retention and easy access to historical footage."
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: "Smart Alerts",
      description: "AI-powered motion detection sends instant alerts to your phone, email, or SMS."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      title: "Advanced Security",
      description: "End-to-end encryption ensures your footage and data remain completely secure."
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      title: "Multi-Device Access",
      description: "Access your cameras from any device - desktop, tablet, or mobile phone."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring by our security experts."
    }
  ],

  cameras: [
    {
      name: "CAM-01",
      location: "Main Entrance",
      status: "online"
    },
    {
      name: "CAM-02", 
      location: "Parking Lot",
      status: "online"
    },
    {
      name: "CAM-03",
      location: "Warehouse",
      status: "online"
    },
    {
      name: "CAM-04",
      location: "Back Office",
      status: "online"
    },
    {
      name: "CAM-05",
      location: "Loading Bay",
      status: "online"
    },
    {
      name: "CAM-06",
      location: "Reception",
      status: "online"
    },
    {
      name: "CAM-07",
      location: "Side Exit",
      status: "online"
    },
    {
      name: "CAM-08",
      location: "Storage Room",
      status: "online"
    }
  ],

  stats: [
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      label: "Active Cameras",
      value: "24"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      label: "System Status",
      value: "Online"
    },
    {
      icon: <Bell className="h-5 w-5 text-yellow-500" />,
      label: "Alerts Today",
      value: "3"
    },
    {
      icon: <Clock className="h-5 w-5 text-purple-500" />,
      label: "Uptime",
      value: "99.9%"
    }
  ],

  aboutHighlights: [
    "Industry-leading 99.9% uptime guarantee",
    "AI-powered threat detection and analysis", 
    "Scalable solutions for businesses of all sizes",
    "Compliance with industry security standards",
    "Professional installation and setup",
    "24/7 monitoring and technical support"
  ]
};