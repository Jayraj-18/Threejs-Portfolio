import { useEffect } from "react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-20px 20%",
        end: "bottom 80%",
      },
    });

    tl.to(".title", { y: -40, duration: 1, ease: "power4" })
      .to(".title2", { y: -300, duration: 1, ease: "power4" }, "-=0.5")
      .to(".mar", { opacity: 1, duration: 1, ease: "power4" }, "-=0.5")
      .to(".first", { color: "red", stagger: 0.2 }, "-=0.5")
      .to(".second", { color: "blue", stagger: 0.2 }, "-=0.5");

    // Infinite Marquee
    gsap.to(".marquee-content", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full bg-[white] min-h-[80vh] footer overflow-hidden">

      <div className="py-10">
        {/* Heading */}
        <div className="flex items-center  gap-4 md:gap-10 px-10">
          <h1 className="text-4xl md:text-8xl font-[four] ">
            Get Your Project Started
          </h1>
          <FaArrowRightLong className="text-3xl md:text-5xl shrink-0" />
        </div>

        {/* Animated Text */}
        <div className="overflow-hidden">
          <pre className="text-[8vw] md:text-[6.5vw] tracking-tight uppercase leading-snug md:leading-[90px] font-[two] py-10 md:py-16 px-5 md:px-10 relative top-20 md:top-72 title2 whitespace-pre-wrap">
            I turn your <span className="first">I</span>
            <span className="first">d</span>
            <span className="first">e</span>
            <span className="first">a</span>
            <span className="first">s</span> into
            <br />
            <span className="second">C</span>
            <span className="second">R</span>
            <span className="second">E</span>
            <span className="second">A</span>
            <span className="second">T</span>
            <span className="second">I</span>
            <span className="second">V</span>
            <span className="second">E</span> impact!
          </pre>
        </div>

        {/* Marquee */}
        <div className="bg-[#68A7F4] overflow-hidden w-full py-10 px-5 mt-52 md:mt-16 opacity-0 mar">
          <div className="flex whitespace-nowrap marquee-content">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex gap-2">
                  {Array(4)
                    .fill("Because life's too short for boring designs ~")
                    .map((text, j) => (
                      <h2
                        key={j}
                        className="text-xl md:text-3xl font-[two] mx-2"
                      >
                        {text}
                      </h2>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;