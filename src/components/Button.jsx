// File: src/components/Button.jsx
import React from "react";
/**
 * CTA button: accepts `href` (e.g. "#works") and performs smooth scroll
 * taking navbar height into account. Also preserves accessible href.
 */
const Button = ({ text, className, href, id }) => {
    const handleClick = (e) => {
        // if no hash target provided, allow default behavior
        if (!href || !href.startsWith("#")) return;

        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        // use navbar height if present, otherwise fallback to 15% of viewport
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : Math.round(window.innerHeight * 0.15);
        const extraGap = 8; // küçük ek boşluk
        const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraGap;

        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <a
            href={href ?? "#"}
            onClick={handleClick}
            className={`${className ?? ""} cta-wrapper`}
            id={id ?? undefined}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;