import Hero from "../sections/Hero.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="md:mt-20 mt-10">
                <FeatureCards />
            </div>
        </>
    );
};

export default Home;
