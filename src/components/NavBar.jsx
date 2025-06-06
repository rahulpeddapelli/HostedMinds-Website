import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/hm_logo_dark.png';
import { Link } from 'react-router-dom';


const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact Us', href: '/contactUs' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('#about');

    return (
        <nav className=" sticky top-0 z-500 bg-[#69c] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo and Site Name */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="HostedMinds Logo" className="h-10 w-10 object-contain" />
                    <span className="text-xl font-bold">HOSTEDMINDS<span className="text-sm ml-1 relative -top-1">™</span></span>
                </div>

                {/* Nav links for desktop */}
                <div className="hidden md:flex gap-6 font-bold">
                    {navLinks.map(link => (
                        <Link to={link.href}
                            key={link.name}
                            onClick={() => setActive(link.href)}
                            className={`transition duration-300 hover:text-sky-700 ${active === link.href ? 'underline underline-offset-4' : ''
                                } hover:scale-120 transition-transform duration-300`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger-Close Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => {
                                setActive(link.href);
                                setMenuOpen(false);
                            }}
                            className={`block py-2 px-3 rounded hover:bg-white hover:text-[#69c] transition ${active === link.href ? 'bg-white text-[#69c]' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

        </nav >
    );
}
