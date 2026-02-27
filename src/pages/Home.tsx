import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, BookOpen, Target, Award, ShieldCheck } from 'lucide-react';
import { FadeIn, SectionHeading } from '../components/Shared';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/karmshila.jpg"
            alt="LBSNAA Karmshila Building"
            className="h-full w-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6 border border-blue-500/30">
                <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
                Admissions Open for 2025-26
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl mb-6">
                Empowering Leaders of <span className="text-blue-400">Tomorrow</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-10 text-lg text-slate-300 sm:text-xl leading-relaxed max-w-2xl">
                Comprehensive UPSC preparation with expert faculties, personalized mentorship, and a proven track record of success. Your journey to LBSNAA starts here.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/40"
                >
                  Start Your Journey Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 border border-white/10"
                >
                  Explore Free Resources
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 bg-blue-900 text-white text-center px-4 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl italic font-light leading-relaxed">
              "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </p>
            <p className="mt-6 text-blue-300 font-medium uppercase tracking-widest text-sm">— Winston Churchill</p>
          </FadeIn>
        </div>
      </section>

      {/* Why Join Secure IAS? */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1920&auto=format&fit=crop" 
            alt="Students studying" 
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Why Join Secure IAS?"
              subtitle="We provide a holistic ecosystem designed specifically for UPSC aspirants to thrive and succeed."
              centered
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Users, title: "Best Faculties", desc: "Learn from India's top educators with years of experience in UPSC coaching." },
              { icon: Award, title: "Experienced Experts", desc: "Guidance from retired bureaucrats and subject matter experts." },
              { icon: Target, title: "Personalised Mentorship", desc: "1-on-1 guidance to track your progress and refine your strategy." },
              { icon: ShieldCheck, title: "No Compromise on Quality", desc: "Updated study material aligned with the latest UPSC patterns." },
              { icon: BookOpen, title: "Comprehensive Coverage", desc: "From NCERT basics to advanced answer writing, we cover it all." },
              { icon: CheckCircle2, title: "Affordable Fees", desc: "Quality education made accessible with transparent fee structures." },
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Programs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading
                title="Strategic Programs"
                subtitle="Tailored courses to fit your educational background and preparation timeline."
              />
              <Link to="/courses" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                View All Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Post-Graduate Program", duration: "1 Year", target: "Target 2025", desc: "Intensive program for graduates aiming for the upcoming attempt." },
              { title: "Undergraduate 2-Year", duration: "2 Years", target: "Target 2026", desc: "Balanced approach for students in their pre-final year of college." },
              { title: "Undergraduate 3-Year", duration: "3 Years", target: "Target 2027", desc: "Foundation to advanced preparation for first-year college students." },
            ].map((program, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                      {program.duration}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{program.target}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow">{program.desc}</p>
                  <Link to="/courses" className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-center font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Explore Details
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
