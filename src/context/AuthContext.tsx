"use client";

import React, { createContext, useContext, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userProfile: UserProfile | null;
  isAdmitted: boolean;
  loginWithGoogle: () => void;
  logout: () => void;
  completeAdmission: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isAdmitted, setIsAdmitted] = useState(false);

  const loginWithGoogle = () => {
    // Simulate Google Login
    setIsLoggedIn(true);
    setUserProfile({
      name: "Student User",
      email: "student@example.com",
      avatar: "https://ui-avatars.com/api/?name=Student+User&background=0D8B9A&color=fff",
    });
    // For demo purposes, we keep isAdmitted false by default
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsAdmitted(false);
  };

  const completeAdmission = () => {
    setIsAdmitted(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userProfile,
        isAdmitted,
        loginWithGoogle,
        logout,
        completeAdmission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
