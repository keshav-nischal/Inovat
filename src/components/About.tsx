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
            el.classList.add('animate-fade-in-up');
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32 bg-secondary/80 overflow-hidden" ref={sectionRef}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/20"></div>
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-primary blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl opacity-20"></div>
        {/* Floating shapes */}
        <div className="absolute left-[10%] top-[20%] w-16 h-16 rounded-lg bg-background/40 shadow-lg animate-float2"></div>
        <div className="absolute right-[15%] bottom-[25%] w-24 h-12 rounded-full bg-primary/30 shadow-xl animate-float"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 animate-on-scroll">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12 opacity-0 animate-on-scroll"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="opacity-0 animate-on-scroll">
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                Founded in 2023, Inovat is a creative digital agency dedicated to crafting exceptional 
                digital experiences that help brands stand out in today's competitive landscape.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our team of strategists, designers, and developers work closely together to create 
                cohesive brand experiences that resonate with your audience and drive meaningful results.
              </p>
            </div>
            <div className="opacity-0 animate-on-scroll">
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                We believe that great design is more than just aesthetics—it's about solving problems 
                and creating meaningful connections between brands and their customers.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Whether you're looking to launch a new product, rebrand your company, or optimize your 
                digital presence, we're here to help you achieve your goals and exceed expectations.
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background/80 rounded-2xl shadow-2xl border border-primary/10 opacity-0 animate-on-scroll transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">To create digital experiences that elevate brands and engage audiences in meaningful ways.</p>
            </div>
            <div className="p-8 bg-background/80 rounded-2xl shadow-2xl border border-primary/10 opacity-0 animate-on-scroll transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">To be the agency of choice for brands looking to make a lasting impact in the digital space.</p>
            </div>
            <div className="p-8 bg-background/80 rounded-2xl shadow-2xl border border-primary/10 opacity-0 animate-on-scroll transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground">Creativity, collaboration, excellence, and a relentless focus on delivering results.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Custom keyframes for fade-in-up and float animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
