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
            '#fff3e0',
            '#ffe0b2',
            '#ffcc80',
            '#ffb74d',
            '#ffa726',
            '#ff9800',
            '#fb8c00',
            '#f57c00',
            '#ef6c00',
            '#e65100'
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
