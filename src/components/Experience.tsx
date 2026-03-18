import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Intern',
    company: 'RAD365 Solutions Pvt. Ltd.',
    period: 'May 2025 – June 2025',
    type: 'work',
    description: 'Engineered GAN pipeline for synthetic CT scans from 107k+ DICOM images. Boosted data quality: 33.6% SSIM, 208.7% PSNR improvement. Validated synthetic data using SSIM, PSNR, FID, and KID metrics.'
  },
  {
    title: 'AI/ML Lead',
    company: 'Artificial Intelligence Student Organised Council (AISOC)',
    period: 'Jan 2024 – Present',
    type: 'work',
    description: 'Built BiLSTM sentiment classifier achieving 88.71% accuracy on 25k reviews. Technical judge at CHRONOS V1, evaluated 50+ projects, mentored 100+ students. Led technical Q&A for Symposium v2.0, resolved 200+ queries.'
  },
  {
    title: 'Assistant Lead - Machine Learning',
    company: 'ELABS KIIT',
    period: 'Jan 2024 – Present',
    type: 'work',
    description: 'Conducted workshops and DSA courses for 50+ students. Mentored juniors on ML projects, model selection, and optimization.'
  },
  {
    title: 'B.Tech in Computer Science and Engineering',
    company: 'Kalinga Institute of Industrial Technology (KIIT DU)',
    period: '2023 – 2027',
    type: 'education',
    description: 'CGPA: 9.69/10.0'
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:glow-effect transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {experience.type === 'work' ? (
                    <Briefcase className="text-primary" size={24} />
                  ) : (
                    <GraduationCap className="text-primary" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                  <p className="text-primary mb-2">{experience.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
