import Lenis from "@studio-freight/lenis";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutPage from "./Components/AboutPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import About from "./Components/About";
import { ErrorBoundary } from "./ErrorBoundary";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Global Cursor Animation
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target;
      const isText = target.closest('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label');

      if (isText) {
        gsap.to(cursorRef.current, { width: 40, height: 40, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      } else {
        gsap.to(cursorRef.current, { width: 20, height: 20, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-transparent border-2 border-white rounded-full pointer-events-none z-[9999] hidden md:block backdrop-invert"
      ></div>
      <div className="app cursor-none">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
