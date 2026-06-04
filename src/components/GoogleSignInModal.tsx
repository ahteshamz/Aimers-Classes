"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface GoogleSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleSignInModal: React.FC<GoogleSignInModalProps> = ({ isOpen, onClose }) => {
  const { loginWithGoogle } = useAuth();
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogin = () => {
    loginWithGoogle();
    onClose();
    router.push("/dashboard");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all animate-in zoom-in-95 duration-200">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Welcome to Aimers</h3>
          <p className="text-slate-500 mb-8">Sign in to access your student portal and exclusive resources.</p>
          
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-6 py-3.5 rounded-xl font-semibold transition-all group"
          >
            <svg className="h-6 w-6" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span>Continue with Google</span>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
          </button>
          
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Secure, one-click authentication</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignInModal;
