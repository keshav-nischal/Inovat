
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Sample projects - in a real application, these would likely come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Lunar",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    description: "A complete brand refresh for a fintech startup",
  },
  {
    id: 2,
    title: "Horizon",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    description: "E-commerce website redesign with improved UX",
  },
  {
    id: 3,
    title: "Blossom",
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    description: "Lifestyle app with minimalist interface",
  },
  {
    id: 4,
    title: "Quantum",
    category: "Brand Strategy",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    description: "Market positioning for a tech innovator",
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            (el as HTMLElement).style.animationDelay = `${i * 0.2}s`;
            el.classList.add('animate-fade-in');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="work" className="py-20 md:py-32 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll">
                Selected Work
              </h2>
              <p className="text-lg md:text-xl max-w-2xl opacity-0 animate-on-scroll">
                Browse our latest projects and see how we've helped our clients achieve their goals.
              </p>
            </div>
            
            <a href="#contact" className="arrow-link mt-6 md:mt-0 opacity-0 animate-on-scroll">
              View all projects <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer hover-project-card opacity-0 animate-on-scroll"
              >
                <div 
                  className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-6"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  
                  <div className="mt-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowRight className="transform -rotate-45" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
