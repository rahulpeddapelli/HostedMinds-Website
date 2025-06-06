import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hostedLogo from '../../assets/blue-hm-logo.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ClientFeedbackForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="bg-[#f5faff] py-16 px-6 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">

                {/* HostedMinds Info */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2 flex flex-col justify-between text-lg text-gray-800">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={hostedLogo} alt="HostedMinds Logo" className="w-20 h-20 object-contain" />
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#6699cc]">HostedMinds</h2>
                            <p className="text-gray-600 text-base">Empowering Your Digital Presence</p>
                        </div>
                    </div>

                    <ul className="space-y-4 text-gray-800 text-lg mb-4">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#6699cc]" />
                            101, Tech Park, Pune, Maharashtra, India
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#6699cc]" />
                            <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#6699cc]" />
                            <a href="mailto:contact@hostedminds.com" className="hover:underline">contact@hostedminds.com</a>
                        </li>
                    </ul>

                    <button>
                        <Link
                            to="/contactUs"
                            className="inline-block bg-[#6699cc] text-white font-semibold px-6 py-3 rounded text-lg w-full text-center hover:underline hover:underline-offset-4"
                        >
                            Contact Us
                        </Link>
                    </button>
                </div>

                {/* Feedback Form */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-6 text-[#333] text-center">Share Your Feedback</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-base">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6699cc]"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6699cc]"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Feedback"
                            rows="5"
                            className="border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#6699cc]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#6699cc] text-white font-semibold px-6 py-3 rounded hover:bg-[#558ab7] transition duration-300 text-lg"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
