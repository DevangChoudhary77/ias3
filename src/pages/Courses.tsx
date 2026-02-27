import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, SectionHeading } from '../components/Shared';

export default function Courses() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="relative bg-slate-900 pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920&auto=format&fit=crop" 
            alt="Library background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our UPSC Programs</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Choose the right path for your UPSC journey. We offer tailored programs designed for different stages of your academic life.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              id: "post-graduate",
              title: "Post-Graduate",
              subtitle: "Target 2025",
              duration: "1 Year Intensive",
              price: "₹1,20,000",
              features: ["Daily Classes (3-4 hrs)", "Prelims & Mains Test Series", "Current Affairs Updates", "Interview Guidance", "Printed Study Material"],
              popular: true
            },
            {
              id: "undergraduate-2-year",
              title: "Undergraduate 2-Year",
              subtitle: "Target 2026",
              duration: "2 Years Comprehensive",
              price: "₹1,80,000",
              features: ["Weekend/Evening Classes", "NCERT Foundation", "Core Subject Mastery", "Answer Writing Practice", "Mentorship Sessions"],
              popular: false
            },
            {
              id: "undergraduate-3-year",
              title: "Undergraduate 3-Year",
              subtitle: "Target 2027",
              duration: "3 Years Foundation",
              price: "₹2,20,000",
              features: ["Gradual Progression", "Basic to Advanced Level", "College Exam Support", "Personality Development", "Extensive Test Series"],
              popular: false
            }
          ].map((plan, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative bg-white rounded-3xl p-8 border-2 ${plan.popular ? 'border-blue-600 shadow-xl shadow-blue-100' : 'border-slate-200 shadow-sm'} h-full flex flex-col`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                  <p className="text-blue-600 font-medium mt-1">{plan.subtitle}</p>
                  <div className="mt-6 mb-2">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm">{plan.duration}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/courses/${plan.id}`}
                  className={`block text-center w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  Enroll Now
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Optional Subjects */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-24">
            <SectionHeading title="Optional Subjects Available" centered />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
              {["History", "Geography", "PSIR", "Sociology", "Public Administration", "Anthropology", "Mathematics", "Literature"].map((subject, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer">
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Quote Section with Ashok Stambh Watermark */}
        <FadeIn>
          <div className="relative bg-slate-900 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden mb-24 shadow-xl">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-15 pointer-events-none">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/500px-Emblem_of_India.svg.png" 
                alt="Emblem of India" 
                className="h-[150%] object-contain"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl italic font-light leading-relaxed">
                "An investment in knowledge pays the best interest. Prepare today for the civil services of tomorrow."
              </p>
              <p className="mt-6 text-blue-300 font-medium uppercase tracking-widest text-sm">— Benjamin Franklin</p>
            </div>
          </div>
        </FadeIn>

        {/* Mentorship CTA */}
        <FadeIn>
          <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Unsure which program fits you?</h2>
              <p className="text-blue-200 text-lg mb-8">
                Book a free 1-on-1 counseling session with our expert mentors to map out your personalized UPSC strategy.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
                Book Free Mentorship Session <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
