import TitleHeader from "../components/TitleHeader.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import  {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            })
        })
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })

                }
            },

        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            })
        })
    }, [])
    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Professional Work Experience"
                             sub="👨‍💻 My Career Overview"/>

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}></GlowCard>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>

                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo relative flex items-center justify-center">
                                                {/* Dış parlayan halka */}
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute rounded-full animate-pulse"
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(79,70,229,0.15) 50%, transparent 70%)",
                                                        filter: "blur(20px)",
                                                        zIndex: 0,
                                                    }}
                                                />

                                                {/* Dönen renkli halka */}
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute rounded-full"
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        background: "conic-gradient(from 0deg, rgba(99,102,241,0.5), rgba(168,85,247,0.3), rgba(59,130,246,0.5), rgba(99,102,241,0.5))",
                                                        filter: "blur(15px)",
                                                        animation: "spin 8s linear infinite",
                                                        zIndex: 1,
                                                    }}
                                                />

                                                {/* Parlak border */}
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute rounded-full"
                                                    style={{
                                                        width: "10px",
                                                        height: "10px",
                                                        border: "1.5px solid rgba(99,102,241,0.4)",
                                                        boxShadow: "0 0 20px rgba(99,102,241,0.4), inset 0 0 15px rgba(99,102,241,0.15)",
                                                        zIndex: 2,
                                                    }}
                                                />

                                                {/* Logo */}
                                                <img
                                                    src={card.logoPath}
                                                    alt="logo"
                                                    className="relative z-10 rounded-full"
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        boxShadow: "0 0 30px rgba(99,102,241,0.3)",
                                                    }}
                                                />

                                                <style jsx>{`
                                                    @keyframes spin {
                                                        from { transform: rotate(0deg); }
                                                        to { transform: rotate(360deg); }
                                                    }
                                                `}</style>
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️ {card.date}
                                                </p>
                                                <p className="text-[#839cb5] italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities.map((responsibility) => (
                                                        <li key={responsibility} className="text-lg">
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection
