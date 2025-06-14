import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
	{
		id: 1,
		title: 'Brand Strategy',
		description:
			'We develop comprehensive brand strategies that help businesses clarify their vision, define their voice, and connect with their target audience.',
		items: [
			'Brand Positioning',
			'Market Research',
			'Competitive Analysis',
			'Brand Messaging',
		],
	},
	{
		id: 2,
		title: 'UI/UX Design',
		description:
			'Our design team creates intuitive and engaging user experiences that enhance usability and drive conversions.',
		items: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
	},
	{
		id: 3,
		title: 'Web Development',
		description:
			'We build custom websites and web applications that are fast, responsive, and optimized for conversion.',
		items: [
			'Frontend Development',
			'Backend Development',
			'E-commerce Solutions',
			'CMS Integration',
		],
	},
	{
		id: 4,
		title: 'Digital Marketing',
		description:
			'Our data-driven marketing strategies help businesses grow their online presence and acquire new customers.',
		items: [
			'SEO Optimization',
			'Content Strategy',
			'Social Media Management',
			'Email Marketing',
		],
	},
];

const Services = () => {
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

	return (
		<section
			id="services"
			className="py-20 md:py-32 relative bg-gradient-to-br from-[#000000] via-[#000000] to-[#111827]"
			ref={sectionRef}
		>
			{/* Decorative blurred background shapes */}
			<div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-2xl z-0" />
			<div className="container mx-auto px-4 md:px-8 relative z-10">

		{/* Card */}
		{/* <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll text-primary">
						Our Sucessful Projects
					</h2> */}
				<div className="relative mx-auto mb-28 max-w-3xl overflow-hidden rounded-2xl bg-white shadow border border-gray-700">
					<div>
						<img src="karamelpic.png" className="w-full object-cover" alt="" />
					</div>
					<div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
					<div className="absolute inset-x-0 bottom-0 z-20 p-4">
						<p className="mb-1 text-sm text-white text-opacity-80">Andrea Felsted • <time>18 Nov 2022</time></p>
						<h3 className="text-xl font-medium text-white">Migrating to Sailboat UI</h3>
						<p className="mt-1 text-white text-opacity-80">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
					</div>
				</div>

				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll text-primary">
						Our Services
					</h2>
					<p className="text-lg md:text-xl mb-16 max-w-2xl opacity-0 animate-on-scroll text-muted-foreground">
						We offer a range of services to help your business thrive in the
						digital landscape.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
						{services.map((service, index) => (
							<div
								key={service.id}
								className="relative group bg-card rounded-2xl shadow-lg border border-border pt-8 pb-6 px-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-on-scroll overflow-hidden"
							>
								{/* Accent bar */}
								<span className="absolute top-0 left-0 w-2 h-16 bg-blue-600 rounded-br-2xl" />
								<span className="text-sm text-primary font-semibold">
									{String(service.id).padStart(2, '0')}
								</span>
								<h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground">
									{service.title}
								</h3>
								<p className="text-lg mb-6 text-muted-foreground">
									{service.description}
								</p>

								<ul className="mb-8">
									{service.items.map((item, i) => (
										<li key={i} className="mb-2 flex items-center">
											<span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
											<span className="text-foreground">{item}</span>
										</li>
									))}
								</ul>

								<a
									href="#contact"
									className="arrow-link flex items-center text-primary font-medium transition-colors duration-200 hover:text-secondary underline-offset-4 hover:underline"
								>
									Learn more{' '}
									<ArrowRight className="ml-2" size={16} />
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Custom animation for fade-in-up */}
			<style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
		</section>
	);
};

export default Services;
