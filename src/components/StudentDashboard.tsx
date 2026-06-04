"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import VideoPlayer from "./VideoPlayer";
import DoubtChat from "./DoubtChat";
import { 
  LayoutDashboard, 
  Video, 
  BookOpen, 
  TrendingUp, 
  Download, 
  LogOut, 
  Menu, 
  X,
  FileText
} from "lucide-react";

const StudentDashboard = () => {
  const { userProfile, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("videos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "videos", label: "Course Videos", icon: Video },
    { id: "materials", label: "Study Material", icon: BookOpen },
    { id: "performance", label: "Performance", icon: TrendingUp },
  ];

  const resources = [
    { title: "Laws of Motion - Formula Sheet", size: "2.4 MB", type: "PDF" },
    { title: "Chapter 4 - Important Valencies", size: "1.1 MB", type: "PDF" },
    { title: "Previous Year Question Paper - 2025", size: "5.6 MB", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden bg-primary text-white p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="font-bold text-lg">Student Portal</div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          ${isSidebarOpen ? "fixed inset-0 z-30" : "hidden md:block"} 
          w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0
        `}
      >
        <div className="h-full flex flex-col pt-6 md:sticky md:top-20">
          <div className="px-6 mb-8 text-center md:text-left hidden md:block">
            <h2 className="text-xl font-bold text-white tracking-tight">Student Portal</h2>
          </div>

          <div className="px-6 mb-8 flex items-center gap-3">
            <img src={userProfile?.avatar} alt="User" className="w-12 h-12 rounded-full border-2 border-secondary" />
            <div>
              <p className="font-semibold text-white text-sm">{userProfile?.name}</p>
              <p className="text-xs text-slate-500">Class 9 Science</p>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? "bg-primary text-white font-medium shadow-md shadow-primary/20" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-secondary-light" : "text-slate-400"}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button 
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {activeTab === "videos" && (
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Class 9 Physics: Laws of Motion</h1>
                <p className="text-slate-500 mt-1">Module 4 • Lecture 2</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Live Lecture Recording
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Video & Resources */}
              <div className="lg:col-span-2 space-y-8">
                <VideoPlayer title="Class 9 Physics: Laws of Motion" />
                
                {/* Resources Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-secondary" /> Downloadable Resources
                  </h3>
                  <div className="space-y-3">
                    {resources.map((res, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <BookOpen className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{res.title}</p>
                            <p className="text-xs text-slate-500">{res.type} • {res.size}</p>
                          </div>
                        </div>
                        <button className="p-2 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Chat */}
              <div className="lg:col-span-1">
                <DoubtChat />
              </div>

            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {activeTab !== "videos" && (
          <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-4 animate-in fade-in zoom-in-95">
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-10 h-10 text-primary/40" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Coming Soon</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              The {navItems.find(i => i.id === activeTab)?.label} section is currently under development. Check back later!
            </p>
          </div>
        )}
      </main>

    </div>
  );
};

export default StudentDashboard;
