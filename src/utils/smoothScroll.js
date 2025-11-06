// File: src/utils/smoothScroll.js
/**
 * Global delegated handler for in-page hash links (e.g. navbar links like `href="#works"`).
 * Import this file once in your app entry (e.g. `src/main.jsx`) to enable smooth scrolling
 * for all hash anchors without changing each link.
 */
(function () {
    if (typeof window === "undefined") return;

    function scrollToHash(targetHash) {
        if (!targetHash || !targetHash.startsWith("#")) return;
        const id = targetHash.slice(1);
        const el = document.getElementById(id);
        if (!el) return;

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : Math.round(window.innerHeight * 0.15);
        const extraGap = 8;
        const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraGap;
        window.scrollTo({ top, behavior: "smooth" });
    }

    document.addEventListener("click", function (e) {
        // find nearest anchor
        let node = e.target;
        while (node && node !== document.body) {
            if (node.tagName === "A" && node.getAttribute("href") && node.getAttribute("href").startsWith("#")) {
                const href = node.getAttribute("href");
                // allow anchors that are exactly "#" to behave normally
                if (href === "#") return;
                e.preventDefault();
                scrollToHash(href);
                return;
            }
            node = node.parentElement;
        }
    }, { passive: false });
})();
