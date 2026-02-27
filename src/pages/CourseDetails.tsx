import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Calendar, Clock, BookOpen, Users, Award, X } from 'lucide-react';
import { FadeIn, SectionHeading } from '../components/Shared';

const courseDetailsData: Record<string, any> = {
  'post-graduate': {
    title: "Post-Graduate Program",
    subtitle: "Target 2025",
    duration: "1 Year Intensive",
    price: "₹1,20,000",
    description: "A rigorous, fast-paced program designed for graduates who want to clear the UPSC Civil Services Examination in their first attempt. This intensive course covers the entire syllabus comprehensively within a year.",
    highlights: [
      { icon: Clock, title: "Intensive Schedule", desc: "Daily 3-4 hours of intensive live classes covering GS, CSAT, and Optional subjects." },
      { icon: BookOpen, title: "Comprehensive Coverage", desc: "End-to-end coverage of Prelims and Mains syllabus with updated study materials." },
      { icon: Award, title: "Test Series Included", desc: "Rigorous evaluation through our flagship Prelims and Mains Test Series." },
      { icon: Users, title: "Interview Guidance", desc: "Dedicated mock interviews and personality development sessions by ex-bureaucrats." }
    ],
    curriculum: [
      { phase: "Phase 1: Foundation (Months 1-3)", details: "NCERT basics, core concepts of History, Geography, Polity, and Economy." },
      { phase: "Phase 2: Advanced (Months 4-8)", details: "In-depth analysis, current affairs integration, Ethics, and Optional subject mastery." },
      { phase: "Phase 3: Consolidation (Months 9-10)", details: "Answer writing practice, essay writing, and rigorous revision." },
      { phase: "Phase 4: Prelims Focus (Months 11-12)", details: "Exclusive Prelims test series, CSAT practice, and high-yield topic revision." }
    ]
  },
  'undergraduate-2-year': {
    title: "Undergraduate 2-Year Program",
    subtitle: "Target 2026",
    duration: "2 Years Comprehensive",
    price: "₹1,80,000",
    description: "Perfect for students in their pre-final year of college. This program balances your university studies with UPSC preparation, building a strong foundation before moving to advanced concepts.",
    highlights: [
      { icon: Calendar, title: "Flexible Timing", desc: "Weekend and evening batches designed specifically not to clash with college hours." },
      { icon: BookOpen, title: "NCERT Mastery", desc: "First 6 months dedicated entirely to mastering NCERTs and building a rock-solid base." },
      { icon: Award, title: "Answer Writing", desc: "Gradual introduction to answer writing, starting from basic summaries to full-length essays." },
      { icon: Users, title: "1-on-1 Mentorship", desc: "Regular mentorship sessions to track progress and balance college academics." }
    ],
    curriculum: [
      { phase: "Year 1: The Foundation", details: "Focus on NCERTs, newspaper reading habits, basic concepts of all GS papers, and introduction to Optional subjects." },
      { phase: "Year 2: Advanced & Application", details: "Standard reference books, daily answer writing, full-length test series, and intensive current affairs analysis." }
    ]
  },
  'undergraduate-3-year': {
    title: "Undergraduate 3-Year Program",
    subtitle: "Target 2027",
    duration: "3 Years Foundation",
    price: "₹2,20,000",
    description: "The ultimate early-starter advantage for first-year college students. A stress-free, highly structured program that integrates UPSC prep seamlessly into your 3-year graduation journey.",
    highlights: [
      { icon: Calendar, title: "Gradual Progression", desc: "A slow-paced, highly digestible curriculum that prevents burnout during college." },
      { icon: BookOpen, title: "Holistic Development", desc: "Focus on communication skills, personality development, and critical thinking alongside academics." },
      { icon: Award, title: "College Support", desc: "Guidance on managing university exams alongside UPSC preparation." },
      { icon: Users, title: "Extensive Practice", desc: "3 years of continuous testing, ensuring you are exam-ready by the time you graduate." }
    ],
    curriculum: [
      { phase: "Year 1: Orientation & Basics", details: "Understanding the syllabus, developing a reading habit, basic NCERTs, and personality development workshops." },
      { phase: "Year 2: Core Subject Building", details: "Deep dive into GS subjects, starting the Optional subject, and basic answer writing." },
      { phase: "Year 3: Exam Readiness", details: "Advanced topics, intensive test series, essay writing, and interview preparation." }
    ]
  }
};

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? courseDetailsData[courseId] : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Course not found</h2>
          <Link to="/courses" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24 pt-24">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to all courses
          </Link>
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-block bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 border border-blue-400/30">
                  {course.subtitle}
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center min-w-[250px]">
                <p className="text-blue-100 mb-1">Program Fee</p>
                <p className="text-4xl font-extrabold text-white mb-4">{course.price}</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Highlights */}
            <FadeIn>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Program Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.highlights.map((highlight: any, idx: number) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                        <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">{highlight.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{highlight.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </FadeIn>

            {/* Curriculum Roadmap */}
            <FadeIn>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Curriculum Roadmap</h2>
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {course.curriculum.map((item: any, idx: number) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          {idx + 1}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">{item.phase}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </FadeIn>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <FadeIn>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6">What's Included?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Live & Recorded Classes",
                    "Comprehensive Study Material (Hardcopy)",
                    "Prelims Test Series (30+ Tests)",
                    "Mains Test Series with Evaluation",
                    "Daily Current Affairs Notes",
                    "1-on-1 Mentorship Sessions",
                    "Interview Guidance Program"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-4 text-center">Ready to start your journey?</p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <FadeIn className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
              <div className="bg-blue-600 p-6 text-white text-center relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-blue-200 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold mb-1">Enrollment Application</h3>
                <p className="text-blue-100 text-sm">{course.title}</p>
              </div>
              <div className="p-6 md:p-8">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully! Our team will contact you shortly.'); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input required type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Current Education Status</label>
                    <select required className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50 focus:bg-white text-slate-700">
                      <option value="">Select status</option>
                      <option value="school">High School</option>
                      <option value="college_1">College 1st Year</option>
                      <option value="college_2">College 2nd Year</option>
                      <option value="college_3">College 3rd/4th Year</option>
                      <option value="graduate">Graduate</option>
                      <option value="working">Working Professional</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                      Submit Application
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      By submitting, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      )}
    </div>
  );
}
