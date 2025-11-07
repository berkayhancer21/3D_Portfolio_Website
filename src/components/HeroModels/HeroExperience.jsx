import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import Room from "./Room";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({query: '(max-width: 768px)' });

    // Mobilde particle sayısını azalt, performans için
    const particleCount = isMobile ? 30 : isTablet ? 50 : 100;

    return (
       <Canvas
           camera={{ position: [0,0,15], fov: 45}}
           dpr={isMobile ? [1, 1.5] : [1, 2]} // Mobilde düşük pixel ratio
           performance={{ min: 0.5 }} // Performans düşerse otomatik optimize et
           frameloop="demand" // Sadece gerektiğinde render et
       >
           <OrbitControls
               enablePan={false}
               enableZoom={!isTablet}
               maxDistance={20}
               minDistance={5}
               minPolarAngle={Math.PI / 5}
               maxPolarAngle={Math.PI / 2}
               enableDamping={!isMobile} // Mobilde damping'i kapat
               dampingFactor={0.05}
           />

           <HeroLights />

           <Particles count={particleCount}/>

           <group
               scale={isMobile ? 0.6 : isTablet ? 0.8 : 1}
               position={[0, isMobile ? -5 : -3.5, 0]} // Mobilde daha aşağıda
               rotation={[0, -Math.PI /4, 0]}
           >
               <Room />
           </group>

       </Canvas>
    )
}
export default HeroExperience
