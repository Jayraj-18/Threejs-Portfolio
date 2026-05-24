import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".skills",
            start: "top -10%",
            scrub: 1,
            pin: true,
          },
        },
        "a"
      );

      tl.to(".lines h1", {
        color: "orange",
        stagger: 1,
      });

      let t2 = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".skills",
            start: "top -10%",
          },
        },
        "a"
      );
      t2.to(".btn", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn1", {
        y: 175,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn2", {
        y: 150,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn3", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn4", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleShatter = (e) => {
    const el = e.target;
    // Prevent restarting if it's currently animating the hover effect
    // We check if it's tweening x so we don't block the initial y entrance animation
    if (gsap.isTweening(el) && gsap.getProperty(el, "x") !== 0) return;

    gsap.timeline()
      .to(el, { x: 30, scale: 1.15, duration: 0.25, ease: "sine.out" })
      .to(el, { x: -25, scale: 0.85, duration: 0.35, ease: "sine.inOut" })
      .to(el, { x: 20, scale: 1.1, duration: 0.35, ease: "sine.inOut" })
      .to(el, { x: 0, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.2)" });
  };

  return (
    <div className="skills-wrapper">
      <div className="w-full min-h-screen py-20 relative bg-[white] skills overflow-hidden">
      <div>
        <h1 className="text-3xl md:text-6xl text-left px-5 md:pl-10 font-[six] tracking-tight leading-snug md:leading-[60px] text-black work">
          Available for contract work
          <br className="hidden md:block text-black" /> on creative Side & Projects 👀
        </h1>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-32 lines">
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-black pb-3 md:pb-5">
          Just Learn
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-black pb-3 md:pb-5">
          Just Code
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-black pb-3 md:pb-5">
          Just Explore AI
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-black mt-4 ">
          Learn, Code & Explore AI
        </h1>
      </div>


      <div className="relative md:absolute md:right-20 md:top-32 px-5 md:px-0 mt-10 md:mt-0">
        <h1 className="text-5xl md:text-8xl tracking-tight text-black font-[one]">
          why Me ?
        </h1>
      </div>

      <div className="w-full h-1 bg-gray-400 absolute bottom-28 hidden md:block"></div>

      {/* Mobile: Flex wrap layout, Desktop: Absolute positioning */}
      <div className="flex flex-wrap gap-4 px-5 mt-10 md:block cursor-pointer">
        <h2 onMouseEnter={handleShatter} className="btn opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-5 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-80">
          HTML
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-5 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-52">
          CSS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-20">
          JS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn1 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[350px] md:right-40">
          Tailwind
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn2 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[400px] md:right-64 md:rotate-12">
          React JS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn2 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[400px] md:right-20 md:-rotate-[16deg]">
          GSAP
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn3 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[500px] md:right-36">
          EXPRESS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn4 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[556px] md:right-64 ">
          NODEJS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn4 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[556px] md:right-10">
          MONGODB
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn4 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[620px] md:right-36">
          WORDPRESS
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn4 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[680px] md:right-72">
          DIVI
        </h2>
        <h2 onMouseEnter={handleShatter} className="btn4 opacity-0 text-2xl md:text-4xl bg-black text-white font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[680px] md:right-10">
          ELEMENTOR
        </h2>
      </div>


      </div>
    </div>
  );
}

export default Skills;
