import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Landmark } from 'lucide-react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
        <Landmark className="h-5 w-5" />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-sky-500"></div>
      </div>
      <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
        Secure <span className="text-blue-600">IAS</span>
      </span>
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string, key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
