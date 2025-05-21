
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Background Pattern Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-100 blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 opacity-0 animate-fade-in">
            <p className="text-lg md:text-xl mb-4 font-medium">Outils • Creative Agency</p>
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
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0" style={{ animationDelay: '1s' }}>
              <Button className="px-8 py-6 text-lg" size="lg">
                Start a project
              </Button>
              
              <a 
                href="#work" 
                className="arrow-link text-lg md:text-xl flex items-center" 
              >
                View our work <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 right-10 w-20 h-20 rounded-full border border-gray-200 animate-float hidden md:block"></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-md border border-gray-200 animate-float2 hidden md:block"></div>
          <div className="absolute bottom-32 right-1/4 w-12 h-12 rounded-lg border border-gray-200 animate-float3 hidden md:block"></div>
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
