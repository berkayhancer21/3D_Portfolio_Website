import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TitleHeader = ({title, sub}) => {
    const containerRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        // Subtitle (badge) animasyonu - yukarıdan gelir
        gsap.fromTo(badgeRef.current,
            {
                y: -30,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Title animasyonu - aşağıdan gelir (badge'den biraz sonra)
        gsap.fromTo(titleRef.current,
            {
                y: 30,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col items-center gap-5">
            <div ref={badgeRef} className="hero-badge">
                <p>{sub}</p>
            </div>
            <div ref={titleRef} className="fancy-title font-semibold md:text-5xl text-3xl text-center">
                {title}
            </div>
        </div>
    )
}
export default TitleHeader
