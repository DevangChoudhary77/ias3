import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Secure IAS Logo"
        className="h-16 md:h-20 w-auto object-contain"
        draggable="false"
      />
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
      <h2 className="font-serif text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
