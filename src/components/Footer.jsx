import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';
import hostedLogo from '../assets/hm_logo_dark.png';
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact Us', href: '/contactUs' },
  ];

  const formRef = useRef(null);
  const toast = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
   const [toastPosition, setToastPosition] = useState('top-right');

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Subscribed',
      detail: 'You have successfully subscribed to our newsletter!',
      life: 4000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Failed',
      detail: 'Subscription failed. Please try again later.',
      life: 4000,
    });
  };


  useEffect(() => {
      const handleResize = () => {
        setToastPosition(window.innerWidth >= 768 ? 'top-right' : 'top-center');
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_en6bcjs', 
        'template_5q0go1d', 
        formRef.current,
        {
          publicKey: '2RCJmwoIXppL_fgJF',
        }
      )
      .then(() => {
        showSuccess();
        formRef.current.reset();
      })
      .catch(() => {
        showError();
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <footer className="bg-[#6699cc] text-white px-6 py-10">
      <Toast ref={toast} position={toastPosition} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/*Logo and Info */}
        <div className="flex flex-col gap-4 -mt-3">
          <div className="flex items-center gap-3">
            <img src={hostedLogo} alt="HostedMinds Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-extrabold">
              HOSTEDMINDS<span className="text-md ml-1 relative -top-0.5">™</span>
            </span>
          </div>
          <p className="text-sm">Web | Mobile | IOT | Robotics | Software Devlopement</p>
          <div className="flex items-center gap-4 mt-2 text-white text-xl">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700"><FaFacebookF /></a>
          </div>
        </div>

        {/* Useful Nav Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-left">Useful Links</h4>
          <div className="grid grid-cols-2 gap-2 justify-items-start max-w-xs">
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-sky-700 transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {navLinks.slice(3).map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-sky-700 transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/#faq" className="hover:text-sky-700 transition-colors duration-300">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe to newletter*/}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form ref={formRef} onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-white font-semibold px-6 py-2 rounded transition duration-300 cursor-pointer flex items-center justify-center gap-2
                ${isSubmitting ? 'bg-sky-800 cursor-not-allowed' : 'bg-sky-700 hover:bg-sky-800'}
              `}
            >
              {isSubmitting ? (
                <>
                  <span>Sending</span>
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse delay-150">.</span>
                  <span className="animate-pulse delay-300">.</span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>

      </div>
      <p className="text-sm mt-10 text-white max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} HOSTEDMINDS<span className="text-md ml-0.5 relative -top-0.5">™</span>. All rights reserved.
      </p>
    </footer>
  );
}
