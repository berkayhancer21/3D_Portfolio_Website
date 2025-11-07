// File: `src/sections/ShowcaseSection.jsx`
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

// Dışa çıkan ok ikonu - fosfor yeşili
const ExternalLinkIcon = ({ width = 22, height = 22 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="external-link-icon"
    >
        <path
            d="M14 3h7v7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 14L21 3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21 21H3V3h7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const projectRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useGSAP(() => {
        const isMobile = window.innerWidth < 768;

        projectRefs.forEach((ref, index) => {
            gsap.fromTo(
                ref.current,
                { y: isMobile ? 30 : 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: isMobile ? 0.6 : 1,
                    delay: 0.2 * (index % 3 + 1),
                    force3D: true,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom-=100",
                        once: true // Sadece bir kez animate et
                    },
                }
            );
        });

        gsap.fromTo(sectionRef.current, { opacity: 0 }, {
            opacity: 1,
            duration: isMobile ? 1 : 1.5,
            force3D: true
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: "AI Movie Recommendation Website",
            image: "/images/project_1.png",
            githubUrl: "https://github.com/berkayhancer21/movie_match_hub",
            technologies: ["Machine Learning", "Web Development", "Next.js", "Pandas", "NumPy", "Scikit-Learn", "Cosine Similarity", "Collaborative Filtering"]
        },
        {
            id: 2,
            title: "3D Portfolio Website",
            image: "/images/project_2.png",
            githubUrl: "https://github.com/berkayhancer21/3D_Portfolio_Website",
            technologies: ["Vite.js", "React", "Portfolio", "Three.js", "GSAP"]
        },
        {
            id: 3,
            title: "Algorithmic Trading Bots",
            image: "/images/project_3.jpg",
            githubUrl: "https://github.com/berkayhancer21",
            technologies: ["Python", "Pandas", "NumPy", "Trading", "Binance API", "Machine Learning", "Data Analysis", "Data Visualization"]
        },
        {
            id: 4,
            title: "Crypto Alarm System",
            image: "/images/project_4.png",
            githubUrl: "https://github.com/berkayhancer21/crypto_alarms_system",
            technologies: ["Next.js", "React", "stock exchange API", "REST API", "Telegram Bot API", "TypeScript"]
        }
    ];

    return (
        <section id="works" ref={sectionRef} className="app-showcase py-16">
            <div className="container mx-auto px-4">
                <div id="works-inner" className="works-inner mx-auto w-full max-w-6xl px-4">
                    <TitleHeader title="Projects" sub="👨‍💻 My Works" />

                    <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card"
                                ref={projectRefs[index]}
                            >
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link-wrapper"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <div className="project-inner">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />

                                            {/* Sağ üst köşe linki */}
                                            <div className="project-link-icon">
                                                <ExternalLinkIcon />
                                            </div>
                                        </div>

                                        {/* Teknolojiler: fosfor yeşili badge'ler */}
                                        <div className="tech-badges" aria-hidden="false">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Başlık ve açıklama - ortalı */}
                                        <div className="project-content center-content">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;

