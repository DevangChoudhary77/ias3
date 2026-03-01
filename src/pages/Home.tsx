import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, BookOpen, Target, Award, ShieldCheck } from 'lucide-react';
import { FadeIn, SectionHeading } from '../components/Shared';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <img
            src="/assets/images/hero_bhavan_hq.png"
            alt="New Parliament Building India"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-zinc-900/10"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">

              <FadeIn delay={0.1}>
                <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl mb-6">
                  Awaken the <span className="text-emerald-400">Bureaucrat</span> Within
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mb-10 text-lg text-zinc-300 sm:text-xl leading-relaxed">
                  Comprehensive UPSC preparation with expert faculties, personalized mentorship, and a proven track record of success. Forge your legacy and serve the nation with honor.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/40"
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
        </div>
      </section>

      {/* Why Join Secure IAS? */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop"
            alt="Students studying collaboratively"
            className="w-full h-full object-cover opacity-[0.08] grayscale mix-blend-multiply"
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

          <div className="flex flex-col lg:flex-row gap-12 mt-16 items-start">
            {/* Elegant Emblem Image Column */}
            <div className="lg:w-1/3 w-full sticky top-24">
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/10 group">
                  <img
                    src="/assets/images/ashok_emblem_hq.png"
                    alt="Ashok Stambh Motif over Books"
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-1">National Duty</p>
                    <p className="text-white font-serif text-xl font-bold">Preparation Meets Destiny.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Feature Cards Column */}
            <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "Best Faculties", desc: "Learn from India's top educators with years of experience in UPSC coaching." },
                { icon: Award, title: "Experienced Experts", desc: "Guidance from retired bureaucrats and subject matter experts." },
                { icon: Target, title: "Personalised Mentorship", desc: "1-on-1 guidance to track your progress and refine your strategy." },
                { icon: ShieldCheck, title: "No Compromise on Quality", desc: "Updated study material aligned with the latest UPSC patterns." },
                { icon: BookOpen, title: "Comprehensive Coverage", desc: "From NCERT basics to advanced answer writing, we cover it all." },
                { icon: CheckCircle2, title: "Affordable Fees", desc: "Quality education made accessible with transparent fee structures." },
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all group h-full">
                    <div className="h-12 w-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Strategic Programs */}
      <section className="py-24 relative bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <div
            className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-50"
            style={{ backgroundImage: `url('/assets/images/product_police_stars.png')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/80"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">Strategic Programs</h2>
                <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">Tailored courses to fit your educational background and preparation timeline.</p>
              </div>
              <Link to="/courses" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-white transition-colors">
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
                <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-8 border border-zinc-700 hover:border-emerald-500 hover:-translate-y-1 transition-all flex flex-col h-full group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                      {program.duration}
                    </span>
                    <span className="text-sm font-medium text-emerald-100">{program.target}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{program.desc}</p>
                  <Link to="/courses" className="w-full py-3 px-4 rounded-xl bg-zinc-700/50 text-center font-bold text-white hover:bg-emerald-600 transition-colors group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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
