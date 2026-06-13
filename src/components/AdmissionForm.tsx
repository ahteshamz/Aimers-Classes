"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { UploadCloud, CheckCircle2, User, MapPin, Calendar, Phone, BookOpen } from "lucide-react";

const AdmissionForm = () => {
  const { userProfile, completeAdmission } = useAuth();
  const [formData, setFormData] = useState({
    address: "",
    dob: "",
    emergencyContact: "",
    course: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate admission process
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        completeAdmission();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          <div className="bg-primary px-8 py-10 text-black text-center">
            <h2 className="text-3xl font-bold mb-2">Complete Your Admission</h2>
            <p className="text-primary-100 opacity-90">Please provide the required details to finalize your enrollment at Aimers Classes.</p>
          </div>

          <div className="p-8 md:p-10">
            {status === "success" && (
              <div className="mb-8 bg-emerald-50 text-emerald-800 border border-emerald-200 p-6 rounded-2xl flex items-center gap-4 animate-in zoom-in-95">
                <CheckCircle2 className="w-8 h-8 shrink-0 text-emerald-500" />
                <div>
                  <h4 className="font-bold text-lg">Admission Successful!</h4>
                  <p className="text-sm opacity-90">Redirecting you to the student dashboard...</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info section */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">
                  <User className="w-5 h-5 text-secondary" /> Student Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Registered Email</label>
                    <input
                      type="email"
                      disabled
                      value={userProfile?.email || ""}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" /> Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info section */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">
                  <MapPin className="w-5 h-5 text-secondary" /> Contact Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Address *</label>
                    <textarea
                      name="address"
                      rows={3}
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                      placeholder="Street, City, State, ZIP"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" /> Emergency Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Info section */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">
                  <BookOpen className="w-5 h-5 text-secondary" /> Academic Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Select Course *</label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>Select a course</option>
                      <option value="class-9">Class 9 Science & Math</option>
                      <option value="class-10">Class 10 Board Prep</option>
                      <option value="iit-jee">Foundation for IIT-JEE</option>
                      <option value="coding">Coding Bootcamps</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Previous Report Card / ID Proof *</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group relative">
                      <input 
                        type="file" 
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium text-slate-700 mb-1">
                        {file ? file.name : "Click or drag file to this area to upload"}
                      </p>
                      <p className="text-xs text-slate-500">Supports PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    status !== "idle" ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary-dark shadow-xl shadow-primary/20 hover:-translate-y-0.5"
                  }`}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Admission...
                    </span>
                  ) : status === "success" ? (
                    "Admitted successfully!"
                  ) : (
                    "Submit Admission Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
