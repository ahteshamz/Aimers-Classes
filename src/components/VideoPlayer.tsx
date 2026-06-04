"use client";

import React from "react";
import { PlayCircle, Settings, Maximize, Volume2 } from "lucide-react";

interface VideoPlayerProps {
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800 flex flex-col group relative">
      {/* Video Placeholder Area */}
      <div className="aspect-video bg-black relative flex items-center justify-center cursor-pointer group-hover:bg-slate-900 transition-colors">
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary/90 text-white rounded-full p-4 transform group-hover:scale-110 transition-all shadow-lg shadow-primary/30">
            <PlayCircle className="w-12 h-12" />
          </div>
        </div>
        
        {/* Simulated Video Content */}
        <div className="opacity-30 absolute inset-0 bg-gradient-to-tr from-primary-dark/40 to-secondary/20" />
        <span className="text-slate-600 text-sm font-mono z-10 opacity-50">VIDEO_STREAM_PLACEHOLDER</span>
      </div>

      {/* Custom Controls Bar */}
      <div className="bg-slate-800/90 backdrop-blur-sm p-4 border-t border-slate-700 flex flex-col gap-3">
        {/* Progress bar */}
        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden cursor-pointer">
          <div className="h-full bg-secondary w-1/3 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-secondary transition-colors">
              <PlayCircle className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 group/volume">
              <button className="text-white hover:text-secondary transition-colors">
                <Volume2 className="w-5 h-5" />
              </button>
              <div className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 h-1.5 bg-slate-600 rounded-full">
                <div className="h-full bg-secondary w-2/3" />
              </div>
            </div>
            <div className="text-xs font-medium text-slate-300">
              12:45 <span className="text-slate-500 mx-1">/</span> 45:00
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
