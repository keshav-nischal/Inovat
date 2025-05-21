
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const textLines = [
    "We craft digital",
    "experiences for",
    "forward-thinking",
    "brands"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    const childElements = containerRef.current?.children;
    if (childElements) {
      Array.from(childElements).forEach((child) => {
        observer.observe(child);
      });
    }
    
    return () => {
      if (childElements) {
        Array.from(childElements).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 opacity-0 animate-fade-in">
            <p className="text-lg md:text-xl mb-4">Outils • Creative Agency</p>
          </div>
          
          <div className="mb-16">
            {textLines.map((line, index) => (
              <div key={index} className="reveal-text mb-2 md:mb-0">
                <h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span>{line}</span>
                </h1>
              </div>
            ))}
          </div>
          
          <div ref={containerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="max-w-md mb-10 md:mb-0 opacity-0" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl">
                We design and develop memorable digital experiences that connect brands with their customers.
              </p>
            </div>
            
            <a 
              href="#work" 
              className="arrow-link text-lg md:text-xl opacity-0" 
              style={{ animationDelay: '1s' }}
            >
              View our work <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full overflow-hidden">
        <div className="marquee flex whitespace-nowrap animate-marquee">
          <div className="mx-4 text-5xl font-bold opacity-10">
            STRATEGY • BRANDING • DESIGN • DEVELOPMENT • STRATEGY • BRANDING • DESIGN • DEVELOPMENT •
          </div>
          <div className="mx-4 text-5xl font-bold opacity-10">
            STRATEGY • BRANDING • DESIGN • DEVELOPMENT • STRATEGY • BRANDING • DESIGN • DEVELOPMENT •
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
