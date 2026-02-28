import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Calendar, Clock, BookOpen, Users, Award, X, Target, Brain, Ribbon } from 'lucide-react';
import { FadeIn } from '../components/Shared';

const courseDetailsData: Record<string, any> = {
  'post-graduate': {
    title: "Post-Graduate Program",
    subtitle: "Target 2025",
    duration: "1 Year Intensive",
    price: "₹1,20,000",
    description: "A rigorous, fast-paced program designed for graduates who want to clear the UPSC Civil Services Examination in their first attempt. This intensive course covers the entire syllabus comprehensively within a year.",
    whoIsItFor: "Graduates planning to dedicate 1 full year to UPSC preparation without ongoing college commitments. Ideal for working professionals taking a sabbatical.",
    highlights: [
      { icon: Clock, title: "Intensive Schedule", desc: "Daily 3-4 hours of intensive live classes covering GS, CSAT, and Optional subjects. Focus on high-yield topics." },
      { icon: BookOpen, title: "Comprehensive Coverage", desc: "End-to-end coverage of Prelims and Mains syllabus with meticulously updated, printed study materials." },
      { icon: Award, title: "Test Series Included", desc: "Rigorous evaluation through our flagship Prelims (30 tests) and Mains (15 tests) Test Series with detailed feedback." },
      { icon: Users, title: "Interview Guidance", desc: "Dedicated mock interviews, DAF analysis, and personality development sessions driven by ex-bureaucrats." }
    ],
    curriculum: [
      { phase: "Phase 1: Foundation (Months 1-3)", details: "NCERT basics, core concepts of History (Ancient, Medieval, Modern), Geography (Physical & Indian), Indian Polity, and basic Macroeconomics. Focus on building a reading habit with The Hindu." },
      { phase: "Phase 2: Advanced (Months 4-8)", details: "In-depth analysis of GS Paper 1, 2, 3 & 4. Current affairs integration. Intensive Optional subject mastery modules parallel to GS. Focus on note-making." },
      { phase: "Phase 3: Consolidation (Months 9-10)", details: "Daily answer writing practice (AWP), full-length essay writing workshops, Ethics case-study solving, and rigorous revision of core subjects." },
      { phase: "Phase 4: Prelims Focus (Months 11-12)", details: "Exclusive Prelims test series mode. CSAT reasoning and comprehension practice. High-yield static topic revision and 1.5 years of current affairs recap." }
    ]
  },
  'undergraduate-2-year': {
    title: "Undergraduate 2-Year Program",
    subtitle: "Target 2026",
    duration: "2 Years Comprehensive",
    price: "₹1,80,000",
    description: "Perfect for students in their pre-final year of college. This program balances your university studies with UPSC preparation, building a strong foundation before moving to advanced concepts.",
    whoIsItFor: "Pre-final year college students seeking to build a solid foundation alongside their degree, aiming for the civil services right after graduation.",
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
    whoIsItFor: "First-year college students looking for early guidance to comfortably clear the exam in their first attempt post-graduation, avoiding burnout.",
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 relative z-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Course not found</h2>
          <Link to="/courses" className="text-emerald-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 min-h-screen pb-32 pt-24 font-sans relative z-10 w-full overflow-hidden">
      {/* Hero Section */}
      <div className="bg-emerald-600 text-white py-24 px-4 relative overflow-hidden -mt-16 pt-32 w-full left-0 right-0">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -left-32 -bottom-32 w-[400px] h-[400px] bg-emerald-700/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-10 transition-colors text-sm font-medium tracking-wide">
            <ArrowLeft className="h-4 w-4" /> Back to all courses
          </Link>
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-white/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></div>
                  {course.subtitle} Admissions Open
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-[1.1]">
                  {course.title}
                </h1>
                <p className="text-emerald-50 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light">
                  {course.description}
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] text-center min-w-[320px] shadow-2xl shrink-0">
                <p className="text-emerald-600 text-sm font-bold mb-2 uppercase tracking-widest">Program Fee</p>
                <p className="text-5xl font-extrabold text-zinc-900 mb-8 tracking-tight">{course.price}</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/30 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">

            {/* Who is it for */}
            <FadeIn>
              <section className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-emerald-50 p-5 rounded-2xl shrink-0 text-emerald-600">
                  <Target className="h-10 w-10 relative z-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4 font-serif">Who is this program for?</h2>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    {course.whoIsItFor}
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Highlights */}
            <FadeIn>
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 mb-12 font-serif flex items-center gap-4">
                  <span className="w-10 h-1.5 bg-emerald-600 rounded-full"></span>
                  Program Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {course.highlights.map((highlight: any, idx: number) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col gap-6">
                        <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 mb-3">{highlight.title}</h3>
                          <p className="text-zinc-600 leading-relaxed text-lg">{highlight.desc}</p>
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
                <h2 className="text-3xl font-bold text-zinc-900 mb-16 font-serif flex items-center gap-4">
                  <span className="w-10 h-1.5 bg-emerald-600 rounded-full"></span>
                  Curriculum Roadmap
                </h2>
                <div className="relative pt-6 md:pl-0 pl-6">
                  {/* Vertical Line */}
                  <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 md:-translate-x-1/2 rounded-full"></div>

                  <div className="space-y-16">
                    {course.curriculum.map((item: any, idx: number) => (
                      <div key={idx} className="relative flex flex-col md:flex-row justify-between items-center w-full group">

                        {/* Number Indicator */}
                        <div className="absolute left-10 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full border-4 border-white bg-emerald-600 text-white font-bold text-xl flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                          {idx + 1}
                        </div>

                        {/* Content Card (Left or Right) */}
                        <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto text-left'} `}>
                          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                            <h4 className="font-bold text-emerald-700 text-xl mb-4">{item.phase}</h4>
                            <p className="text-zinc-600 leading-relaxed text-lg">{item.details}</p>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Elite Mentorship Philosophy */}
            <FadeIn>
              <section className="bg-zinc-900 text-white rounded-[2rem] p-10 md:p-14 overflow-hidden relative shadow-2xl mt-16">
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <h2 className="text-3xl font-bold mb-6 font-serif">The Secure IAS Philosophy</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  Preparation is not just about accumulating knowledge; it's about strategy, psychological conditioning, and flawless execution. Our faculty sculpts your approach individually.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-5 items-start bg-zinc-800/50 p-6 rounded-2xl">
                    <Brain className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Psychological Resilience</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">Regular sessions to manage performance anxiety and maintain consistency.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start bg-zinc-800/50 p-6 rounded-2xl">
                    <Users className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Dedicated Personal Mentor</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">A mentor assigned to track your tests, evaluate answers, and adjust your plan.</p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 relative">
            <FadeIn>
              <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-xl lg:sticky lg:top-32">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8 font-serif pb-6 border-b border-zinc-100">What's Included?</h3>
                <ul className="space-y-6 mb-10">
                  {[
                    "Live & Interactive Classes",
                    "Premium Hardcopy Study Material",
                    "Prelims Test Series (30+ Mock Tests)",
                    "Mains Test Series with Faculty Evaluation",
                    "Current Affairs Magazines (Monthly)",
                    "1-on-1 Mentorship Sessions",
                    "Interview Guidance by Ex-IAS & IPS Panel"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-zinc-700 font-medium leading-relaxed text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-zinc-50 p-6 rounded-2xl mb-8 border border-zinc-100 text-center">
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Next Batch Commences</p>
                  <p className="text-3xl font-extrabold text-zinc-900 font-serif">15th August</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/30 text-xl"
                  >
                    Enroll Now
                  </button>
                  <p className="text-center text-xs text-zinc-500 mt-5 uppercase tracking-wider font-semibold">
                    Limited Seats Available
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
          <FadeIn className="w-full max-w-lg">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden relative">
              <div className="bg-emerald-600 p-8 text-white text-center relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-emerald-200 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full mb-4 shadow-sm border border-emerald-400">Admissions</div>
                <h3 className="text-3xl font-serif font-bold mb-2">Enrollment Form</h3>
                <p className="text-emerald-100 text-sm font-medium">{course.title}</p>
              </div>
              <div className="p-8">
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully! Our team will contact you shortly.'); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-bold text-zinc-800 mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input required type="text" className="w-full px-5 py-3.5 rounded-xl border-2 border-zinc-100 focus:ring-0 focus:border-emerald-600 outline-none bg-zinc-50 focus:bg-white transition-colors font-medium text-zinc-900" placeholder="e.g. Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-800 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input required type="email" className="w-full px-5 py-3.5 rounded-xl border-2 border-zinc-100 focus:ring-0 focus:border-emerald-600 outline-none bg-zinc-50 focus:bg-white transition-colors font-medium text-zinc-900" placeholder="rahul@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-800 mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input required type="tel" className="w-full px-5 py-3.5 rounded-xl border-2 border-zinc-100 focus:ring-0 focus:border-emerald-600 outline-none bg-zinc-50 focus:bg-white transition-colors font-medium text-zinc-900" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-800 mb-1.5 uppercase tracking-wide">Current Education</label>
                    <select required className="w-full px-5 py-3.5 rounded-xl border-2 border-zinc-100 focus:ring-0 focus:border-emerald-600 outline-none bg-zinc-50 focus:bg-white transition-colors font-medium text-zinc-900">
                      <option value="" disabled selected>Select status</option>
                      <option value="school">High School</option>
                      <option value="college_1">College 1st Year</option>
                      <option value="college_2">College 2nd Year</option>
                      <option value="college_3">College 3rd/4th Year</option>
                      <option value="graduate">Graduate</option>
                      <option value="working">Working Professional</option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                      Submit Application
                    </button>
                    <p className="text-center text-xs text-zinc-500 mt-5 font-medium leading-relaxed">
                      By submitting, you agree to our Terms of Service and Privacy Policy. <br />Secure IAS ensures your data is safe.
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
