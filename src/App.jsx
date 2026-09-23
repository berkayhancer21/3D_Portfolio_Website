import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import SnowBackground from "./components/SnowBackground.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Footer from "./sections/Footer.jsx";
import Home from "./pages/Home.jsx";
import { ShowcaseSection, ExperienceSection, TechStack, Cv, Contact } from "./pages/index.js";
import { legacyHashRoutes } from "./constants/index.js";

// "/" adresi /home'a yönlenir; eski "/#works" gibi linkler ilgili sayfaya gider
const RootRedirect = () => {
    const { hash } = useLocation();
    return <Navigate to={legacyHashRoutes[hash] ?? "/home"} replace />;
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
                        <Route path="/" element={<RootRedirect />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/projects" element={<ShowcaseSection />} />
                        <Route path="/experience" element={<ExperienceSection />} />
                        <Route path="/skills" element={<TechStack />} />
                        <Route path="/cv" element={<Cv />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
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
