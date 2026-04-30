import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology Electronics (VLSI Design & Technology)",
    institution: "Vivekananda Institute of Professional Studies - Technical Campus",
    period: "2024-2028",
    details: "CGPA: 8.8"
  },
  {
    degree: "Bachelor of Science - BS, Data Science and its Applications",
    institution: "Indian Institute of Technology, Madras",
    period: "2024-2025",
    details: "Foundation level Completed"
  },
  {
    degree: "High School Education",
    institution: "DAV Public School Pushpanjali Enclave, Delhi",
    period: "2010-2024",
    details: ""
  }
];

export function EducationAndContact() {
  return (
    <section id="education" className="py-32 px-4 relative z-10 border-t border-gold/10 bg-parchment-dark/20 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Education Timeline */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif text-ink mb-12 flex items-center justify-center md:justify-start gap-4">
            <span className="w-8 h-px bg-gold" />
            Academia
          </h2>
          
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 border-l border-gold/30">
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-gold" />
                <h3 className="font-serif text-xl text-ink mb-1">{edu.degree}</h3>
                <h4 className="font-display text-xs text-gold-muted uppercase tracking-widest mb-3">
                  {edu.institution} <span className="opacity-50 mx-2">|</span> {edu.period}
                </h4>
                {edu.details && (
                  <p className="font-body text-ink-light">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact & References */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-serif text-ink mb-12 flex items-center justify-center md:justify-start gap-4">
            <span className="w-8 h-px bg-gold" />
            Correspondence
          </h2>

          <div className="glass-parchment p-8 mb-12">
            <ul className="space-y-6 font-body text-ink-light text-lg">
              <li className="flex items-center justify-center md:justify-start gap-4 hover:text-ink transition-colors group">
                <Mail className="text-gold-muted group-hover:text-gold transition-colors" size={20} />
                <a href="mailto:heyitsmamtasharma@gmail.com" className="group-hover:text-gold transition-colors">heyitsmamtasharma@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 hover:text-ink transition-colors group">
                <Phone className="text-gold-muted group-hover:text-gold transition-colors" size={20} />
                <a href="tel:+918448948842" className="group-hover:text-gold transition-colors">+91 8448948842</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 hover:text-ink transition-colors group">
                <MapPin className="text-gold-muted group-hover:text-gold transition-colors" size={20} />
                <span className="group-hover:text-gold transition-colors">New Delhi, India</span>
              </li>
              <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 hover:text-ink transition-colors group">
                <div className="flex items-center gap-4">
                  <Linkedin className="text-gold-muted group-hover:text-gold transition-colors" size={20} />
                  <span>LinkedIn</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/mamta-sharma-b7087423b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 border border-gold/50 text-gold text-sm font-display tracking-widest uppercase hover:bg-gold hover:text-parchment-dark transition-all duration-300"
                >
                  Connect
                </a>
              </li>
            </ul>
          </div>

          <motion.div 
            className="border border-gold/20 p-8 relative hover:border-gold/50 transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-parchment px-4">
               <span className="font-display tracking-widest text-xs uppercase text-gold-muted">Reference</span>
            </div>
            <h3 className="font-serif text-xl text-ink mb-2">Dr. Nisha Chugh</h3>
            <p className="font-body text-ink-light mb-4">
              Assistant Professor<br/>
              Vivekananda Institute of Professional Studies - Technical Campus
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 font-body text-sm text-ink-light">
               <a href="mailto:nisha.chugh@vips.edu" className="flex items-center gap-2 hover:text-ink transition-colors"><Mail size={16} className="text-gold" /> nisha.chugh@vips.edu</a>
               <a href="https://www.linkedin.com/in/dr-nisha-chugh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink transition-colors"><Linkedin size={16} className="text-gold" /> LinkedIn</a>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      <div className="mt-32 text-center text-ink-light/50 font-display tracking-widest text-xs uppercase">
         Mamta Sharma · 2026
      </div>
    </section>
  );
}
