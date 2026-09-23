import { lazy } from "react";

// Sayfa chunk'ları: sadece açıldıklarında (veya menüde üzerine gelindiğinde) yüklenir
const pageLoaders = {
    "/projects": () => import("../sections/ShowcaseSection.jsx"),
    "/experience": () => import("../sections/ExperienceSection.jsx"),
    "/skills": () => import("../sections/TechStack.jsx"),
    "/cv": () => import("../sections/Cv.jsx"),
    "/contact": () => import("../sections/Contact.jsx"),
};

export const ShowcaseSection = lazy(pageLoaders["/projects"]);
export const ExperienceSection = lazy(pageLoaders["/experience"]);
export const TechStack = lazy(pageLoaders["/skills"]);
export const Cv = lazy(pageLoaders["/cv"]);
export const Contact = lazy(pageLoaders["/contact"]);

// Menü linkine gelindiğinde sayfanın kodunu önceden indir
export const preloadPage = (path) => {
    pageLoaders[path]?.();
};
