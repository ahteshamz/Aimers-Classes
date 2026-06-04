import React from "react";
import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Globe, Share2, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-secondary/20 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Aimers<span className="text-secondary"> Classes</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Empowering students for academic excellence through expert mentorship, comprehensive study materials, and innovative teaching methodologies.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Social Media">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Community">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/#courses" className="hover:text-secondary transition-colors">Our Courses</Link></li>
              <li><Link href="/#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-secondary transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Top Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors">Class 9 Science & Math</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Class 10 Board Prep</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Foundation for IIT-JEE</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Coding Bootcamps</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Olympiad Preparation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Street No. 5, Sir Syed Road, Batla House, New Delhi, 110025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">+91 84070 51520</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">info@aimersclasses.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Aimers Classes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
