import { useState, lazy, Suspense } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import Loader from "./components/Loader.jsx";

// Lazy load heavy components
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection.jsx"));
const FeatureCards = lazy(() => import("./sections/FeatureCards.jsx"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection.jsx"));
const TechStack = lazy(() => import("./sections/TechStack.jsx"));
const Cv = lazy(() => import("./sections/Cv.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const App = () => {
    // Her sayfa yüklendiğinde (F5) loader'ı göster
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadComplete = () => {
        // Animasyon tamamlandığında loader'ı kapat
        setIsLoading(false);
    };

    return (
        <>
            {/* Her sayfa yenilendiğinde Loader göster */}
            {isLoading && (
                <Loader onLoadComplete={handleLoadComplete} />
            )}

            {/* Ana site içeriği */}
            <NavBar />
            <Hero />

            {/* Lazy loaded sections */}
            <Suspense fallback={<div className="min-h-screen" />}>
                <ShowcaseSection />
                <FeatureCards />
                <ExperienceSection />
                <TechStack />
                <Cv />
                <Contact />
                <Footer />
            </Suspense>
        </>
    )
}
export default App