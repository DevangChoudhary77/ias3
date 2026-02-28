import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, SectionHeading } from '../components/Shared';

export default function Courses() {
  return (
    <div className="bg-zinc-50 min-h-screen pb-24">
      {/* Header */}
      <div className="relative bg-zinc-900 pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_bhavan.png"
            alt="Library background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur-sm mb-6 border border-emerald-500/30">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Join the Elite Ranks
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Our UPSC Programs</h1>
            <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              Choose the right path for your UPSC journey. We offer tailored, high-intensity programs designed to forge the next generation of civil servants.
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
              popular: true,
              img: "/assets/images/indian_students_1.png"
            },
            {
              id: "undergraduate-2-year",
              title: "Undergraduate 2-Year",
              subtitle: "Target 2026",
              duration: "2 Years Comprehensive",
              price: "₹1,80,000",
              features: ["Weekend/Evening Classes", "NCERT Foundation", "Core Subject Mastery", "Answer Writing Practice", "Mentorship Sessions"],
              popular: false,
              img: "/assets/images/indian_students_2.png"
            },
            {
              id: "undergraduate-3-year",
              title: "Undergraduate 3-Year",
              subtitle: "Target 2027",
              duration: "3 Years Foundation",
              price: "₹2,20,000",
              features: ["Gradual Progression", "Basic to Advanced Level", "College Exam Support", "Personality Development", "Extensive Test Series"],
              popular: false,
              img: "/assets/images/indian_students_3.png"
            }
          ].map((plan, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative bg-white rounded-[2rem] overflow-hidden border-2 ${plan.popular ? 'border-emerald-600 shadow-2xl shadow-emerald-900/20' : 'border-zinc-200 shadow-lg'} h-full flex flex-col group hover:-translate-y-2 transition-transform duration-500`}>

                {/* Program Header Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={plan.img} alt={plan.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-4 left-6">
                    <p className="text-emerald-300 font-bold uppercase tracking-widest text-xs mb-1">{plan.subtitle}</p>
                    <h3 className="text-2xl font-serif font-bold text-white">{plan.title}</h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-8 pb-8 border-b border-zinc-100">
                    <span className="text-4xl font-extrabold text-zinc-900 block mb-2">{plan.price}</span>
                    <span className="text-zinc-500 font-medium bg-zinc-100 px-4 py-1.5 rounded-full text-sm inline-block">{plan.duration}</span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-zinc-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/courses/${plan.id}`}
                    className={`block text-center w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
                  >
                    Explore & Enroll
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Optional Subjects */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-sm mb-24 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <SectionHeading title="Optional Subjects Available" centered />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8 relative z-10">
              {["History", "Geography", "PSIR", "Sociology", "Public Administration", "Anthropology", "Mathematics", "Literature"].map((subject, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 font-bold text-zinc-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white hover:shadow-lg transition-all cursor-pointer">
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Quote Section with Ashok Stambh Watermark */}
        <FadeIn>
          <div className="relative bg-zinc-900 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden mb-24 shadow-2xl">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/500px-Emblem_of_India.svg.png"
                alt="Emblem of India"
                className="h-[150%] object-contain"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-serif text-3xl md:text-4xl italic font-light leading-relaxed">
                "An investment in knowledge pays the best interest. Prepare today for the civil services of tomorrow."
              </p>
              <p className="mt-8 text-emerald-400 font-bold uppercase tracking-widest text-sm">— Benjamin Franklin</p>
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Mentorship CTA */}
        <FadeIn>
          <div className="bg-emerald-950 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="p-12 md:p-16 lg:w-1/2 relative z-10">
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">1-on-1 Guidance</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Unsure which program fits you?</h2>
                <p className="text-emerald-100/80 text-lg mb-10 leading-relaxed">
                  Don't leave your UPSC journey to chance. Book a strictly confidential, free counseling session with our expert mentors to map out your personalized, foolproof strategy.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-emerald-950 px-8 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:scale-105">
                  Book Mentorship Session <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full h-[400px] lg:h-auto self-stretch relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-transparent z-10 lg:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent z-10 lg:hidden block"></div>
                <img
                  src="/assets/images/ips_officers.png"
                  alt="Intense Studying Students"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
