import { useState, useEffect } from "react";
import gsap from "gsap";

const Loader = ({ onLoadComplete }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // İlk animasyon - butonun belirmesi
        gsap.fromTo('.loader-button',
            { scale: 0, opacity: 0, rotation: -180 },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.2,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.5
            }
        );

        // Parlama efekti animasyonu
        gsap.to('.loader-glow', {
            scale: 1.3,
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, []);

    const handleEnterSite = () => {
        setIsClicked(true);

        // Buton animasyonu
        gsap.to('.loader-button', {
            scale: 0.9,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
                // Perde açılma animasyonu başlat
                startCurtainAnimation();
            }
        });
    };

    const startCurtainAnimation = () => {
        const timeline = gsap.timeline({
            onComplete: () => {
                // Animasyon bittiğinde parent component'e haber ver
                setTimeout(() => onLoadComplete(), 300);
            }
        });

        // Logo ve buton kaybolsun
        timeline.to('.loader-content', {
            y: -50,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.in'
        });

        // Sol perde açılsın
        timeline.to('.curtain-left', {
            x: '-100%',
            duration: 1.2,
            ease: 'power4.inOut'
        }, '-=0.3');

        // Sağ perde açılsın
        timeline.to('.curtain-right', {
            x: '100%',
            duration: 1.2,
            ease: 'power4.inOut'
        }, '-=1.2');

        // Arka plan kaybolsun
        timeline.to('.loader-container', {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.4');
    };

    return (
        <div className="loader-container">
            {/* Sol Perde */}
            <div className="curtain curtain-left"></div>

            {/* Sağ Perde */}
            <div className="curtain curtain-right"></div>

            {/* Ana İçerik */}
            <div className="loader-content">
                {/* Logo / İsim */}
                <div className="loader-logo">
                    <h1 className="loader-name">
                        <span className="first-name">Berkay</span>
                        <span className="last-name">HANÇER</span>
                    </h1>
                    <p className="loader-subtitle">Full Stack Developer</p>
                </div>

                {/* Giriş Butonu */}
                <div className="loader-button-wrapper">
                    <div className="loader-glow"></div>
                    <button
                        className="loader-button"
                        onClick={handleEnterSite}
                        disabled={isClicked}
                    >
                        <span className="button-text">Enter Site</span>
                        <span className="button-icon">→</span>
                    </button>
                </div>

                {/* Alt yazı */}
                <p className="loader-hint">Click to explore my portfolio</p>
            </div>

            {/* Partiküller / Yıldızlar */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Loader;

