import { motion } from 'motion/react';
import { Award, Feather } from 'lucide-react';

const projects = [
  {
    title: "VLSI Based Disaster Early Warning Chip",
    date: "Oct-Nov 2025",
    context: "Electronics Engineering, Third Semester",
    bullets: [
      "Conceptualized and prototyped a low-power multi-sensor disaster detection system using Arduino with real-time anomaly detection.",
      "Implemented digital architecture in Verilog for ASIC/FPGA realization ensuring scalability and rural deployment feasibility."
    ]
  }
];

const certifications = [
  { group: "NPTEL Courses (January 2026)", 
    items: [
      "Semiconductor Devices for Next Generation Field Effect Transistors (More than Moore): A Physics Perspective by Prof. Sudeb Dasgupta, IIT Roorkee.",
      "Digital Design with Verilog by Prof. Chandan Karfa, Prof. Aryabartta Sahu, IIT Guwahati.",
      "Introduction to Quantum Computing: Quantum Algorithms and Qiskit by Prof. Prabha Mandayam, Prof. Anupama Ray, Prof. Sheshashayee Raghunathan, IIT Madras + IBM."
    ]
  },
  {
    group: "Institutions & Workshops",
    items: [
      "Semiconductor Fabrication 101 - Purdue University (January 2025)",
      "Silvaco TCAD for Device Modeling (February 2025)",
      "Cadence - Powered Circuit Design for Beginners (May 2025)",
      "Verilog & RTL Design Workshop (September 2025)"
    ]
  }
];

export function ProjectsAndCertifications() {
  return (
    <section id="projects" className="py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Projects */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">Projects</h2>
            <div className="h-px w-16 bg-gold mx-auto mb-6" />
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="glass-parchment p-8 md:p-12 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Feather size={64} className="text-gold" />
                 </div>
                 
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 gap-4 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-serif text-ink">{project.title}</h3>
                    <span className="font-display tracking-widest text-gold-muted text-sm shrink-0">{project.date}</span>
                 </div>
                 <p className="font-serif italic text-ink-light mb-6">{project.context}</p>
                 
                 <ul className="space-y-4 font-body text-ink-light text-lg">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4">
                      <span className="text-gold mt-1">â</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                 </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif text-ink mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-gold" />
              Certifications
            </h3>
            
            <div className="space-y-10">
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <h4 className="font-display tracking-wider text-sm text-gold-muted uppercase mb-4">{cert.group}</h4>
                  <ul className="space-y-4">
                    {cert.items.map((item, iIdx) => (
                      <li key={iIdx} className="font-body text-ink-light leading-relaxed flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-muted/40 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-serif text-ink mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-gold" />
              Achievements
            </h3>
            
            <div className="border-l border-gold/30 ml-2 pl-8 space-y-10">
               {[
                 "Inspire Manak Award â District Level Winner (2021-2022)",
                 "Google Girls India Hackathon (Silicon Engineering) â Semi-Finalist (2025)",
                 "All India Idea & Innovation Competition â Delhi Directorate Representative (2025)"
               ].map((achievement, idx) => (
                 <div key={idx} className="relative">
                   <div className="absolute -left-[45px] top-0.5 bg-parchment p-1">
                      <Award size={20} className="text-gold-muted" />
                   </div>
                   <p className="font-body text-lg text-ink-light leading-relaxed pr-4">
                     {achievement}
                   </p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
