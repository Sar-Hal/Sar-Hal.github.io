import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Intracranial Hemorrhage CT Scan Generation',
    description: 'DCGAN in PyTorch for synthetic CT scan generation. Trained on 107k+ DICOM images, achieving FID score of 21.18 (18.5% improvement).',
    tags: ['PyTorch', 'DCGAN', 'Medical Imaging', 'GPU Optimization'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    period: 'May 2025 – June 2025'
  },
  {
    title: 'BiLSTM for Sentiment Analysis',
    description: 'Scalable BiLSTM model achieving 88.12% accuracy on IMDB dataset. Reduced validation loss by 22% through hyperparameter tuning.',
    tags: ['BiLSTM', 'NLP', 'PyTorch', 'Grid Search CV'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    period: 'Dec 2024'
  },
  {
    title: 'Data Science Capstone: SpaceX Landing Prediction',
    description: 'Classification model for Falcon 9 landing prediction. Built interactive dashboard with Folium and Plotly.',
    tags: ['Python', 'SQL', 'Plotly', 'Folium'],
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80',
    period: 'Jan 2024 – Feb 2024'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my recent work and experiments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:glow-effect transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-xs text-primary mb-3">{project.period}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary border border-border rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
