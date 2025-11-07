import { useState, useEffect } from "react";
import gsap from "gsap";

const Loader = ({ onLoadComplete }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // İlk animasyon - butonun belirmesi (daha hızlı)
        gsap.fromTo('.loader-button',
            { scale: 0, opacity: 0, rotation: -180 },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.8, // 1.2'den 0.8'e düşürüldü
                ease: 'elastic.out(1, 0.5)',
                delay: 0.3, // 0.5'ten 0.3'e düşürüldü
                force3D: true
            }
        );

        // Parlama efekti animasyonu (daha hızlı)
        gsap.to('.loader-glow', {
            scale: 1.3,
            opacity: 0.6,
            duration: 1.5, // 2'den 1.5'e düşürüldü
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            force3D: true
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
                setTimeout(() => onLoadComplete(), 200); // 300'den 200'e düşürüldü
            }
        });

        // Logo ve buton kaybolsun (daha hızlı)
        timeline.to('.loader-content', {
            y: -50,
            opacity: 0,
            duration: 0.4, // 0.6'dan 0.4'e düşürüldü
            ease: 'power3.in',
            force3D: true
        });

        // Sol perde açılsın (daha hızlı)
        timeline.to('.curtain-left', {
            x: '-100%',
            duration: 0.8, // 1.2'den 0.8'e düşürüldü
            ease: 'power4.inOut',
            force3D: true
        }, '-=0.2');

        // Sağ perde açılsın (daha hızlı)
        timeline.to('.curtain-right', {
            x: '100%',
            duration: 0.8, // 1.2'den 0.8'e düşürüldü
            ease: 'power4.inOut',
            force3D: true
        }, '-=0.8');

        // Arka plan kaybolsun
        timeline.to('.loader-container', {
            opacity: 0,
            duration: 0.3, // 0.4'ten 0.3'e düşürüldü
            ease: 'power2.out',
            force3D: true
        }, '-=0.3');
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

