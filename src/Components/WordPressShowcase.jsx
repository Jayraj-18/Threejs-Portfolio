import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Loan Website",
        client: "Sankalp",
        thumbnail: "./Screenshot_9-7-2026_133148_sankalpwealthadvisers.com.jpeg", // replace
        liveUrl: "https://sankalpwealthadvisers.com/",
        role: "Full WordPress website build from Scratch - Adding chat Widget",
        tech: ["WordPress", "Elementor",  "Chat Widget"],
        summary: "Design Website from Scratch",
        images: ["./service.jpeg",],
    },

    {
        id: 2,
        title: "iirdmumbai",
        thumbnail: "./image.png",
        liveUrl: "https://iirdmumbai.com/",
        role: "Website Revamping",
        tech: ["Elementor", "UI"],
        summary: "The client initially had the website developed by another developer but was not satisfied with the UI, so I redesigned and improved it.",
        details: "I have revamped the website of iirdmumbai.com. The client was not satisfied with the ui of the website so i revamped it.",
        images: ["./image copy.png"],
    },



    {
        id: 3,
        title: "Mumbai CA",
        client: "India CA",
        thumbnail: "./ca1.png",
        liveUrl: "https://ca-4-mumbai.biz/",
        role: "Full WordPress build — theme customization, Contact Form integration",
        tech: ["Custom Code", "UI", "Contact Form"],
        summary: "Professional chartered accountant website presenting financial and tax services.",
        details: "A clean and informative website designed for a Chartered Accountant firm to showcase its professional services, including taxation, auditing, and financial consulting. The site features structured service sections, clear call-to-action areas, trust-building elements, and responsive contact forms to streamline client inquiries and improve lead generation.",
        images: ["./ca1.png", "./ca2.png", "./ca3.png"],
    },

    {
        id: 4,
        title: "Disha Interior",
        client: "Disha Interior",
        thumbnail: "./interior1.png",
        liveUrl: "https://dishainterior.com/",
        role: "Full WordPress build — theme customization, Contact Form integration",
        tech: ["Elementor", "UI", "Contact Form"],
        summary: "Professional interior design business website showcasing services and portfolio.",
        details: "A modern and visually appealing website built for an interior design company to highlight their services, project portfolio, and brand identity. The site features a clean layout, intuitive navigation, service sections, image galleries, and user-friendly contact forms to improve client inquiries and lead generation.",
        images: ["./interior1.png", "./interior2.png", "./interior3.png"],
    },

    {
       id:5,
        title: "DRG Enterprise",
        client: "DRG Enterprise",
        thumbnail: "./Screenshot (325).png",
        liveUrl: "https://www.drgenterprise.in/",
        role: "Full WordPress build , Contact Form integration",
        tech: ["Elementor", "UI", "Contact Form"],
        summary: "Professional business website for a Real Estate Agency.",
        details: "A professional website for a real estate agency, showcasing property listings, services, and company information. The site features a clean design, intuitive navigation, property galleries, and user-friendly contact forms to facilitate client inquiries and lead generation.",
        images: ["./Screenshot (498).png"],
    },

    {
        id: 6,
        title: "Bad Credit Score",
        client: "Bad Credit Score",
        thumbnail: "./Screenshot (554).png",
        liveUrl: "https://badcreditscore.in/",
        role: "Full Winmeeto build — theme customization, Contact Form integration",
        tech: ["Custom Code", "UI", "Contact Form"],
        summary: "Financial services website for loan assistance",
        details: "A professional website for a Direct Selling Agent (DSA) helping individuals with low CIBIL scores secure loans. Features include a clean layout, service showcasing, testimonial slider, and easy-to-use contact forms for lead generation.",
        images: ["./Screenshot (555).png", "./Screenshot (556).png"],
    },


];

function WordPressShowcase() {
    const [selected, setSelected] = useState(null);
    const [filter] = useState("all");

    const visible = projects.filter((p) => filter === "all" || p.tech.join("").includes(filter));

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".project-card",
                { y: 100, scale: 0.7, opacity: 0 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".showcase-container",
                        start: "top 80%",
                    },
                }
            );
        });
        return () => ctx.revert();
    }, [visible]);

    return (
        <div
            className="min-h-screen text-white p-6 md:p-12 showcase-container overflow-hidden"
            style={{
                backgroundColor: "#110906",
                boxShadow: "inset 0px 0px 200px 50px rgba(240, 110, 50, 0.25), inset 0px 0px 50px 10px rgba(255, 130, 60, 0.4)"
            }}
        >
            <h2 className="text-2xl font-[six]">Design Expertise</h2>
            <header className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                <div className="mt-20 w-full">
                    <h1 className="text-3xl md:text-4xl font-bold">WordPress Work -</h1>
                    <p className="mt-2 text-gray-400 text-7xl">
                        I help clients to acheive their Goal & Objective.
                    </p>
                </div>

            </header>

            <main className="max-w-7xl mx-auto mt-8">
                <section className="mb-6">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">Showing {visible.length} projects</div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                        {visible.map((p) => (
                            <article
                                key={p.id}
                                className="project-card bg-[#111] border border-gray-800 rounded-3xl p-6 hover:border-gray-500 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group h-full flex flex-col"
                                onClick={() => setSelected(p)}
                            >
                                <div className="overflow-hidden rounded-xl h-80 w-full mb-6">
                                    <img
                                        src={p.thumbnail}
                                        alt={p.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="mt-3 font-semibold text-white text-lg">{p.title}</h3>
                                <div className="text-xs text-gray-400">{p.client}</div>
                                <p className="mt-3 text-sm text-gray-400 line-clamp-3 flex-grow">{p.summary}</p>

                                <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-700">
                                    <div className="text-xs text-gray-500 line-clamp-1">{p.role}</div>
                                    <a
                                        href={p.liveUrl}
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-white underline hover:text-gray-300 ml-2"
                                    >
                                        Live
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Modal */}
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelected(null)}
                        ></div>
                        <div className="relative bg-[#0a0a0a] border border-gray-800 text-white rounded-2xl shadow-xl max-w-4xl w-full p-8 z-10 max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h2 className="text-3xl font-bold">{selected.title}</h2>
                                    <div className="text-sm text-gray-400 mt-2">{selected.client} — {selected.role}</div>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={selected.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 border border-gray-700 text-white rounded-md text-sm hover:bg-gray-800 transition"
                                    >
                                        Open live
                                    </a>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="px-4 py-2 bg-white text-black font-medium rounded-md text-sm hover:bg-gray-200 transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    {selected.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${selected.title} screenshot ${i + 1}`}
                                            className="w-full h-56 object-cover rounded-lg mb-4"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-3">Problem</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{selected.details}</p>

                                    <h4 className="mt-6 font-semibold text-lg mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selected.tech.map((t) => (
                                            <span key={t} className="text-xs px-3 py-1 border border-gray-600 rounded-full hover:border-gray-400 transition">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default WordPressShowcase;