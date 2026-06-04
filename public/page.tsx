import React from "react";
import HeroSection from "@/components/HeroSection";
import TopCourses from "@/components/TopCourses";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopCourses />
      <div className="bg-white py-24 sm:py-32" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary">About Aimers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to succeed academically
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Aimers Classes, we believe every student has the potential to achieve greatness. Our holistic approach combines expert instruction with state-of-the-art resources to ensure comprehensive understanding and excellent results.
            </p>
          </div>
        </div>
      </div>
      <InquiryForm />
    </>
  );
}
