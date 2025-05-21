
import { useRef, useEffect } from 'react';

const About = () => {
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
    <section id="about" className="py-20 md:py-32 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 opacity-0 animate-on-scroll">About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="opacity-0 animate-on-scroll">
              <p className="text-lg md:text-xl mb-6">
                Founded in 2023, Outils is a creative digital agency dedicated to crafting exceptional 
                digital experiences that help brands stand out in today's competitive landscape.
              </p>
              <p className="text-lg md:text-xl">
                Our team of strategists, designers, and developers work closely together to create 
                cohesive brand experiences that resonate with your audience and drive meaningful results.
              </p>
            </div>
            
            <div className="opacity-0 animate-on-scroll">
              <p className="text-lg md:text-xl mb-6">
                We believe that great design is more than just aesthetics—it's about solving problems 
                and creating meaningful connections between brands and their customers.
              </p>
              <p className="text-lg md:text-xl">
                Whether you're looking to launch a new product, rebrand your company, or optimize your 
                digital presence, we're here to help you achieve your goals and exceed expectations.
              </p>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-lg opacity-0 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>To create digital experiences that elevate brands and engage audiences in meaningful ways.</p>
            </div>
            
            <div className="p-8 bg-background rounded-lg opacity-0 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>To be the agency of choice for brands looking to make a lasting impact in the digital space.</p>
            </div>
            
            <div className="p-8 bg-background rounded-lg opacity-0 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p>Creativity, collaboration, excellence, and a relentless focus on delivering results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
