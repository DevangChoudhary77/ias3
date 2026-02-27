import { useState } from 'react';
import { FileText, Download, UploadCloud, PlayCircle, Book, HeadphonesIcon, ArrowRight, Video, BookOpen, Calendar, Star, CheckCircle } from 'lucide-react';
import { FadeIn } from '../components/Shared';

export default function Resources() {
  const [activeTab, setActiveTab] = useState('current-affairs');

  const tabs = [
    { id: 'current-affairs', label: 'Daily Current Affairs' },
    { id: 'mains-writing', label: 'Mains Answer Writing' },
    { id: 'webinars', label: 'Strategy Webinars' },
    { id: 'booklist', label: "Booklist & Topper's Blog" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1920&auto=format&fit=crop" 
            alt="Study resources background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 tracking-tight">Open Resources</h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                Your daily companion for UPSC preparation. Access curated study materials, current affairs, and expert guidance—all for free.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
                  <FileText className="h-5 w-5" />
                  Daily PDFs
                </button>
                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-800 transition-colors border border-blue-500">
                  <Video className="h-5 w-5" />
                  Live Sessions
                </button>
              </div>
            </FadeIn>
          </div>
          <div className="hidden lg:block opacity-20">
            <BookOpen className="w-96 h-96" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-slate-200 mb-12 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'current-affairs' && <CurrentAffairsTab />}
          {activeTab === 'mains-writing' && <MainsWritingTab />}
          {activeTab === 'webinars' && <WebinarsTab />}
          {activeTab === 'booklist' && <BooklistTab />}
        </div>
      </div>
    </div>
  );
}

function CurrentAffairsTab() {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Daily Current Affairs PDFs</h2>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View Archive</a>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Daily News Analysis - May {23 - item}, 2024</h4>
                      <p className="text-sm text-slate-500">The Hindu & Indian Express Summary • 4.2 MB</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors border border-blue-100">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <SidebarGuidance />
        </div>
      </div>
    </FadeIn>
  );
}

function MainsWritingTab() {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="mb-6">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">Weekly Challenge</span>
              <h2 className="text-2xl font-bold text-slate-900">Mains Answer Writing Prompt</h2>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">GS Paper III: Indian Economy</h3>
              <p className="text-slate-600 italic mb-4 text-lg">
                "Despite significant growth in India's digital economy, the rural-urban digital divide continues to hinder inclusive development. Analyze the challenges and suggest policy measures to bridge this gap." (250 words, 15 marks)
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center border-dashed bg-slate-50/50">
              <h4 className="font-bold text-slate-900 mb-2">Submit Your Response</h4>
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-white shadow-sm rounded-full flex items-center justify-center text-blue-600 border border-slate-100">
                  <UploadCloud className="h-8 w-8" />
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-6">Upload your answer in PDF or JPEG format (Max 5MB)</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Choose Files to Upload
              </button>
              <p className="text-xs text-slate-400 mt-4">Elite faculty will provide feedback to top 10 submissions within 48 hours.</p>
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <SidebarGuidance />
        </div>
      </div>
    </FadeIn>
  );
}

function WebinarsTab() {
  return (
    <FadeIn>
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Expert Strategy Webinars</h2>
          <p className="text-slate-600 text-lg">Join our live sessions or watch recorded masterclasses to fine-tune your UPSC preparation strategy with top educators and selected candidates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Live Webinar */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group shadow-sm hover:shadow-xl transition-all">
            <div className="h-48 bg-slate-800 relative">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" alt="Webinar" className="w-full h-full object-cover opacity-60 mix-blend-overlay" referrerPolicy="no-referrer" />
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE NOW
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-blue-600/30">
                  <HeadphonesIcon className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">How to Choose the Right Optional Subject?</h3>
              <p className="text-sm text-slate-500 mb-4">Interactive Q&A session with Dr. Ravi Sharma.</p>
              <button className="w-full py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors">Join Session</button>
            </div>
          </div>

          {/* Recorded Webinars */}
          {[1, 2].map((item) => (
            <div key={item} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-800 relative">
                <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop&sig=${item}`} alt="Webinar" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer">
                    <PlayCircle className="h-8 w-8" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">RECORDED</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2">Mastering Ethics (GS-IV): Case Study Strategy</h3>
                <p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4" /> May 15, 2024
                </p>
                <button className="w-full py-2 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">Watch Recording</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function BooklistTab() {
  const books = [
    { title: "Indian Polity", author: "M. Laxmikanth", subject: "Polity", colorClass: "bg-blue-50 text-blue-600 border-blue-100" },
    { title: "India's Struggle for Independence", author: "Bipan Chandra", subject: "History", colorClass: "bg-orange-50 text-orange-600 border-orange-100" },
    { title: "Indian Economy", author: "Ramesh Singh", subject: "Economy", colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { title: "Certificate Physical and Human Geography", author: "G.C. Leong", subject: "Geography", colorClass: "bg-purple-50 text-purple-600 border-purple-100" },
    { title: "Environment", author: "Shankar IAS", subject: "Environment", colorClass: "bg-green-50 text-green-600 border-green-100" },
    { title: "Lexicon for Ethics, Integrity & Aptitude", author: "Chronicle", subject: "Ethics", colorClass: "bg-rose-50 text-rose-600 border-rose-100" },
  ];

  return (
    <FadeIn>
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ultimate UPSC Booklist</h2>
          <p className="text-slate-600 text-lg">The definitive collection of standard reference books recommended by toppers and our expert faculty for comprehensive preparation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-6 hover:shadow-lg transition-shadow">
              <div className={`w-20 h-28 ${book.colorClass} rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border shadow-inner flex-col gap-2`}>
                <Book className="h-6 w-6" />
                <span className="text-[10px] uppercase tracking-wider">{book.subject}</span>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-slate-900 text-base mb-1">{book.title}</h4>
                <p className="text-sm text-slate-500 mb-3">{book.author}</p>
                <a href="#" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1 mt-auto">
                  BUY ON AMAZON <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function SidebarGuidance() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
      <div className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
        <HeadphonesIcon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold mb-3">Need Personal Guidance?</h3>
      <p className="text-slate-300 text-base mb-8 leading-relaxed">Talk to our expert counselors for a customized study plan tailored to your strengths and weaknesses.</p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="h-4 w-4 text-blue-400" /> 1-on-1 Mentorship</li>
        <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="h-4 w-4 text-blue-400" /> Study Plan Creation</li>
        <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="h-4 w-4 text-blue-400" /> Optional Subject Selection</li>
      </ul>
      <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
        Schedule a Free Call
      </button>
    </div>
  );
}
