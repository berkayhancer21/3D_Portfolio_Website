import {words, heroHighlights} from "../constants/index.js";
import Button from "../components/Button.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP( () => {
        gsap.fromTo('.hero-intro',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        )

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

        gsap.fromTo('.profile-photo',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: 'power3.out' }
        )
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" aria-hidden="true"/>
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center xl:flex-[1.2] w-full md:px-20 px-5 xl:pr-0">
                    <div className="flex flex-col gap-7">
                        <div className="hero-badge hero-intro">
                            <p>👋 Hi, I’m <span className="text-white font-semibold">Berkay</span> · Computer Engineer</p>
                        </div>

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
                            <h1>Into Real Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="hero-description">
                            I graduated <span className="hero-highlight">top of my class</span> in Computer Engineering
                            and I work where <span className="hero-highlight">technology meets finance</span>.
                            I build data-driven algorithmic trading systems with Python and fast, scalable web apps
                            with React and Next.js — plus desktop tools in C# and the occasional Unity game.
                            Clean code, measurable performance and software people can rely on.
                        </p>

                        <ul className="hero-highlights">
                            {heroHighlights.map(({ icon, text }) => (
                                <li key={text} className="hero-highlight-chip">
                                    <span aria-hidden="true">{icon}</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                            href="/projects"
                        />
                    </div>
                </header>

                {/* RIGHT: PROFİL FOTOĞRAFI */}
                <figure className="hero-photo-layout">
                    <ProfilePhoto />
                </figure>
            </div>
        </section>
    )
}

export default Hero
