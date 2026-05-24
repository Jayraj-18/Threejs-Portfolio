import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


function About() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".About",
          start: "top top", // Start when the section reaches the top of the viewport
          end: "bottom 10%", // Scroll for twice the viewport height
          scrub: 1, // Smooth animation during scroll
          pin: true,

        },
      });

      tl.to(".txt", {
        translateZ: 0,
        opacity: 1,
        ease: "power1.out",
      });

      tl.to(".about-underline", {
        width: "120px",
        marginTop: "20px",
        duration: 1.5,
        ease: "power2.out",
      });

      tl.to(
        "h1 span",
        {
          color: "white",
          stagger: 1,
          ease: "power1.out",
        },
        "+=.1"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-wrapper">
      <div className="w-full min-h-screen bg-[black] About">
        <h1 className="text-center text-5xl font-[four] py-20 me text-white w-fit mx-auto">
          About Me
          <span className="about-underline"></span>
        </h1>

        <div className="flex flex-col box  h-full px-40 py-20">
          <h4 className="text-4xl font-[four] text-center tracking-tight text-gray-500 txt opacity-0 leading-tight md:leading-normal pointer-events-none [&>span]:pointer-events-auto">
            <span>I am </span>
            <span>a </span>
            <span>Web </span>
            <span>developer </span>
            <span>skilled </span>
            <span>in </span>
            <span> both </span>
            <span> WordPress </span>
            <span>and </span>
            <span>MERN </span>
            <span>Stack </span>
            <span>development.</span>


            <span>I </span>
            <span>build </span>
            <span>responsive </span>
            <span> user </span>
            <span>friendly </span>
            <span>websites </span>
            <span>using </span>
            <span>WordPress </span>
            <span>tools </span>
            <span>like </span>
            <span>Divi </span>
            <span>and </span>

            <span>Elementor, </span>
            <span>along </span>
            <span>with </span>
            <span>modern </span>
            <span>web </span>
            <span>applications </span>
            <span>using </span>
            <span>the </span>
            <span>MERN </span>
            <span>stack.</span>
          </h4>

          <div className="flex items-center justify-center mt-20">
            <button className="px-8  py-4 rounded-full border border-white/20 text-white font-[two] tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500  gap-3 mx-auto group backdrop-blur-sm">
              <Link to="/about">More About Me</Link>
              <span className="w-8 h-[1px] bg-white group-hover:bg-black transition-colors duration-500 group-hover:w-12"></span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
