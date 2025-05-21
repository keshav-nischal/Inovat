
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    description: "We develop comprehensive brand strategies that help businesses clarify their vision, define their voice, and connect with their target audience.",
    items: ["Brand Positioning", "Market Research", "Competitive Analysis", "Brand Messaging"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Our design team creates intuitive and engaging user experiences that enhance usability and drive conversions.",
    items: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  },
  {
    id: 3,
    title: "Web Development",
    description: "We build custom websites and web applications that are fast, responsive, and optimized for conversion.",
    items: ["Frontend Development", "Backend Development", "E-commerce Solutions", "CMS Integration"]
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Our data-driven marketing strategies help businesses grow their online presence and acquire new customers.",
    items: ["SEO Optimization", "Content Strategy", "Social Media Management", "Email Marketing"]
  }
];

const Services = () => {
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
    <section id="services" className="py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll">Our Services</h2>
          <p className="text-lg md:text-xl mb-16 max-w-2xl opacity-0 animate-on-scroll">
            We offer a range of services to help your business thrive in the digital landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="border-t border-border pt-8 opacity-0 animate-on-scroll"
              >
                <span className="text-sm text-muted-foreground">
                  {String(service.id).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{service.title}</h3>
                <p className="text-lg mb-6">{service.description}</p>
                
                <ul className="mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="arrow-link">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
