"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Menu, X, LogIn } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import GoogleSignInModal from "./GoogleSignInModal";

const Navbar = () => {
  const { isLoggedIn, userProfile, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/#courses" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <span className="font-bold text-2xl text-slate-800 tracking-tight">
                  Aimers <span className="text-secondary">Classes</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-slate-600 hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                {isLoggedIn && userProfile ? (
                  <div className="flex items-center gap-4">
                    <Link
                      href="/dashboard"
                      className="text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Image
                      src={userProfile.avatar}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-secondary shadow-sm"
                      unoptimized
                    />
                    <button
                      onClick={logout}
                      className="text-sm text-slate-500 hover:text-red-500 transition-colors font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-primary/30 hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <LogIn className="w-4 h-4" />
                    Student Portal
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-primary p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4">
                {isLoggedIn && userProfile ? (
                  <>
                    <div className="flex items-center gap-3 px-3">
                      <Image
                        src={userProfile.avatar}
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                        unoptimized
                      />
                      <div>
                        <p className="font-semibold text-slate-800">{userProfile.name}</p>
                        <p className="text-sm text-slate-500">{userProfile.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block text-center w-full bg-secondary text-white px-4 py-3 rounded-xl font-bold shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Go to Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-center w-full border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-semibold"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-4 py-3 rounded-xl font-bold shadow-md shadow-primary/20"
                  >
                    <LogIn className="w-5 h-5" />
                    Login to Student Portal
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <GoogleSignInModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
