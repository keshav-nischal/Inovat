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
            el.classList.add('animate-fade-in-up');
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
    <></>
  );
};

export default Portfolio;

/* Add the following to your global CSS (e.g., index.css or App.css):
.animate-fade-in-up { @apply opacity-0 translate-y-8 animate-fade-in-up; }
.animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: none; } }
.hover-project-card { transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s; }
.arrow-link { position: relative; }
.arrow-link:after { content: ''; display: block; width: 0; height: 2px; background: var(--primary); transition: width .3s; position: absolute; left: 0; bottom: -2px; }
.arrow-link:hover:after { width: 100%; }
.animate-spin-slow { animation: spin 18s linear infinite; }
.animate-spin-slow-reverse { animation: spinReverse 22s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes spinReverse { to { transform: rotate(-360deg); } }
*/
