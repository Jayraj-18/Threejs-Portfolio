import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";


function Navbar() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    let tl = gsap.timeline();

    tl.fromTo(
      ".name1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        ".menu1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-title-line",
        { y: 100, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#110906",
        boxShadow: "inset 0px 0px 200px 50px rgba(240, 110, 50, 0.25), inset 0px 0px 50px 10px rgba(255, 130, 60, 0.4)"
      }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-30"></div>
      </div>

      {/* Navbar Header */}
      <div className="relative z-20 flex justify-between items-center p-6 md:p-10 w-full">
        <h1 className="text-2xl md:text-3xl text-white font-[one] name1 tracking-wider">
          Jayraj Araj
        </h1>

        <div className="flex items-center gap-3 menu1 cursor-pointer group">
          <Link to="/about" className="block text-xl bg-white p-2 rounded-lg md:text-lg text-black font-[one] uppercase tracking-widest hover:bg-gray-200 transition-colors">
            About
          </Link>
          <Link to="/contact" className="block text-xl bg-white p-2 rounded-lg md:text-lg text-black font-[one] uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Contact
          </Link>
          <a href="mailto:arajjayraj18@gmail.com" className="block text-xl bg-white p-2 rounded-lg md:text-lg text-black font-[one] uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/jayraj-araj-2a31a8226/" target="_blank" rel="noopener noreferrer" className="block text-xl bg-white p-2 rounded-lg md:text-lg text-black font-[one] uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Linkdin
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className=" flex-grow flex flex-col pt-20  px-4">
        <div className="">
          <div className="overflow-hidden mb-2">
            <h1 className="text-2xl pl-40 md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-[one] leading-none hero-title-line">
              WordPress & MERN<br /> Developer
            </h1>
          </div>

          <div className="mt-2 hero-subtitle">
            <button className="px-8 ml-40 py-4 rounded-full border border-white/20 text-white font-[two] tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500  gap-3 mx-auto group backdrop-blur-sm">
              <Link to='/contact'>Let's connect</Link>
              <span className="w-8 h-[1px] bg-white group-hover:bg-black transition-colors duration-500 group-hover:w-12"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hero-subtitle opacity-70">
        <span className="text-white font-[one] text-sm tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
}

export default Navbar;
