import { Mail, MapPin, Phone, Globe, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-4 md:px-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/amanity-logo-new.png"
                alt="AMANITY Logo"
                width={140}
                height={70}
                className="h-16 w-auto mb-3"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide smart technology solutions for healthcare, education, businesses and secure digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Solutions', 'Industries', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2">
                    <span>›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['HIMS Solutions', 'School ERP', 'Software Development', 'Cyber Security', 'IT Consulting', 'Support & Maintenance'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2">
                    <span>›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">123, Tech Park, Indore, Madhya Pradesh, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+919999988888" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 9999 88888
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:info@amanitytech.com" className="text-gray-400 hover:text-orange-500 transition-colors truncate">
                  info@amanitytech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-orange-500 flex-shrink-0" />
                <a href="https://www.amanitytech.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  www.amanitytech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 py-8 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © 2024 Amanity Tech Solutions. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors text-gray-400"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
