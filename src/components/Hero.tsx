
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
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Play video when in view
          if (videoRef.current) {
            videoRef.current.play();
          }
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
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/90"></div>
      
      {/* Apple-style Video Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://www.apple.com/105/media/us/mac-pro/2019/896c36b7-0a55-4b7f-a5b5-52a84f0f7343/anim/3d-tool/large.mp4" type="video/mp4" />
        </video>
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
          
          {/* Clean image grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=1000" 
                alt="Digital design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000" 
                alt="Creative workspace" 
                className="w-full h-full object-cover"
              />
            </div>
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
