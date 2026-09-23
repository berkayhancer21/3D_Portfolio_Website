import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons, toolsCard} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";

// 3D modeli olmayan araçlar kartı için ikon
const ToolsIcon = () => (
    <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="4" width="19" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6.5 9.5l3 2.5-3 2.5M12 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SkillCard = ({ title, category, desc, stack, visual }) => (
    <div className="card-border tech-card skill-card group">
        <div className="tech-card-animated-bg"/>

        <div className="skill-card-visual">
            {visual}
        </div>

        <div className="skill-card-body">
            <p className="skill-card-category">{category}</p>
            <h3 className="skill-card-title">{title}</h3>
            <p className="skill-card-desc">{desc}</p>

            <ul className="skill-chips" aria-label={`${title} frameworks and tools`}>
                {stack.map((item) => (
                    <li key={item} className="skill-chip">{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })

    return (
        <div id="skills" className="flex-center section-padding ">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="skills-grid">
                    {techStackIcons.map((icon) => (
                        <SkillCard
                            key={icon.name}
                            title={icon.name}
                            category={icon.category}
                            desc={icon.desc}
                            stack={icon.stack}
                            visual={
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>
                            }
                        />
                    ))}

                    <SkillCard
                        title={toolsCard.name}
                        category={toolsCard.category}
                        desc={toolsCard.desc}
                        stack={toolsCard.stack}
                        visual={
                            <div className="skill-tools-icon">
                                <ToolsIcon />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}
export default TechStack
