import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

/* eslint-disable react/no-unknown-property */

const Computers = (ismobile) => {
  const Computer = useGLTF("./desktop_pc/scene.gltf");
  const newLocal = "black";
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={newLocal} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        // shadow-mapSize={1024}
      />
      <primitive
        object={Computer.scene}
        scale={ismobile ? 0.6 : 0.95}
        position={ismobile ? [0, -3, -1.9] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
function ComputersCanvas() {
  const [ismobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
