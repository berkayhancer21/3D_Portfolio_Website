import { useEffect, useRef } from "react";

/**
 * Tüm sayfaların arkasında süzülen kar taneleri.
 * Eski three.js Particles efektinin hafif 2D canvas versiyonu:
 * WebGL context açmaz, sekme gizliyken durur, "reduced motion" tercihine uyar.
 */
const MAX_FLAKES = 140;
const FLAKES_PER_PIXEL = 0.00009;

const SnowBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        let width = 0;
        let height = 0;
        let flakes = [];
        let rafId = null;
        let lastTime = 0;

        const createFlake = (anywhere) => ({
            x: Math.random() * width,
            y: anywhere ? Math.random() * height : -5,
            radius: 0.6 + Math.random() * 1.5,
            speed: 25 + Math.random() * 35, // px / saniye
            sway: 8 + Math.random() * 14,
            phase: Math.random() * Math.PI * 2,
            opacity: 0.35 + Math.random() * 0.55,
        });

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(MAX_FLAKES, Math.round(width * height * FLAKES_PER_PIXEL));
            while (flakes.length < count) flakes.push(createFlake(true));
            flakes.length = count;
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#ffffff";
            for (const flake of flakes) {
                const x = flake.x + Math.sin(time / 1000 + flake.phase) * flake.sway;
                ctx.globalAlpha = flake.opacity;
                ctx.beginPath();
                ctx.arc(x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const tick = (time) => {
            // Sekme değişince oluşan büyük zaman sıçramalarını sınırla
            const delta = Math.min((time - lastTime) / 1000, 0.05);
            lastTime = time;

            for (let i = 0; i < flakes.length; i++) {
                const flake = flakes[i];
                flake.y += flake.speed * delta;
                if (flake.y - flake.radius > height) flakes[i] = createFlake(false);
            }

            draw(time);
            rafId = requestAnimationFrame(tick);
        };

        const start = () => {
            if (rafId !== null || reducedMotion.matches || document.hidden) return;
            lastTime = performance.now();
            rafId = requestAnimationFrame(tick);
        };

        const stop = () => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            rafId = null;
        };

        const handleVisibility = () => (document.hidden ? stop() : start());
        const handleMotionChange = () => {
            stop();
            draw(performance.now());
            start();
        };
        const handleResize = () => {
            resize();
            if (rafId === null) draw(performance.now());
        };

        resize();
        draw(performance.now());
        start();

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);
        reducedMotion.addEventListener("change", handleMotionChange);

        return () => {
            stop();
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
            reducedMotion.removeEventListener("change", handleMotionChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="snow-background" aria-hidden="true" />;
};

export default SnowBackground;
