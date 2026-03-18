import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Computer Science student at KIIT DU specializing in AI/ML. Currently AI/ML Lead at AISOC and Assistant Lead at ELABS KIIT. 
            Experienced in deep learning frameworks, GANs, BiLSTM architectures, and medical imaging with a focus on delivering impactful ML solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
