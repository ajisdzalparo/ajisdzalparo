/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Certificate } from "./components/Certificate";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/**
 * Particles
 */
import ParticlesComponent from "./components/Particles/particles";

/**
 * Style
 */
import "/src/App.css";

/**
 * Node modules
 */
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <ParticlesComponent id="tsparticles" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;

