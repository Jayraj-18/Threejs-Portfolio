import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Globe, Code2, BrainCircuit, MessageCircleCode } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
    const headerRef = useRef(null);
    const statsRef = useRef(null);
    const servicesRef = useRef(null);
    const experienceRef = useRef(null);
    const experienceItemsRef = useRef([]);

    const stats = [
        { label: 'YEARS EXPERIENCE', value: '1+', color: 'bg-black' },
        { label: 'Real Clients PROJECTS DONE', value: '6+', color: 'bg-black' },
    ];

    const services = [
        {
            icon: <MessageCircleCode className="w-12 h-12" />,
            title: 'WordPress Development',
            description: 'I create responsive, user-friendly websites using WordPress tools like Divi and Elementor.'
        },
        {
            icon: <Code2 className="w-12 h-12" />,
            title: 'Full Stack Development',
            description: 'I build dynamic, interactive, and visually stunning web applications using the MERN stack.'
        },
        {
            icon: <BrainCircuit className="w-12 h-12" />,
            title: 'AI Tools Explorer and Learner',
            description: 'I am constantly exploring new AI tools and technologies to enhance my skills and provide the best solutions to clients.'
        }
    ];

    const experiences = [
        {
            position: 'WordPress - Developer',
            company: 'DSB Virtual World Pvt. Ltd.',
            Office_Location: "Dadar, Mumbai",
            Working_Type: "Remote",
            duration: 'November 2025 - March 2026',
            description: 'Working on building websites for clients using WordPress and Elementor. My responsibilities include conducting client meetings, understanding their requirements, and designing user interfaces tailored to their needs. Through this experience, I have developed strong communication skills and the ability to translate client ideas into effective digital solutions.'

        },
        {
            position: 'WordPress Developer',
            company: 'AIMLeap',
            Office_Location: "Banglore",
            Working_Type: "Remote",
            duration: 'March 2026 - Present',
            description: 'Working on building website pages using provided UI designs and implementing them in real projects using Divi, achieving 95–99% design accuracy. My responsibilities also include performing technical audits, posting blogs, and managing job listings. I enjoy working in this role and am continuously excited to learn and grow.'
        }
    ];

    useEffect(() => {
        // Header Animation
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );

        // Services Animation - Stagger
        const serviceElements = servicesRef.current.querySelectorAll('.service-card');
        gsap.fromTo(
            serviceElements,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Stats Animation - Counter and Scale
        const statElements = statsRef.current.querySelectorAll('.stat-card');
        gsap.fromTo(
            statElements,
            { opacity: 0, scale: 0.5 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Experience Items Animation
        experienceItemsRef.current.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: -50, borderColor: 'rgba(251, 191, 36, 0)' },
                {
                    opacity: 1,
                    x: 0,
                    borderColor: 'rgba(251, 191, 36, 1)',
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: experienceRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );

            // Hover animation for experience items
            item.addEventListener('mouseenter', () => {
                gsap.to(item, { x: 10, duration: 0.3 });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, { x: 0, duration: 0.3 });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div className="w-screen min-h-screen bg-black flex flex-col relative py-20 px-5 md:px-20 overflow-hidden">

                <Link
                    to="/"
                    className="absolute top-10 left-10 text-white flex items-center gap-2 text-xl font-[one] hover:text-gray-300 transition-colors z-20"
                >
                    <FaArrowLeft /> Back to Home
                </Link>

                {/* Content Wrapper */}
                <div className="w-full px-4 md:px-10 lg:px-16 py-16 relative z-10">

                    {/* Header */}
                    <div className="mb-20 w-full" ref={headerRef}>
                        <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
                            — ABOUT ME
                        </h1>

                        <div className="w-full lg:w-2/3">
                            <p className="text-xl font-bold text-white mb-2">
                                I'm <span className="font-black">Jayraj Araj</span>,{" "}
                                <span className="font-light text-gray-400">
                                    WordPress Developer & Full-Stack Developer
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-3 gap-16 w-full">

                        {/* Left Column */}
                        <div ref={servicesRef}>
                            <h2 className="inline-block bg-amber-400 text-black font-black px-4 py-2 rounded-full mb-8 text-sm">
                                What I Do?
                            </h2>

                            <div className="space-y-8">
                                {services.map((service, index) => (
                                    <div key={index} className="service-card flex gap-4 group cursor-pointer">
                                        <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>

                                        <div>
                                            <h3 className="font-black text-white text-sm mb-2 tracking-wide">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-2" ref={statsRef}>
                            <h2 className="inline-block bg-amber-400 text-black font-black px-4 py-2 rounded-full mb-12 text-sm">
                                Fun Facts
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="stat-card flex flex-col items-center justify-center p-6 rounded-full bg-neutral-900 text-white aspect-square hover:shadow-2xl hover:shadow-amber-400/30 transition duration-300 group"
                                    >
                                        <div className="text-3xl lg:text-4xl font-black text-amber-400 group-hover:scale-125 transition-transform duration-300">
                                            {stat.value}
                                        </div>

                                        <p className="text-xs font-bold text-gray-400 mt-3 text-center tracking-wide">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="mt-24 w-full" ref={experienceRef}>
                        <h2 className="inline-block bg-amber-400 text-black font-black px-4 py-2 rounded-full mb-12 text-sm">
                            Experience
                        </h2>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (experienceItemsRef.current[index] = el)}
                                    className="border-l-4 border-amber-400 pl-6 py-4 hover:bg-neutral-900 transition-colors duration-300 rounded-r-lg cursor-pointer"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-xl font-black text-white">
                                                {exp.position}
                                            </h3>
                                            <p className="text-amber-400 font-bold text-sm">
                                                {exp.company}
                                            </p>
                                            <p className="text-amber-400 font-bold text-sm">
                                                {exp.Office_Location}
                                            </p>
                                            <p className="text-amber-400 font-bold text-sm">
                                                {exp.Working_Type}
                                            </p>
                                        </div>
                                        <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Subtle glow effects */}
                <div className="fixed top-20 right-20 w-96 h-96 bg-amber-400 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
                <div className="fixed bottom-40 left-10 w-72 h-72 bg-amber-300 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

            </div>
        </>
    );
}

export default AboutPage;