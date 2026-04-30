import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Introduction', href: '#hero' },
  { name: 'The Scholar', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Academia & Contact', href: '#education' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 p-3 bg-[#050810]/80 backdrop-blur-md border border-gold/30 text-gold hover:text-[#050810] hover:bg-gold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 bg-parchment-dark/95 backdrop-blur-xl border-l border-gold/20 z-50 shadow-2xl flex flex-col"
          >
            <div className="flex justify-end p-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-gold-muted hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 px-12 pb-12 mt-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  className="font-serif text-2xl text-ink-light hover:text-gold transition-colors block border-b border-gold/10 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            <div className="px-12 mt-auto pb-12">
               <div className="w-12 h-px bg-gold mb-4" />
               <p className="font-display text-xs tracking-widest text-gold-muted uppercase">Mamta Sharma</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
