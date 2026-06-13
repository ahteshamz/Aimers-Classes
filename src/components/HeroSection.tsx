import React from "react";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16 sm:pt-24 lg:pt-32 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-primary/5 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Admissions Open for 2026-27
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            Empowering Students for <span className="text-transparent bg-clip-text bg--to-r from-primary to-secondary">Academic Excellence</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Aimers Classes to unlock your true potential. We provide expert mentorship, cutting-edge resources, and a proven methodology for success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              Inquire Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#courses" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all border border-slate-100">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">95%</h3>
            <p className="text-slate-500 font-medium">Success Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all border border-slate-100">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">10k+</h3>
            <p className="text-slate-500 font-medium">Happy Students</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all border border-slate-100">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">50+</h3>
            <p className="text-slate-500 font-medium">Expert Mentors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
