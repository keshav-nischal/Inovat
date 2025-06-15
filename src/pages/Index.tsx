import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import { PricingCards } from "@/components/ui/pricing-cards";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { InlineWidget } from 'react-calendly';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Inovat - Creative Digital Agency';
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-black">
        <Hero />
        <Services />
        <Portfolio />
        <PricingCards />
        <AnimatedTestimonialsDemo />
        {/* <Contact /> */}
        <InlineWidget
          url="https://calendly.com/keshavnischal/30min"
          styles={{ height: '100vh', width: '100%', overflow: 'hidden', border: 'none' }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
