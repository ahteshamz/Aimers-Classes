"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AdmissionForm from "@/components/AdmissionForm";
import StudentDashboard from "@/components/StudentDashboard";

export default function DashboardPage() {
  const { isLoggedIn, isAdmitted } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not logged in, redirect to home page
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  // Return null or a loading state briefly while redirecting
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Redirecting...</p>
        </div>
      </div>
    );
  }

  // If logged in but not admitted, show the Admission Form
  if (!isAdmitted) {
    return <AdmissionForm />;
  }

  // If logged in and admitted, show the full Student Dashboard
  return <StudentDashboard />;
}
