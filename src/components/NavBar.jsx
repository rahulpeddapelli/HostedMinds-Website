import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaSearch, FaExclamationCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/hm_logo_dark.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutUs' },
  { name: 'Services', href: '/services' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact Us', href: '/contactUs' },
];

const domainSuggestions = [
  'STEM', 'STEM LAB Setup', 'E-Learning', 'Learn to Code', 'Experiential Learning',
  'Robotics', 'Educational Projects', 'Circuit & PCB Designing', 'Electronics Manufacturing Services',
  'Component Procurement', 'Reverse Engineering', 'Product Unit Testing', 'IoT & IIoT Services',
  'Software & Website Development', 'Mobile App Development', 'Research & Development',
  'POC & Prototypes', 'Product Development/Pilot'
];

export default function Navbar({setOpenService}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const location = useLocation();
  const active = location.pathname;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredSuggestions = domainSuggestions.filter((item) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
    navigate('/services');
    setOpenService(suggestion)
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#69c] sticky top-0 z-50 shadow-md">
      {/* Top Row: Logo + Nav + Search OR Menu */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="HostedMinds Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-white">
            HOSTEDMINDS<span className="text-sm ml-1 relative -top-1">™</span>
          </span>
        </Link>

        {/* Nav links (Only show ≥ 768px) */}
        {windowWidth >= 768 && (
          <div
            className={`font-bold ${windowWidth > 950
                ? 'flex-1 flex justify-center gap-6'
                : 'flex gap-4 justify-end ml-auto'
              }`}
          >
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                className={`transition duration-300 ${active === link.href ? 'underline underline-offset-4' : ''
                  } ${windowWidth > 950
                    ? 'text-white hover:scale-110'
                    : 'text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Hamburger Menu (<768px only) */}
        {windowWidth < 768 && (
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Search Bar (>950px only) */}
        {windowWidth > 950 && (
          <div className="hidden md:block relative">
            <div className="flex items-center bg-white text-black px-3 py-1 rounded-full">
              <FaSearch className="text-[#69c] mr-2" />
              <input
                type="text"
                placeholder="Search services..."
                className="outline-none w-60"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onFocus={() => setShowSuggestions(true)}
              />
            </div>

            {showSuggestions && searchInput && (
              <div className="absolute w-full bg-white text-black mt-1 rounded shadow-md max-h-40 overflow-y-auto z-50">
                {filteredSuggestions.length ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-[#e0e0e0] cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-3 text-red-500 font-medium bg-white p-4"><FaExclamationCircle />
                    Sorry, no such service found.</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mid-Range Search Bar: 768–950px */}
      {windowWidth >= 768 && windowWidth <= 950 && (
        <div className="max-w-7xl mx-auto px-4 pb-3">
          <div className="relative w-full bg-white text-black rounded-full">
            <div className="flex items-center px-4 py-2">
              <FaSearch className="text-[#69c] mr-3" />
              <input
                type="text"
                placeholder="Search services..."
                className="outline-none w-full"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onFocus={() => setShowSuggestions(true)}
              />
            </div>
            {showSuggestions && searchInput && (
              <div className="absolute w-full bg-white text-black mt-1 rounded shadow-md max-h-44 overflow-y-auto z-50">
                {filteredSuggestions.length ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-[#e0e0e0] cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-3 text-red-500 font-medium bg-white p-4"><FaExclamationCircle />
                    Sorry, no such service found.</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu (<768px) */}
      {menuOpen && windowWidth < 768 && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#69c] text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => {
                setMenuOpen(false);
              }}
              className={`block py-2 px-3 rounded hover:bg-[#f0f0f0] transition ${active === link.href ? 'bg-[#e0e0e0] text-[#69c]' : ''
                }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile Search */}
          <div className="relative mt-2">
            <div className="flex items-center bg-white text-black px-3 py-2 mt-5 rounded-full">
              <FaSearch className="text-[#69c] mr-2" />
              <input
                type="text"
                placeholder="Search services..."
                className="outline-none w-full"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onFocus={() => setShowSuggestions(true)}
              />
            </div>

            {showSuggestions && searchInput && (
              <div className="absolute w-full bg-white text-black mt-1 rounded shadow-md max-h-40 overflow-y-auto z-50">
                {filteredSuggestions.length ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-[#e0e0e0] cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-3 text-red-500 font-medium bg-white p-4"><FaExclamationCircle />
                    Sorry, no such service found.</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
