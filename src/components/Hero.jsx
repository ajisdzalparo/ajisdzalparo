/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

/**
 * Node modules
 */
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:grid-gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="./images/hero-banner.png"
                  width={40}
                  height={40}
                  alt="Ajis Dzalparo Portrait"
                  className="img-cover"
                />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-sky-400">
                  <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>

            <TypeAnimation
              className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Crafting Modern Web Solutions with Passion",
                2000,
                "Crafting Modern Web Solutions with Precision",
                2000,
                "Crafting Modern Web Solutions with Progress",
                2000,
              ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: "3rem", display: "inline-block" }}
              repeat={Infinity}
            />

            <div className="flex items-center gap-3">
              <ButtonPrimary
                label="Download CV"
                icon="download"
                href="https://drive.google.com/file/d/1pdE4HpNg6YWCDngqViQCFmNxmcWoq3Sc/view?usp=sharing"
                target="_blank"
              />
              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/60 to-65% rounded-[60px] overflow-hidden">
              <img
                src="./images/hero-banner.png"
                width={408}
                height={612}
                alt="Ajis Dzalparo"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
