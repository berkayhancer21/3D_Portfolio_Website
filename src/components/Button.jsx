// File: src/components/Button.jsx
import { Link } from "react-router-dom";
/**
 * CTA button: accepts `href` as a route (e.g. "/projects") or a hash (e.g. "#works").
 * Hash links perform smooth scroll taking navbar height into account.
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

    const content = (
        <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    );

    // Sayfa (route) linkleri: tam sayfa yenilemeden geçiş
    if (href?.startsWith("/")) {
        return (
            <Link to={href} className={`${className ?? ""} cta-wrapper`} id={id ?? undefined}>
                {content}
            </Link>
        );
    }

    return (
        <a
            href={href ?? "#"}
            onClick={handleClick}
            className={`${className ?? ""} cta-wrapper`}
            id={id ?? undefined}
        >
            {content}
        </a>
    );
};

export default Button;