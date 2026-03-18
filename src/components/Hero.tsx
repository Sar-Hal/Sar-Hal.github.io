import { motion } from 'motion/react';
import TiltedCard from './TiltedCard';
import profileImg from '@/assets/profile.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-primary text-lg md:text-xl mb-4">Hi, I'm</p>
              <h1 className="mb-6">
                <span className="gradient-text">Sarthakbrata Halder</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
                AI/ML Engineer & Computer Science Student
              </p>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Specializing in deep learning, computer vision, and NLP. Building intelligent systems that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center md:justify-start flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium glow-effect hover:glow-strong transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-secondary text-secondary-foreground border border-border rounded-full font-medium hover:bg-muted transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Tilted Card */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TiltedCard
              imageSrc={profileImg}
              altText="Sarthakbrata Halder"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
