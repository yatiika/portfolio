import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <motion.p 
          className="font-display tracking-[0.2em] text-gold-muted mb-4 text-sm md:text-base uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring VLSI & Semiconductor Research Enthusiast
        </motion.p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-tight mb-8">
          Mamta Sharma
        </h1>
        <motion.div 
          className="h-px w-24 bg-gold-muted mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
        <motion.p 
          className="text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Electronics Engineering scholar specializing in Device Modeling, Verilog, and Neuromorphic Computing.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-gold-muted to-transparent"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
