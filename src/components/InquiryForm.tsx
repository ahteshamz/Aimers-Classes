"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        grade: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the inquiry form and our admission counselors will get back to you within 24 hours to guide you through the process and answer any questions you might have.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Personalized Guidance</h4>
                <p className="text-slate-600 text-sm">We assess each students needs to recommend the best learning path.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full shrink-0">
                <AlertCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Limited Seats</h4>
                <p className="text-slate-600 text-sm">Our batches are kept small to ensure individual attention. Enroll early.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-black mb-8">Inquiry Form</h3>
            
            {status === "success" && (
              <div className="mb-6 bg-emerald-50 text-emerald-800 border border-emerald-200 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <p className="font-medium">Thank you! Your inquiry has been submitted successfully. We will contact you soon.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-semibold text-black mb-1.5">Student Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all  text-black"
                    placeholder="Umme Kulsum"
                  />
                </div>
                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold text-black mb-1.5">Parent/Guardian Name</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all  text-black"
                    placeholder="Mohammad Ali"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all  text-black"
                    placeholder="+91 84070 51XXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-black"
                    placeholder="ahtesham@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-semibold text-slate-700 mb-1.5">Grade / Class *</label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none  text-black"
                >
                  <option value="" disabled>Select Grade</option>
                  <option value="class-8">Class 8</option>
                  <option value="class-9">Class 9</option>
                  <option value="class-10">Class 10</option>
                  <option value="class-11">Class 11</option>
                  <option value="class-12">Class 12</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none  text-black"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                  status === "submitting" ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20"
                }`}
              >
                {status === "submitting" ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Inquiry <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
