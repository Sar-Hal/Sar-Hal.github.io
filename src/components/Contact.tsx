import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:sar656hal@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sarthakhal', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Sar-Hal', label: 'GitHub' }
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="relative py-20 px-4 mb-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Open to collaborating on AI/ML projects and discussing opportunities. Let's build something amazing together!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:glow-effect transition-all group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="text-foreground group-hover:text-primary-foreground transition-colors" size={24} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:sar656hal@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg glow-strong hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
