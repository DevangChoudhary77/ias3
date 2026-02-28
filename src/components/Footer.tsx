import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Shared';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-6 [&_span]:text-white [&_.text-emerald-600]:text-emerald-400" />
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              Empowering the next generation of civil servants with comprehensive,
              strategic, and personalized UPSC preparation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Open Resources</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Daily Current Affairs</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Mains Answer Writing</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-white">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Post-Graduate Program</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Undergraduate 2-Year</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Undergraduate 3-Year</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Optional Subjects</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">1-on-1 Mentorship</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>123 Knowledge Avenue, Mukherjee Nagar, New Delhi, 110009</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>contact@secureias.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Secure IAS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
