import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell } from 'lucide-react';
import { Logo } from './Shared';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === link.path ? 'text-emerald-600' : 'text-zinc-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
            <User className="h-5 w-5" />
          </button>
          <Link
            to="/courses"
            className="ml-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-zinc-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium p-2 rounded-lg ${
                location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-zinc-100 my-2"></div>
          <div className="flex items-center justify-between p-2 text-zinc-600">
            <span className="font-medium">Notifications</span>
            <Bell className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between p-2 text-zinc-600">
            <span className="font-medium">Profile</span>
            <User className="h-5 w-5" />
          </div>
          <Link
            to="/courses"
            className="mt-2 w-full rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
