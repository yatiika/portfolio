import { motion } from 'motion/react';
import { BookOpen, Combine, Cpu } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">The Scholar's Path</h2>
          <div className="h-px w-16 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="prose prose-lg text-ink-light font-body leading-relaxed max-w-none"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl italic text-ink mb-6">
              "Seeking a research-oriented VLSI internship to bridge the gap between classical theory and next-generation device modeling."
            </p>
            <p>
              I am an Electronics Engineering student specializing in VLSI Design & Technology. My academic journey is driven by a profound interest in the microscopic world of semiconductor manufacturing, TCAD device modeling, and the revolutionary field of neuromorphic computing.
            </p>
            <p>
              Currently pursuing my B.Tech at Vivekananda Institute of Professional Studies, while simultaneously advancing through the Foundation level of the BS in Data Science at IIT Madras. I bring analytical thinking, a rigorous debugging methodology, and meticulous documentation practices to every engineering endeavor.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Cpu, title: 'Device Modeling', desc: 'Silvaco TCAD & semiconductor performance optimization.' },
              { icon: Combine, title: 'VLSI Design', desc: 'Verilog, RTL design principles, and ASIC/FPGA realization.' },
              { icon: BookOpen, title: 'Continuous Pursuit', desc: 'Data Science via IITM & Quantum Computing logic.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 10 }}
                className="glass-parchment p-6 flex gap-6 items-start hover:bg-parchment-dark/80 hover:border-gold/50 transition-all duration-300 cursor-default"
              >
                <div className="p-3 border border-gold-muted/30 rounded text-gold-muted group-hover:text-gold group-hover:border-gold/50 transition-all duration-300">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink mb-2">{item.title}</h3>
                  <p className="font-body text-ink-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
