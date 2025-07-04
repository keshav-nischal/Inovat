import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const textLines = [
    "We craft digital",
    "experiences for",
    "forward-thinking",
    "brands",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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

    // Add parallax effect on scroll
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const elements =
          parallaxRef.current.querySelectorAll(".parallax-element");

        elements.forEach((el, index) => {
          const speed = 0.2 + index * 0.05;
          const yPos = -scrollY * speed;
          (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (childElements) {
        Array.from(childElements).forEach((child) => {
          observer.unobserve(child);
        });
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background with Gradient Mesh */}
      <div className="absolute bottom-40 right-[20%] w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
      <div className="absolute bottom-40 right-[15%] w-20 h-20 rounded-lg bg-gradient-to-br from-blue-300/20 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
      <div className="parallax-element absolute right-[20%] bottom-[30%] w-48 h-48">
        <div className="w-full h-full -rotate-12 rounded-lg bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
      </div>

      {/* Parallax Elements */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <div className="parallax-element absolute right-[20%] bottom-[30%] w-48 h-48">
          <div className="w-full h-full -rotate-12 rounded-lg bg-gradient-to-br from-violet-200/30 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 opacity-0 animate-fade-in">
            <p className="text-lg md:text-xl mb-4 font-medium">
              Inovat • Creative Agency
            </p>
          </div>

          <div className="mb-16">
            {textLines.map((line, index) => (
              <div key={index} className="reveal-text mb-2 md:mb-0">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent inline-block">
                    {line}
                  </span>
                </h1>
              </div>
            ))}
          </div>

          <div
            ref={containerRef}
            className="flex flex-col md:flex-row justify-between items-start md:items-end"
          >
            <div
              className="max-w-md mb-10 md:mb-0 opacity-0"
              style={{ animationDelay: "0.8s" }}
            >
              {/* <p className="text-gray-300 text-lg md:text-xl">
                We design and develop memorable digital experiences that connect
                brands with their customers.
              </p> */}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0"
              style={{ animationDelay: "1s" }}
            >
              <Button
                className="px-8 py-6 text-lg relative overflow-hidden group"
                size="lg"
              >
                <span className="relative z-10">Start a project</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>

              <a
                href="#work"
                className="arrow-link text-lg md:text-xl flex items-center"
              >
                View our work <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-40 right-[20%] w-12 h-12 rounded-lg bg-gradient-to-br from-violet-200/30 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
          <div className="absolute bottom-40 right-[15%] w-20 h-20 rounded-lg bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-sm animate-float3 hidden md:block"></div>
        </div>
      </div>
      {/* <div></div> */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="marquee flex whitespace-nowrap animate-marquee">
          <div className="mx-4 text-5xl font-bold opacity-10">
            STRATEGY • BRANDING • DESIGN • DEVELOPMENT • STRATEGY • BRANDING •
            DESIGN • DEVELOPMENT •
          </div>
          <div className="mx-4 text-5xl font-bold opacity-10">
            STRATEGY • BRANDING • DESIGN • DEVELOPMENT • STRATEGY • BRANDING •
            DESIGN • DEVELOPMENT •
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
