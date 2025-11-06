import { useState } from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Cv from "./sections/Cv.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Loader from "./components/Loader.jsx";

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
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Cv />
            <Contact />
            <Footer />
        </>
    )
}
export default App