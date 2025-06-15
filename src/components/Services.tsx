import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {// Featured project carousel component
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

// Custom hook for intersection observer animation
const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
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

  return sectionRef;
};

// Background decorative elements component
const BackgroundDecorations = () => (
  <>
    <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl z-0" />
  </>
);

// Featured project card component
interface FeaturedProject {
	image: string;
	author: string;
	date: string;
	title: string;
	description: string;
}

const featuredProjects: FeaturedProject[] = [
	{
		image: "karamelpic.png",
		author: "Andrea Felsted",
		date: "18 Nov 2022",
		title: "Migrating to Sailboat UI",
		description:
			"Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.",
	},
	{
		image: "project2.png",
		author: "John Doe",
		date: "10 Jan 2023",
		title: "Next.js SaaS Boilerplate",
		description:
			"A production-ready SaaS boilerplate built with Next.js, Tailwind CSS, and Stripe integration.",
	},
	{
		image: "project3.png",
		author: "Jane Smith",
		date: "5 Mar 2023",
		title: "AI Chatbot Platform",
		description:
			"A customizable AI chatbot platform for customer support and automation.",
	},
];

const FeaturedProjectCard = ({ project }: { project: FeaturedProject }) => (
	<Card className="relative mx-auto max-w-3xl overflow-hidden border-gray-700 bg-white">
		<div className="relative">
			<img
				src={project.image}
				className="w-full h-64 object-cover"
				alt={project.title}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
			<CardContent className="absolute inset-x-0 bottom-0 p-6 text-white">
				<div className="flex items-center gap-2 mb-2">
					<Badge variant="secondary" className="bg-white/20 text-white border-white/30">
						{project.author}
					</Badge>
					<span className="text-sm text-white/80">•</span>
					<time className="text-sm text-white/80">{project.date}</time>
				</div>
				<CardTitle className="text-xl font-medium text-white mb-2">
					{project.title}
				</CardTitle>
				<CardDescription className="text-white/80">
					{project.description}
				</CardDescription>
			</CardContent>
		</div>
	</Card>
);


const FeaturedProjectCarousel = () => (
	<Carousel className="w-full max-w-3xl mx-auto mb-28">
		<CarouselContent>
			{featuredProjects.map((project, index) => (
				<CarouselItem key={index}>
					<div className="p-1">
						<FeaturedProjectCard project={project} />
					</div>
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>
);

// Section header component
const SectionHeader = () => (
  <div className="max-w-6xl mx-auto mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll text-blue-400">
      Our Services
    </h2>
    <p className="text-lg md:text-xl max-w-2xl opacity-0 animate-on-scroll text-gray-400">
      We offer a range of services to help your business thrive in the digital landscape.
    </p>
  </div>
);

// Service item list component
const ServiceItemList = ({ items }: { items: string[] }) => (
  <ul className="mb-8 space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-center text-gray-300">
        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Individual service card component
interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    items: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <Card className="relative group border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 opacity-0 animate-on-scroll overflow-hidden">
    {/* Accent bar */}
    <div className="absolute top-0 left-0 w-2 h-16 bg-blue-600 rounded-br-2xl" />
    
    <CardHeader className="pt-8 pb-6 px-8">
      <Badge variant="outline" className="w-fit mb-2 border-blue-500 text-blue-400">
        {String(service.id).padStart(2, '0')}
      </Badge>
      <CardTitle className="text-2xl md:text-3xl font-bold text-white">
        {service.title}
      </CardTitle>
      <CardDescription className="text-lg text-gray-400">
        {service.description}
      </CardDescription>
    </CardHeader>

    <CardContent className="px-8 pb-8">
      <ServiceItemList items={service.items} />
      
      <Button 
        variant="ghost" 
        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium"
        asChild
      >
        <a href="#contact" className="flex items-center">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

// Services grid component
const ServicesGrid = ({ services }: { services: ServiceCardProps['service'][] }) => (
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
);

// Animation styles component
const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `}</style>
);

// Services data
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern, responsive websites and web applications that drive results for your business.",
    items: [
      "Custom Website Design",
      "E-commerce Solutions",
      "Web Application Development",
      "Mobile-Responsive Design",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Grow your online presence with strategic digital marketing campaigns that convert.",
    items: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Pay-Per-Click Advertising",
      "Content Marketing",
      "Email Marketing"
    ]
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Create a memorable brand identity that resonates with your target audience.",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Marketing Materials",
      "Brand Strategy"
    ]
  },
  {
    id: 4,
    title: "Consulting",
    description: "Get expert advice and strategic guidance to accelerate your business growth.",
    items: [
      "Business Strategy",
      "Technology Consulting",
      "Digital Transformation",
      "Process Optimization",
      "Growth Planning"
    ]
  }
];

// Main Services component
const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative bg-gradient-to-br from-black via-black to-gray-900"
      ref={sectionRef}
    >
      <BackgroundDecorations />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FeaturedProjectCarousel />
        <SectionHeader />
        <ServicesGrid services={servicesData} />
      </div>

      <AnimationStyles />
    </section>
  );
};

export default Services;