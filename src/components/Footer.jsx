import React from 'react';
import { Link } from 'react-router-dom';
import hostedLogo from '../assets/hm_logo_dark.png';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f5faff] text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Column 1: Logo and Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={hostedLogo} alt="HostedMinds Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-extrabold text-[#333]">HostedMinds</span>
          </div>
          <p className="text-sm">
            Web | Mobile | Cloud | Design | SEO | Marketing
          </p>
          <div className="flex items-center gap-4 mt-2 text-[#6699cc] text-xl">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
          <p className="text-xs mt-4 text-gray-500">© {new Date().getFullYear()} HostedMinds. All rights reserved.</p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-3">
            {['About Us', 'Services', 'Contact Us', 'FAQ', 'Products', 'Careers', 'Privacy Policy'].map((linkText, idx) => (
              <li key={idx}>
                <Link 
                  to={`/${linkText.toLowerCase().replace(/\s+/g, '')}`} 
                  className="hover:text-[#6699cc] transition-colors duration-300"
                >
                  {linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6699cc]" 
              required 
            />
            <button 
              type="submit" 
              className="bg-[#6699cc] text-white px-6 py-2 rounded hover:bg-[#5a88b3] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
