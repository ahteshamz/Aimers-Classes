import React from "react";
import { ArrowRight, CheckCircle2, Clock, Star } from "lucide-react";

const courses = [
  {
    title: "Class 9 Science & Math",
    description: "Build a strong foundation in core subjects with interactive experiments and problem-solving sessions.",
    duration: "1 Year",
    rating: "4.9",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    features: ["Weekly Tests", "Doubt Solving", "Study Material PDF"],
  },
  {
    title: "Class 10 Board Prep",
    description: "Target 95%+ in boards with our comprehensive test series and past year paper analysis.",
    duration: "1 Year",
    rating: "4.8",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    features: ["Mock Exams", "One-on-One Mentoring", "Revision Notes"],
  },
  {
    title: "Coding Bootcamps",
    description: "Learn Python, Web Development, and logical thinking tailored for young innovators.",
    duration: "6 Months",
    rating: "5.0",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    features: ["Live Projects", "Certificate", "Hackathons"],
  },
];

const TopCourses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Top Courses</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our meticulously designed programs that cater to diverse academic needs and ensure comprehensive learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold border mb-6 ${course.color}`}>
                Popular
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 mb-6 flex-grow">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 mb-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {course.rating}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary font-bold hover:text-primary-dark hover:underline underline-offset-4 flex items-center gap-2 mx-auto">
            View All Courses <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
