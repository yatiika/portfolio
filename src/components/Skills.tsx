import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Verilog", "SILVACO", "Python", "C", "LaTeX"]
  },
  {
    title: "EDA Tools",
    skills: ["SILVACO TCAD", "Cadence", "Xilinx Vivado", "MATLAB", "Origin"]
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Debugging", "Documentation"]
  },
  {
    title: "Languages",
    skills: ["English", "Hindi", "Punjabi", "French"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 relative z-10 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">Skills</h2>
          <div className="h-px w-16 bg-gold mx-auto mb-6" />
          <p className="font-display tracking-[0.2em] text-ink-light uppercase text-sm">Tools of the Craft</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.2)" }}
              className="border-classical p-8 bg-parchment-dark/50 relative group hover:bg-parchment-dark hover:border-gold-muted/60 transition-all duration-500"
            >
              {/* Corner ornaments (simplified via CSS borders) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-muted/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-muted/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-muted/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-muted/50" />

              <h3 className="font-serif text-2xl text-ink mb-6 border-b border-gold-muted/20 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.li 
                    key={skill}
                    className="flex items-center gap-3 font-body text-ink-light"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) + (sIdx * 0.05) }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-muted/60" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
