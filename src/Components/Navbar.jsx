import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  useEffect(() => {
    // GSAP Animations
    let tl = gsap.timeline();

    tl.to(".name", { y: -82, duration: 1, ease: "power4" })
      .to(".menu", { y: -160, duration: 1, ease: "power4" })
      .to(".title", { y: -20, duration: 1, opacity: 1, ease: "power4" })
      .to(".btn", { duration: 1, opacity: 1, ease: "power4" });
  }, []);

  return (
    <div className="w-full bg-black h-screen relative urll-bg[reveal.mp4] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-[85vh] object-cover z-0"
        src="/Reveal.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="z-10 flex justify-between items-center p-5 md:p-10 overflow-hidden">
        <h1 className="text-xl md:text-3xl text-white font-[one] name relative top-10 md:top-20">
          Jayraj Araj
        </h1>

        <div className="flex items-center gap-2 pr-7">
          <span className="h-3 w-3 rounded-md bg-white block mt-1"></span>
          <h2 className="text-xl md:text-2xl text-white font-[one] menu relative top-20 md:top-40">
            Menu
          </h2>
        </div>
      </div>

      {/* <div className=" mb-20 relative top-[50%] md:top-[63%] z-10 flex justify-center items-center flex-col">
        <Link
          to="/contact"
          className="inline-block px-4 py-2 bg-slate-900 text-white rounded-md shadow-sm"
        >
          Let's Get Connected
        </Link>
      </div> */}

    </div>
  );
}

export default Navbar;
