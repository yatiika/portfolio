/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Background3D } from './components/Background3D';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectsAndCertifications } from './components/ProjectsAndCertifications';
import { EducationAndContact } from './components/EducationAndContact';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-gold/30">
      <Background3D />
      <Navigation />
      
      {/* Film grain effect overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 w-full h-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <ProjectsAndCertifications />
        <EducationAndContact />
      </div>
    </main>
  );
}
