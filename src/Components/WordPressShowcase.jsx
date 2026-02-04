/*
WordPressShowcase.jsx
Single-file React component (Tailwind CSS) to add a "WordPress work" page to your portfolio.
HOW TO USE
1. Copy this file to: src/components/WordPressShowcase.jsx (or src/pages/WordPressShowcase.jsx for Next.js).
2. Replace images/URLs in `projects` with your real screenshots and live links.
3. Import and add a route or navigation link to this page.

What this file contains (and why):
- Hero with short intro + CTA (contact / hire)
- Filterable grid of WordPress projects (thumbnail, client, role, link)
- Modal with expanded case study: problem → approach → results
- Social handle bar + Resume / Contact CTAs

Portfolio content suggestions (also in your portfolio site):
- Hero: short tagline (what you build + who for) and 1 CTA
- Featured case studies (2–4) with images, your role, tech, outcome/metrics
- Full gallery of work (screenshots + live links)
- Services & Pricing (optional) or "What I can do"
- Testimonials / client logos
- Resume & contact form / email link
- Blog or notes on technical problems you solved (optional, great for SEO)
- Performance: fast images, alt text, meta tags, open graph images

Now the component code:
*/

import React, { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Real Estate",
        client: "Real Estate",
        thumbnail: "./Screenshot (325).png", // replace
        liveUrl: "https://drgenterprise.in/",
        role: "Full WordPress build — theme customization,Connecting instagram handle, Adding Blog page Adding chat Widget",
        tech: ["WordPress", "Elementor", "Instagram", "Blog", "Chat Widget"],
        summary: "Design Web from Scratch",

        images: ["./Screenshot (498).png", "./Screenshot (499).png"],
    },
    {
        id: 2,
        title: "Kokan Gold",
        client: "Kokan Gold",
        thumbnail: "./Screenshot (500).png",
        liveUrl: "https://kokangold.com/",
        role: "Full WordPress build — theme customization,Connecting instagram handle",
        tech: ["WordPress", "Elementor",],
        summary: "Design Web from Scratch",
        details:
            " Design Web from Scratch, ",
        images: ["./Screenshot (500).png", "./Screenshot (501).png"],
    },
    {
        id: 3,
        title: "Bad Credit Score",
        client: "Bad Credit Score",
        thumbnail: "./Screenshot (554).png",
        liveUrl: "https://badcreditscore.in/",
        role: "Full WordPress build — theme customization, Contact Form integration",
        tech: ["WordPress", "Elementor", "Contact Form 7"],
        summary: "Financial services website for loan assistance",
        details: "A professional website for a Direct Selling Agent (DSA) helping individuals with low CIBIL scores secure loans. Features include a clean layout, service showcasing, testimonial slider, and easy-to-use contact forms for lead generation.",
        images: ["./Screenshot (555).png", "./Screenshot (556).png"],
    },

];

function WordPressShowcase() {
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("all");

    const filters = ["all", "eCommerce", "Landing", "Migration", "SEO"];

    const visible = projects.filter((p) => filter === "all" || p.tech.join("").includes(filter));

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">WordPress Work — Selected Clients</h1>
                    <p className="mt-2 text-gray-400 max-w-xl">
                        I build fast, maintainable WordPress sites for small businesses — themes and performance. Below are selected projects; click any card for a short case
                        study.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <a
                            href="/contact"
                            className="inline-block px-4 py-2 bg-white text-black font-medium rounded-md shadow-sm hover:bg-gray-200 transition-colors"
                        >
                            Hire me
                        </a>
                        <a
                            href="./Jayraj Resume.pdf"
                            className="inline-block px-4 py-2 border border-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                            download
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* Social links — replace with your handles */}
                    <SocialIcon href="https://www.linkedin.com/in/jayraj-araj-2a31a8226/" label="LinkedIn">
                        LinkedIn
                    </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/jayraj_araj_18" label="Instagram">
                        Insta
                    </SocialIcon>

                </div>
            </header>

            <main className="max-w-6xl mx-auto mt-8">
                <section className="mb-6">
                    <div className="flex items-center justify-between">

                        <div className="text-sm text-gray-400">Showing {visible.length} projects</div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visible.map((p) => (
                            <article
                                key={p.id}
                                className="bg-[#111] border border-gray-800 rounded-2xl p-4 hover:border-gray-600 transition cursor-pointer"
                                onClick={() => setSelected(p)}
                            >
                                <img
                                    src={p.thumbnail}
                                    alt={p.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <h3 className="mt-3 font-semibold text-white">{p.title}</h3>
                                <div className="text-xs text-gray-400">{p.client}</div>
                                <p className="mt-2 text-sm text-gray-400 line-clamp-2">{p.summary}</p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="text-xs text-gray-500">{p.role}</div>
                                    <a
                                        href={p.liveUrl}
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-white underline hover:text-gray-300"
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
                        <div className="relative bg-[#0a0a0a] border border-gray-800 text-white rounded-2xl shadow-xl max-w-3xl w-full p-6 z-10">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold">{selected.title}</h2>
                                    <div className="text-sm text-gray-400">{selected.client} — {selected.role}</div>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={selected.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1 border border-gray-700 text-white rounded-md text-sm hover:bg-gray-800"
                                    >
                                        Open live
                                    </a>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="px-3 py-1 bg-white text-black font-medium rounded-md text-sm hover:bg-gray-200"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {selected.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${selected.title} screenshot ${i + 1}`}
                                            className="w-full h-40 object-cover rounded-lg mb-3"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold">Problem</h4>
                                    <p className="text-sm text-gray-400">{selected.details}</p>

                                    <h4 className="mt-3 font-semibold">Tech</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selected.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 border rounded-full">
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

function SocialIcon({ href, children, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-3 py-1 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            aria-label={label}
        >
            {children}
        </a>
    );
}


export default WordPressShowcase;