import Particles from '@/components/Particles';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ClickSpark from '@/components/ClickSpark';

const Index = () => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative">
        {/* Interactive Cursor Glow */}
        <CursorGlow />
        
        {/* Particles Background */}
        <Particles
          particleColors={[
            '#e3f2fd',
            '#bbdefb',
            '#90caf9',
            '#64b5f6',
            '#42a5f5',
            '#2196f3',
            '#1e88e5',
            '#1976d2',
            '#1565c0',
            '#0d47a1'
          ]}
          particleCount={300}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ClickSpark>
  );
};

export default Index;
