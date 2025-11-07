import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP( () => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                        <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                            </h1>
                            <h1>İnto Real Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10
                            pointer-events-none max-w-3xl">
                            I’m a computer engineer focused on algorithmic trading and modern web development.
                            I build data-driven trading systems and scalable products with React and Next.js.
                            I also develop desktop and web applications using C# and Entity Framework, and explore game development with Unity.
                            My TÜBİTAK-funded algorithmic trading project reflects my goal of turning research into reliable, production-ready software.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                            href="#works"
                        />
                    </div>
                </header>

                {/* RIGHT: 3D MODEL */}
                <figure>
                    <div className="hero-3d-layout border-red-200">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero
