import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import SnowBackground from "./components/SnowBackground.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Footer from "./sections/Footer.jsx";
import Home from "./pages/Home.jsx";
import { ShowcaseSection, ExperienceSection, TechStack, Cv, Contact } from "./pages/index.js";
import { legacyHashRoutes } from "./constants/index.js";

// Ana sayfa direkt domain adresinde ("/"); eski "/#works" gibi linkler ilgili sayfaya gider
const HomeRoute = () => {
    const { hash } = useLocation();
    const target = legacyHashRoutes[hash];
    return target && target !== "/" ? <Navigate to={target} replace /> : <Home />;
};

const App = () => {
    return (
        <BrowserRouter>
            <ScrollManager />

            {/* Tüm sayfaların arkasında süzülen kar taneleri */}
            <SnowBackground />

            {/* Ana site içeriği */}
            <NavBar />

            <Suspense fallback={<div className="min-h-screen" />}>
                <main className="page-main relative z-[1]">
                    <Routes>
                        <Route path="/" element={<HomeRoute />} />
                        <Route path="/home" element={<Navigate to="/" replace />} />
                        <Route path="/projects" element={<ShowcaseSection />} />
                        <Route path="/experience" element={<ExperienceSection />} />
                        <Route path="/skills" element={<TechStack />} />
                        <Route path="/cv" element={<Cv />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>

                <div className="relative z-[1]">
                    <Footer />
                </div>
            </Suspense>
        </BrowserRouter>
    )
}
export default App
